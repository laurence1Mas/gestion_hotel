import { NextResponse } from "next/server";
import { RoomService } from "@/services/room.service";

export async function GET(
  request: Request,
  { params }: { params: { hotelId: string } }
) {
  try {
    const categories = await RoomService.getCategoriesByHotel(params.hotelId);
    return NextResponse.json(categories);
  } catch (error) {
    console.error(`GET /api/rooms/categories/${params.hotelId} error:`, error);
    return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 });
  }
}
