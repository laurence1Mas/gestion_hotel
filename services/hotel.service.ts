import prisma from "@/lib/prisma";

export class HotelService {
  /**
   * Create or update hotel details
   */
  static async upsertHotel(userId: string, data: any) {
    return prisma.hotel.upsert({
      where: { userId },
      update: data,
      create: {
        userId,
        ...data,
      },
    });
  }

  /**
   * Get all hotels with search and filters
   */
  static async getHotels(filters: { city?: string; stars?: number; isActive?: boolean } = {}) {
    return prisma.hotel.findMany({
      where: {
        ...filters,
        isActive: filters.isActive ?? true,
      },
      include: {
        _count: {
          select: { rooms: true },
        },
      },
      orderBy: { rating: "desc" },
    });
  }

  /**
   * Get a single hotel with its rooms and categories
   */
  static async getHotelById(id: string) {
    return prisma.hotel.findUnique({
      where: { id },
      include: {
        rooms: {
          include: { category: true },
        },
        categories: true,
        abonnements: {
          where: { isActive: true },
          take: 1,
        },
      },
    });
  }

  /**
   * Update hotel status
   */
  static async updateStatus(id: string, isActive: boolean) {
    return prisma.hotel.update({
      where: { id },
      data: { isActive },
    });
  }
}
