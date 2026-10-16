import React, { useRef, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { RoomsSection } from './components/RoomsSection';
import { SpecialOffer } from './components/SpecialOffer';
import { GalleryPreview } from './components/GalleryPreview';
import { Footer } from './components/Footer';
import { Send, CheckCircle2 } from 'lucide-react';

export default function App() {
  // Références strictement typées pour éviter les erreurs TypeScript
  const homeRef = useRef<HTMLDivElement | null>(null);
  const roomsRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const experiencesRef = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const reservationRef = useRef<HTMLDivElement | null>(null);

  const [selectedRoom, setSelectedRoom] = useState('Chambre Deluxe');
  const [formStatus, setFormStatus] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const refs: { [key: string]: React.RefObject<HTMLDivElement | null> } = {
      home: homeRef,
      rooms: roomsRef,
      services: servicesRef,
      experiences: experiencesRef,
      gallery: galleryRef,
      about: aboutRef,
      contact: contactRef,
      reservation: reservationRef,
    };
    refs[id]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Fonction appelée lorsqu'on clique sur "Voir les détails" d'une chambre
  const handleRoomSelect = (roomName: string) => {
    setSelectedRoom(roomName);
    scrollToSection('reservation');
  };

  return (
    <div className="min-h-screen bg-[#0b1311] text-[#f4f1ea] font-sans selection:bg-[#d4af37] selection:text-black">
      
      <Navbar onNavigate={scrollToSection} />

      <div ref={homeRef}>
        <Hero onExplore={() => scrollToSection('rooms')} onReserve={() => scrollToSection('reservation')} />
      </div>

      <div ref={servicesRef}>
        <Features />
      </div>

      <div ref={roomsRef}>
        <RoomsSection onSelectRoom={handleRoomSelect} />
      </div>

      <div ref={experiencesRef}>
        <SpecialOffer onReserve={() => scrollToSection('reservation')} onExplore={() => scrollToSection('rooms')} />
      </div>

      <div ref={galleryRef}>
        <GalleryPreview />
      </div>

      <section ref={aboutRef} className="py-16 px-6 lg:px-16 bg-[#121c19]/50 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#d4af37] text-xs font-semibold tracking-widest uppercase block mb-2">À PROPOS D'ELYSIUM</span>
          <h2 className="text-3xl font-serif font-bold mb-6">Notre Philosophie</h2>
          <p className="text-gray-300 leading-relaxed text-sm lg:text-base mb-6">
            Elysium Boutique Hotel est né de la vision d'offrir un sanctuaire de luxe absolu et de sérénité au bord de l'océan. Chaque détail de notre établissement a été pensé pour anticiper vos besoins et transformer chaque instant de votre séjour en un souvenir mémorable.
          </p>
        </div>
      </section>

      {/* FORMULAIRE DE RÉSERVATION ET DÉTAILS DE LA CHAMBRE */}
      <section ref={reservationRef} className="py-20 px-6 lg:px-16 bg-[#0b1311]">
        <div className="max-w-3xl mx-auto bg-[#121c19] border border-[#d4af37]/40 rounded-2xl p-8 lg:p-12 shadow-2xl">
          <div className="text-center mb-8">
            <span className="text-[#d4af37] text-xs font-semibold tracking-widest uppercase block mb-2">FORMULAIRE DE RÉSERVATION</span>
            <h2 className="text-3xl font-serif font-bold">Réservez votre séjour</h2>
            
            {/* Affichage dynamique des détails de la chambre sélectionnée */}
            <div className="mt-4 inline-flex items-center gap-2 bg-[#1a2622] border border-[#d4af37]/30 px-4 py-2 rounded-lg text-sm text-[#d4af37]">
              <CheckCircle2 className="w-4 h-4" />
              <span>Chambre sélectionnée : <strong>{selectedRoom}</strong></span>
            </div>
          </div>

          <form 
            action="https://formspree.io/f/YOUR_FORMSPREE_ID" 
            method="POST"
            onSubmit={() => {
              setFormStatus("Votre demande de réservation a bien été envoyée ! Nous vous contacterons rapidement.");
            }}
            className="space-y-6 text-sm"
          >
            <input type="hidden" name="chambre_selectionnee" value={selectedRoom} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2 font-medium">Nom complet</label>
                <input 
                  type="text" 
                  name="nom" 
                  required 
                  placeholder="Ex: Aminata Diallo" 
                  className="w-full bg-[#1a2622] border border-white/10 rounded px-4 py-3 text-white focus:border-[#d4af37] outline-none transition"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2 font-medium">Adresse email</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="Ex: aminata@gmail.com" 
                  className="w-full bg-[#1a2622] border border-white/10 rounded px-4 py-3 text-white focus:border-[#d4af37] outline-none transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2 font-medium">Date d'arrivée</label>
                <input 
                  type="date" 
                  name="arrivee" 
                  required 
                  className="w-full bg-[#1a2622] border border-white/10 rounded px-4 py-3 text-white focus:border-[#d4af37] outline-none transition"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2 font-medium">Date de départ</label>
                <input 
                  type="date" 
                  name="depart" 
                  required 
                  className="w-full bg-[#1a2622] border border-white/10 rounded px-4 py-3 text-white focus:border-[#d4af37] outline-none transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2 font-medium">Type de chambre</label>
                <select 
                  name="chambre" 
                  value={selectedRoom}
                  onChange={(e) => setSelectedRoom(e.target.value)}
                  className="w-full bg-[#1a2622] border border-white/10 rounded px-4 py-3 text-white focus:border-[#d4af37] outline-none transition cursor-pointer"
                >
                  <option value="Chambre Deluxe">Chambre Deluxe (95 000 FCFA / nuit)</option>
                  <option value="Suite Junior">Suite Junior (130 000 FCFA / nuit)</option>
                  <option value="Suite Prestige">Suite Prestige (190 000 FCFA / nuit)</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-300 mb-2 font-medium">Nombre de personnes</label>
                <select 
                  name="personnes" 
                  className="w-full bg-[#1a2622] border border-white/10 rounded px-4 py-3 text-white focus:border-[#d4af37] outline-none transition cursor-pointer"
                >
                  <option value="1 personne">1 personne</option>
                  <option value="2 personnes">2 personnes</option>
                  <option value="3+ personnes">3 personnes ou plus</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-medium">Demandes particulières (optionnel)</label>
              <textarea 
                name="message" 
                rows={4} 
                placeholder="Précisez vos besoins (transfert aéroport, vue souhaitée...)" 
                className="w-full bg-[#1a2622] border border-white/10 rounded px-4 py-3 text-white focus:border-[#d4af37] outline-none transition"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#d4af37] hover:bg-[#c5a028] text-black font-bold py-4 rounded transition flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <Send className="w-5 h-5" /> Envoyer ma demande de réservation
            </button>

            {formStatus && (
              <p className="text-green-400 text-center font-medium mt-4">{formStatus}</p>
            )}
          </form>
        </div>
      </section>

      <div ref={contactRef}>
        <Footer onNavigate={scrollToSection} />
      </div>

    </div>
  );
}