import { NextResponse } from "next/server";
import { ClientService } from "@/services/client.service";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const client = await ClientService.getClientWithReservations(params.id);
    if (!client) {
      return NextResponse.json({ error: "Client not found" }, { status: 404 });
    }
    return NextResponse.json(client);
  } catch (error) {
    console.error(`GET /api/clients/${params.id} error:`, error);
    return NextResponse.json({ error: "Failed to fetch client" }, { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    
    // Check if it's a status toggle or general update
    let client;
    if (Object.keys(body).length === 1 && "isActive" in body) {
      client = await ClientService.toggleClientStatus(params.id, body.isActive);
    } else {
      client = await ClientService.updateClient(params.id, body);
    }
    
    return NextResponse.json(client);
  } catch (error) {
    console.error(`PATCH /api/clients/${params.id} error:`, error);
    return NextResponse.json({ error: "Failed to update client" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await ClientService.deleteClient(params.id);
    return NextResponse.json({ message: "Client deleted successfully" });
  } catch (error) {
    console.error(`DELETE /api/clients/${params.id} error:`, error);
    return NextResponse.json({ error: "Failed to delete client" }, { status: 500 });
  }
}
