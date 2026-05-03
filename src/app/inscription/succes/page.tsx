import Link from "next/link";
import Stripe from "stripe";

export default async function InscriptionSucces({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  let prenom = "";
  let nom = "";

  if (session_id && process.env.STRIPE_SECRET_KEY) {
    try {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
      const session = await stripe.checkout.sessions.retrieve(session_id);
      prenom = session.metadata?.prenom ?? "";
      nom = session.metadata?.nom ?? "";
    } catch {
      // Session introuvable ou expirée — on affiche quand même la page de succès
    }
  }

  return (
    <section className="bg-gradient-to-b from-white to-cream py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Étapes */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 sm:gap-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 bg-sage/30 text-sage rounded-full flex items-center justify-center font-bold text-xs">✓</span>
              <span className="text-text-muted font-medium hidden sm:inline">Formulaire</span>
            </div>
            <div className="w-8 sm:w-16 h-px bg-border" />
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 bg-sage/30 text-sage rounded-full flex items-center justify-center font-bold text-xs">✓</span>
              <span className="text-text-muted font-medium hidden sm:inline">Acompte (135 €)</span>
            </div>
            <div className="w-8 sm:w-16 h-px bg-border" />
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 bg-sage text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
              <span className="text-sage-dark font-medium hidden sm:inline">Confirmation</span>
            </div>
          </div>
        </div>

        <div className="max-w-xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-10 border border-border">
            <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-sage" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>

            <h1 className="text-2xl font-serif font-bold text-text mb-3">
              {prenom ? `Merci ${prenom} !` : "Inscription confirmée !"}
            </h1>
            <p className="text-text-light mb-6">
              Votre acompte de <strong className="text-sage">135 €</strong> a bien été reçu.
              {prenom && nom && (
                <> Votre place au <strong>Module 1 : Présence à Soi</strong> est réservée{prenom ? `, ${prenom} ${nom}` : ""}.</>
              )}
            </p>

            <div className="bg-cream rounded-xl p-5 text-left text-sm text-text-light space-y-2 mb-8">
              <p className="font-semibold text-text mb-3">Prochaines étapes :</p>
              <p className="flex items-start gap-2">
                <span className="text-sage font-bold shrink-0">1.</span>
                Un email de confirmation avec tous les détails vous sera envoyé.
              </p>
              <p className="flex items-start gap-2">
                <span className="text-sage font-bold shrink-0">2.</span>
                Vous recevrez les coordonnées bancaires pour le solde (315 €).
              </p>
              <p className="flex items-start gap-2">
                <span className="text-sage font-bold shrink-0">3.</span>
                Vous serez ajouté(e) au groupe WhatsApp de la formation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/"
                className="px-6 py-3 bg-sage text-white font-semibold rounded-full hover:bg-sage-dark transition-all text-sm"
              >
                Retour à l&apos;accueil
              </Link>
              <a
                href="mailto:vitse.eu@gmail.com"
                className="px-6 py-3 bg-cream text-text font-semibold rounded-full hover:bg-sage/10 transition-all text-sm"
              >
                Contacter Eugénie
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
