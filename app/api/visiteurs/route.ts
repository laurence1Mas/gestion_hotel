import { NextResponse } from "next/server";
import { VisiteurService } from "@/services/visiteur.service";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q");

    if (query) {
      const visiteurs = await VisiteurService.searchVisiteurs(query);
      return NextResponse.json(visiteurs);
    }

    const visiteurs = await VisiteurService.getAllVisiteurs();
    return NextResponse.json(visiteurs);
  } catch (error) {
    console.error("GET /api/visiteurs error:", error);
    return NextResponse.json({ error: "Failed to fetch visiteurs" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const visiteur = await VisiteurService.createVisiteur(body);
    return NextResponse.json(visiteur, { status: 201 });
  } catch (error) {
    console.error("POST /api/visiteurs error:", error);
    return NextResponse.json({ error: "Failed to create visiteur" }, { status: 500 });
  }
}
