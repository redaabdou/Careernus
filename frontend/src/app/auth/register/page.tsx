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

// Step animation variants
const stepVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 }
};

export default function Register() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [experience, setExperience] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Simple password strength checker
    let strength = 0;
    if (password.length > 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    setPasswordStrength(strength);
  }, [password]);

  const handleNextStep = () => {
    if (currentStep === 1) {
      // Validate first step
      if (!fullName || !email || !password || !confirmPassword) {
        setError('Veuillez remplir tous les champs');
        return;
      }
      if (password !== confirmPassword) {
        setError('Les mots de passe ne correspondent pas');
        return;
      }
      if (passwordStrength < 2) {
        setError('Votre mot de passe est trop faible');
        return;
      }
    }
    setError('');
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setError('');
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreeTerms) {
      setError('Vous devez accepter les conditions d\'utilisation');
      return;
    }
    
    setIsLoading(true);
    setError('');

    try {
      await authService.register(email, password, fullName);
      // Connexion automatique après inscription
      const loginData = await authService.login(email, password);
      const accessToken = (loginData as { access_token: string }).access_token;
      localStorage.setItem('token', accessToken);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Une erreur est survenue lors de l\'inscription');
    } finally {
      setIsLoading(false);
    }
  };

  // Social registration handlers
  const handleGoogleRegister = () => {
    // Implement Google registration logic
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      router.push('/dashboard');
    }, 1500);
  };

  const handleLinkedInRegister = () => {
    // Implement LinkedIn registration logic
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      router.push('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Registration Form */}
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
              Créez votre compte 🚀
            </h2>
            <p className="mt-2 text-sm text-center text-gray-600">
              Rejoignez des milliers de professionnels et boostez votre carrière
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
            
            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                {[1, 2].map((step) => (
                  <div key={step} className="flex flex-col items-center">
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                      currentStep >= step ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {step}
                    </div>
                    <div className="text-xs mt-1 text-gray-500">
                      {step === 1 ? 'Compte' : 'Profil'}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-2 h-1 w-full bg-gray-200 rounded">
                <div 
                  className="h-1 bg-indigo-600 rounded transition-all duration-300" 
                  style={{ width: `${(currentStep - 1) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit}>
              {/* Step 1: Account Information */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={stepVariants}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                      Nom complet
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="pl-10"
                        placeholder="Jean Dupont"
                      />
                    </div>
                  </div>

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
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Mot de passe
                    </label>
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
                        autoComplete="new-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10"
                        placeholder="••••••••"
                      />
                    </div>
                    {/* Password strength indicator */}
                    <div className="mt-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-500">Force du mot de passe:</span>
                        <span className="text-xs font-medium">
                          {passwordStrength === 0 && 'Très faible'}
                          {passwordStrength === 1 && 'Faible'}
                          {passwordStrength === 2 && 'Moyen'}
                          {passwordStrength === 3 && 'Fort'}
                          {passwordStrength === 4 && 'Très fort'}
                        </span>
                      </div>
                      <div className="h-1 w-full bg-gray-200 rounded">
                        <div 
                          className={`h-1 rounded transition-all duration-300 ${
                            passwordStrength === 0 ? 'bg-gray-200 w-0' :
                            passwordStrength === 1 ? 'bg-red-500 w-1/4' :
                            passwordStrength === 2 ? 'bg-yellow-500 w-2/4' :
                            passwordStrength === 3 ? 'bg-green-500 w-3/4' :
                            'bg-green-600 w-full'
                          }`}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                      Confirmer le mot de passe
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        autoComplete="new-password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="pl-10"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>

                  <div>
                    <Button 
                      type="button" 
                      onClick={handleNextStep}
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Continuer
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Profile Information */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={stepVariants}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
                      Titre professionnel
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <Input
                        id="jobTitle"
                        name="jobTitle"
                        type="text"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        className="pl-10"
                        placeholder="Développeur Full Stack, Designer UX, etc."
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                      Années d'expérience
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <Input
                        id="experience"
                        name="experience"
                        type="text"
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        className="pl-10"
                        placeholder="2 ans, 5+ ans, etc."
                      />
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Checkbox
                      id="agree-terms"
                      checked={agreeTerms}
                      onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                    />
                    <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-700">
                      J'accepte les{' '}
                      <Link href="/terms" className="text-indigo-600 hover:text-indigo-500">
                        conditions d'utilisation
                      </Link>
                      {' '}et la{' '}
                      <Link href="/privacy" className="text-indigo-600 hover:text-indigo-500">
                        politique de confidentialité
                      </Link>
                    </label>
                  </div>

                  <div className="flex space-x-4">
                    <Button 
                      type="button" 
                      onClick={handlePrevStep}
                      className="w-1/3 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Retour
                    </Button>
                    <Button 
                      type="submit" 
                      className="w-2/3 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Inscription en cours...
                        </>
                      ) : 'Créer mon compte'}
                    </Button>
                  </div>
                </motion.div>
              )}
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Ou s'inscrire avec</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div>
                  <Button
                    type="button"
                    onClick={handleGoogleRegister}
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
                    onClick={handleLinkedInRegister}
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
            Déjà inscrit ?{' '}
            <Link href="/auth/login" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
              Se connecter
            </Link>
          </motion.p>
        </div>
      </div>
      
      {/* Right side - Benefits */}
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
              <h3 className="text-2xl font-bold text-white mb-6">
                Pourquoi rejoindre Careernus ? ✨
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-400 bg-opacity-30 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Analyse de CV par IA</h4>
                    <p className="mt-1 text-indigo-100">
                      Notre technologie d'IA analyse votre CV et identifie les points forts et les axes d'amélioration.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-400 bg-opacity-30 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Score ATS optimisé</h4>
                    <p className="mt-1 text-indigo-100">
                      Maximisez vos chances de passer les filtres automatiques des recruteurs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-400 bg-opacity-30 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Recommandations personnalisées</h4>
                    <p className="mt-1 text-indigo-100">
                      Recevez des suggestions concrètes pour améliorer votre CV et augmenter vos chances de décrocher un entretien.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full overflow-hidden relative">
                      <Image
                        src="/images/testimonial-avatar-2.jpg"
                        alt="Thomas Dubois"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-white italic">
                      "Après avoir optimisé mon CV avec Careernus, j'ai reçu trois fois plus de réponses à mes candidatures. Un outil indispensable!"
                    </p>
                    <div className="mt-2">
                      <div className="text-base font-medium text-white">Thomas Dubois</div>
                      <div className="text-sm text-indigo-200">Ingénieur DevOps</div>
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
