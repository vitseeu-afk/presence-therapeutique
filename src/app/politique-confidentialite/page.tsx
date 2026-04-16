import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description: "Politique de confidentialité du site Présence Thérapeutique - Protection des données personnelles.",
};

export default function PolitiqueConfidentialite() {
  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-text mb-12">Politique de confidentialité</h1>

        <div className="space-y-10 text-text-light leading-relaxed">
          <div>
            <h2 className="text-xl font-serif font-semibold text-text mb-3">Responsable du traitement</h2>
            <p>Eugénie Vitse - 4 place Jeanne d&apos;Arc, 59190 Hazebrouck</p>
            <p>Email : vitse.eu@gmail.com</p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-semibold text-text mb-3">Données collectées</h2>
            <p className="mb-3">Dans le cadre de l&apos;inscription aux formations, nous collectons :</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Nom, prénom, date de naissance</li>
              <li>Adresse email et numéro de téléphone</li>
              <li>Adresse postale</li>
              <li>Profession et structure d&apos;exercice</li>
              <li>Nombre d&apos;années d&apos;exercice</li>
              <li>Attentes envers la formation</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-serif font-semibold text-text mb-3">Finalité du traitement</h2>
            <p>Les données collectées sont utilisées pour :</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>La gestion des inscriptions aux formations</li>
              <li>L&apos;envoi de confirmations et rappels de paiement</li>
              <li>La communication relative aux formations (newsletter si consentement)</li>
              <li>L&apos;amélioration de nos services</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-serif font-semibold text-text mb-3">Base légale</h2>
            <p>
              Le traitement des données est fondé sur l&apos;exécution d&apos;un contrat (inscription à la formation)
              et le consentement pour la newsletter.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-semibold text-text mb-3">Durée de conservation</h2>
            <p>
              Les données sont conservées pendant la durée de la relation commerciale et 3 ans
              après la dernière interaction, conformément aux obligations légales.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-semibold text-text mb-3">Partage des données</h2>
            <p>
              Vos données ne sont jamais vendues ni partagées avec des tiers à des fins commerciales.
              Seuls les prestataires techniques indispensables (hébergement, paiement sécurisé via Stripe)
              ont accès aux données nécessaires à leur service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-semibold text-text mb-3">Vos droits</h2>
            <p className="mb-3">Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d&apos;opposition</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous à : vitse.eu@gmail.com
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-semibold text-text mb-3">Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées
              pour protéger vos données contre tout accès non autorisé, modification ou destruction.
              Les paiements sont sécurisés par Stripe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
