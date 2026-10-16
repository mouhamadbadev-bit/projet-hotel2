export interface Room {
  id: string;
  name: string;
  capacity: string;
  size: string;
  description: string;
  price: string;
  image: string;
  popular?: boolean;
}

export const roomsData: Room[] = [
  {
    id: 'deluxe',
    name: 'Chambre Deluxe',
    capacity: '2 personnes',
    size: '28 m²',
    description: 'Élégante et lumineuse avec balcon privé et vue sur la mer.',
    price: '95 000 FCFA',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
    popular: true,
  },
  {
    id: 'junior',
    name: 'Suite Junior',
    capacity: '2 personnes',
    size: '40 m²',
    description: 'Plus d’espace et de confort pour un séjour inoubliable.',
    price: '130 000 FCFA',
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'prestige',
    name: 'Suite Prestige',
    capacity: '2 personnes',
    size: '60 m²',
    description: 'Suite luxueuse avec salon privé et vue panoramique.',
    price: '190 000 FCFA',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800',
  },
];