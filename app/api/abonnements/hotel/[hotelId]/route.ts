import { NextResponse } from "next/server";
import { AbonnementService } from "@/services/abonnement.service";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ hotelId: string }> }
) {
  try {
    const { hotelId } = await params;
    const abonnement = await AbonnementService.getActiveAbonnement(hotelId);
    return NextResponse.json(abonnement);
  } catch (error) {
    const { hotelId } = await params;
    console.error(`GET /api/abonnements/hotel/${hotelId} error:`, error);
    return NextResponse.json({ error: "Failed to fetch active abonnement" }, { status: 500 });
  }
}
