import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Email invalide." }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LIST_ID);

  if (!apiKey || !listId) {
    console.error("BREVO_API_KEY ou BREVO_LIST_ID manquant");
    return NextResponse.json({ error: "Configuration serveur manquante." }, { status: 500 });
  }

  const res = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      email,
      listIds: [listId],
      updateEnabled: true,
    }),
  });

  if (!res.ok && res.status !== 204) {
    const body = await res.json().catch(() => ({}));
    console.error("Brevo error:", body);
    return NextResponse.json({ error: "Erreur lors de l'inscription." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
