import React from 'react';
import { Sparkles, Utensils, Waves, Clock } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="bg-[#f4f1ea] text-[#0b1311] py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex gap-4 items-start">
          <div className="p-3 bg-[#0b1311] text-[#d4af37] rounded-lg">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-lg mb-1">Design & Élégance</h4>
            <p className="text-sm text-gray-700">Une architecture unique alliant confort et modernité.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="p-3 bg-[#0b1311] text-[#d4af37] rounded-lg">
            <Utensils className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-lg mb-1">Restaurant Gastronomique</h4>
            <p className="text-sm text-gray-700">Une cuisine raffinée avec des produits locaux de saison.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="p-3 bg-[#0b1311] text-[#d4af37] rounded-lg">
            <Waves className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-lg mb-1">Spa & Bien-être</h4>
            <p className="text-sm text-gray-700">Détendez-vous dans notre spa et nos soins exclusifs.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="p-3 bg-[#0b1311] text-[#d4af37] rounded-lg">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-lg mb-1">Service Premium</h4>
            <p className="text-sm text-gray-700">Notre équipe dédiée est à votre service 24h/24.</p>
          </div>
        </div>
      </div>
    </section>
  );
};