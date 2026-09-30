import { NextResponse } from "next/server";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Contact endpoint.
 *
 * If RESEND_API_KEY and CONTACT_TO_EMAIL are configured (see .env.local),
 * the message is delivered via Resend. Otherwise the submission is validated
 * and accepted gracefully so the form still works out of the box.
 * No API keys are hardcoded.
 */
export async function POST(request: Request) {
  let body: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const subject = body.subject?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (
    !name ||
    !email ||
    !emailRegex.test(email) ||
    !subject ||
    message.length < 20
  ) {
    return NextResponse.json(
      { error: "Please complete all fields correctly." },
      { status: 422 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (apiKey && to) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: [to],
          reply_to: email,
          subject: `[Portfolio] ${subject}`,
          text: `From: ${name} <${email}>\n\n${message}`,
        }),
      });
      if (!res.ok) {
        return NextResponse.json(
          { error: "Email service error." },
          { status: 502 }
        );
      }
    } catch {
      return NextResponse.json(
        { error: "Email service unavailable." },
        { status: 502 }
      );
    }
  }

  return NextResponse.json({ ok: true });
}
