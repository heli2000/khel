import { NextResponse } from "next/server";
import { getKhelMessage } from "@/controllers/khelController";
import { SuccessCode } from "@/constants/apiStatus";

export async function GET() {
  const message = getKhelMessage();
  return NextResponse.json({ data: message, status: SuccessCode });
}
