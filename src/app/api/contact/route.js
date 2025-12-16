import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limit
const rateLimitMap = new Map();
const LIMIT = 5; // requests
const WINDOW = 60 * 1000; // 1 minute

function rateLimit(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip) || { count: 0, start: now };

  if (now - entry.start > WINDOW) {
    rateLimitMap.set(ip, { count: 1, start: now });
    return false;
  }

  entry.count++;
  rateLimitMap.set(ip, entry);

  return entry.count > LIMIT;
}

export async function POST(req) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";

    if (rateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const { name, email, phone, message, company } = await req.json();

    // Honeypot check
    if (company) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [process.env.CONTACT_RECEIVER_EMAIL],
      reply_to: email,
      subject: `New contact form submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
