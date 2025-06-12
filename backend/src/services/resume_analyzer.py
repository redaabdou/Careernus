from typing import Dict, Any, List, Optional
import re
from ..schemas.resume import ResumeAnalysisResponse

class ResumeAnalyzer:
    """Service pour analyser les CV et fournir des recommandations."""
    
    def __init__(self):
        # Dans un MVP, nous utiliserons une implémentation simplifiée
        # Plus tard, nous intégrerons OpenAI ou d'autres APIs d'IA
        pass
        
    def analyze_resume(self, content: str) -> ResumeAnalysisResponse:
        """
        Analyse un CV et retourne des insights.
        
        Pour le MVP, nous utilisons une analyse basique basée sur des regex.
        Dans une version future, cela sera remplacé par des appels à l'API OpenAI.
        """
        # Analyse simplifiée pour le MVP
        skills = self._extract_skills(content)
        experience_years = self._estimate_experience_years(content)
        education = self._extract_education(content)
        job_titles = self._extract_job_titles(content)
        
        # Générer des suggestions d'amélioration basiques
        suggestions = []
        if len(skills) < 5:
            suggestions.append("Ajoutez plus de compétences techniques spécifiques à votre domaine.")
        if experience_years is None:
            suggestions.append("Clarifiez votre expérience professionnelle avec des dates précises.")
        if not education:
            suggestions.append("Ajoutez des détails sur votre formation académique.")
            
        # Calcul d'un score ATS basique
        ats_score = self._calculate_ats_score(content, skills, len(job_titles), bool(education))
        
        # Forces et faiblesses
        strengths = self._identify_strengths(skills, experience_years, education)
        weaknesses = self._identify_weaknesses(skills, experience_years, education)
        
        return ResumeAnalysisResponse(
            skills=skills,
            experience_years=experience_years,
            education=education,
            job_titles=job_titles,
            improvement_suggestions=suggestions,
            ats_score=ats_score,
            strengths=strengths,
            weaknesses=weaknesses
        )
    
    def _extract_skills(self, content: str) -> List[str]:
        """Extrait une liste de compétences du CV."""
        # Liste simplifiée de compétences techniques courantes
        common_skills = [
            "Python", "JavaScript", "Java", "C\\+\\+", "C#", "SQL", "React", "Angular", 
            "Vue", "Node.js", "Django", "Flask", "Spring", "Docker", "Kubernetes",
            "AWS", "Azure", "GCP", "Machine Learning", "Deep Learning", "TensorFlow",
            "PyTorch", "NLP", "Data Analysis", "Excel", "PowerBI", "Tableau"
        ]
        
        # Recherche des compétences dans le contenu
        found_skills = []
        for skill in common_skills:
            if re.search(r'\b' + skill + r'\b', content, re.IGNORECASE):
                found_skills.append(skill)
                
        return found_skills
    
    def _estimate_experience_years(self, content: str) -> Optional[float]:
        """Estime le nombre d'années d'expérience."""
        # Recherche de patterns comme "X ans d'expérience" ou "X+ années"
        patterns = [
            r'(\d+)[\+]?\s*(?:ans|années|an|année)(?:\s+d\'expérience|\s+d\'exp\.)?',
            r'expérience\s+(?:de|d\')\s*(\d+)[\+]?\s*(?:ans|années|an|année)',
            r'(\d+)[\+]?\s*(?:years|year)(?:\s+of\s+experience|\s+exp\.)?'
        ]
        
        for pattern in patterns:
            match = re.search(pattern, content, re.IGNORECASE)
            if match:
                return float(match.group(1))
        
        return None
    
    def _extract_education(self, content: str) -> List[Dict[str, Any]]:
        """Extrait les informations sur l'éducation."""
        education = []
        
        # Recherche de diplômes courants
        degrees = [
            "Master", "MBA", "Doctorat", "PhD", "Licence", "Bachelor", 
            "Ingénieur", "BTS", "DUT", "Bac\\+\\d"
        ]
        
        for degree in degrees:
            matches = re.finditer(r'\b' + degree + r'\b(?:[^.]*?(\d{4}))?', content, re.IGNORECASE)
            for match in matches:
                year = match.group(1) if match.groups() and match.group(1) else None
                # Essayer d'extraire l'institution
                institution_match = re.search(r'\b' + degree + r'\b[^.]*?(Université|École|University|Institute|College|School)[^.]*?\.', content, re.IGNORECASE)
                institution = institution_match.group(0) if institution_match else "Non spécifié"
                
                education.append({
                    "degree": match.group(0),
                    "year": year,
                    "institution": institution
                })
                
        return education
    
    def _extract_job_titles(self, content: str) -> List[str]:
        """Extrait les titres de postes du CV."""
        # Liste de titres de postes courants
        common_titles = [
            "Développeur", "Developer", "Ingénieur", "Engineer", "Architecte", "Architect",
            "Chef de Projet", "Project Manager", "Directeur", "Director", "Consultant",
            "Analyste", "Analyst", "Designer", "Technicien", "Technician", "Responsable",
            "Manager", "Lead", "Senior", "Junior"
        ]
        
        job_titles = []
        for title in common_titles:
            matches = re.finditer(r'\b' + title + r'[^.]*?\.', content, re.IGNORECASE)
            for match in matches:
                job_title = match.group(0).strip('.')
                if job_title not in job_titles:
                    job_titles.append(job_title)
                    
        return job_titles
    
    def _calculate_ats_score(self, content: str, skills: List[str], job_titles_count: int, has_education: bool) -> int:
        """Calcule un score ATS basique."""
        score = 0
        
        # Points pour les compétences
        score += min(len(skills) * 5, 30)
        
        # Points pour l'expérience professionnelle
        score += min(job_titles_count * 10, 30)
        
        # Points pour l'éducation
        if has_education:
            score += 20
            
        # Points pour la longueur du CV
        words = len(content.split())
        if words > 300:
            score += 10
        elif words > 150:
            score += 5
            
        # Points pour les coordonnées
        if re.search(r'[\w\.-]+@[\w\.-]+', content):  # Email
            score += 5
            
        if re.search(r'\b\d{10}\b|\(\d{3}\)\s*\d{3}[-\s]?\d{4}|\+\d{1,3}\s\d{1,14}', content):  # Téléphone
            score += 5
            
        return min(score, 100)  # Plafonner à 100
    
    def _identify_strengths(self, skills: List[str], experience_years: Optional[float], education: List[Dict[str, Any]]) -> List[str]:
        """Identifie les points forts du CV."""
        strengths = []
        
        if len(skills) >= 5:
            strengths.append(f"Ensemble solide de {len(skills)} compétences techniques")
            
        if experience_years and experience_years > 3:
            strengths.append(f"Expérience professionnelle significative ({experience_years} ans)")
            
        if len(education) > 0:
            strengths.append("Formation académique bien détaillée")
            
        return strengths
    
    def _identify_weaknesses(self, skills: List[str], experience_years: Optional[float], education: List[Dict[str, Any]]) -> List[str]:
        """Identifie les points faibles du CV."""
        weaknesses = []
        
        if len(skills) < 3:
            weaknesses.append("Peu de compétences techniques identifiées")
            
        if not experience_years:
            weaknesses.append("Expérience professionnelle non quantifiée")
            
        if not education:
            weaknesses.append("Informations sur la formation académique manquantes")
            
        return weaknesses
