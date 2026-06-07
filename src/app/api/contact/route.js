import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();

    const webhookUrl = process.env.N8N_WEBHOOK_URL;

    if (!webhookUrl) {
      console.warn("N8N_WEBHOOK_URL is not defined in environment variables. Simulating success.");
      return NextResponse.json({ success: true, simulated: true });
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        source: "Portfolio Website",
        timestamp: new Date().toISOString()
      }),
    });

    if (!response.ok) {
      throw new Error(`Webhook responded with status: ${response.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending message to n8n webhook:", error);
    return NextResponse.json({ success: false, error: "Failed to send message." }, { status: 500 });
  }
}
