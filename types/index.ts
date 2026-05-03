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
  id: string;
  hotelId: string;
  name: string;
  type: "Standard" | "Deluxe" | "Suite" | "Penthouse";
  capacity: number;
  pricePerNight: number;
  available: number;
  total: number;
  amenities: string[];
  image: string;
}

export interface Hotel {
  id: string;
  name: string;
  city: string;
  country: string;
  description: string;
  shortDescription: string;
  rating: number;
  reviews: number;
  pricePerNight: number;
  images: string[];
  amenities: string[];
  tags: string[];
  coordinates: { lat: number; lng: number };
  rooms: Room[];
  managerId?: string;
  revenue?: number;
  occupancy?: number;
}

export interface Reservation {
  id: string;
  hotelId: string;
  hotelName: string;
  roomId: string;
  roomName: string;
  userId: string;
  userName: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  total: number;
  status: "confirmed" | "pending" | "cancelled" | "completed";
  createdAt: string;
}
