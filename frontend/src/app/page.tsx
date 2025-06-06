'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/70 to-purple-900/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6">
              <motion.div
                initial="hidden"
                animate={isClient ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.5 }}
                className="text-center lg:text-left"
              >
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Optimisez votre CV avec l'IA 🚀
                </h1>
                <p className="mt-6 text-xl text-indigo-100">
                  Careernus analyse votre CV, identifie ses forces et faiblesses, et vous propose des améliorations personnalisées pour maximiser vos chances de décrocher l'emploi de vos rêves.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
                  <Link href="/auth/register">
                    <Button size="lg" className="w-full sm:w-auto bg-white text-indigo-600 hover:bg-indigo-50">
                      Commencer gratuitement
                    </Button>
                  </Link>
                  <Link href="/auth/login">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                      Se connecter
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 text-sm text-indigo-100">
                  ✨ Déjà plus de 10 000 CV optimisés !
                </div>
              </motion.div>
            </div>
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
              <motion.div
                initial="hidden"
                animate={isClient ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden lg:mx-0"
              >
                <div className="px-4 py-8 sm:px-10">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Essayez maintenant</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
                      <Image
                        src="/images/cv-analysis-demo.gif"
                        alt="Démonstration d'analyse de CV"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10">
                  <p className="text-xs leading-5 text-gray-500">
                    Analyse instantanée, recommandations personnalisées, et amélioration continue.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
              Ils nous font confiance
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <img className="h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <img className="h-12" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Transistor" />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <img className="h-12" src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" alt="Workcation" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Fonctionnalités</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Tout ce dont vous avez besoin pour réussir
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Notre plateforme utilise l'intelligence artificielle pour vous aider à créer un CV parfait.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <motion.div
                initial="hidden"
                animate={isClient ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Analyse de CV 📄</h3>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-base text-gray-500">
                      Notre IA analyse votre CV en profondeur et identifie les points forts et les axes d'amélioration.
                    </p>
                  </div>
                  <div className="mt-6">
                    <div className="h-48 bg-gray-100 rounded-md overflow-hidden relative">
                      <Image
                        src="/images/cv-analysis.jpg"
                        alt="Analyse de CV"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                initial="hidden"
                animate={isClient ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
                      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Score ATS 🎯</h3>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-base text-gray-500">
                      Évaluez la compatibilité de votre CV avec les systèmes de suivi des candidatures utilisés par les recruteurs.
                    </p>
                  </div>
                  <div className="mt-6">
                    <div className="h-48 bg-gray-100 rounded-md overflow-hidden relative">
                      <Image
                        src="/images/ats-score.jpg"
                        alt="Score ATS"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                initial="hidden"
                animate={isClient ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-pink-500 rounded-md p-3">
                      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Recommandations personnalisées 💡</h3>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-base text-gray-500">
                      Recevez des suggestions concrètes pour améliorer votre CV et augmenter vos chances de décrocher un entretien.
                    </p>
                  </div>
                  <div className="mt-6">
                    <div className="h-48 bg-gray-100 rounded-md overflow-hidden relative">
                      <Image
                        src="/images/recommendations.jpg"
                        alt="Recommandations personnalisées"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Processus</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Comment ça fonctionne
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Un processus simple en 3 étapes pour optimiser votre CV et booster votre carrière.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Step 1 */}
              <motion.div
                initial="hidden"
                animate={isClient ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative"
              >
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <span className="text-lg font-bold">1</span>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">Téléchargez votre CV</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Importez votre CV existant au format PDF, DOCX ou TXT en quelques secondes.
                  </p>
                  <div className="mt-4 h-40 bg-gray-100 rounded-md overflow-hidden relative">
                    <Image
                      src="/images/upload-cv.gif"
                      alt="Téléchargement de CV"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial="hidden"
                animate={isClient ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <span className="text-lg font-bold">2</span>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">Obtenez une analyse détaillée</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Notre IA analyse votre CV et identifie les points forts et les axes d'amélioration.
                  </p>
                  <div className="mt-4 h-40 bg-gray-100 rounded-md overflow-hidden relative">
                    <Image
                      src="/images/analyze-cv.gif"
                      alt="Analyse de CV"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial="hidden"
                animate={isClient ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative"
              >
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <span className="text-lg font-bold">3</span>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">Améliorez votre CV</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Suivez nos recommandations personnalisées pour optimiser votre CV et augmenter vos chances de succès.
                  </p>
                  <div className="mt-4 h-40 bg-gray-100 rounded-md overflow-hidden relative">
                    <Image
                      src="/images/improve-cv.gif"
                      alt="Amélioration de CV"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-gradient-to-r from-indigo-500 to-purple-600 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-200 tracking-wide uppercase">Témoignages</h2>
            <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Ce que nos utilisateurs disent
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Testimonial 1 */}
              <motion.div
                initial="hidden"
                animate={isClient ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Sophie Martin" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Sophie Martin</h3>
                      <p className="text-sm text-indigo-600">Développeuse Web</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-base text-gray-500">
                      "Grâce à Careernus, j'ai pu identifier les lacunes de mon CV et les combler. J'ai décroché un entretien pour mon poste de rêve en moins de deux semaines !"
                    </p>
                  </div>
                  <div className="mt-4 flex text-yellow-400">
                    {'★'.repeat(5 )}
                  </div>
                </div>
              </motion.div>

              {/* Testimonial 2 */}
              <motion.div
                initial="hidden"
                animate={isClient ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Thomas Dubois" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Thomas Dubois</h3>
                      <p className="text-sm text-indigo-600">Ingénieur Data</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-base text-gray-500">
                      "L'analyse ATS m'a permis de comprendre pourquoi mes candidatures n'aboutissaient pas. Après les modifications suggérées, mon taux de réponse a triplé !"
                    </p>
                  </div>
                  <div className="mt-4 flex text-yellow-400">
                    {'★'.repeat(5 )}
                  </div>
                </div>
              </motion.div>

              {/* Testimonial 3 */}
              <motion.div
                initial="hidden"
                animate={isClient ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Julie Leroy" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Julie Leroy</h3>
                      <p className="text-sm text-indigo-600">Chef de Projet</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-base text-gray-500">
                      "Interface intuitive et recommandations pertinentes. J'ai pu mettre en valeur mes compétences clés et décrocher un poste avec une augmentation de 20% !"
                    </p>
                  </div>
                  <div className="mt-4 flex text-yellow-400">
                    {'★'.repeat(4 )}{'☆'}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Résultats</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Des chiffres qui parlent
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {/* Stat 1 */}
              <motion.div
                initial="hidden"
                animate={isClient ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-indigo-50 rounded-lg p-6 text-center"
              >
                <p className="text-5xl font-extrabold text-indigo-600">10k+</p>
                <p className="mt-2 text-lg font-medium text-gray-900">CV analysés</p>
              </motion.div>

              {/* Stat 2 */}
              <motion.div
                initial="hidden"
                animate={isClient ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-purple-50 rounded-lg p-6 text-center"
              >
                <p className="text-5xl font-extrabold text-purple-600">85%</p>
                <p className="mt-2 text-lg font-medium text-gray-900">Taux de satisfaction</p>
              </motion.div>

              {/* Stat 3 */}
              <motion.div
                initial="hidden"
                animate={isClient ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-pink-50 rounded-lg p-6 text-center"
              >
                <p className="text-5xl font-extrabold text-pink-600">3x</p>
                <p className="mt-2 text-lg font-medium text-gray-900">Plus de réponses</p>
              </motion.div>

              {/* Stat 4 */}
              <motion.div
                initial="hidden"
                animate={isClient ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-indigo-50 rounded-lg p-6 text-center"
              >
                <p className="text-5xl font-extrabold text-indigo-600">24h</p>
                <p className="mt-2 text-lg font-medium text-gray-900">Support réactif</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">FAQ</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Questions fréquentes
            </p>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <dl className="space-y-6">
              <motion.div
                initial="hidden"
                animate={isClient ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <dt className="text-lg font-medium text-gray-900">Comment fonctionne l'analyse de CV ?</dt>
                <dd className="mt-2 text-base text-gray-500">
                  Notre technologie d'IA analyse votre CV en identifiant les compétences clés, l'expérience, la formation et le format. Elle compare ensuite ces éléments aux meilleures pratiques du secteur et aux exigences des systèmes ATS pour vous fournir des recommandations personnalisées.
                </dd>
              </motion.div>

              <motion.div
                initial="hidden"
                animate={isClient ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <dt className="text-lg font-medium text-gray-900">Est-ce que le service est gratuit ?</dt>
                <dd className="mt-2 text-base text-gray-500">
                  Oui, l'analyse de base de votre CV est entièrement gratuite. Nous proposons également des fonctionnalités premium pour ceux qui souhaitent une analyse plus approfondie et des recommandations plus détaillées.
                </dd>
              </motion.div>

              <motion.div
                initial="hidden"
                animate={isClient ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <dt className="text-lg font-medium text-gray-900">Quels formats de CV sont acceptés ?</dt>
                <dd className="mt-2 text-base text-gray-500">
                  Nous acceptons les formats PDF, DOCX, DOC et TXT. Pour une analyse optimale, nous recommandons d'utiliser des formats PDF ou DOCX qui préservent mieux la mise en forme.
                </dd>
              </motion.div>

              <motion.div
                initial="hidden"
                animate={isClient ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <dt className="text-lg font-medium text-gray-900">Mes données sont-elles sécurisées ?</dt>
                <dd className="mt-2 text-base text-gray-500">
                  Absolument. La confidentialité de vos données est notre priorité. Nous utilisons un chiffrement de bout en bout et ne partageons jamais vos informations avec des tiers sans votre consentement explicite.
                </dd>
              </motion.div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Prêt à booster votre carrière ?</span>
            <span className="block text-indigo-200">Commencez dès aujourd'hui gratuitement.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/auth/register">
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50">
                  Commencer maintenant
                </Button>
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-indigo-600">
                  En savoir plus
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Produit</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/features" className="text-base text-gray-300 hover:text-white">
                    Fonctionnalités
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-base text-gray-300 hover:text-white">
                    Tarifs
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="text-base text-gray-300 hover:text-white">
                    Témoignages
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-base text-gray-300 hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Entreprise</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/about" className="text-base text-gray-300 hover:text-white">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-base text-gray-300 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-base text-gray-300 hover:text-white">
                    Carrières
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-base text-gray-300 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Légal</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/privacy" className="text-base text-gray-300 hover:text-white">
                    Confidentialité
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-base text-gray-300 hover:text-white">
                    Conditions d'utilisation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Suivez-nous</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-base text-gray-300 hover:text-white flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-base text-gray-300 hover:text-white flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-base text-gray-300 hover:text-white flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-base text-gray-300 hover:text-white flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; {new Date( ).getFullYear()} Careernus. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
