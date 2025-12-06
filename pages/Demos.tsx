import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mic } from 'lucide-react';
import AudioPlayer from '../components/AudioPlayer';
import Button from '../components/Button';
import { DemoTrack } from '../types';

const Demos: React.FC = () => {
    
    const [currentlyPlayingId, setCurrentlyPlayingId] = useState<string | null>(null);

    const demos: DemoTrack[] = [
        { id: '1', title: 'Morning Show Dynamique', category: 'CHR / Top 40', duration: '0:15' },
        { id: '2', title: 'Top Horaire Information', category: 'News / Talk', duration: '0:20' },
        { id: '3', title: 'Feel Good Afternoon', category: 'Adult Contemporary', duration: '0:12' },
        { id: '4', title: 'Night Session Intro', category: 'Electro / Dance', duration: '0:30' },
        { id: '5', title: 'Flash Météo Bed', category: 'Service', duration: '0:45' },
        { id: '6', title: 'Week-end Special', category: 'Gold / Oldies', duration: '0:18' },
        { id: '7', title: 'Summer Hits Jingle', category: 'CHR / Top 40', duration: '0:10' },
        { id: '8', title: 'Morning Coffee Soft', category: 'Jazz / Lounge', duration: '0:25' },
    ];

    let currentAudioInstance: HTMLAudioElement | null = null;

    const getAudioUrl = (id: string) => `/demo-${id}.mp3`;

    const playDemo = (id: string) => {
        
        if (currentlyPlayingId === id) {
            if (currentAudioInstance) {
                currentAudioInstance.pause();
                currentAudioInstance.currentTime = 0;
                currentAudioInstance = null;
            }
            setCurrentlyPlayingId(null);
            return;
        }

        if (currentAudioInstance) {
            currentAudioInstance.pause();
            currentAudioInstance.currentTime = 0;
            currentAudioInstance = null;
        }

        const url = getAudioUrl(id);
        const audio = new Audio(url); 
        currentAudioInstance = audio;
        
        audio.onended = () => {
            setCurrentlyPlayingId(null);
            currentAudioInstance = null;
        };
        
        audio.play().catch(error => {
            console.error("Erreur de lecture audio:", error);
        });

        setCurrentlyPlayingId(id);
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
                        {demos.map((track) => (
                            <AudioPlayer 
                                key={track.id} 
                                track={track} 
                                isPlaying={currentlyPlayingId === track.id}
                                onPlayClick={() => playDemo(track.id)} 
                            />
                        ))}
                    </div>

                    <div className="mt-12 text-center bg-brand-primary/5 rounded-xl p-8 border border-brand-primary/10">
                        <h3 className="text-xl font-display font-bold text-brand-dark mb-2">Convaincu par ce que vous entendez ?</h3>
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