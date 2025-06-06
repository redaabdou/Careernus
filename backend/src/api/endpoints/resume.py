from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, Form, Body
from sqlalchemy.orm import Session
from typing import List, Optional, Any

from ...database import get_db
from ...models.resume import Resume
from ...schemas.resume import (
    ResumeCreate, Resume as ResumeSchema, ResumeWithAnalysis,
    ResumeAnalysisRequest, ResumeAnalysisResponse
)
from ...services.resume_analyzer import ResumeAnalyzer

from ...api.endpoints.auth import get_current_user
from ...models.user import User

router = APIRouter()
resume_analyzer = ResumeAnalyzer()

@router.post("/analyze", response_model=ResumeAnalysisResponse)
async def analyze_resume(
    request: ResumeAnalysisRequest = Body(...),
    db: Session = Depends(get_db)
):
    """
    Analyse un CV et retourne des insights et recommandations.
    """
    if request.resume_id:
        # Récupérer le CV depuis la base de données
        resume = db.query(Resume).filter(Resume.id == request.resume_id).first()
        if not resume:
            raise HTTPException(status_code=404, detail="CV non trouvé")
        content = resume.content
    elif request.content:
        # Utiliser le contenu fourni directement
        content = request.content
    elif request.file_content:
        # Utiliser le contenu du fichier fourni
        content = request.file_content
    else:
        raise HTTPException(
            status_code=400, 
            detail="Vous devez fournir soit un ID de CV, soit du contenu texte, soit un fichier"
        )
    
    # Analyser le CV
    analysis = resume_analyzer.analyze_resume(content)
    return analysis

@router.post("/upload", response_model=ResumeWithAnalysis)
async def upload_resume(
    file: UploadFile = File(...),
    title: str = Form(...),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)  # Ajout de la dépendance
):
    """
    Télécharge un CV, l'enregistre en base de données et retourne une analyse.
    """
    # Lire le contenu du fichier
    content = await file.read()
    content_text = content.decode("utf-8")
    
    # Créer l'entrée dans la base de données
    resume_db = Resume(
        title=title,
        content=content_text,
        original_filename=file.filename,
        user_id=current_user.id  # Utiliser l'ID de l'utilisateur connecté
    )
    db.add(resume_db)
    db.commit()
    db.refresh(resume_db)
    
    # Analyser le CV
    analysis = resume_analyzer.analyze_resume(content_text)
    
    # Créer la réponse
    resume_schema = ResumeSchema.from_orm(resume_db)
    return ResumeWithAnalysis(
        **resume_schema.dict(),
        analysis=analysis.dict()
    )

# Modifier également les autres endpoints pour vérifier que l'utilisateur
# a accès au CV demandé

@router.get("/{resume_id}", response_model=ResumeWithAnalysis)
def get_resume(
    resume_id: int,
    db: Session = Depends(get_db)
):
    """
    Récupère un CV avec son analyse.
    """
    resume = db.query(Resume).filter(Resume.id == resume_id).first()
    if not resume:
        raise HTTPException(status_code=404, detail="CV non trouvé")
    
    # Analyser le CV
    analysis = resume_analyzer.analyze_resume(resume.content)
    
    # Créer la réponse
    resume_schema = ResumeSchema.from_orm(resume)
    return ResumeWithAnalysis(
        **resume_schema.dict(),
        analysis=analysis.dict()
    )

@router.get("/", response_model=List[ResumeSchema])
def list_resumes(
    skip: int = 0,
    limit: int = 100,
    user_id: Optional[int] = None,
    db: Session = Depends(get_db)
):
    """
    Liste tous les CV, avec filtrage optionnel par utilisateur.
    """
    query = db.query(Resume)
    if user_id:
        query = query.filter(Resume.user_id == user_id)
    
    resumes = query.offset(skip).limit(limit).all()
    return resumes
