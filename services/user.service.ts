import prisma from "@/lib/prisma";
import { Role, User } from "@prisma/client";
import bcrypt from "bcryptjs";

export class UserService {
  /**
   * Create a new user with its associated profile (Client or Hotel)
   */
  static async createUser(data: any) {
    const { email, password, username, role, ...profileData } = data;
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    return prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          email,
          username,
          password: hashedPassword,
          role: role || Role.CLIENT,
        },
      });

      if (role === Role.HOTEL) {
        await tx.hotel.create({
          data: {
            userId: user.id,
            name: profileData.name || "Nouveau Hôtel",
            address: profileData.address || "",
            city: profileData.city || "",
          },
        });
      } else {
        await tx.client.create({
          data: {
            userId: user.id,
            name: profileData.name,
            phone: profileData.phone,
            address: profileData.address,
          },
        });
      }

      return user;
    });
  }

  /**
   * Get user by ID with relations
   */
  static async getUserById(id: string) {
    return prisma.user.findUnique({
      where: { id },
      include: {
        client: true,
        hotel: true,
      },
    });
  }

  /**
   * Get all users with filters
   */
  static async getAllUsers(filters: { role?: Role; isActive?: boolean } = {}) {
    return prisma.user.findMany({
      where: filters,
      include: {
        client: true,
        hotel: true,
      },
      orderBy: { createdAt: "desc" },
    });
  }

  /**
   * Update user status (Activate/Deactivate)
   */
  static async updateStatus(id: string, isActive: boolean) {
    return prisma.user.update({
      where: { id },
      data: { isActive },
    });
  }

  /**
   * Delete a user and its profiles
   */
  static async deleteUser(id: string) {
    return prisma.user.delete({
      where: { id },
    });
  }
}
