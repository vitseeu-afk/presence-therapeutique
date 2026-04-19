import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nos formations — Présence Thérapeutique Intégrative",
  description:
    "Des formations en petit groupe pour les professionnels de santé qui veulent retrouver ancrage et justesse dans leur pratique.",
};

export default function FormationsCatalogue() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-cream py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sage-dark font-medium text-sm tracking-widest uppercase mb-4 animate-fade-in-up">
              Formations professionnelles
            </p>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-text leading-tight mb-6 animate-fade-in-up animation-delay-200">
              Nos formations
            </h1>
            <p className="text-lg sm:text-xl text-text-light leading-relaxed animate-fade-in-up animation-delay-400">
              Des formations en petit groupe pour les professionnels de santé qui veulent
              retrouver ancrage et justesse dans leur pratique.
            </p>
          </div>
        </div>
      </section>

      {/* Prochaine session */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-sage-dark mb-8">
            Prochaine session
          </h2>
          <div className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden">
            <div className="grid lg:grid-cols-3">
              {/* Contenu principal */}
              <div className="lg:col-span-2 p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-sage/10 text-sage-dark text-xs font-semibold rounded-full">
                    Inscriptions ouvertes
                  </span>
                  <span className="px-3 py-1 bg-warm text-text-muted text-xs font-semibold rounded-full">
                    8 places max
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-text mb-2">
                  Module 1 — Présence à Soi
                </h3>
                <p className="text-sage-dark font-medium mb-6">
                  La Présence Thérapeutique Intégrative
                </p>
                <p className="text-text-light leading-relaxed mb-8 max-w-xl">
                  Un voyage de 3 jours pour se retrouver en tant qu&apos;humain, avant d&apos;être soignant.
                  Revenir à l&apos;origine de la posture, du souffle, de la présence.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-sage mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    <div>
                      <p className="text-xs text-text-muted font-medium uppercase tracking-wide">Date</p>
                      <p className="text-sm text-text font-semibold">12, 13, 14 octobre 2026</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-sage mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
                    </svg>
                    <div>
                      <p className="text-xs text-text-muted font-medium uppercase tracking-wide">Lieu</p>
                      <p className="text-sm text-text font-semibold">Loos (59)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-sage mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <div>
                      <p className="text-xs text-text-muted font-medium uppercase tracking-wide">Groupe</p>
                      <p className="text-sm text-text font-semibold">8 places maximum</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/inscription"
                    className="inline-flex items-center justify-center px-8 py-4 bg-sage text-white font-semibold rounded-full hover:bg-sage-dark transition-all hover:shadow-lg text-base"
                  >
                    S&apos;inscrire
                  </Link>
                  <Link
                    href="/formations/presence-therapeutique"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-sage text-sage-dark font-semibold rounded-full hover:bg-sage/5 transition-all text-base"
                  >
                    Voir le programme
                  </Link>
                </div>
              </div>

              {/* Sidebar tarif */}
              <div className="bg-warm lg:border-l border-t lg:border-t-0 border-border p-8 lg:p-10 flex flex-col justify-center">
                <p className="text-xs text-text-muted font-medium uppercase tracking-wide mb-3">Tarif</p>
                <p className="text-4xl font-serif font-bold text-text mb-1">450 €</p>
                <p className="text-sm text-text-muted mb-6">
                  Acompte de 135 € à l&apos;inscription<br />
                  Solde avant le 5 octobre 2026
                </p>
                <div className="space-y-2 text-sm text-text-light">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-sage shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    3 jours · 21h de formation
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-sage shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    HUB Eurasanté, Loos
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-sage shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    Accessible PMR · Parking
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toutes les formations */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-sage-dark mb-8">
            Toutes les formations
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* En présentiel */}
            <div>
              <p className="text-xs text-text-muted font-semibold uppercase tracking-widest mb-4">
                En présentiel
              </p>
              <Link href="/formations/presence-therapeutique" className="group block bg-cream rounded-2xl border border-border p-8 hover:shadow-lg hover:border-sage/30 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-sage/10 text-sage-dark text-xs font-semibold rounded-full">
                    Disponible
                  </span>
                  <svg className="w-5 h-5 text-sage-dark opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold text-text mb-2">
                  La Présence Thérapeutique Intégrative
                </h3>
                <p className="text-sage-dark text-sm font-medium mb-3">Ma formation phare</p>
                <p className="text-text-light text-sm leading-relaxed">
                  Un parcours en 3 modules indépendants pour retrouver ancrage, conscience
                  et justesse dans votre pratique de soin.
                </p>
                <div className="flex items-center gap-4 mt-6 text-xs text-text-muted">
                  <span>3 modules · 3 à 4 jours chacun</span>
                  <span>·</span>
                  <span>Loos (59)</span>
                </div>
              </Link>
            </div>

            {/* En ligne */}
            <div>
              <p className="text-xs text-text-muted font-semibold uppercase tracking-widest mb-4">
                En ligne
              </p>
              <div className="bg-cream/50 rounded-2xl border border-dashed border-border p-8 opacity-70">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-border text-text-muted text-xs font-semibold rounded-full">
                    À venir
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-text-muted mb-2">
                  Introduction à la théorie polyvagale
                </h3>
                <p className="text-text-muted text-sm font-medium mb-3">Formation en ligne</p>
                <p className="text-text-muted text-sm leading-relaxed">
                  Comprendre les fondements neurobiologiques de la régulation émotionnelle
                  pour enrichir votre accompagnement.
                </p>
                <div className="mt-6">
                  <span className="text-xs text-text-muted">Date non encore définie</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
