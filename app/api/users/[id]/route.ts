import { NextResponse } from "next/server";
import { UserService } from "@/services/user.service";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const user = await UserService.getUserById(params.id);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json(user);
  } catch (error) {
    console.error(`GET /api/users/${params.id} error:`, error);
    return NextResponse.json({ error: "Failed to fetch user" }, { status: 500 });
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

    const user = await UserService.updateStatus(params.id, isActive);
    return NextResponse.json(user);
  } catch (error) {
    console.error(`PATCH /api/users/${params.id} error:`, error);
    return NextResponse.json({ error: "Failed to update user status" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await UserService.deleteUser(params.id);
    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(`DELETE /api/users/${params.id} error:`, error);
    return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
  }
}
