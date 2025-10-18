import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    console.log("Form submission:", { name, email, message });

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
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

    console.log("Sending email to sami21.good.bad@gmail.com...");

    // Send email to YOU with visitor's info
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: ["sami21.good.bad@gmail.com"], // ← ALWAYS SEND TO YOU
        reply_to: email, // ← VISITOR'S EMAIL (so you can reply)
        subject: `Portfolio Message from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif;">
            <h2>📧 New Portfolio Message</h2>
            <p><strong>From:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
              <p>${message}</p>
            </div>
            <br/>
            <p><em>Click "Reply" to respond to ${name}</em></p>
          </div>
        `,
      }),
    });

    const result = await response.json();
    console.log("Resend response:", result);

    if (!response.ok) {
      return NextResponse.json(
        { error: result.message || "Failed to send email" },
        { status: 500 }
      );
    }

    console.log("Email sent successfully to sami21.good.bad@gmail.com");
    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
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