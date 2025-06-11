import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND2_API_KEY);

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json(
      { error: "Invalid email address" },
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from: "technyon.com <onboarding@resend.dev>",
      to: email,
      subject: `Newsletter Subscription`,
      html: `<p>Thank you for subscribing to our newsletter!</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Email send failed" }, { status: 500 });
  }
}
