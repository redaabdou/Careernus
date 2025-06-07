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

export default function Contact() {
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

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
              Contactez-nous
            </h1>
            <p className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto">
              Vous avez des questions ou souhaitez en savoir plus sur Careernus ? Notre équipe est là pour vous aider.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Form Section */}
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
                Parlons de votre projet
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Que vous soyez un candidat cherchant à optimiser votre CV ou une entreprise intéressée par nos futurs services de recrutement, nous sommes impatients de discuter avec vous.
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

              <div className="mt-12">
                <h3 className="text-lg font-medium text-gray-900">Suivez-nous</h3>
                <div className="mt-4 flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0">
              {!isSubmitted ? (
                <motion.div
                  initial="hidden"
                  animate={isClient ? "visible" : "hidden"}
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="px-6 py-8">
                    <h3 className="text-lg font-medium text-gray-900">Envoyez-nous un message</h3>
                    <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                      <div className="sm:col-span-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                          Nom complet
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                            required
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
                            value={formData.email}
                            onChange={handleChange}
                            className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                            required
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
                            value={formData.phone}
                            onChange={handleChange}
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
                            value={formData.subject}
                            onChange={handleChange}
                            className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                            required
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
                            value={formData.message}
                            onChange={handleChange}
                            className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <Button
                          type="submit"
                          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
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
                          ) : 'Envoyer le message'}
                        </Button>
                      </div>
                    </form>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial="hidden"
                  animate={isClient ? "visible" : "hidden"}
                  variants={fadeIn}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="px-6 py-8 text-center">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                      <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">Message envoyé avec succès !</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Merci de nous avoir contactés. Notre équipe vous répondra dans les plus brefs délais.
                    </p>
                    <div className="mt-6">
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                      >
                        Envoyer un autre message
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isClient ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-extrabold text-gray-900">Nous trouver</h2>
            <p className="mt-4 text-lg text-gray-500">
              Venez nous rencontrer dans nos bureaux au cœur de Paris
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate={isClient ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <div className="h-96 w-full bg-gray-300 relative">
              <Image
                src="/images/map.jpg"
                alt="Carte de localisation"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="h-8 w-8 bg-indigo-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center animate-pulse">
                  <div className="h-2 w-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isClient ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold text-gray-900">Questions fréquentes</h2>
            <p className="mt-4 text-lg text-gray-500">
              Vous ne trouvez pas la réponse que vous cherchez ? N'hésitez pas à nous contacter.
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate={isClient ? "visible" : "hidden"}
            variants={staggerContainer}
            className="mt-12 space-y-6"
          >
            {[
              {
                question: "Comment fonctionne l'analyse de CV ?",
                answer: "Notre technologie d'IA analyse votre CV en profondeur pour identifier les points forts, les faiblesses et les opportunités d'amélioration. Elle évalue également la compatibilité avec les systèmes ATS utilisés par les recruteurs."
              },
              {
                question: "Mes données sont-elles sécurisées ?",
                answer: "Absolument. La confidentialité et la sécurité de vos données sont notre priorité. Nous utilisons des protocoles de chiffrement avancés et ne partageons jamais vos informations sans votre consentement explicite."
              },
              {
                question: "Combien coûte le service ?",
                answer: "L'analyse de base de votre CV est entièrement gratuite. Des fonctionnalités premium seront disponibles ultérieurement pour les utilisateurs souhaitant des analyses plus approfondies et des recommandations personnalisées."
              },
              {
                question: "Comment puis-je devenir recruteur partenaire ?",
                answer: "Nous développons actuellement notre offre pour les recruteurs. Si vous souhaitez être parmi les premiers à y avoir accès, contactez-nous via le formulaire ci-dessus en précisant votre intérêt pour notre solution de recrutement."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                <p className="mt-2 text-base text-gray-500">{faq.answer}</p>
              </motion.div>
            ))}
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
