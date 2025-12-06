import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Mic2 } from 'lucide-react';

const Footer: React.FC = () => {
  // Mini Logo for Footer
  const FooterLogo = () => (
    <div className="w-8 h-8 relative inline-block">
       <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="gradBlueFooter" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0.8 }} />
          </linearGradient>
           <linearGradient id="gradOrangeFooter" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#fbbf24', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#ea580c', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path d="M 30 20 L 50 20 L 50 70 Q 50 85 35 85 L 25 85" stroke="url(#gradBlueFooter)" strokeWidth="12" fill="none" strokeLinecap="round" />
        <path d="M 50 20 L 80 20" stroke="url(#gradOrangeFooter)" strokeWidth="12" fill="none" strokeLinecap="round" />
        <path d="M 65 20 L 65 80" stroke="url(#gradOrangeFooter)" strokeWidth="12" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
             <div className="flex items-center gap-2 mb-4">
                <FooterLogo />
                <span className="font-display font-extrabold text-2xl tracking-tight">
                  <span className="text-white">Jingle</span>
                  <span className="text-brand-accent">Tube</span>
                  <span className="text-brand-primary">.com</span>
                </span>
              </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Le spécialiste de l'identité sonore radio. Jingles chantés sur mesure pour booster votre audience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6 text-brand-primary">Navigation</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/demos" className="text-gray-300 hover:text-white transition-colors">Démos Jingle</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/#pricing" className="text-gray-300 hover:text-white transition-colors">Nos Packs</Link></li>
            </ul>
          </div>

          {/* Services/Keywords */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6 text-brand-primary">Expertise</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-300"><Mic2 className="w-4 h-4 text-brand-accent"/> Jingles Chantés</li>
              <li className="flex items-center gap-2 text-gray-300"><Mic2 className="w-4 h-4 text-brand-accent"/> Voix Off Radio</li>
              <li className="flex items-center gap-2 text-gray-300"><Mic2 className="w-4 h-4 text-brand-accent"/> Habillage Antenne</li>
              <li className="flex items-center gap-2 text-gray-300"><Mic2 className="w-4 h-4 text-brand-accent"/> Identité Sonore</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6 text-brand-primary">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                <span className="text-gray-300">Limoges, France</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                <span className="text-white font-semibold">05 25 32 32 32</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                <a href="mailto:contact@jingletube.com" className="text-gray-300 hover:text-white transition-colors">contact@jingletube.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Jingletube. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <span className="text-gray-500 text-sm hover:text-gray-300 cursor-pointer">Mentions Légales</span>
            <span className="text-gray-500 text-sm hover:text-gray-300 cursor-pointer">CGV</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;