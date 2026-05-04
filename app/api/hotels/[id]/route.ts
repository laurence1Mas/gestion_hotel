import { NextResponse } from "next/server";
import { HotelService } from "@/services/hotel.service";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const hotel = await HotelService.getHotelById(params.id);
    if (!hotel) {
      return NextResponse.json({ error: "Hotel not found" }, { status: 404 });
    }
    return NextResponse.json(hotel);
  } catch (error) {
    console.error(`GET /api/hotels/${params.id} error:`, error);
    return NextResponse.json({ error: "Failed to fetch hotel" }, { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { isActive } = body;

    if (typeof isActive !== "boolean") {
      return NextResponse.json({ error: "isActive must be a boolean" }, { status: 400 });
    }

    const hotel = await HotelService.updateStatus(params.id, isActive);
    return NextResponse.json(hotel);
  } catch (error) {
    console.error(`PATCH /api/hotels/${params.id} error:`, error);
    return NextResponse.json({ error: "Failed to update hotel status" }, { status: 500 });
  }
}
