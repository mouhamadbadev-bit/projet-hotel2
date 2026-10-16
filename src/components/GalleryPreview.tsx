import React from 'react';

export const GalleryPreview: React.FC = () => {
  return (
    <section className="py-16 px-6 lg:px-16 bg-[#0b1311] text-[#f4f1ea]">
      <div className="max-w-7xl mx-auto">
        <span className="text-[#d4af37] text-xs font-semibold tracking-widest uppercase block mb-2 text-center">GALERIE</span>
        <h2 className="text-3xl font-serif font-bold text-center mb-12">Découvrez notre univers</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=500" alt="Resort" className="w-full h-44 object-cover rounded-lg hover:opacity-90 transition" />
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=500" alt="Restaurant" className="w-full h-44 object-cover rounded-lg hover:opacity-90 transition" />
          <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=500" alt="Spa" className="w-full h-44 object-cover rounded-lg hover:opacity-90 transition" />
          <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=500" alt="Gym" className="w-full h-44 object-cover rounded-lg hover:opacity-90 transition" />
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=500" alt="Plage" className="w-full h-44 object-cover rounded-lg hover:opacity-90 transition col-span-2 md:col-span-1" />
        </div>
      </div>
    </section>
  );
};