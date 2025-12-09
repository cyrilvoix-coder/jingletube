import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mic } from 'lucide-react';
import AudioPlayer from '../components/AudioPlayer';
import Button from '../components/Button';
import { DemoTrack } from '../types';

const Demos: React.FC = () => {
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState<string | null>(null);
  const currentAudioInstance = useRef<HTMLAudioElement | null>(null);

  const demos: (DemoTrack & { src: string })[] = [
    { id: '1', title: 'Dance Floor Dynamique', category: 'Hit / Top 40', duration: '0:55', src: '/audio/demo-1.mp3' },
    { id: '2', title: 'Pop Rock Energique', category: 'Mid High / Top 50', duration: '0:49', src: '/audio/demo-2.mp3' },
    { id: '3', title: 'Cool summer', category: 'Cool Contemporain', duration: '1:13', src: '/audio/demo-3.mp3' },
    { id: '4', title: 'Latino Electro Pop', category: 'Electro / Hit', duration: '0:44', src: '/audio/demo-4.mp3' },
    { id: '5', title: 'Rock N Roll', category: 'Energique', duration: '0:35', src: '/audio/demo-5.mp3' },
    { id: '6', title: 'Week-end Smile', category: 'Tube / Top 30', duration: '1:12', src: '/audio/demo-6.mp3' },
    { id: '7', title: 'Summer Hits Jingle', category: 'CHR / Top 40', duration: '1:10', src: '/audio/demo-7.mp3' },
    { id: '8', title: 'House Big Beat', category: 'High Tempo / Dance Foor', duration: '1:16', src: '/audio/demo-8.mp3' },
  ];

  useEffect(() => {
    return () => {
      if (currentAudioInstance.current) {
        try { currentAudioInstance.current.pause(); } catch {}
        currentAudioInstance.current = null;
      }
    };
  }, []);

  const playDemo = (id: string) => {
    // Si on clique sur le même lecteur -> stop
    if (currentlyPlayingId === id) {
      if (currentAudioInstance.current) {
        currentAudioInstance.current.pause();
        currentAudioInstance.current.currentTime = 0;
        currentAudioInstance.current = null;
      }
      setCurrentlyPlayingId(null);
      return;
    }

    // Stoppe l'audio courant s'il existe
    if (currentAudioInstance.current) {
      currentAudioInstance.current.pause();
      currentAudioInstance.current.currentTime = 0;
      currentAudioInstance.current = null;
    }

    const track = demos.find(d => d.id === id);
    if (!track) return;

    const audio = new Audio(track.src);
    currentAudioInstance.current = audio;

    audio.onended = () => {
      setCurrentlyPlayingId(null);
      currentAudioInstance.current = null;
    };

    audio.play().then(() => {
      setCurrentlyPlayingId(id);
    }).catch(err => {
      console.error('Erreur de lecture audio:', err, track.src);
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-brand-dark py-16 md:py-20 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
          Écoutez la différence
        </h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto">
          Découvrez une sélection de nos dernières productions de jingles radio.
          La qualité studio au service de votre identité sonore.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-100">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100">
            <div className="bg-brand-accent/10 p-2 rounded-lg text-brand-accent">
              <Mic className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">Dernières Réalisations</h2>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {demos.map(track => (
              <AudioPlayer
                key={track.id}
                track={track}
                isPlaying={currentlyPlayingId === track.id}
                onPlayClick={() => playDemo(track.id)}
              />
            ))}
          </div>

          <div className="mt-12 text-center bg-brand-primary/5 rounded-xl p-8 border border-brand-primary/10">
            <h3 className="text-xl font-display font-bold text-brand-dark mb-2">Passez à l'action !</h3>
            <p className="text-gray-600 mb-6">Commandez votre pack dès maintenant et recevez vos jingles sous 7 jours.</p>
            <Link to="/contact">
              <Button>Commander mes jingles</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demos;
