import { NextResponse } from "next/server";
import { UserService } from "@/services/user.service";
import { Role } from "@prisma/client";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const role = searchParams.get("role") as Role || undefined;
    const isActive = searchParams.get("isActive") === "false" ? false : searchParams.get("isActive") === "true" ? true : undefined;

    const users = await UserService.getAllUsers({ role, isActive });
    return NextResponse.json(users);
  } catch (error) {
    console.error("GET /api/users error:", error);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const user = await UserService.createUser(body);
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error("POST /api/users error:", error);
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}
