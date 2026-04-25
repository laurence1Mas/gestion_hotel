import prisma from "@/lib/prisma";

export class VisiteurService {
    /**
     * Create a new visiteur
     */
    static async createVisiteur(data: any) {
        return prisma.visiteur.create({
            data,
        });
    }

    /**
     * Get all visiteurs
     */
    static async getAllVisiteurs() {
        return prisma.visiteur.findMany();
    }

    /**
     * Get a single visiteur by ID
     */
    static async getVisiteurById(id: string) {
        return prisma.visiteur.findUnique({
            where: { id },
        });
    }

    /**
     * Update a visiteur
     */
    static async updateVisiteur(id: string, data: any) {
        return prisma.visiteur.update({
            where: { id },
            data,
        });
    }

    /**
     * Delete a visiteur
     */
    static async deleteVisiteur(id: string) {
        return prisma.visiteur.delete({
            where: { id },
        });
    }
}