import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    console.log("=== CONTACT FORM DEBUG ===");
    console.log("Form data:", { name, email, message });
    console.log("API Key exists:", !!process.env.RESEND_API_KEY);
    console.log("API Key starts with:", process.env.RESEND_API_KEY?.substring(0, 6));

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Check if RESEND_API_KEY is set
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    console.log("Sending email to Resend...");

    // Send email using Resend API
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: ["samuel.software21@gmail.com"],
        reply_to: email,
        subject: `New Portfolio Message from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif;">
            <h2>New Message from Portfolio</h2>
            <p><strong>From:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>
        `,
      }),
    });

    const result = await response.json();
    console.log("Resend API response:", result);

    if (!response.ok) {
      return NextResponse.json(
        { error: result.message || "Failed to send email" },
        { status: 500 }
      );
    }

    console.log("Email sent successfully!");
    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}