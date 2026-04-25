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
}