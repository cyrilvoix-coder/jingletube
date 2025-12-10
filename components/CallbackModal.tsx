import React, { useState } from 'react';
import { Phone, X, Send } from 'lucide-react';
import Button from './Button';
import { CallbackFormData } from '../types';

// Fonction utilitaire pour encoder les données pour Netlify
const encode = (data: any) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const CallbackModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<CallbackFormData>({
    radioName: '',
    contactName: '',
    phoneNumber: ''
  });
  // Ajout du champ anti-spam
  const [botField, setBotField] = useState('');

  const toggleModal = () => setIsOpen(!isOpen);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Si le robot remplit ce champ, on n'envoie pas
    if (botField) return;

    // Envoi des données à Netlify via fetch
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ 
        "form-name": "callback-request", // Doit correspondre au nom du formulaire dans index.html
        ...formData 
      })
    })
      .then(() => {
        // Succès
        setIsSubmitted(true);
        setTimeout(() => {
          setIsOpen(false);
          setIsSubmitted(false);
          setFormData({ radioName: '', contactName: '', phoneNumber: '' });
        }, 3000);
      })
      .catch(error => {
        console.error("Erreur d'envoi", error);
        alert("Une erreur est survenue lors de l'envoi.");
      });
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleModal}
          className="group relative flex items-center justify-center w-16 h-16 bg-brand-accent text-white rounded-full shadow-2xl hover:bg-brand-accentHover hover:scale-105 transition-all duration-300 animate-bounce-subtle"
          aria-label="Être rappelé"
        >
          <Phone className="w-8 h-8" />
          <span className="absolute right-full mr-4 bg-white text-brand-dark px-3 py-1 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
            Être rappelé
          </span>
        </button>
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-brand-dark/80 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up relative">
            
            {/* Header */}
            <div className="bg-brand-primary p-6 flex justify-between items-center">
              <h3 className="text-white text-xl font-display font-bold">Rappel Rapide</h3>
              <button onClick={toggleModal} className="text-white/80 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Demande envoyée !</h4>
                  <p className="text-gray-600">Un spécialiste Jingletube vous rappellera très rapidement.</p>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit} 
                  className="space-y-4"
                  name="callback-request"
                  data-netlify="true"
                >
                  <input type="hidden" name="form-name" value="callback-request" />
                  
                  {/* Champ caché honeypot pour les robots */}
                  <p className="hidden">
                    <label>Ne pas remplir<input name="bot-field" value={botField} onChange={e => setBotField(e.target.value)} /></label>
                  </p>

                  <div>
                    <label htmlFor="radioName" className="block text-sm font-medium text-gray-700 mb-1">Nom de la Radio</label>
                    <input
                      type="text"
                      id="radioName"
                      name="radioName"
                      required
                      value={formData.radioName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all"
                      placeholder="Ex: Fun Radio"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">Votre Nom</label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      required
                      value={formData.contactName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all"
                      placeholder="Ex: Jean Martin"
                    />
                  </div>
                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Numéro de Téléphone</label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      required
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all"
                      placeholder="Ex: 06 12 34 56 78"
                    />
                  </div>
                  <Button type="submit" fullWidth className="mt-2">
                    Me rappeler
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CallbackModal;