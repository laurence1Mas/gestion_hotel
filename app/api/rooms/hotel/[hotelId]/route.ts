import { NextResponse } from "next/server";
import { RoomService } from "@/services/room.service";

export async function GET(
  request: Request,
  { params }: { params: { hotelId: string } }
) {
  try {
    const rooms = await RoomService.getRoomsByHotel(params.hotelId);
    return NextResponse.json(rooms);
  } catch (error) {
    console.error(`GET /api/rooms/hotel/${params.hotelId} error:`, error);
    return NextResponse.json({ error: "Failed to fetch rooms" }, { status: 500 });
  }
}
