import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
  description: "Conditions générales de vente des formations Présence Thérapeutique - Eugénie Vitse.",
};

export default function CGV() {
  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-text mb-2">Conditions Générales de Vente</h1>
        <p className="text-text-muted text-sm mb-12">Formation : Module 1 - Présence à Soi &middot; Organisée par Eugénie Vitse &middot; Mise à jour : Février 2026</p>

        <div className="space-y-10 text-text-light leading-relaxed">
          <div>
            <h2 className="text-xl font-serif font-semibold text-text mb-3">Article 1 - Acceptation des conditions générales</h2>
            <p>
              Le versement de l&apos;acompte et l&apos;envoi de la fiche d&apos;inscription complétée vaut inscription
              définitive à la formation et implique l&apos;acceptation pleine et entière des présentes conditions
              générales de vente.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-semibold text-text mb-3">Article 2 - Contenu de la formation</h2>
            <p>
              Le contenu de la formation est décrit dans la fiche programme transmise aux participants.
              L&apos;intervenante se réserve le droit d&apos;adapter certaines pratiques ou temps pédagogiques en
              fonction des dynamiques de groupe ou des besoins exprimés. Aucun dédommagement ne pourra
              être réclamé dans ce cadre.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-semibold text-text mb-3">Article 3 - Taille du groupe et maintien de la formation</h2>
            <p className="mb-3">
              La formation est conçue pour un petit groupe de 8 personnes maximum. Elle ne sera confirmée
              qu&apos;à partir d&apos;un nombre minimum de participants (6 personnes). Si ce seuil n&apos;est pas atteint
              15 jours avant le début du premier module, l&apos;organisatrice se réserve le droit d&apos;annuler
              ou de reporter la formation.
            </p>
            <p>
              Dans ce cas, les sommes versées seront remboursées ou pourront être utilisées pour une
              future session.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-semibold text-text mb-3">Article 4 - Réservation et confirmation d&apos;inscription</h2>
            <p className="mb-3">
              Les inscriptions sont prises en compte dans l&apos;ordre d&apos;arrivée.
            </p>
            <p className="mb-3">
              L&apos;inscription est validée à réception du formulaire d&apos;inscription complété et du versement
              d&apos;un acompte de 135 &euro; (30% du tarif).
            </p>
            <p>
              Le solde devra être intégralement versé au plus tard une semaine avant le début du stage.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-semibold text-text mb-3">Article 5 - Prix et conditions de paiement</h2>
            <p className="mb-3">Tarif : 450 &euro;</p>
            <p className="mb-3">Ce tarif inclut :</p>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li>3 jours de formation en présentiel</li>
              <li>Un groupe WhatsApp de suivi</li>
            </ul>
            <p>L&apos;hébergement et les repas ne sont pas inclus.</p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-semibold text-text mb-3">Article 6 - Conditions d&apos;annulation</h2>
            <p className="mb-3"><strong>Annulation par l&apos;organisatrice :</strong></p>
            <p>
              En cas d&apos;imprévu majeur (maladie, empêchement matériel, nombre insuffisant d&apos;inscrits),
              la formation pourra être annulée. Les sommes versées seront alors intégralement remboursées.
              Aucune autre indemnité ne pourra être exigée.
            </p>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-sm text-text-muted">
              Contact : Eugénie Vitse &middot; 07 85 34 64 60 &middot; vitse.eu@gmail.com &middot;
              4 place Jeanne d&apos;Arc, 59190 Hazebrouck
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
