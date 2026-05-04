import { NextResponse } from "next/server";
import { ReservationService } from "@/services/reservation.service";

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const reservation = await ReservationService.confirmReservation(params.id);
    return NextResponse.json(reservation);
  } catch (error) {
    console.error(`POST /api/reservations/${params.id}/confirm error:`, error);
    return NextResponse.json({ error: "Failed to confirm reservation" }, { status: 500 });
  }
}
