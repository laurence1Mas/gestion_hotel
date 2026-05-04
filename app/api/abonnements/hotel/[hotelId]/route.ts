import { NextResponse } from "next/server";
import { AbonnementService } from "@/services/abonnement.service";

export async function GET(
  request: Request,
  { params }: { params: { hotelId: string } }
) {
  try {
    const abonnement = await AbonnementService.getActiveAbonnement(params.hotelId);
    return NextResponse.json(abonnement);
  } catch (error) {
    console.error(`GET /api/abonnements/hotel/${params.hotelId} error:`, error);
    return NextResponse.json({ error: "Failed to fetch active abonnement" }, { status: 500 });
  }
}
