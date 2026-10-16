import React, { useState } from 'react';
import { Sparkles, Calendar, Menu as MenuIcon, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0b1311]/90 backdrop-blur-md border-b border-[#d4af37]/20 px-6 lg:px-16 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}>
        <Sparkles className="text-[#d4af37] w-6 h-6" />
        <div>
          <span className="text-xl font-serif tracking-wider font-bold block text-white">ELYSIUM</span>
          <span className="text-[10px] tracking-widest text-[#d4af37] uppercase block">Boutique Hotel</span>
        </div>
      </div>

      {/* Liens Desktop */}
      <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#f4f1ea]">
        <button onClick={() => handleNavClick('home')} className="hover:text-[#d4af37] transition cursor-pointer">Accueil</button>
        <button onClick={() => handleNavClick('rooms')} className="hover:text-[#d4af37] transition cursor-pointer">Chambres</button>
        <button onClick={() => handleNavClick('services')} className="hover:text-[#d4af37] transition cursor-pointer">Services</button>
        <button onClick={() => handleNavClick('experiences')} className="hover:text-[#d4af37] transition cursor-pointer">Expériences</button>
        <button onClick={() => handleNavClick('gallery')} className="hover:text-[#d4af37] transition cursor-pointer">Galerie</button>
        <button onClick={() => handleNavClick('about')} className="hover:text-[#d4af37] transition cursor-pointer">À propos</button>
        <button onClick={() => handleNavClick('contact')} className="hover:text-[#d4af37] transition cursor-pointer">Contact</button>
      </div>

      <div className="hidden lg:block">
        <button 
          onClick={() => handleNavClick('reservation')}
          className="bg-[#d4af37] hover:bg-[#c5a028] text-black font-medium px-5 py-2.5 rounded shadow-lg transition flex items-center gap-2 text-sm cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          Réserver maintenant
        </button>
      </div>

      {/* Bouton Menu Mobile */}
      <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-[#d4af37] cursor-pointer">
        {mobileMenuOpen ? <X className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
      </button>

      {/* Menu Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-18.25 bg-[#0b1311] border-b border-[#d4af37]/20 p-6 flex flex-col gap-4 z-40 shadow-2xl text-[#f4f1ea]">
          <button onClick={() => handleNavClick('home')} className="text-left py-2 hover:text-[#d4af37]">Accueil</button>
          <button onClick={() => handleNavClick('rooms')} className="text-left py-2 hover:text-[#d4af37]">Chambres</button>
          <button onClick={() => handleNavClick('services')} className="text-left py-2 hover:text-[#d4af37]">Services</button>
          <button onClick={() => handleNavClick('experiences')} className="text-left py-2 hover:text-[#d4af37]">Expériences</button>
          <button onClick={() => handleNavClick('gallery')} className="text-left py-2 hover:text-[#d4af37]">Galerie</button>
          <button onClick={() => handleNavClick('about')} className="text-left py-2 hover:text-[#d4af37]">À propos</button>
          <button onClick={() => handleNavClick('contact')} className="text-left py-2 hover:text-[#d4af37]">Contact</button>
          <button 
            onClick={() => handleNavClick('reservation')}
            className="bg-[#d4af37] text-black font-medium py-3 rounded text-center mt-2 flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" /> Réserver maintenant
          </button>
        </div>
      )}
    </nav>
  );
};