'use client';

import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'envoi du formulaire serait implémentée ici
    console.log('Formulaire soumis:', formData);
    alert('Merci pour votre message ! Nous vous contacterons rapidement.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contactez <span className="text-blue-600">ViteButNotTooMuch</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Vous avez des questions sur notre approche ? Vous souhaitez en savoir plus ? 
            N'hésitez pas à nous contacter.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Envoyez-nous un message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Votre nom"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Adresse email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="votre@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Sujet
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="information">Demande d'information</option>
                  <option value="conseil">Besoin de conseils</option>
                  <option value="partenariat">Proposition de partenariat</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Votre message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                Envoyer le message
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Nos coordonnées</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="text-blue-600 mr-4">
                  <FaEnvelope className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Email</h4>
                  <p className="text-gray-700">contact@vitebutnottoomuch.com</p>
                  <p className="text-gray-700">support@vitebutnottoomuch.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-blue-600 mr-4">
                  <FaPhone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Téléphone</h4>
                  <p className="text-gray-700">+33 1 23 45 67 89</p>
                  <p className="text-gray-700">Du lundi au vendredi, 9h-18h</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-blue-600 mr-4">
                  <FaMapMarkerAlt className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Adresse</h4>
                  <p className="text-gray-700">123 Avenue de la Productivité</p>
                  <p className="text-gray-700">75001 Paris, France</p>
                </div>
              </div>
              
              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-medium text-gray-900 mb-2">Suivez-nous</h4>
                <p className="text-gray-700 mb-4">
                  Restez informé des dernières actualités et conseils de ViteButNotTooMuch 
                  en nous suivant sur les réseaux sociaux.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800">Twitter</a>
                  <a href="#" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
                  <a href="#" className="text-blue-600 hover:text-blue-800">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 