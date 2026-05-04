import { NextResponse } from "next/server";
import { VisiteurService } from "@/services/visiteur.service";

export const dynamic = "force-dynamic";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const visiteur = await VisiteurService.getVisiteurWithReservations(id);
    if (!visiteur) {
      return NextResponse.json({ error: "Visiteur not found" }, { status: 404 });
    }
    return NextResponse.json(visiteur);
  } catch (error) {
    const { id } = await params;
    console.error(`GET /api/visiteurs/${id} error:`, error);
    return NextResponse.json({ error: "Failed to fetch visiteur" }, { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const visiteur = await VisiteurService.updateVisiteur(id, body);
    return NextResponse.json(visiteur);
  } catch (error) {
    const { id } = await params;
    console.error(`PATCH /api/visiteurs/${id} error:`, error);
    return NextResponse.json({ error: "Failed to update visiteur" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await VisiteurService.deleteVisiteur(id);
    return NextResponse.json({ message: "Visiteur deleted successfully" });
  } catch (error) {
    const { id } = await params;
    console.error(`DELETE /api/visiteurs/${id} error:`, error);
    return NextResponse.json({ error: "Failed to delete visiteur" }, { status: 500 });
  }
}
