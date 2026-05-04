import { NextResponse } from "next/server";
import { ReservationService } from "@/services/reservation.service";

export const dynamic = "force-dynamic";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ hotelId: string }> }
) {
  try {
    const { hotelId } = await params;
    const reservations = await ReservationService.getHotelReservations(hotelId);
    return NextResponse.json(reservations);
  } catch (error) {
    const { hotelId } = await params;
    console.error(`GET /api/reservations/hotel/${hotelId} error:`, error);
    return NextResponse.json({ error: "Failed to fetch reservations" }, { status: 500 });
  }
}
