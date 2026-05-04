import prisma from "@/lib/prisma";

export class ClientService {
    /**
     * Create a new client
     */
    static async createClient(data: any) {
        return prisma.client.create({
            data,
        });
    }

    /**
     * Get all clients
     */
    static async getAllClients() {
        return prisma.client.findMany();
    }

    /**
     * Get a single client by ID
     */
    static async getClientById(id: string) {
        return prisma.client.findUnique({
            where: { id },
        });
    }

    /**
     * Update a client
     */
    static async updateClient(id: string, data: any) {
        return prisma.client.update({
            where: { id },
            data,
        });
    }

    /**
     * Delete a client
     */
    static async deleteClient(id: string) {
        return prisma.client.delete({
            where: { id },
        });
    }

    /**
     * Get a client with all their reservations
     */
    static async getClientWithReservations(id: string) {
        return prisma.client.findUnique({
            where: { id },
            include: {
                user: {
                    select: {
                        email: true,
                        username: true,
                        role: true,
                    }
                },
                reservations: {
                    include: {
                        room: true,
                        payments: true,
                    },
                    orderBy: {
                        checkIn: 'desc'
                    }
                }
            }
        });
    }

    /**
     * Search clients by name, email or phone
     */
    static async searchClients(query: string) {
        return prisma.client.findMany({
            where: {
                OR: [
                    { name: { contains: query } },
                    { phone: { contains: query } },
                    { user: { email: { contains: query } } },
                    { user: { username: { contains: query } } },
                ],
            },
            include: {
                user: {
                    select: {
                        email: true,
                        username: true,
                    }
                }
            }
        });
    }

    /**
     * Toggle client active status
     */
    static async toggleClientStatus(id: string, isActive: boolean) {
        return prisma.client.update({
            where: { id },
            data: { isActive },
        });
    }
}