import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  try {
    await resend.emails.send({
      from: "technyon.com <onboarding@resend.dev>",
      to: "argrouplondon7@gmail.com",
      subject: `Inquiry Message from ${name}`,
      replyTo: email,
      text: message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Email send failed" }, { status: 500 });
  }
}
