'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { resumeService } from '@/lib/api/api';

interface ResumeWithAnalysis {
  id: number;
  title: string;
  content: string;
  created_at: string;
  analysis: {
    skills: string[];
    experience_years: number | null;
    education: Array<{
      degree: string;
      year: string | null;
      institution: string;
    }>;
    job_titles: string[];
    improvement_suggestions: string[];
    ats_score: number;
    strengths: string[];
    weaknesses: string[];
  };
}

export default function ResumeDetail() {
  const router = useRouter();
  const params = useParams();
  const resumeId = params?.id as string;
  
  const [resume, setResume] = useState<ResumeWithAnalysis | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchResume = async () => {
      if (!resumeId) return;
      
      try {
        const data = await resumeService.getResume(parseInt(resumeId));
        setResume(data as ResumeWithAnalysis);
      } catch (err: any) {
        setError(err.response?.data?.detail || 'Une erreur est survenue lors du chargement du CV');
        if (err.response?.status === 401) {
          localStorage.removeItem('token');
          router.push('/auth/login');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchResume();
  }, [resumeId, router]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 p-4 rounded-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Erreur</h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>{error}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Button onClick={( ) => router.push('/dashboard')}>
              Retour au dashboard
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (!resume) {
    return (
      <div className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-500">CV non trouvé</p>
            <div className="mt-4">
              <Button onClick={() => router.push('/dashboard')}>
                Retour au dashboard
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10">
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              {resume.title}
            </h1>
            <Button variant="outline" onClick={() => router.push('/dashboard')}>
              Retour au dashboard
            </Button>
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 py-8 sm:px-0">
            {/* Score ATS */}
            <div className="mb-8">
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                  <div>
                    <h2 className="text-lg leading-6 font-medium text-gray-900">
                      Score ATS
                    </h2>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      Évaluation de la compatibilité de votre CV avec les systèmes de suivi des candidatures.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="relative h-24 w-24">
                      <svg viewBox="0 0 36 36" className="h-24 w-24 stroke-current">
                        <path
                          className="stroke-gray-200"
                          strokeWidth="3"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className={`${
                            resume.analysis.ats_score >= 80
                              ? 'stroke-green-500'
                              : resume.analysis.ats_score >= 60
                              ? 'stroke-yellow-500'
                              : 'stroke-red-500'
                          }`}
                          strokeWidth="3"
                          strokeDasharray={`${resume.analysis.ats_score}, 100`}
                          strokeLinecap="round"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold">{resume.analysis.ats_score}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grille d'analyse */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Compétences */}
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Compétences</h3>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                  <div className="py-4 sm:py-5 sm:px-6">
                    <div className="flex flex-wrap gap-2">
                      {resume.analysis.skills.length > 0 ? (
                        resume.analysis.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                          >
                            {skill}
                          </span>
                        ))
                      ) : (
                        <p className="text-sm text-gray-500">Aucune compétence détectée</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Expérience */}
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Expérience</h3>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                  <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">Années d'expérience</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {resume.analysis.experience_years || 'Non détecté'}
                      </dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">Postes occupés</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {resume.analysis.job_titles.length > 0 ? (
                          <ul className="list-disc pl-5 space-y-1">
                            {resume.analysis.job_titles.map((title, index) => (
                              <li key={index}>{title}</li>
                            ))}
                          </ul>
                        ) : (
                          'Aucun poste détecté'
                        )}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              {/* Formation */}
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Formation</h3>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                  {resume.analysis.education.length > 0 ? (
                    <ul className="divide-y divide-gray-200">
                      {resume.analysis.education.map((edu, index) => (
                        <li key={index} className="py-4 sm:py-5 sm:px-6">
                          <div className="space-y-1">
                            <p className="text-sm font-medium text-gray-900">{edu.degree}</p>
                            {edu.institution && edu.institution !== 'Non spécifié' && (
                              <p className="text-sm text-gray-500">{edu.institution}</p>
                            )}
                            {edu.year && <p className="text-sm text-gray-500">{edu.year}</p>}
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="py-4 sm:py-5 sm:px-6">
                      <p className="text-sm text-gray-500">Aucune formation détectée</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Forces et faiblesses */}
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Forces et faiblesses</h3>
                </div>
                <div className="border-t border-gray-200">
                  <div className="px-4 py-5 sm:px-6">
                    <h4 className="text-sm font-medium text-gray-900">Forces</h4>
                    {resume.analysis.strengths.length > 0 ? (
                      <ul className="mt-2 list-disc pl-5 space-y-1">
                        {resume.analysis.strengths.map((strength, index) => (
                          <li key={index} className="text-sm text-gray-500">
                            {strength}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-2 text-sm text-gray-500">Aucune force particulière détectée</p>
                    )}
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <h4 className="text-sm font-medium text-gray-900">Faiblesses</h4>
                    {resume.analysis.weaknesses.length > 0 ? (
                      <ul className="mt-2 list-disc pl-5 space-y-1">
                        {resume.analysis.weaknesses.map((weakness, index) => (
                          <li key={index} className="text-sm text-gray-500">
                            {weakness}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-2 text-sm text-gray-500">Aucune faiblesse particulière détectée</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Suggestions d'amélioration */}
            <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Suggestions d'amélioration
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Recommandations pour optimiser votre CV.
                </p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                {resume.analysis.improvement_suggestions.length > 0 ? (
                  <ul className="list-disc pl-5 space-y-2">
                    {resume.analysis.improvement_suggestions.map((suggestion, index) => (
                      <li key={index} className="text-sm text-gray-700">
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-500">
                    Aucune suggestion d'amélioration particulière. Votre CV semble bien optimisé !
                  </p>
                )}
              </div>
            </div>

            {/* Contenu du CV */}
            <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Contenu du CV
                </h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono bg-gray-50 p-4 rounded-md overflow-auto max-h-96">
                  {resume.content}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
