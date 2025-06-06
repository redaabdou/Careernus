from pydantic import BaseModel
from typing import Optional, Dict, Any, List
from datetime import datetime

class ResumeBase(BaseModel):
    title: str
    content: str
    
class ResumeCreate(ResumeBase):
    pass

class ResumeUpdate(ResumeBase):
    title: Optional[str] = None
    content: Optional[str] = None

class ResumeInDBBase(ResumeBase):
    id: int
    user_id: int
    original_filename: Optional[str] = None
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        orm_mode = True

class Resume(ResumeInDBBase):
    pass

class ResumeWithAnalysis(Resume):
    analysis: Dict[str, Any] = {}
    
class ResumeAnalysisRequest(BaseModel):
    resume_id: Optional[int] = None
    content: Optional[str] = None
    file_content: Optional[str] = None
    
class ResumeAnalysisResponse(BaseModel):
    skills: List[str] = []
    experience_years: Optional[float] = None
    education: List[Dict[str, Any]] = []
    job_titles: List[str] = []
    improvement_suggestions: List[str] = []
    ats_score: Optional[int] = None
    strengths: List[str] = []
    weaknesses: List[str] = []
