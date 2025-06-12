# Careernus

Careernus est une plateforme de recherche d'emploi et d'optimisation de CV alimentée par l'IA. Elle permet :

- l'analyse de CV (PDF ou DOCX) et de descriptions de poste
- l'obtention d'un score de correspondance détaillé
- la génération de CV adaptés aux ATS et de lettres de motivation
- le suivi de l'historique des candidatures

## Démarrage rapide

La stack comprend un backend **FastAPI** et un frontend **Next.js**. Un environnement de développement complet est disponible via Docker Compose :

```bash
# Lancer tous les services
docker-compose up --build
```

Par défaut :
- l'API est accessible sur `http://localhost:8000`
- l'application web est disponible sur `http://localhost:3000`

Créez un fichier `.env` à la racine du dossier `backend` pour surcharger la configuration (clé secrète, URL de base de données, etc.).

## Structure du dépôt

- `backend/` : API FastAPI, modèles SQLAlchemy et services d'analyse de CV
- `frontend/` : interface utilisateur Next.js avec Tailwind CSS
- `docker-compose.yml` : orchestrateur pour la base de données PostgreSQL, le backend et le frontend

Ce projet est conçu pour être extensible : vous pouvez facilement ajouter de nouveaux services ou intégrer des fournisseurs d'IA externes.
