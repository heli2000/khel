import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const { phone } = body;

  if (!phone || typeof phone !== "string") {
    return NextResponse.json(
      { error: "Phone number is required." },
      { status: 400 }
    );
  }

  // Handle the phone number (e.g., save to database, send OTP, etc.)
  // For now, just return it in the response

  return NextResponse.json({ message: "Phone number received.", phone });
}
