import React from 'react';
import { Sparkles, MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#070c0a] border-t border-[#d4af37]/20 pt-16 pb-8 px-6 lg:px-16 text-sm text-[#f4f1ea]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="text-[#d4af37] w-6 h-6" />
            <span className="text-xl font-serif tracking-wider font-bold text-white">ELYSIUM</span>
          </div>
          <p className="text-gray-400 text-xs leading-relaxed mb-4">
            Un boutique hôtel d'exception pour des moments inoubliables.
          </p>
        </div>

        <div>
          <h4 className="text-white font-serif font-semibold mb-4 text-base">Navigation</h4>
          <ul className="space-y-2 text-gray-400">
            <li><button onClick={() => onNavigate('home')} className="hover:text-[#d4af37] cursor-pointer">Accueil</button></li>
            <li><button onClick={() => onNavigate('rooms')} className="hover:text-[#d4af37] cursor-pointer">Chambres</button></li>
            <li><button onClick={() => onNavigate('services')} className="hover:text-[#d4af37] cursor-pointer">Services</button></li>
            <li><button onClick={() => onNavigate('experiences')} className="hover:text-[#d4af37] cursor-pointer">Expériences</button></li>
            <li><button onClick={() => onNavigate('gallery')} className="hover:text-[#d4af37] cursor-pointer">Galerie</button></li>
            <li><button onClick={() => onNavigate('about')} className="hover:text-[#d4af37] cursor-pointer">À propos</button></li>
            <li><button onClick={() => onNavigate('contact')} className="hover:text-[#d4af37] cursor-pointer">Contact</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif font-semibold mb-4 text-base">Informations</h4>
          <ul className="space-y-3 text-gray-400 text-xs">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" /> Route des Almadies, Dakar, Sénégal</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#d4af37] shrink-0" /> +221 77 123 45 67</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#d4af37] shrink-0" /> contact@elysium-hotel.sn</li>
            <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#d4af37] shrink-0" /> 24h/24 - 7j/7</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif font-semibold mb-4 text-base">Newsletter</h4>
          <p className="text-gray-400 text-xs mb-4">Abonnez-vous pour recevoir nos offres et actualités exclusives.</p>
          <form onSubmit={(e) => { e.preventDefault(); alert('Inscription réussie !'); }} className="flex gap-2">
            <input 
              type="email" 
              placeholder="Votre email" 
              required 
              className="bg-[#121c19] border border-white/10 rounded px-3 py-2 text-xs text-white outline-none w-full focus:border-[#d4af37]"
            />
            <button type="submit" className="bg-[#d4af37] text-black px-3 py-2 rounded hover:bg-[#c5a028] transition cursor-pointer">
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
        <p>© 2026 Elysium Boutique Hotel. Tous droits réservés.</p>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <span className="hover:text-gray-300 cursor-pointer">Mentions légales</span>
          <span className="hover:text-gray-300 cursor-pointer">Politique de confidentialité</span>
        </div>
      </div>
    </footer>
  );
};