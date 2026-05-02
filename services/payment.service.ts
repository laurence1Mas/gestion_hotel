import prisma from "@/lib/prisma";  
import { PaymentStatus } from "@prisma/client";

export class PaymentService {
    /**
     * Create a new payment
     */
    static async createPayment(data: any) {
        return prisma.payment.create({
            data,
        });
    }

    /**
     * Get all payments
     */
    static async getAllPayments() {
        return prisma.payment.findMany();
    }

    /**
     * Get a single payment by ID
     */
    static async getPaymentById(id: string) {
        return prisma.payment.findUnique({
            where: { id },
        });
    }

    /**
     * Update a payment
     */
    static async updatePayment(id: string, data: any) {
        return prisma.payment.update({
            where: { id },
            data,
        });
    }

    /**
     * Delete a payment
     */
    static async deletePayment(id: string) {
        return prisma.payment.delete({
            where: { id },
        });
    }

    /**
     * Get all payments for a specific reservation
     */
    static async getReservationPayments(reservationId: string) {
        return prisma.payment.findMany({
            where: { reservationId },
            orderBy: { createdAt: 'desc' },
        });
    }

    /**
     * Calculate the remaining balance for a reservation
     */
    static async calculateBalance(reservationId: string) {
        const reservation = await prisma.reservation.findUnique({
            where: { id: reservationId },
            include: { payments: true },
        });

        if (!reservation) throw new Error("Reservation not found");

        const totalPaid = reservation.payments.reduce((sum, payment) => {
            if (payment.status === PaymentStatus.COMPLETED) {
                return sum + payment.amount;
            }
            return sum;
        }, 0);

        return {
            totalPrice: reservation.totalPrice,
            totalPaid,
            remainingBalance: reservation.totalPrice - totalPaid,
        };
    }

    /**
     * Process a new payment and update reservation if necessary
     */
    static async processPayment(data: {
        reservationId: string;
        amount: number;
        method: string;
        transactionId?: string;
    }) {
        return prisma.$transaction(async (tx) => {
            const payment = await tx.payment.create({
                data: {
                    ...data,
                    status: PaymentStatus.COMPLETED, // Assuming instant completion for now
                },
            });

            // Update reservation status if fully paid? 
            // For now just return the payment
            return payment;
        });
    }
}
