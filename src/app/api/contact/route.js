import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();

    const webhookUrl = process.env.N8N_WEBHOOK_URL;

    console.log("=== N8N WEBHOOK DEBUG ===");
    console.log("Webhook URL:", webhookUrl ?? "NOT DEFINED");
    console.log("Payload:", JSON.stringify(data, null, 2));

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

    console.log("n8n response status:", response.status);

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`n8n responded with status: ${response.status}`);
      console.error(`n8n error response body: ${errorBody}`);
      throw new Error(`Webhook responded with status: ${response.status} — ${errorBody}`);
    }

    const responseBody = await response.text();
    console.log("n8n success response:", responseBody);
    console.log("=========================");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to connect to n8n:", error.message);
    return NextResponse.json({ success: false, error: "Failed to send message." }, { status: 500 });
  }
}
