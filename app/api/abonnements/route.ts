import { NextResponse } from "next/server";
import { AbonnementService } from "@/services/abonnement.service";

export async function GET() {
  try {
    const abonnements = await AbonnementService.getAllAbonnements();
    return NextResponse.json(abonnements);
  } catch (error) {
    console.error("GET /api/abonnements error:", error);
    return NextResponse.json({ error: "Failed to fetch abonnements" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { hotelId, type, days, price } = body;
    
    if (!hotelId || !type || !days || !price) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const abonnement = await AbonnementService.createAbonnement(hotelId, type, days, price);
    return NextResponse.json(abonnement, { status: 201 });
  } catch (error) {
    console.error("POST /api/abonnements error:", error);
    return NextResponse.json({ error: "Failed to create abonnement" }, { status: 500 });
  }
}
