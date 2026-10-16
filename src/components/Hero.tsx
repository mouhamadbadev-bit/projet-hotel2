import React from 'react';
import { Calendar, ChevronDown } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
  onReserve: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onReserve }) => {
  return (
    <header className="relative h-[85vh] flex items-center justify-center px-6 lg:px-16 overflow-hidden text-[#f4f1ea]">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1920" 
          alt="Elysium Boutique Hotel" 
          className="w-full h-full object-cover brightness-50"
        />
      </div>

      <div className="relative z-10 max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl lg:text-6xl font-serif font-bold leading-tight mb-4">
            Plus qu’un séjour, une <span className="text-[#d4af37] italic">expérience.</span>
          </h1>
          <p className="text-gray-300 text-sm lg:text-base mb-8 max-w-lg">
            Un boutique hôtel où le design contemporain rencontre l'hospitalité chaleureuse.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button 
              onClick={onExplore}
              className="bg-[#d4af37] hover:bg-[#c5a028] text-black font-medium px-6 py-3 rounded transition text-sm cursor-pointer"
            >
              Découvrir l'hôtel
            </button>
          </div>
        </div>

        {/* Widget de réservation rapide */}
        <div className="bg-[#121c19] p-6 rounded-xl border border-[#d4af37]/30 shadow-2xl hidden lg:block">
          <h3 className="font-serif text-lg font-semibold mb-4 text-[#d4af37]">Réservez votre séjour</h3>
          <div className="space-y-4 text-sm">
            <div>
              <label className="block text-gray-400 mb-1 text-xs">Arrivée</label>
              <div className="bg-[#1a2622] px-3 py-2.5 rounded border border-white/10 flex items-center justify-between text-gray-300">
                <span>20 Mai 2026</span>
                <Calendar className="w-4 h-4 text-[#d4af37]" />
              </div>
            </div>
            <div>
              <label className="block text-gray-400 mb-1 text-xs">Départ</label>
              <div className="bg-[#1a2622] px-3 py-2.5 rounded border border-white/10 flex items-center justify-between text-gray-300">
                <span>23 Mai 2026</span>
                <Calendar className="w-4 h-4 text-[#d4af37]" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-400 mb-1 text-xs">Adultes</label>
                <div className="bg-[#1a2622] px-3 py-2.5 rounded border border-white/10 flex items-center justify-between text-gray-300">
                  <span>2</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-gray-400 mb-1 text-xs">Enfants</label>
                <div className="bg-[#1a2622] px-3 py-2.5 rounded border border-white/10 flex items-center justify-between text-gray-300">
                  <span>0</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>
            <button 
              onClick={onReserve}
              className="w-full bg-[#d4af37] hover:bg-[#c5a028] text-black font-semibold py-3 rounded transition text-center mt-2 cursor-pointer"
            >
              Vérifier la disponibilité
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};