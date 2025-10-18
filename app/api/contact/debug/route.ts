import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Debug route is working!",
    hasResendKey: !!process.env.RESEND_API_KEY,
    keyLength: process.env.RESEND_API_KEY?.length,
    keyStartsWith: process.env.RESEND_API_KEY?.substring(0, 3),
    nodeEnv: process.env.NODE_ENV
  });
}