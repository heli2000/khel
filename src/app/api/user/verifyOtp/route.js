import {
  ExceptionCode,
  SuccessCode,
  ValidationCode,
} from "@/constants/apiStatus";
import {
  OTPRequired,
  PhoneNumberRequired,
} from "@/constants/validationMessage";
import { verifyOtp } from "@/controllers/otpController";
import { createUser } from "@/controllers/userController";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const { phoneNumber, otp } = body;

  if (!phoneNumber) {
    return NextResponse.json(
      { message: PhoneNumberRequired },
      { status: ValidationCode }
    );
  } else if (!otp) {
    return NextResponse.json(
      { message: OTPRequired },
      { status: ValidationCode }
    );
  }

  // Handle the phone number (e.g., save to database, send OTP, etc.)
  // For now, just return it in the response
  const response = await verifyOtp(body);
  console.log(response);
  if (response.data.status == SuccessCode) {
    const user = await createUser(body);
    return NextResponse.json(user.data, { status: user.status });
  }
  return NextResponse.json({
    status: response.data.status,
    message: response.data.message,
  });
}
