export type UserRole = "admin" | "manager" | "client";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  hotelId?: string; // for managers
}

export interface Room {
  id: number;
  type: string;
  price: number;
  capacity: number;
  description: string;
  amenities: string[];
  image: string;
  available: boolean;
}

export interface Hotel {
  id: number;
  name: string;
  city: string;
  rating: number;
  reviews: number;
  price: number;
  image: string[];
  amenities: string[];
  description: string;
  rooms: Room[];
  revenue: number;
  occupancy: number;
}

export interface Reservation {
  id: number;
  hotel: string;
  room: string;
  roomNumber: string;
  checkIn: string;
  checkOut: string;
  status: string;
  price: number;
  acompte: number;
  image: string;
  hotelPhone: string;
  hotelAddress: string;
  guests: number;
}
