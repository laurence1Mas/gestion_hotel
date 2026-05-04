import { NextResponse } from "next/server";
import { PaymentService } from "@/services/payment.service";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const payments = await PaymentService.getAllPayments();
    return NextResponse.json(payments);
  } catch (error) {
    console.error("GET /api/payments error:", error);
    return NextResponse.json({ error: "Failed to fetch payments" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Use processPayment for business logic (handling transactions, etc.)
    const payment = await PaymentService.processPayment(body);
    return NextResponse.json(payment, { status: 201 });
  } catch (error) {
    console.error("POST /api/payments error:", error);
    return NextResponse.json({ error: "Failed to process payment" }, { status: 500 });
  }
}
