from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .api.endpoints import resume, auth
from .config import settings

app = FastAPI(
    title="Careernus API",
    description="API pour la plateforme de recrutement Careernus",
    version="0.1.0"
)

# Configuration CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # En production, limitez aux domaines spécifiques
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Inclure les routers
app.include_router(auth.router, prefix="/api/auth", tags=["authentication"])
app.include_router(resume.router, prefix="/api/resumes", tags=["resumes"])


@app.get("/")
async def root():
    return {"message": "Bienvenue sur l'API Careernus", "status": "online"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

# Point d'entrée pour exécuter l'application
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
