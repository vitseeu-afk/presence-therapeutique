import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
    console.error("STRIPE_SECRET_KEY ou STRIPE_WEBHOOK_SECRET manquant");
    return NextResponse.json({ error: "Configuration manquante." }, { status: 500 });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const rawBody = await request.text();
  const sig = request.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "Signature manquante." }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error("Webhook signature invalide:", err);
    return NextResponse.json({ error: "Signature invalide." }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const m = session.metadata ?? {};

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      console.error("BREVO_API_KEY manquant");
      return NextResponse.json({ error: "Config email manquante." }, { status: 500 });
    }

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: { name: "Présence Thérapeutique", email: "vitse.eu@gmail.com" },
        to: [{ email: "vitse.eu@gmail.com", name: "Eugénie Vitse" }],
        replyTo: { email: m.email, name: `${m.prenom} ${m.nom}` },
        subject: `[Inscription] ${m.prenom} ${m.nom} — Module 1 : Présence à Soi`,
        htmlContent: `
          <h2>Nouvelle inscription — Module 1 : Présence à Soi</h2>
          <p style="color: green;"><strong>✓ Acompte de 135 € reçu</strong> (Stripe session : ${session.id})</p>
          <hr />
          <h3>Informations participant</h3>
          <p><strong>Nom :</strong> ${m.prenom} ${m.nom}</p>
          <p><strong>Email :</strong> ${m.email}</p>
          <p><strong>Téléphone :</strong> ${m.telephone}</p>
          <p><strong>Adresse :</strong> ${m.adresse}</p>
          <p><strong>Profession :</strong> ${m.profession}</p>
          ${m.structure ? `<p><strong>Structure :</strong> ${m.structure}</p>` : ""}
          <p><strong>Années d'exercice :</strong> ${m.annees}</p>
          <hr />
          <h3>Attentes</h3>
          <p>${m.attentes?.replace(/\n/g, "<br>") ?? ""}</p>
        `,
      }),
    });

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      console.error("Brevo error:", body);
    }
  }

  return NextResponse.json({ received: true });
}
