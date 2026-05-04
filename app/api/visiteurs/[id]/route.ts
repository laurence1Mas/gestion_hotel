import { NextResponse } from "next/server";
import { VisiteurService } from "@/services/visiteur.service";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const visiteur = await VisiteurService.getVisiteurWithReservations(params.id);
    if (!visiteur) {
      return NextResponse.json({ error: "Visiteur not found" }, { status: 404 });
    }
    return NextResponse.json(visiteur);
  } catch (error) {
    console.error(`GET /api/visiteurs/${params.id} error:`, error);
    return NextResponse.json({ error: "Failed to fetch visiteur" }, { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const visiteur = await VisiteurService.updateVisiteur(params.id, body);
    return NextResponse.json(visiteur);
  } catch (error) {
    console.error(`PATCH /api/visiteurs/${params.id} error:`, error);
    return NextResponse.json({ error: "Failed to update visiteur" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await VisiteurService.deleteVisiteur(params.id);
    return NextResponse.json({ message: "Visiteur deleted successfully" });
  } catch (error) {
    console.error(`DELETE /api/visiteurs/${params.id} error:`, error);
    return NextResponse.json({ error: "Failed to delete visiteur" }, { status: 500 });
  }
}
