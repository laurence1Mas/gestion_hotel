"use server"

import prisma from "@/lib/prisma"
import { auth } from "@/lib/auth"

export async function getAdminStats() {
  const session = await auth()
  if (!session || (session.user as any).role !== "ADMIN") {
    return { error: "Non autorisé" }
  }

  const [usersCount, hotelsCount, bookingsCount, revenue] = await Promise.all([
    prisma.user.count(),
    prisma.hotel.count(),
    prisma.booking.count(),
    prisma.booking.aggregate({
      _sum: { totalPrice: true }
    })
  ])

  return {
    usersCount,
    hotelsCount,
    bookingsCount,
    totalRevenue: revenue._sum.totalPrice || 0
  }
}

export async function getAllHotels() {
  return await prisma.hotel.findMany({
    include: {
      owner: {
        select: {
          name: true,
          email: true
        }
      }
    }
  })
}
