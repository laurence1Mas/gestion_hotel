import { NextResponse } from "next/server";
import { RoomService } from "@/services/room.service";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const room = await RoomService.updateRoom(params.id, body);
    return NextResponse.json(room);
  } catch (error) {
    console.error(`PATCH /api/rooms/${params.id} error:`, error);
    return NextResponse.json({ error: "Failed to update room" }, { status: 500 });
  }
}
