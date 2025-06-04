from sqlalchemy import Column, Integer, String, Text, ForeignKey
from sqlalchemy.orm import relationship
from .base import Base, TimestampMixin

class Resume(Base, TimestampMixin):
    __tablename__ = "resumes"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    title = Column(String, nullable=False)
    content = Column(Text, nullable=False)
    original_filename = Column(String)
    parsed_data = Column(Text)  # JSON stocké sous forme de texte
    
    # Relations
    user = relationship("User", back_populates="resumes")

# Ajoutez cette relation dans le modèle User
from .user import User
User.resumes = relationship("Resume", back_populates="user")
