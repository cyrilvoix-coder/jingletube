import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Music4, Zap, Trophy, Headphones, TrendingUp } from 'lucide-react';
import Button from '../components/Button';
import { PricingPack } from '../types';

const Home: React.FC = () => {
  const packs: PricingPack[] = [
    {
      id: 'standard',
      name: 'STANDARD',
      jingleCount: 10,
      price: 1999,
      features: [
        '10 Jingles Chantés',
        'Livraison HD (WAV/MP3)',
        'Droits de diffusion inclus',
        'Mixage & Mastering Pro'
      ]
    },
    {
      id: 'premium',
      name: 'PREMIUM',
      jingleCount: 20,
      price: 2999,
      features: [
        '20 Jingles Chantés',
        'Livraison HD (WAV/MP3)',
        'Droits de diffusion inclus',
        'Mixage & Mastering Pro',
        '1 Voix Off Promo offerte'
      ],
      isPopular: true
    },
    {
      id: 'royal',
      name: 'ROYAL',
      jingleCount: 40,
      price: 5999,
      features: [
        '40 Jingles Chantés',
        'Livraison HD (WAV/MP3)',
        'Droits de diffusion inclus',
        'Mixage & Mastering Pro',
        '3 Voix Off Promo offertes',
        'Accès prioritaire studio'
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* SECTION 1: HERO */}
      <section className="relative bg-brand-dark overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30">
            <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-brand-primary rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-[10%] -left-[10%] w-[500px] h-[500px] bg-blue-900 rounded-full blur-[120px]"></div>
            <div className="absolute top-[40%] left-[20%] w-[200px] h-[200px] bg-brand-accent rounded-full blur-[80px] opacity-40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center z-10">
          <span className="inline-block py-1.5 px-4 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-sm font-bold tracking-wide uppercase mb-8 animate-fade-in shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            Leader du Jingle Radio
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            Vos jingles chantés <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-400">seront des tubes.</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mb-10 leading-relaxed font-light">
            Boostez l'identité sonore de votre station avec des <strong>jingles chantés sur mesure</strong> de qualité studio. L'habillage antenne qui marque les esprits.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <Button size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
              Voir les Packs
            </Button>
            <Link to="/demos">
              <Button variant="outline" size="lg" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
                Écouter les démos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: PRESENTATION / SEO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-6 leading-tight">
                Pourquoi choisir <span className="text-brand-primary">Jingletube</span> ?
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  Dans l'univers concurrentiel de la radio FM, votre <strong>identité sonore</strong> est votre signature. Chez Jingletube, nous sommes experts en <strong>création de jingles FM</strong> et <strong>habillage antenne radio</strong> haut de gamme.
                </p>
                <p className="mb-4">
                  Nos productions ne sont pas de simples virgules sonores ; ce sont de véritables outils marketing conçus pour :
                </p>
                <ul className="space-y-4 mt-6 mb-8">
                  <li className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-brand-primary/30 transition-colors">
                    <div className="bg-brand-accent/10 p-2 rounded-full">
                       <TrendingUp className="w-5 h-5 text-brand-accent flex-shrink-0" />
                    </div>
                    <span className="font-medium text-gray-800">Augmenter votre audience durablement.</span>
                  </li>
                  <li className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-brand-primary/30 transition-colors">
                    <div className="bg-brand-primary/10 p-2 rounded-full">
                       <Zap className="w-5 h-5 text-brand-primary flex-shrink-0" />
                    </div>
                    <span className="font-medium text-gray-800">Renforcer la mémorisation de la marque.</span>
                  </li>
                  <li className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-brand-primary/30 transition-colors">
                    <div className="bg-brand-dark/10 p-2 rounded-full">
                       <Headphones className="w-5 h-5 text-brand-dark flex-shrink-0" />
                    </div>
                    <span className="font-medium text-gray-800">Qualité studio digne des réseaux nationaux.</span>
                  </li>
                </ul>
                <p>
                  Confiez votre image à une équipe spécialisée en <strong>voix off radio</strong> et composition musicale.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
               <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
                 <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-blue-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                   <Music4 className="w-8 h-8" />
                 </div>
                 <h3 className="font-bold text-gray-900 text-lg">Jingles Chantés</h3>
                 <p className="text-sm text-gray-500 mt-2">100% sur mesure</p>
               </div>
               <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
                 <div className="w-16 h-16 bg-gradient-to-br from-brand-accent to-yellow-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-200">
                   <Trophy className="w-8 h-8" />
                 </div>
                 <h3 className="font-bold text-gray-900 text-lg">Qualité Premium</h3>
                 <p className="text-sm text-gray-500 mt-2">Son Haute Définition</p>
               </div>
               <div className="bg-brand-dark p-8 rounded-2xl shadow-xl flex flex-col items-center text-center col-span-2 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-blue-900 z-0"></div>
                 <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary opacity-10 rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>
                 
                 <div className="relative z-10">
                   <h3 className="font-display font-bold text-4xl text-white mb-2">+500</h3>
                   <p className="text-brand-primary font-medium tracking-wide uppercase text-sm">Radios satisfaites en Europe</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PRICING PACKS */}
      <section id="pricing" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-2 block">Nos Tarifs</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark mb-6">Des packs pour tous les budgets</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Solutions clés en main, du web-radio locale au réseau national.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packs.map((pack) => (
              <div 
                key={pack.id} 
                className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                  pack.isPopular 
                    ? 'shadow-2xl ring-2 ring-brand-accent scale-105 z-10' 
                    : 'shadow-xl border border-gray-100 hover:shadow-2xl'
                }`}
              >
                {pack.isPopular && (
                  <div className="absolute top-0 inset-x-0 bg-gradient-to-r from-brand-accent to-yellow-500 text-white text-center py-1.5 text-sm font-bold uppercase tracking-widest shadow-md">
                    Meilleure Vente
                  </div>
                )}
                <div className={`p-8 ${pack.isPopular ? 'pt-12' : ''}`}>
                  <h3 className="text-2xl font-display font-bold text-brand-dark mb-2">{pack.name}</h3>
                  <div className="flex items-baseline mb-8">
                    <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-blue-600">
                      {pack.price.toLocaleString('fr-FR')} €
                    </span>
                    <span className="text-gray-400 ml-2 font-semibold">H.T.</span>
                  </div>
                  
                  <div className="bg-slate-50 rounded-xl p-5 mb-8 border border-slate-100 text-center group hover:border-brand-primary/20 transition-colors">
                    <span className="text-4xl font-bold text-brand-dark block mb-1 group-hover:scale-110 transition-transform duration-300">{pack.jingleCount}</span>
                    <span className="block text-xs text-gray-500 font-bold uppercase tracking-wider">Jingles Chantés</span>
                  </div>

                  <ul className="space-y-4 mb-10">
                    {pack.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-0.5 rounded-full bg-green-100 p-1">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-gray-600 text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className="block">
                    <Button 
                      fullWidth 
                      variant={pack.isPopular ? 'primary' : 'outline'}
                      className={pack.isPopular ? 'shadow-brand-accent/30' : ''}
                    >
                      Commander ce pack
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: PARTNERSHIP */}
      <section className="bg-brand-dark py-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary rounded-full blur-[150px] opacity-20"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-14 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
              Client Audio Network ?
            </h3>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              Nous avons un partenariat exclusif. Tous les clients <a href="https://audionetwork.fr" target="_blank" rel="noreferrer" className="text-brand-primary hover:text-white font-bold underline decoration-2 underline-offset-4 transition-colors">audionetwork.fr</a> bénéficient automatiquement de <br className="hidden md:block" />
              <span className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-400 mt-4 inline-block drop-shadow-sm">-20 % de remise</span> <br className="hidden md:block" />
              sur l'ensemble de nos packs jingles.
            </p>
            <Link to="/contact">
              <Button variant="white" size="lg" className="font-bold text-brand-dark hover:bg-brand-primary hover:text-white border-0">
                Réclamer ma remise
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section className="py-24 bg-white">
         <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark mb-10">
              Prêt à transformer votre antenne ?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact">
                <Button size="lg" className="shadow-xl shadow-brand-accent/20">Nous Contacter</Button>
              </Link>
              <Link to="/demos">
                <Button variant="outline" size="lg" className="border-2 font-bold">Écouter des exemples</Button>
              </Link>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Home;