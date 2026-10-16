import React from 'react';
import { Users } from 'lucide-react';
import { roomsData } from '../data/hotelData';

interface RoomsSectionProps {
  onSelectRoom: (roomName: string) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({ onSelectRoom }) => {
  return (
    <section className="py-20 px-6 lg:px-16 bg-[#0b1311] text-[#f4f1ea]">
      <div className="max-w-7xl mx-auto">
        <span className="text-[#d4af37] text-xs font-semibold tracking-widest uppercase block mb-2">NOS CHAMBRES</span>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold">Trouvez votre havre de paix</h2>
          <button onClick={() => onSelectRoom('Chambre Deluxe')} className="text-[#d4af37] text-sm hover:underline mt-2 md:mt-0 cursor-pointer">
            Voir toutes les chambres →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roomsData.map((room) => (
            <div key={room.id} className="bg-[#121c19] rounded-xl overflow-hidden border border-white/10 flex flex-col justify-between">
              <div className="relative">
                <img src={room.image} alt={room.name} className="w-full h-60 object-cover" />
                {room.popular && (
                  <span className="absolute top-4 right-4 bg-[#d4af37] text-black text-xs font-bold px-3 py-1 rounded">Populaire</span>
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2">{room.name}</h3>
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <span className="flex items-center gap-1"><Users className="w-4 h-4 text-[#d4af37]" /> {room.capacity}</span>
                    <span>{room.size}</span>
                  </div>
                  <p className="text-sm text-gray-300 mb-6">{room.description}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div>
                    <span className="text-xs text-gray-400 block">À partir de</span>
                    <span className="text-[#d4af37] font-bold text-lg">{room.price}</span><span className="text-xs text-gray-400"> / nuit</span>
                  </div>
                  <button 
                    onClick={() => onSelectRoom(room.name)} 
                    className="bg-[#f4f1ea] hover:bg-[#d4af37] text-black text-xs font-semibold px-4 py-2 rounded transition cursor-pointer"
                  >
                    Voir les détails
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};