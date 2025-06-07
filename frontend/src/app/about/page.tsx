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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function About() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Team members data
  const teamMembers = [
    {
      name: 'Sophie Martin',
      role: 'CEO & Fondatrice',
      bio: 'Ancienne DRH avec plus de 10 ans d\'expérience dans le recrutement tech. Passionnée par l\'IA et l\'innovation RH.',
      image: '/images/team/sophie.jpg'
    },
    {
      name: 'Thomas Dubois',
      role: 'CTO',
      bio: 'Expert en IA et machine learning. A développé des solutions d\'analyse de CV pour plusieurs grandes entreprises.',
      image: '/images/team/thomas.jpg'
    },
    {
      name: 'Emma Leclerc',
      role: 'Responsable Produit',
      bio: 'Spécialiste UX avec une passion pour créer des expériences utilisateur exceptionnelles et intuitives.',
      image: '/images/team/emma.jpg'
    },
    {
      name: 'Lucas Moreau',
      role: 'Lead Developer',
      bio: 'Développeur full-stack avec une expertise en architectures cloud et solutions évolutives.',
      image: '/images/team/lucas.jpg'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700 py-16 sm:py-24">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/70 to-purple-900/70" />
          <div className="absolute inset-0 bg-grid-white/10 bg-[length:20px_20px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isClient ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Notre Mission
            </h1>
            <p className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto">
              Chez Careernus, nous révolutionnons la façon dont les professionnels présentent leurs compétences et dont les recruteurs découvrent les talents.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isClient ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="lg:grid lg:grid-cols-2 lg:gap-16"
          >
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Notre Histoire
              </h2>
              <div className="mt-6 text-lg text-gray-500 space-y-4">
                <p>
                  Careernus est né d'une frustration partagée par notre fondatrice, Sophie Martin. Après des années passées en tant que DRH dans le secteur tech, elle a constaté un problème récurrent : des candidats talentueux étaient souvent écartés à cause de CV qui ne mettaient pas en valeur leurs véritables compétences.
                </p>
                <p>
                  En 2023, Sophie a réuni une équipe d'experts en IA, en développement et en UX pour créer une solution qui transformerait le processus de recrutement. L'objectif était simple mais ambitieux : développer une plateforme qui aiderait les candidats à optimiser leurs CV et permettrait aux recruteurs de découvrir les talents qui correspondent vraiment à leurs besoins.
                </p>
                <p>
                  Aujourd'hui, Careernus aide des milliers de professionnels à faire briller leur parcours et leurs compétences, tout en préparant la prochaine phase qui révolutionnera la façon dont les recruteurs découvrent les talents.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/register">
                  <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                    Rejoignez l'aventure
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 relative">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <div className="absolute top-0 left-0 w-3/4 h-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/about/our-story.jpg"
                    alt="Notre histoire"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-2/3 h-3/4 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/images/about/team-working.jpg"
                    alt="Notre équipe au travail"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isClient ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Nos valeurs</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Ce qui guide nos actions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Nos valeurs fondamentales définissent notre culture et notre approche du développement de produits.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isClient ? "visible" : "hidden"}
            variants={staggerContainer}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {/* Value 1 */}
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="h-2 bg-indigo-600"></div>
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-medium text-gray-900 text-center">Innovation</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Nous repoussons constamment les limites de ce qui est possible grâce à l'IA et aux technologies avancées.
                </p>
              </div>
            </motion.div>

            {/* Value 2 */}
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="h-2 bg-purple-600"></div>
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-medium text-gray-900 text-center">Équité</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Nous créons des outils qui donnent à chacun une chance équitable de réussir, indépendamment de son parcours.
                </p>
              </div>
            </motion.div>

            {/* Value 3 */}
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="h-2 bg-pink-600"></div>
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-pink-500 text-white mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-medium text-gray-900 text-center">Confiance</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Nous bâtissons des relations de confiance avec nos utilisateurs en respectant leurs données et leur vie privée.
                </p>
              </div>
            </motion.div>

            {/* Value 4 */}
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 sm:col-span-2 lg:col-span-1"
            >
              <div className="h-2 bg-indigo-400"></div>
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-400 text-white mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-medium text-gray-900 text-center">Impact</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Nous mesurons notre succès par l'impact positif que nous avons sur la carrière de nos utilisateurs.
                </p>
              </div>
            </motion.div>

            {/* Value 5 */}
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 sm:col-span-2 lg:col-span-1"
            >
              <div className="h-2 bg-purple-400"></div>
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-400 text-white mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-medium text-gray-900 text-center">Excellence</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Nous visons l'excellence dans tout ce que nous faisons, des algorithmes d'IA à l'expérience utilisateur.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isClient ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Notre équipe</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Les visages derrière Careernus
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Une équipe passionnée d'experts en IA, en développement et en ressources humaines.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isClient ? "visible" : "hidden"}
            variants={staggerContainer}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                  <p className="text-sm text-indigo-600">{member.role}</p>
                  <p className="mt-3 text-base text-gray-500">{member.bio}</p>
                  <div className="mt-4 flex space-x-3">
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 sm:py-24 bg-gradient-to-r from-indigo-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isClient ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-base font-semibold text-indigo-200 tracking-wide uppercase">Nos chiffres</h2>
            <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              L'impact de Careernus en chiffres
            </p>
          </motion.div>

          <motion.dl
            initial="hidden"
            animate={isClient ? "visible" : "hidden"}
            variants={staggerContainer}
            className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4"
          >
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <dt className="text-5xl font-extrabold text-white">10k+</dt>
              <dd className="mt-2 text-lg font-medium text-indigo-100">Utilisateurs actifs</dd>
            </motion.div>

            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <dt className="text-5xl font-extrabold text-white">25k+</dt>
              <dd className="mt-2 text-lg font-medium text-indigo-100">CV analysés</dd>
            </motion.div>

            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <dt className="text-5xl font-extrabold text-white">85%</dt>
              <dd className="mt-2 text-lg font-medium text-indigo-100">Taux de satisfaction</dd>
            </motion.div>

            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <dt className="text-5xl font-extrabold text-white">3x</dt>
              <dd className="mt-2 text-lg font-medium text-indigo-100">Plus de réponses aux candidatures</dd>
            </motion.div>
          </motion.dl>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isClient ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="lg:grid lg:grid-cols-2 lg:gap-16"
          >
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Contactez-nous
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Vous avez des questions ou souhaitez en savoir plus sur Careernus ? Notre équipe est là pour vous aider.
              </p>
              
              <dl className="mt-8 space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg font-medium text-gray-900">Email</dt>
                    <dd className="mt-1 text-gray-500">contact@careernus.com</dd>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg font-medium text-gray-900">Téléphone</dt>
                    <dd className="mt-1 text-gray-500">+33 1 23 45 67 89</dd>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg font-medium text-gray-900">Adresse</dt>
                    <dd className="mt-1 text-gray-500">
                      123 Avenue de l'Innovation<br />
                      75008 Paris, France
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-8 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8">
                  <h3 className="text-lg font-medium text-gray-900">Envoyez-nous un message</h3>
                  <form className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                    <div className="sm:col-span-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Nom complet
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Téléphone
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                        Sujet
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        ></textarea>
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                      >
                        Envoyer le message
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isClient ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="lg:flex lg:items-center lg:justify-between"
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Prêt à booster votre carrière ?</span>
              <span className="block text-indigo-200">Rejoignez Careernus dès aujourd'hui.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link href="/auth/register">
                  <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50">
                    Commencer gratuitement
                  </Button>
                </Link>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <Link href="/auth/login">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Se connecter
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
