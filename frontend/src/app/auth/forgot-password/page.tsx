'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { authService } from '@/lib/api/api';
import { motion } from 'framer-motion';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
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
      // Simulate API call for password reset
      await new Promise(resolve => setTimeout(resolve, 1500));
      // await authService.forgotPassword(email);
      setIsSubmitted(true);
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
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
              {isSubmitted ? 'Email envoyé ! ✅' : 'Mot de passe oublié ? 🔑'}
            </h2>
            <p className="mt-2 text-sm text-center text-gray-600">
              {isSubmitted 
                ? 'Consultez votre boîte mail pour réinitialiser votre mot de passe'
                : 'Pas de panique ! Nous allons vous aider à récupérer votre compte'}
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
            
            {!isSubmitted ? (
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
                  <p className="mt-2 text-xs text-gray-500">
                    Nous vous enverrons un lien pour réinitialiser votre mot de passe
                  </p>
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
                        Envoi en cours...
                      </>
                    ) : 'Envoyer le lien de réinitialisation'}
                  </Button>
                </div>
              </form>
            ) : (
              <div className="mt-8 space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                    <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-green-800">Email envoyé avec succès</h3>
                  <p className="mt-2 text-sm text-green-700">
                    Nous avons envoyé un lien de réinitialisation à <strong>{email}</strong>. 
                    Veuillez vérifier votre boîte de réception et suivre les instructions.
                  </p>
                  <p className="mt-2 text-xs text-green-600">
                    Si vous ne recevez pas l'email dans les prochaines minutes, vérifiez votre dossier spam.
                  </p>
                </div>
                
                <div className="text-center">
                  <Button 
                    type="button" 
                    onClick={() => {
                      setIsSubmitted(false);
                      setEmail('');
                    }}
                    variant="outline"
                    className="mr-4"
                  >
                    Réessayer
                  </Button>
                  <Link href="/auth/login">
                    <Button>
                      Retour à la connexion
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </motion.div>

          <motion.p
            initial="hidden"
            animate={isClient ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-center text-sm text-gray-600"
          >
            Vous vous souvenez de votre mot de passe ?{' '}
            <Link href="/auth/login" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
              Se connecter
            </Link>
          </motion.p>
        </div>
      </div>
      
      {/* Right side - Image and Help */}
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
                  src="/images/password-reset.jpg"
                  alt="Réinitialisation de mot de passe"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-4">
                  Besoin d'aide supplémentaire ? 🤔
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-400 bg-opacity-30 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-white">
                        Si vous n'avez pas reçu l'email après quelques minutes, vérifiez votre dossier spam ou essayez à nouveau.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-400 bg-opacity-30 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-white">
                        Assurez-vous d'utiliser l'adresse email avec laquelle vous vous êtes inscrit.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-400 bg-opacity-30 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-white">
                        Pour toute assistance supplémentaire, contactez notre équipe de support à <span className="font-medium">support@careernus.com</span>
                      </p>
                    </div>
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
