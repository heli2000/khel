import { ValidationCode } from "@/constants/apiStatus";
import { PhoneNumberRequired } from "@/constants/validationMessage";
import { generateOtp } from "@/controllers/otpController";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const { phoneNumber } = body;

  if (!phoneNumber) {
    return NextResponse.json(
      { message: PhoneNumberRequired },
      { status: ValidationCode }
    );
  }

  // Handle the phone number (e.g., save to database, send OTP, etc.)
  // For now, just return it in the response
  const response = await generateOtp(body);

  return NextResponse.json(response.data, { status: response.status });
}
