import { NextResponse } from "next/server";
import { RoomService } from "@/services/room.service";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { hotelId, name, description } = body;
    
    if (!hotelId || !name) {
      return NextResponse.json({ error: "Hotel ID and name are required" }, { status: 400 });
    }

    const category = await RoomService.createCategory(hotelId, name, description);
    return NextResponse.json(category, { status: 201 });
  } catch (error) {
    console.error("POST /api/rooms/categories error:", error);
    return NextResponse.json({ error: "Failed to create category" }, { status: 500 });
  }
}
