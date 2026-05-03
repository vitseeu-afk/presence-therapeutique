import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { prenom, nom, email, telephone, sujet, message } = await request.json();

  if (!prenom || !nom || !email || !message) {
    return NextResponse.json({ error: "Champs obligatoires manquants." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Email invalide." }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error("BREVO_API_KEY manquant");
    return NextResponse.json({ error: "Configuration serveur manquante." }, { status: 500 });
  }

  const sujetLabel: Record<string, string> = {
    formation: "Question sur une formation",
    inscription: "Inscription",
    entreprise: "Intervention en entreprise",
    autre: "Autre",
  };

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      sender: { name: `${prenom} ${nom}`, email: "vitse.eu@gmail.com" },
      to: [{ email: "vitse.eu@gmail.com", name: "Eugénie Vitse" }],
      replyTo: { email, name: `${prenom} ${nom}` },
      subject: `[Contact] ${sujetLabel[sujet] ?? "Message"} — ${prenom} ${nom}`,
      htmlContent: `
        <p><strong>De :</strong> ${prenom} ${nom} (${email})</p>
        ${telephone ? `<p><strong>Téléphone :</strong> ${telephone}</p>` : ""}
        <p><strong>Sujet :</strong> ${sujetLabel[sujet] ?? sujet ?? "Non précisé"}</p>
        <hr />
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    }),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    console.error("Brevo error:", body);
    return NextResponse.json({ error: "Erreur lors de l'envoi." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
