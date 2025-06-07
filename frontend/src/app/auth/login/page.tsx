'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { authService } from '@/lib/api/api';
import { motion } from 'framer-motion';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const data = await authService.login(email, password);
      if (typeof data === 'object' && data !== null && 'access_token' in data && typeof (data as any).access_token === 'string') {
        localStorage.setItem('token', (data as { access_token: string }).access_token);
        if (rememberMe) {
          localStorage.setItem('remember_email', email);
        } else {
          localStorage.removeItem('remember_email');
        }
        router.push('/dashboard');
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (err) {
      setError('Email ou mot de passe incorrect');
    } finally {
      setIsLoading(false);
    }
  };

  // Social login handlers
  const handleGoogleLogin = () => {
    // Implement Google login logic
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      router.push('/dashboard');
    }, 1500);
  };

  const handleLinkedInLogin = () => {
    // Implement LinkedIn login logic
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      router.push('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Login Form */}
      <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24 bg-white">
        <div className="mx-auto w-full max-w-sm lg:max-w-md">
          <motion.div
            initial="hidden"
            animate={isClient ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center">
              <Link href="/">
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="ml-2 text-2xl font-bold text-gray-900">Careernus</span>
                </div>
              </Link>
            </div>
            
            <h2 className="mt-8 text-3xl font-extrabold text-center text-gray-900">
              Bon retour parmi nous! 👋
            </h2>
            <p className="mt-2 text-sm text-center text-gray-600">
              Connectez-vous pour accéder à votre espace personnel et optimiser votre CV
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isClient ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8"
          >
            {error && (
              <div className="mb-4 p-4 text-sm text-red-700 bg-red-100 rounded-lg flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {error}
              </div>
            )}
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Adresse email
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    placeholder="vous@exemple.com"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Mot de passe
                  </label>
                  <div className="text-sm">
                    <Link href="/auth/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
                      Mot de passe oublié ?
                    </Link>
                  </div>
                </div>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Checkbox
                    id="remember-me"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Se souvenir de moi
                  </label>
                </div>
              </div>

              <div>
                <Button 
                  type="submit" 
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Connexion en cours...
                    </>
                  ) : 'Se connecter'}
                </Button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Ou continuer avec</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div>
                  <Button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    disabled={isLoading}
                  >
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                    </svg>
                    <span className="ml-2">Google</span>
                  </Button>
                </div>

                <div>
                  <Button
                    type="button"
                    onClick={handleLinkedInLogin}
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    disabled={isLoading}
                  >
                    <svg className="h-5 w-5 text-blue-600" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span className="ml-2">LinkedIn</span>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial="hidden"
            animate={isClient ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-center text-sm text-gray-600"
          >
            Pas encore de compte ?{' '}
            <Link href="/auth/register" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
              Créer un compte gratuitement
            </Link>
          </motion.p>
        </div>
      </div>
      
      {/* Right side - Image and Quote */}
      <div className="hidden lg:block relative w-0 flex-1 bg-gradient-to-br from-indigo-600 to-purple-700">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="max-w-lg">
            <motion.div
              initial="hidden"
              animate={isClient ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-2xl mb-8">
                <Image
                  src="/images/career-success.jpg"
                  alt="Succès professionnel"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              
              <blockquote className="mt-8">
                <div className="text-xl font-medium text-white">
                  "Grâce à Careernus, j'ai pu optimiser mon CV et décrocher un entretien pour mon poste de rêve en moins de deux semaines!"
                </div>
                <footer className="mt-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 relative">
                      <Image
                        className="rounded-full"
                        src="/images/testimonial-avatar.jpg"
                        alt="Sophie Martin"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-base font-medium text-white">Sophie Martin</div>
                      <div className="text-sm text-indigo-200">Développeuse Web chez TechCorp</div>
                    </div>
                  </div>
                </footer>
              </blockquote>
              
              <div className="mt-12 flex items-center">
                <div className="text-white text-sm">
                  <div className="font-bold mb-1">Rejoignez plus de 10 000 professionnels</div>
                  <div className="flex items-center">
                    <div className="flex -space-x-2 mr-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-6 w-6 rounded-full border-2 border-indigo-600 bg-indigo-300 flex items-center justify-center text-xs font-bold">
                          {i}
                        </div>
                      ))}
                    </div>
                    <div className="text-indigo-200">qui ont déjà optimisé leur carrière</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
