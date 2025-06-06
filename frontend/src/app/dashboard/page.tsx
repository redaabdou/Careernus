'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { authService, resumeService } from '@/lib/api/api';

interface User {
  id: number;
  email: string;
  full_name: string;
}

interface Resume {
  id: number;
  title: string;
  created_at: string;
}

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/auth/login');
      return;
    }

    const fetchData = async () => {
      try {
        // Récupérer les informations de l'utilisateur
        const userData = await authService.getCurrentUser();
        setUser(userData as User);

        // Récupérer les CV de l'utilisateur
        const resumesData = await resumeService.listResumes();
        setResumes(resumesData as Resume[]);
      } catch (err) {
        setError('Erreur lors du chargement des données');
        // Si erreur d'authentification, rediriger vers la page de connexion
        if (
          typeof err === 'object' &&
          err !== null &&
          'response' in err &&
          typeof (err as any).response === 'object' &&
          (err as any).response?.status === 401
        ) {
          localStorage.removeItem('token');
          router.push('/auth/login');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/auth/login');
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="py-10">
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">Dashboard</h1>
            <Button variant="outline" onClick={handleLogout}>
              Déconnexion
            </Button>
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {error && (
            <div className="mt-6 p-4 text-sm text-red-700 bg-red-100 rounded-lg">
              {error}
            </div>
          )}

          {/* Section de bienvenue */}
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  Bienvenue, {user?.full_name || 'Utilisateur'}
                </h2>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Voici un aperçu de votre activité sur Careernus.
                </p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">CV analysés</dt>
                    <dd className="mt-1 text-sm text-gray-900">{resumes.length}</dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Dernier CV analysé</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {resumes.length > 0
                        ? new Date(resumes[0].created_at).toLocaleDateString()
                        : 'Aucun CV analysé'}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* Section des CV récents */}
          <div className="px-4 py-6 sm:px-0">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900">CV récents</h2>
              <Link href="/resumes/upload">
                <Button>Analyser un nouveau CV</Button>
              </Link>
            </div>

            {resumes.length === 0 ? (
              <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6 text-center">
                <p className="text-gray-500">Vous n'avez pas encore analysé de CV.</p>
                <div className="mt-4">
                  <Link href="/resumes/upload">
                    <Button>Analyser votre premier CV</Button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <ul className="divide-y divide-gray-200">
                  {resumes.map((resume) => (
                    <li key={resume.id}>
                      <Link href={`/resumes/${resume.id}`}>
                        <div className="block hover:bg-gray-50">
                          <div className="px-4 py-4 sm:px-6">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium text-indigo-600 truncate">
                                {resume.title}
                              </p>
                              <div className="ml-2 flex-shrink-0 flex">
                                <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                  Analysé
                                </p>
                              </div>
                            </div>
                            <div className="mt-2 flex justify-between">
                              <div className="sm:flex">
                                <p className="flex items-center text-sm text-gray-500">
                                  {new Date(resume.created_at).toLocaleDateString()}
                                </p>
                              </div>
                              <div className="flex items-center text-sm text-gray-500">
                                Voir les détails →
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
