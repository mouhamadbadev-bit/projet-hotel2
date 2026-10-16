import React from 'react';

interface SpecialOfferProps {
  onReserve: () => void;
  onExplore: () => void;
}

export const SpecialOffer: React.FC<SpecialOfferProps> = ({ onReserve, onExplore }) => {
  return (
    <section className="py-16 px-6 lg:px-16 bg-[#0b1311] text-[#f4f1ea]">
      <div className="max-w-7xl mx-auto bg-[#12221d] border border-[#d4af37]/40 rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <span className="text-[#d4af37] text-xs font-semibold tracking-widest uppercase block mb-2">OFFRE EXCLUSIVE</span>
          <h2 className="text-3xl font-serif font-bold mb-3">Évadez-vous, nous nous occupons du reste.</h2>
          <p className="text-gray-300 text-sm max-w-xl mb-6">
            Réservez maintenant et profitez de -15% sur votre séjour de 3 nuits minimum.
          </p>
          <div className="flex gap-4">
            <div className="bg-black/40 border border-[#d4af37]/20 px-4 py-2 rounded text-center"><span className="block text-xl font-bold text-[#d4af37]">05</span><span className="text-[10px] text-gray-400">Jours</span></div>
            <div className="bg-black/40 border border-[#d4af37]/20 px-4 py-2 rounded text-center"><span className="block text-xl font-bold text-[#d4af37]">14</span><span className="text-[10px] text-gray-400">Heures</span></div>
            <div className="bg-black/40 border border-[#d4af37]/20 px-4 py-2 rounded text-center"><span className="block text-xl font-bold text-[#d4af37]">32</span><span className="text-[10px] text-gray-400">Minutes</span></div>
            <div className="bg-black/40 border border-[#d4af37]/20 px-4 py-2 rounded text-center"><span className="block text-xl font-bold text-[#d4af37]">18</span><span className="text-[10px] text-gray-400">Secondes</span></div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
          <button onClick={onReserve} className="bg-[#d4af37] hover:bg-[#c5a028] text-black font-semibold px-6 py-3 rounded transition text-center cursor-pointer">
            Profiter de l'offre
          </button>
          <button onClick={onExplore} className="border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/10 font-semibold px-6 py-3 rounded transition text-center cursor-pointer">
            Conditions de l'offre
          </button>
        </div>
      </div>
    </section>
  );
};