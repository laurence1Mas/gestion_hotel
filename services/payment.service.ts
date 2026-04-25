import prisma from "@/lib/prisma";  

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
}
