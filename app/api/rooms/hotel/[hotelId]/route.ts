import { NextResponse } from "next/server";
import { RoomService } from "@/services/room.service";

export const dynamic = "force-dynamic";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ hotelId: string }> }
) {
  try {
    const { hotelId } = await params;
    const rooms = await RoomService.getRoomsByHotel(hotelId);
    return NextResponse.json(rooms);
  } catch (error) {
    const { hotelId } = await params;
    console.error(`GET /api/rooms/hotel/${hotelId} error:`, error);
    return NextResponse.json({ error: "Failed to fetch rooms" }, { status: 500 });
  }
}
