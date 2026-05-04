import { NextResponse } from "next/server";
import { ClientService } from "@/services/client.service";

export const dynamic = "force-dynamic";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const client = await ClientService.getClientWithReservations(id);
    if (!client) {
      return NextResponse.json({ error: "Client not found" }, { status: 404 });
    }
    return NextResponse.json(client);
  } catch (error) {
    const { id } = await params;
    console.error(`GET /api/clients/${id} error:`, error);
    return NextResponse.json({ error: "Failed to fetch client" }, { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    
    // Check if it's a status toggle or general update
    let client;
    if (Object.keys(body).length === 1 && "isActive" in body) {
      client = await ClientService.toggleClientStatus(id, body.isActive);
    } else {
      client = await ClientService.updateClient(id, body);
    }
    
    return NextResponse.json(client);
  } catch (error) {
    const { id } = await params;
    console.error(`PATCH /api/clients/${id} error:`, error);
    return NextResponse.json({ error: "Failed to update client" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await ClientService.deleteClient(id);
    return NextResponse.json({ message: "Client deleted successfully" });
  } catch (error) {
    const { id } = await params;
    console.error(`DELETE /api/clients/${id} error:`, error);
    return NextResponse.json({ error: "Failed to delete client" }, { status: 500 });
  }
}
