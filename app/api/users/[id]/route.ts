import { NextResponse } from "next/server";
import { UserService } from "@/services/user.service";

export const dynamic = "force-dynamic";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const user = await UserService.getUserById(id);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json(user);
  } catch (error) {
    const { id } = await params;
    console.error(`GET /api/users/${id} error:`, error);
    return NextResponse.json({ error: "Failed to fetch user" }, { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { isActive } = body;

    if (typeof isActive !== "boolean") {
      return NextResponse.json({ error: "isActive must be a boolean" }, { status: 400 });
    }

    const user = await UserService.updateStatus(id, isActive);
    return NextResponse.json(user);
  } catch (error) {
    const { id } = await params;
    console.error(`PATCH /api/users/${id} error:`, error);
    return NextResponse.json({ error: "Failed to update user status" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await UserService.deleteUser(id);
    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    const { id } = await params;
    console.error(`DELETE /api/users/${id} error:`, error);
    return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
  }
}
