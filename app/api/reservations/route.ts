import { NextResponse } from "next/server";
import { ReservationService } from "@/services/reservation.service";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Ensure dates are actual Date objects
    if (body.checkIn) body.checkIn = new Date(body.checkIn);
    if (body.checkOut) body.checkOut = new Date(body.checkOut);

    const reservation = await ReservationService.createReservation(body);
    return NextResponse.json(reservation, { status: 201 });
  } catch (error) {
    console.error("POST /api/reservations error:", error);
    return NextResponse.json({ error: "Failed to create reservation" }, { status: 500 });
  }
}
