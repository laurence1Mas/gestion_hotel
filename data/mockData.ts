import { Hotel, Reservation, User } from "@/types/types";

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export const Users: User[] = [
  { id: "u1", name: "Alice Dubois", email: "alice@maison.com", role: "client" },
  {
    id: "u2",
    name: "Marc Laurent",
    email: "marc@hotelroyal.com",
    role: "manager",
    hotelId: "h1",
  },
  { id: "u3", name: "Sophie Admin", email: "admin@maison.com", role: "admin" },
];

// const mkRooms = (hotelId: string, base: number): Hotel["rooms"] => [
//   {
//     id: 1,
//     type: "Chambre Simple",
//     price: 45,
//     capacity: 1,
//     description:
//       "Chambre confortable pour voyageur solo avec lit simple et salle de bain privée.",
//     amenities: ["wifi", "tv", "ac"],
//     image:
//       "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop",
//     available: true,
//   },
// ];

export const Hotels: Hotel[] = [
  {
    id: 1,
    name: "Le Royal Méditerranée",
    city: "Nice",
    description:
      "Niché sur la Promenade des Anglais, Le Royal Méditerranée allie l'élégance Belle Époque à un service contemporain. Chaque suite offre une vue imprenable sur la baie des Anges, et le spa Lumière propose des soins exclusifs.",
    rating: 4.9,
    reviews: 1284,
    price: 320,
    image: [
      img("photo-1566073771259-6a8506099945"),
      img("photo-1564501049412-61c2a3083791"),
      img("photo-1582719478250-c89cae4dc85b"),
      img("photo-1571896349842-33c89424de2d"),
    ],
    amenities: ["wifi", "parking", "restaurant", "tv", "ac"],
    rooms: [
      {
        id: 1,
        type: "Chambre Simple",
        price: 45,
        capacity: 1,
        description:
          "Chambre confortable pour voyageur solo avec lit simple et salle de bain privée.",
        amenities: ["wifi", "tv", "ac"],
        image:
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop",
        available: true,
      },
      {
        id: 2,
        type: "Chambre Double",
        price: 65,
        capacity: 2,
        description:
          "Chambre spacieuse avec lit double king size, coin salon et vue sur la ville.",
        amenities: ["wifi", "tv", "ac"],
        image:
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
        available: true,
      },
      {
        id: 3,
        type: "Suite Deluxe",
        price: 85,
        capacity: 2,
        description:
          "Suite luxueuse avec salon séparé, lit king size, minibar et vue panoramique.",
        amenities: ["wifi", "tv", "ac", "parking"],
        image:
          "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop",
        available: true,
      },
      {
        id: 4,
        type: "Suite Premium",
        price: 120,
        capacity: 4,
        description:
          "Notre meilleure suite avec deux chambres, jacuzzi, service VIP et petit-déjeuner inclus.",
        amenities: ["wifi", "tv", "ac", "parking", "restaurant"],
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
        available: false,
      },
    ],

    revenue: 824300,
    occupancy: 87,
  },
  {
    id: 1,
    name: "Le Royal Méditerranée",
    city: "Nice",
    description:
      "Niché sur la Promenade des Anglais, Le Royal Méditerranée allie l'élégance Belle Époque à un service contemporain. Chaque suite offre une vue imprenable sur la baie des Anges, et le spa Lumière propose des soins exclusifs.",
    rating: 4.9,
    reviews: 1284,
    price: 320,
    image: [
      img("photo-1566073771259-6a8506099945"),
      img("photo-1564501049412-61c2a3083791"),
      img("photo-1582719478250-c89cae4dc85b"),
      img("photo-1571896349842-33c89424de2d"),
    ],
    amenities: ["wifi", "parking", "restaurant", "tv", "ac"],
    rooms: [
      {
        id: 1,
        type: "Chambre Simple",
        price: 45,
        capacity: 1,
        description:
          "Chambre confortable pour voyageur solo avec lit simple et salle de bain privée.",
        amenities: ["wifi", "tv", "ac"],
        image:
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop",
        available: true,
      },
      {
        id: 2,
        type: "Chambre Double",
        price: 65,
        capacity: 2,
        description:
          "Chambre spacieuse avec lit double king size, coin salon et vue sur la ville.",
        amenities: ["wifi", "tv", "ac"],
        image:
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
        available: true,
      },
      {
        id: 3,
        type: "Suite Deluxe",
        price: 85,
        capacity: 2,
        description:
          "Suite luxueuse avec salon séparé, lit king size, minibar et vue panoramique.",
        amenities: ["wifi", "tv", "ac", "parking"],
        image:
          "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop",
        available: true,
      },
      {
        id: 4,
        type: "Suite Premium",
        price: 120,
        capacity: 4,
        description:
          "Notre meilleure suite avec deux chambres, jacuzzi, service VIP et petit-déjeuner inclus.",
        amenities: ["wifi", "tv", "ac", "parking", "restaurant"],
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
        available: false,
      },
    ],

    revenue: 824300,
    occupancy: 87,
  },
  {
    id: 1,
    name: "Le Royal Méditerranée",
    city: "Nice",
    description:
      "Niché sur la Promenade des Anglais, Le Royal Méditerranée allie l'élégance Belle Époque à un service contemporain. Chaque suite offre une vue imprenable sur la baie des Anges, et le spa Lumière propose des soins exclusifs.",
    rating: 4.9,
    reviews: 1284,
    price: 320,
    image: [
      img("photo-1566073771259-6a8506099945"),
      img("photo-1564501049412-61c2a3083791"),
      img("photo-1582719478250-c89cae4dc85b"),
      img("photo-1571896349842-33c89424de2d"),
    ],
    amenities: ["wifi", "parking", "restaurant", "tv", "ac"],
    rooms: [
      {
        id: 1,
        type: "Chambre Simple",
        price: 45,
        capacity: 1,
        description:
          "Chambre confortable pour voyageur solo avec lit simple et salle de bain privée.",
        amenities: ["wifi", "tv", "ac"],
        image:
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop",
        available: true,
      },
      {
        id: 2,
        type: "Chambre Double",
        price: 65,
        capacity: 2,
        description:
          "Chambre spacieuse avec lit double king size, coin salon et vue sur la ville.",
        amenities: ["wifi", "tv", "ac"],
        image:
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
        available: true,
      },
      {
        id: 3,
        type: "Suite Deluxe",
        price: 85,
        capacity: 2,
        description:
          "Suite luxueuse avec salon séparé, lit king size, minibar et vue panoramique.",
        amenities: ["wifi", "tv", "ac", "parking"],
        image:
          "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop",
        available: true,
      },
      {
        id: 4,
        type: "Suite Premium",
        price: 120,
        capacity: 4,
        description:
          "Notre meilleure suite avec deux chambres, jacuzzi, service VIP et petit-déjeuner inclus.",
        amenities: ["wifi", "tv", "ac", "parking", "restaurant"],
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
        available: false,
      },
    ],

    revenue: 824300,
    occupancy: 87,
  },
  {
    id: 1,
    name: "Le Royal Méditerranée",
    city: "Nice",
    description:
      "Niché sur la Promenade des Anglais, Le Royal Méditerranée allie l'élégance Belle Époque à un service contemporain. Chaque suite offre une vue imprenable sur la baie des Anges, et le spa Lumière propose des soins exclusifs.",
    rating: 4.9,
    reviews: 1284,
    price: 320,
    image: [
      img("photo-1566073771259-6a8506099945"),
      img("photo-1564501049412-61c2a3083791"),
      img("photo-1582719478250-c89cae4dc85b"),
      img("photo-1571896349842-33c89424de2d"),
    ],
    amenities: ["wifi", "parking", "restaurant", "tv", "ac"],
    rooms: [
      {
        id: 1,
        type: "Chambre Simple",
        price: 45,
        capacity: 1,
        description:
          "Chambre confortable pour voyageur solo avec lit simple et salle de bain privée.",
        amenities: ["wifi", "tv", "ac"],
        image:
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop",
        available: true,
      },
      {
        id: 2,
        type: "Chambre Double",
        price: 65,
        capacity: 2,
        description:
          "Chambre spacieuse avec lit double king size, coin salon et vue sur la ville.",
        amenities: ["wifi", "tv", "ac"],
        image:
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
        available: true,
      },
      {
        id: 3,
        type: "Suite Deluxe",
        price: 85,
        capacity: 2,
        description:
          "Suite luxueuse avec salon séparé, lit king size, minibar et vue panoramique.",
        amenities: ["wifi", "tv", "ac", "parking"],
        image:
          "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop",
        available: true,
      },
      {
        id: 4,
        type: "Suite Premium",
        price: 120,
        capacity: 4,
        description:
          "Notre meilleure suite avec deux chambres, jacuzzi, service VIP et petit-déjeuner inclus.",
        amenities: ["wifi", "tv", "ac", "parking", "restaurant"],
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
        available: false,
      },
    ],

    revenue: 824300,
    occupancy: 87,
  },
  {
    id: 1,
    name: "Le Royal Méditerranée",
    city: "Nice",
    description:
      "Niché sur la Promenade des Anglais, Le Royal Méditerranée allie l'élégance Belle Époque à un service contemporain. Chaque suite offre une vue imprenable sur la baie des Anges, et le spa Lumière propose des soins exclusifs.",
    rating: 4.9,
    reviews: 1284,
    price: 320,
    image: [
      img("photo-1566073771259-6a8506099945"),
      img("photo-1564501049412-61c2a3083791"),
      img("photo-1582719478250-c89cae4dc85b"),
      img("photo-1571896349842-33c89424de2d"),
    ],
    amenities: ["wifi", "parking", "restaurant", "tv", "ac"],
    rooms: [
      {
        id: 1,
        type: "Chambre Simple",
        price: 45,
        capacity: 1,
        description:
          "Chambre confortable pour voyageur solo avec lit simple et salle de bain privée.",
        amenities: ["wifi", "tv", "ac"],
        image:
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop",
        available: true,
      },
      {
        id: 2,
        type: "Chambre Double",
        price: 65,
        capacity: 2,
        description:
          "Chambre spacieuse avec lit double king size, coin salon et vue sur la ville.",
        amenities: ["wifi", "tv", "ac"],
        image:
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
        available: true,
      },
      {
        id: 3,
        type: "Suite Deluxe",
        price: 85,
        capacity: 2,
        description:
          "Suite luxueuse avec salon séparé, lit king size, minibar et vue panoramique.",
        amenities: ["wifi", "tv", "ac", "parking"],
        image:
          "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop",
        available: true,
      },
      {
        id: 4,
        type: "Suite Premium",
        price: 120,
        capacity: 4,
        description:
          "Notre meilleure suite avec deux chambres, jacuzzi, service VIP et petit-déjeuner inclus.",
        amenities: ["wifi", "tv", "ac", "parking", "restaurant"],
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
        available: false,
      },
    ],

    revenue: 824300,
    occupancy: 87,
  },
  {
    id: 1,
    name: "Le Royal Méditerranée",
    city: "Nice",
    description:
      "Niché sur la Promenade des Anglais, Le Royal Méditerranée allie l'élégance Belle Époque à un service contemporain. Chaque suite offre une vue imprenable sur la baie des Anges, et le spa Lumière propose des soins exclusifs.",
    rating: 4.9,
    reviews: 1284,
    price: 320,
    image: [
      img("photo-1566073771259-6a8506099945"),
      img("photo-1564501049412-61c2a3083791"),
      img("photo-1582719478250-c89cae4dc85b"),
      img("photo-1571896349842-33c89424de2d"),
    ],
    amenities: ["wifi", "parking", "restaurant", "tv", "ac"],
    rooms: [
      {
        id: 1,
        type: "Chambre Simple",
        price: 45,
        capacity: 1,
        description:
          "Chambre confortable pour voyageur solo avec lit simple et salle de bain privée.",
        amenities: ["wifi", "tv", "ac"],
        image:
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop",
        available: true,
      },
      {
        id: 2,
        type: "Chambre Double",
        price: 65,
        capacity: 2,
        description:
          "Chambre spacieuse avec lit double king size, coin salon et vue sur la ville.",
        amenities: ["wifi", "tv", "ac"],
        image:
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
        available: true,
      },
      {
        id: 3,
        type: "Suite Deluxe",
        price: 85,
        capacity: 2,
        description:
          "Suite luxueuse avec salon séparé, lit king size, minibar et vue panoramique.",
        amenities: ["wifi", "tv", "ac", "parking"],
        image:
          "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop",
        available: true,
      },
      {
        id: 4,
        type: "Suite Premium",
        price: 120,
        capacity: 4,
        description:
          "Notre meilleure suite avec deux chambres, jacuzzi, service VIP et petit-déjeuner inclus.",
        amenities: ["wifi", "tv", "ac", "parking", "restaurant"],
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
        available: false,
      },
    ],

    revenue: 824300,
    occupancy: 87,
  },
  {
    id: 2,
    name: "Le Royal Méditerranée",
    city: "Nice",
    description:
      "Niché sur la Promenade des Anglais, Le Royal Méditerranée allie l'élégance Belle Époque à un service contemporain. Chaque suite offre une vue imprenable sur la baie des Anges, et le spa Lumière propose des soins exclusifs.",
    rating: 4.9,
    reviews: 1284,
    price: 320,
    image: [
      img("photo-1566073771259-6a8506099945"),
      img("photo-1564501049412-61c2a3083791"),
      img("photo-1582719478250-c89cae4dc85b"),
      img("photo-1571896349842-33c89424de2d"),
    ],
    amenities: ["wifi", "parking", "restaurant", "tv", "ac"],
    rooms: [
      {
        id: 1,
        type: "Chambre Simple",
        price: 45,
        capacity: 1,
        description:
          "Chambre confortable pour voyageur solo avec lit simple et salle de bain privée.",
        amenities: ["wifi", "tv", "ac"],
        image:
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop",
        available: true,
      },
      {
        id: 2,
        type: "Chambre Double",
        price: 65,
        capacity: 2,
        description:
          "Chambre spacieuse avec lit double king size, coin salon et vue sur la ville.",
        amenities: ["wifi", "tv", "ac"],
        image:
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
        available: true,
      },
      {
        id: 3,
        type: "Suite Deluxe",
        price: 85,
        capacity: 2,
        description:
          "Suite luxueuse avec salon séparé, lit king size, minibar et vue panoramique.",
        amenities: ["wifi", "tv", "ac", "parking"],
        image:
          "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop",
        available: true,
      },
      {
        id: 4,
        type: "Suite Premium",
        price: 120,
        capacity: 4,
        description:
          "Notre meilleure suite avec deux chambres, jacuzzi, service VIP et petit-déjeuner inclus.",
        amenities: ["wifi", "tv", "ac", "parking", "restaurant"],
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
        available: false,
      },
    ],

    revenue: 824300,
    occupancy: 87,
  },
  {
    id: 3,
    name: "Le Royal Méditerranée",
    city: "Nice",
    description:
      "Niché sur la Promenade des Anglais, Le Royal Méditerranée allie l'élégance Belle Époque à un service contemporain. Chaque suite offre une vue imprenable sur la baie des Anges, et le spa Lumière propose des soins exclusifs.",
    rating: 4.9,
    reviews: 1284,
    price: 320,
    image: [
      img("photo-1566073771259-6a8506099945"),
      img("photo-1564501049412-61c2a3083791"),
      img("photo-1582719478250-c89cae4dc85b"),
      img("photo-1571896349842-33c89424de2d"),
    ],
    amenities: ["wifi", "parking", "restaurant", "tv", "ac"],
    rooms: [
      {
        id: 1,
        type: "Chambre Simple",
        price: 45,
        capacity: 1,
        description:
          "Chambre confortable pour voyageur solo avec lit simple et salle de bain privée.",
        amenities: ["wifi", "tv", "ac"],
        image:
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop",
        available: true,
      },
      {
        id: 2,
        type: "Chambre Double",
        price: 65,
        capacity: 2,
        description:
          "Chambre spacieuse avec lit double king size, coin salon et vue sur la ville.",
        amenities: ["wifi", "tv", "ac"],
        image:
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
        available: true,
      },
      {
        id: 3,
        type: "Suite Deluxe",
        price: 85,
        capacity: 2,
        description:
          "Suite luxueuse avec salon séparé, lit king size, minibar et vue panoramique.",
        amenities: ["wifi", "tv", "ac", "parking"],
        image:
          "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop",
        available: true,
      },
      {
        id: 4,
        type: "Suite Premium",
        price: 120,
        capacity: 4,
        description:
          "Notre meilleure suite avec deux chambres, jacuzzi, service VIP et petit-déjeuner inclus.",
        amenities: ["wifi", "tv", "ac", "parking", "restaurant"],
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
        available: false,
      },
    ],

    revenue: 824300,
    occupancy: 87,
  },
  {
    id: 4,
    name: "Le Royal Méditerranée",
    city: "Nice",
    description:
      "Niché sur la Promenade des Anglais, Le Royal Méditerranée allie l'élégance Belle Époque à un service contemporain. Chaque suite offre une vue imprenable sur la baie des Anges, et le spa Lumière propose des soins exclusifs.",
    rating: 4.9,
    reviews: 1284,
    price: 320,
    image: [
      img("photo-1566073771259-6a8506099945"),
      img("photo-1564501049412-61c2a3083791"),
      img("photo-1582719478250-c89cae4dc85b"),
      img("photo-1571896349842-33c89424de2d"),
    ],
    amenities: ["wifi", "parking", "restaurant", "tv", "ac"],
    rooms: [
      {
        id: 1,
        type: "Chambre Simple",
        price: 45,
        capacity: 1,
        description:
          "Chambre confortable pour voyageur solo avec lit simple et salle de bain privée.",
        amenities: ["wifi", "tv", "ac"],
        image:
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop",
        available: true,
      },
      {
        id: 2,
        type: "Chambre Double",
        price: 65,
        capacity: 2,
        description:
          "Chambre spacieuse avec lit double king size, coin salon et vue sur la ville.",
        amenities: ["wifi", "tv", "ac"],
        image:
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
        available: true,
      },
      {
        id: 3,
        type: "Suite Deluxe",
        price: 85,
        capacity: 2,
        description:
          "Suite luxueuse avec salon séparé, lit king size, minibar et vue panoramique.",
        amenities: ["wifi", "tv", "ac", "parking"],
        image:
          "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop",
        available: true,
      },
      {
        id: 4,
        type: "Suite Premium",
        price: 120,
        capacity: 4,
        description:
          "Notre meilleure suite avec deux chambres, jacuzzi, service VIP et petit-déjeuner inclus.",
        amenities: ["wifi", "tv", "ac", "parking", "restaurant"],
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
        available: false,
      },
    ],

    revenue: 824300,
    occupancy: 87,
  },
];

