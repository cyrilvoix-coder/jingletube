import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    radio: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // NOTE POUR LE DÉPLOIEMENT STATIQUE :
    // Puisque le site est statique (sans serveur Node.js), vous devez utiliser un service externe pour recevoir les emails.
    // Exemple populaire : Formspree, EmailJS, ou Netlify Forms.
    //
    // Exemple avec Formspree :
    // 1. Créez un compte sur formspree.io
    // 2. Remplacez l'URL ci-dessous par votre endpoint Formspree
    
    /*
    try {
        const response = await fetch("https://formspree.io/f/VOTRE_ID_FORMSPREE", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            setIsSubmitted(true);
        }
    } catch (error) {
        console.error("Erreur d'envoi", error);
    }
    */

    // Simulation pour la démo
    console.log("Formulaire envoyé :", formData);
    setIsSubmitted(true);
    
    // Reset after 5 seconds roughly
    setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', radio: '', email: '', phone: '', message: '' });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-brand-dark py-16 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
          Contactez Jingletube
        </h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto">
          Une question sur nos packs ? Un projet spécifique ? Notre équipe est à votre écoute.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div>
             <h2 className="text-2xl font-display font-bold text-brand-dark mb-6">Informations</h2>
             <div className="bg-slate-50 rounded-2xl p-8 space-y-8 border border-gray-100">
                
                <div className="flex items-start gap-4">
                   <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-brand-primary flex-shrink-0">
                      <Phone className="w-6 h-6" />
                   </div>
                   <div>
                      <h3 className="font-bold text-gray-900 text-lg">Par Téléphone</h3>
                      <p className="text-gray-500 mb-1">Du lundi au vendredi, 9h-18h</p>
                      <a href="tel:0525323232" className="text-xl font-bold text-brand-accent hover:text-brand-accentHover">
                        05 25 32 32 32
                      </a>
                   </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-brand-primary flex-shrink-0">
                      <Mail className="w-6 h-6" />
                   </div>
                   <div>
                      <h3 className="font-bold text-gray-900 text-lg">Par Email</h3>
                      <p className="text-gray-500 mb-1">Réponse sous 24h garantie</p>
                      <a href="mailto:contact@jingletube.com" className="text-lg font-bold text-brand-dark hover:text-brand-primary">
                        contact@jingletube.com
                      </a>
                   </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-brand-primary flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                   </div>
                   <div>
                      <h3 className="font-bold text-gray-900 text-lg">Studio</h3>
                      <p className="text-gray-500">
                        12 Avenue de la Radio<br/>
                        75000 Paris, France
                      </p>
                   </div>
                </div>
             </div>
             
             {/* Audio Network Badge */}
             <div className="mt-8 p-6 bg-blue-900 rounded-2xl text-white text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
                <h3 className="font-bold text-xl mb-2">Partenaire Audio Network ?</h3>
                <p className="text-blue-100 text-sm mb-4">N'oubliez pas de mentionner votre code partenaire dans le message pour bénéficier de vos -20% !</p>
             </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-display font-bold text-brand-dark mb-6">Envoyez-nous un message</h2>
            
            {isSubmitted ? (
               <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center animate-fade-in">
                  <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Message Envoyé !</h3>
                  <p className="text-green-700">Merci de nous avoir contactés. Nous reviendrons vers vous très rapidement.</p>
               </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-lg shadow-slate-100 rounded-2xl p-8 border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="radio" className="block text-sm font-medium text-gray-700 mb-2">Nom de la Radio</label>
                    <input
                      type="text"
                      id="radio"
                      name="radio"
                      required
                      value={formData.radio}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all"
                      placeholder="Nom de votre station"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email professionnel</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all"
                      placeholder="email@radio.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all"
                      placeholder="Votre numéro"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Votre message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all resize-none"
                    placeholder="Dites-nous en plus sur votre projet (Pack souhaité, style musical, délais...)"
                  ></textarea>
                </div>

                <Button type="submit" fullWidth size="lg" className="flex items-center gap-2">
                   Envoyer le message <Send className="w-4 h-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;