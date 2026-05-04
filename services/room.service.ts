import prisma from "@/lib/prisma";
import { RoomStatus } from "@prisma/client";

export class RoomService {
  /**
   * Add a new room to a hotel
   */
  static async createRoom(data: {
    number: string;
    price: number;
    capacity: number;
    hotelId: string;
    categoryId: string;
    description?: string;
    amenities?: any;
    images?: any;
  }) {
    return prisma.chambre.create({
      data,
    });
  }

  /**
   * Get all rooms for a specific hotel
   */
  static async getRoomsByHotel(hotelId: string) {
    return prisma.chambre.findMany({
      where: { hotelId },
      include: {
        category: true,
      },
      orderBy: { number: "asc" },
    });
  }

  /**
   * Update room details or status
   */
  static async updateRoom(id: string, data: any) {
    return prisma.chambre.update({
      where: { id },
      data,
    });
  }

  /**
   * Manage room categories for a hotel
   */
  static async createCategory(hotelId: string, name: string, description?: string) {
    return prisma.categorieChambre.create({
      data: {
        hotelId,
        name,
        description,
      },
    });
  }

  static async getCategoriesByHotel(hotelId: string) {
    return prisma.categorieChambre.findMany({
      where: { hotelId },
    });
  }
}