export const Reservations: Reservation[] = [
  {
    id: 1,
    hotel: "Hôtel Ituri Palace",
    room: "Suite Deluxe",
    roomNumber: "301",
    checkIn: "15 Avril 2026",
    checkOut: "18 Avril 2026",
    status: "confirmed",
    price: 255,
    acompte: 100,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
    hotelPhone: "+243 99 123 4567",
    hotelAddress: "Avenue Principale, Bunia",
    guests: 2,
  },
  {
    id: 2,
    hotel: "Grand Hôtel du Lac",
    room: "Chambre Double",
    roomNumber: "205",
    checkIn: "25 Mai 2026",
    checkOut: "27 Mai 2026",
    status: "pending",
    price: 130,
    acompte: 50,
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
    hotelPhone: "+243 99 234 5678",
    hotelAddress: "Rue du Commerce, Bunia",
    guests: 2,
  },
  {
    id: 3,
    hotel: "Résidence Mahagi",
    room: "Chambre Simple",
    roomNumber: "102",
    checkIn: "10 Février 2026",
    checkOut: "12 Février 2026",
    status: "completed",
    price: 100,
    acompte: 40,
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop",
    hotelPhone: "+243 99 345 6789",
    hotelAddress: "Centre Ville, Mahagi",
    guests: 1,
  },
  {
    id: 4,
    hotel: "Auberge de l'Est",
    room: "Chambre Double",
    roomNumber: "108",
    checkIn: "5 Janvier 2026",
    checkOut: "6 Janvier 2026",
    status: "cancelled",
    price: 40,
    acompte: 0,
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop",
    hotelPhone: "+243 99 456 7890",
    hotelAddress: "Quartier Est, Aru",
    guests: 2,
  },
];

export const allCities = Array.from(new Set(Hotels.map((h) => h.city))).sort();
// export const allTags = Array.from(
//   new Set(Hotels.flatMap((h) => h.tags)),
// ).sort();
