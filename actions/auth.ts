"use server"

import prisma from "@/lib/prisma"
import bcrypt from "bcryptjs"
import { Role } from "@prisma/client"

export async function registerUser(formData: any, role: Role) {
  const { email, password, name, phone, ...details } = formData

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return { error: "Cet email est déjà utilisé" }
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        phone,
        role,
      }
    })

    // If it's a hotel, create the hotel record
    if (role === Role.HOTEL) {
      await prisma.hotel.create({
        data: {
          name: details.hotelName || name,
          address: details.address || "",
          city: details.city || "",
          ownerId: user.id
        }
      })
    }

    return { success: true }
  } catch (error) {
    console.error("Registration error:", error)
    return { error: "Une erreur est survenue lors de l'inscription" }
  }
}
