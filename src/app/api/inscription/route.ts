import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  const { nom, prenom, email, telephone, adresse, profession, structure, annees, attentes } =
    await request.json();

  if (!nom || !prenom || !email || !telephone || !adresse || !profession || !annees || !attentes) {
    return NextResponse.json({ error: "Champs obligatoires manquants." }, { status: 400 });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    console.error("STRIPE_SECRET_KEY manquant");
    return NextResponse.json({ error: "Configuration serveur manquante." }, { status: 500 });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const origin = request.nextUrl.origin;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: "Acompte — Module 1 : Présence à Soi",
            description: "Formation 8-10 février 2027 · HUB Eurasanté, Loos (59)",
          },
          unit_amount: 13500,
        },
        quantity: 1,
      },
    ],
    customer_email: email,
    metadata: {
      nom,
      prenom,
      email,
      telephone,
      adresse,
      profession,
      structure: structure || "",
      annees: String(annees),
      attentes: String(attentes).substring(0, 500),
    },
    success_url: `${origin}/inscription/succes?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/inscription`,
  });

  return NextResponse.json({ url: session.url });
}
