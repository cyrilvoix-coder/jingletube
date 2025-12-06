import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Démos Jingle', path: '/demos' },
    { name: 'Contact', path: '/contact' },
  ];

  // Custom Logo SVG Component
  const Logo = () => (
    <img 
      src="/logo_jt_stext.png" 
      alt="Logo Jingletube" 
      className="h-12 drop-shadow-md" 
    />
  );

  return (
    <nav className="bg-white sticky top-0 z-40 shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <Logo />
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-2xl tracking-tight leading-none">
                  <span className="text-brand-dark">Jingle</span>
                  <span className="text-brand-accent">Tube</span>
                  <span className="text-brand-primary text-xl">.com</span>
                </span>
                <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold leading-none mt-1">
                  Production Jingles Radio
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold transition-all duration-200 uppercase tracking-wide ${
                  isActive(link.path)
                    ? 'text-brand-primary'
                    : 'text-brand-dark hover:text-brand-accent'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
              <button className="bg-brand-dark hover:bg-brand-accent text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Devis Gratuit
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-dark hover:text-brand-accent p-2 rounded-md focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-bold ${
                  isActive(link.path)
                    ? 'text-brand-primary bg-brand-primary/5'
                    : 'text-brand-dark hover:text-brand-accent hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;