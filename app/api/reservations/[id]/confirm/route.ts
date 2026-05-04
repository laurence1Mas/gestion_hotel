import { NextResponse } from "next/server";
import { ReservationService } from "@/services/reservation.service";

export const dynamic = "force-dynamic";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const reservation = await ReservationService.confirmReservation(id);
    return NextResponse.json(reservation);
  } catch (error) {
    const { id } = await params;
    console.error(`POST /api/reservations/${id}/confirm error:`, error);
    return NextResponse.json({ error: "Failed to confirm reservation" }, { status: 500 });
  }
}
