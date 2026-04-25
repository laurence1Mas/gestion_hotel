import prisma from "@/lib/prisma";
import { BookingStatus, RoomStatus } from "@prisma/client";

export class ReservationService {
  /**
   * Create a reservation and mark room as occupied if confirmed
   */
  static async createReservation(data: {
    checkIn: Date;
    checkOut: Date;
    totalPrice: number;
    roomId: string;
    clientId?: string;
    visiteurId?: string;
    acompte?: number;
    guests?: number;
  }) {
    return prisma.$transaction(async (tx) => {
      const reservation = await tx.reservation.create({
        data: {
          ...data,
          status: BookingStatus.PENDING,
        },
      });

      // Optionally check room availability here
      
      return reservation;
    });
  }

  /**
   * Confirm reservation and update room status
   */
  static async confirmReservation(id: string) {
    return prisma.$transaction(async (tx) => {
      const reservation = await tx.reservation.update({
        where: { id },
        data: { status: BookingStatus.CONFIRMED },
      });

      await tx.chambre.update({
        where: { id: reservation.roomId },
        data: { status: RoomStatus.OCCUPIED },
      });

      return reservation;
    });
  }

  /**
   * Get all reservations for a hotel dashboard
   */
  static async getHotelReservations(hotelId: string) {
    return prisma.reservation.findMany({
      where: {
        room: { hotelId },
      },
      include: {
        room: true,
        client: true,
        visiteur: true,
        payments: true,
      },
      orderBy: { createdAt: "desc" },
    });
  }

  /**
   * Create a payment for a reservation
   */
  static async addPayment(reservationId: string, amount: number, method: string) {
    return prisma.payment.create({
      data: {
        reservationId,
        amount,
        method,
      },
    });
  }
}
