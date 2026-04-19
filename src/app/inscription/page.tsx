import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inscription - Module 1 : Présence à Soi",
  description:
    "Inscrivez-vous au Module 1 Présence à Soi. 12-14 octobre 2026 ou 8-10 février 2027, Loos (59). Formation en Présence Thérapeutique Intégrative pour professionnels de santé.",
};

export default function Inscription() {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-cream py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sage-dark font-medium text-sm tracking-widest uppercase mb-4">Inscription</p>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-text mb-4">
              Module 1 : Présence à Soi
            </h1>
            <p className="text-text-light">
              12–14 oct. 2026 ou 8–10 fév. 2027 &middot; HUB Eurasanté, Loos (59) &middot; 450 &euro;
            </p>
          </div>

          {/* Etapes */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2 sm:gap-8 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 bg-sage text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
                <span className="text-sage-dark font-medium hidden sm:inline">Formulaire</span>
              </div>
              <div className="w-8 sm:w-16 h-px bg-border" />
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 bg-border text-text-muted rounded-full flex items-center justify-center font-bold text-xs">2</span>
                <span className="text-text-muted font-medium hidden sm:inline">Acompte (135 &euro;)</span>
              </div>
              <div className="w-8 sm:w-16 h-px bg-border" />
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 bg-border text-text-muted rounded-full flex items-center justify-center font-bold text-xs">3</span>
                <span className="text-text-muted font-medium hidden sm:inline">Confirmation</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {/* Formulaire */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 border border-border">
                <h2 className="text-xl font-serif font-semibold text-text mb-6">Vos informations</h2>
                <form className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-text mb-3">Date souhaitée *</label>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer p-4 rounded-xl border border-border bg-cream/50 hover:border-sage/50 transition-colors">
                        <input type="radio" name="date" value="12-14-octobre-2026" required className="w-4 h-4 text-sage border-border focus:ring-sage" />
                        <span className="text-sm text-text">12, 13 et 14 octobre 2026</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer p-4 rounded-xl border border-border bg-cream/50 hover:border-sage/50 transition-colors">
                        <input type="radio" name="date" value="8-10-fevrier-2027" className="w-4 h-4 text-sage border-border focus:ring-sage" />
                        <span className="text-sm text-text">8, 9 et 10 février 2027</span>
                      </label>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nom" className="block text-sm font-medium text-text mb-1.5">Nom *</label>
                      <input type="text" id="nom" name="nom" required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-text focus:outline-none focus:ring-2 focus:ring-sage/50" />
                    </div>
                    <div>
                      <label htmlFor="prenom" className="block text-sm font-medium text-text mb-1.5">Prénom *</label>
                      <input type="text" id="prenom" name="prenom" required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-text focus:outline-none focus:ring-2 focus:ring-sage/50" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="date_naissance" className="block text-sm font-medium text-text mb-1.5">Date de naissance *</label>
                    <input type="date" id="date_naissance" name="date_naissance" required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-text focus:outline-none focus:ring-2 focus:ring-sage/50" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text mb-1.5">Email *</label>
                      <input type="email" id="email" name="email" required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-text focus:outline-none focus:ring-2 focus:ring-sage/50" />
                    </div>
                    <div>
                      <label htmlFor="telephone" className="block text-sm font-medium text-text mb-1.5">Téléphone *</label>
                      <input type="tel" id="telephone" name="telephone" required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-text focus:outline-none focus:ring-2 focus:ring-sage/50" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="adresse" className="block text-sm font-medium text-text mb-1.5">Adresse postale *</label>
                    <input type="text" id="adresse" name="adresse" required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-text focus:outline-none focus:ring-2 focus:ring-sage/50" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="profession" className="block text-sm font-medium text-text mb-1.5">Profession *</label>
                      <input type="text" id="profession" name="profession" required placeholder="Ex: Ostéopathe, Kinésithérapeute..."
                        className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-sage/50" />
                    </div>
                    <div>
                      <label htmlFor="structure" className="block text-sm font-medium text-text mb-1.5">Structure d&apos;exercice</label>
                      <input type="text" id="structure" name="structure" placeholder="Cabinet, hôpital, clinique..."
                        className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-sage/50" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="annees" className="block text-sm font-medium text-text mb-1.5">Nombre d&apos;années d&apos;exercice *</label>
                    <input type="number" id="annees" name="annees" min="0" required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-text focus:outline-none focus:ring-2 focus:ring-sage/50" />
                  </div>

                  <div>
                    <label htmlFor="attentes" className="block text-sm font-medium text-text mb-1.5">Vos attentes pour cette formation *</label>
                    <textarea id="attentes" name="attentes" rows={4} required
                      placeholder="Décrivez ce que vous attendez de cette formation..."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-sage/50 resize-none" />
                  </div>

                  <div className="border-t border-border pt-6">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" required className="mt-1 w-4 h-4 rounded border-border text-sage focus:ring-sage" />
                      <span className="text-sm text-text-light">
                        En signant cette fiche d&apos;inscription, je confirme avoir lu les{" "}
                        <Link href="/cgv" className="text-sage-dark underline">conditions générales de vente</Link>,
                        et je m&apos;engage à suivre la formation dans sa globalité. *
                      </span>
                    </label>
                  </div>

                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" required className="mt-1 w-4 h-4 rounded border-border text-sage focus:ring-sage" />
                      <span className="text-sm text-text-light">
                        J&apos;accepte la{" "}
                        <Link href="/politique-confidentialite" className="text-sage-dark underline">politique de confidentialité</Link>. *
                      </span>
                    </label>
                  </div>

                  <p className="text-red-600 font-bold text-sm text-center mb-3">2 places restantes</p>
                  <button type="submit"
                    className="w-full px-8 py-4 bg-sage text-white font-semibold rounded-full hover:bg-sage-dark transition-all text-lg">
                    Payer l&apos;acompte de 135 &euro; et valider
                  </button>
                  <p className="text-xs text-text-muted text-center">
                    Paiement sécurisé par Stripe. Vous serez redirigé vers la page de paiement.
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar recap */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl p-6 border border-border">
                  <h3 className="font-serif text-lg font-semibold text-text mb-4">Récapitulatif</h3>
                  <div className="space-y-3 text-sm text-text-light mb-6">
                    <p><strong className="text-text">Formation :</strong> Module 1 - Présence à Soi</p>
                    <div>
                      <strong className="text-text">Dates disponibles :</strong>
                      <p className="mt-1">12, 13 et 14 octobre 2026</p>
                      <p>8, 9 et 10 février 2027</p>
                    </div>
                    <p><strong className="text-text">Horaires :</strong> 9h - 17h30</p>
                    <p><strong className="text-text">Lieu :</strong> HUB Eurasanté, Loos</p>
                    <p><strong className="text-text">Durée :</strong> 3 jours (21h)</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="text-text">Tarif total</span>
                      <span className="text-2xl font-serif font-bold text-text">450 &euro;</span>
                    </div>
                    <div className="flex justify-between items-baseline text-sm">
                      <span className="text-text-muted">Acompte à l&apos;inscription</span>
                      <span className="font-semibold text-sage-dark">135 &euro;</span>
                    </div>
                    <div className="flex justify-between items-baseline text-sm mt-1">
                      <span className="text-text-muted">Solde par virement</span>
                      <span className="text-text-muted">315 &euro;</span>
                    </div>
                  </div>
                </div>

                <div className="bg-warm rounded-2xl p-6 border border-border">
                  <h4 className="font-semibold text-text text-sm mb-3">Après inscription :</h4>
                  <ol className="space-y-2 text-sm text-text-light list-decimal pl-4">
                    <li>Email de confirmation avec les détails</li>
                    <li>Coordonnées bancaires pour le solde</li>
                    <li>Rappel 3 semaines avant si solde non reçu</li>
                    <li>Solde a verser au plus tard le 5 octobre 2026</li>
                  </ol>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-border">
                  <h4 className="font-semibold text-text text-sm mb-3">Garanties</h4>
                  <ul className="space-y-2 text-sm text-text-light">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-sage shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      Paiement 100% sécurisé
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-sage shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      Petit groupe (8 max)
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-sage shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      Remboursement si annulation
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-sage shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      Groupe WhatsApp inclus
                    </li>
                  </ul>
                </div>

                <p className="text-xs text-text-muted text-center">
                  Une question ?{" "}
                  <a href="tel:+33787394938" className="text-sage-dark underline">07 87 39 49 38</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
