import { NextResponse } from "next/server";
import { ReservationService } from "@/services/reservation.service";

export async function GET(
  request: Request,
  { params }: { params: { hotelId: string } }
) {
  try {
    const reservations = await ReservationService.getHotelReservations(params.hotelId);
    return NextResponse.json(reservations);
  } catch (error) {
    console.error(`GET /api/reservations/hotel/${params.hotelId} error:`, error);
    return NextResponse.json({ error: "Failed to fetch reservations" }, { status: 500 });
  }
}
