import prisma from "@/lib/prisma";

export class AbonnementService {
  /**
   * Create a new subscription for a hotel
   */
  static async createAbonnement(hotelId: string, type: string, days: number, price: number) {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + days);

    return prisma.abonnement.create({
      data: {
        hotelId,
        type,
        endDate,
        price,
        isActive: true,
      },
    });
  }

  /**
   * Get active subscription for a hotel
   */
  static async getActiveAbonnement(hotelId: string) {
    return prisma.abonnement.findFirst({
      where: {
        hotelId,
        isActive: true,
        OR: [
          { endDate: null },
          { endDate: { gt: new Date() } }
        ]
      },
      orderBy: { createdAt: 'desc' }
    });
  }

  /**
   * List all subscriptions (Admin only)
   */
  static async getAllAbonnements() {
    return prisma.abonnement.findMany({
      include: {
        hotel: true
      },
      orderBy: { createdAt: 'desc' }
    });
  }
}
