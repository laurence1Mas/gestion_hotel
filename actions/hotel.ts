"use server"

import prisma from "@/lib/prisma"
import { auth } from "@/lib/auth"
import { revalidatePath } from "next/cache"

export async function createRoom(hotelId: string, roomData: any) {
  const session = await auth()
  if (!session || (session.user as any).role !== "HOTEL") {
    return { error: "Non autorisé" }
  }

  try {
    const room = await prisma.room.create({
      data: {
        ...roomData,
        hotelId,
      }
    })
    revalidatePath("/dashboard/hotel/rooms")
    return { success: true, room }
  } catch (error) {
    console.error("Create room error:", error)
    return { error: "Erreur lors de la création de la chambre" }
  }
}

export async function getHotelRooms(hotelId: string) {
  return await prisma.room.findMany({
    where: { hotelId }
  })
}

export async function createBooking(bookingData: any) {
  const session = await auth()
  if (!session) return { error: "Veuillez vous connecter" }

  try {
    const booking = await prisma.booking.create({
      data: {
        ...bookingData,
        userId: (session.user as any).id
      }
    })
    revalidatePath("/dashboard/client/bookings")
    return { success: true, booking }
  } catch (error) {
    console.error("Booking error:", error)
    return { error: "Erreur lors de la réservation" }
  }
}
