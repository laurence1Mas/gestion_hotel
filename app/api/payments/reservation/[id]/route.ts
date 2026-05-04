import { NextResponse } from "next/server";
import { PaymentService } from "@/services/payment.service";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const balance = await PaymentService.calculateBalance(params.id);
    const payments = await PaymentService.getReservationPayments(params.id);
    
    return NextResponse.json({
      ...balance,
      payments
    });
  } catch (error) {
    console.error(`GET /api/payments/reservation/${params.id} error:`, error);
    return NextResponse.json({ error: "Failed to fetch reservation balance" }, { status: 500 });
  }
}
