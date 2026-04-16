import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Formations en Présence Thérapeutique Intégrative",
  description:
    "Découvrez nos formations pour professionnels de santé : Module 1 Présence à Soi, Module 2 Présence à l'Autre, Module 3 L'Art du geste juste. Approche psycho-corporelle et neurosciences.",
  keywords: [
    "formation présence thérapeutique",
    "formation soignant",
    "module présence à soi",
    "théorie polyvagale formation",
    "formation régulation émotionnelle",
    "formation psycho-corporelle",
    "formation continue thérapeute",
    "prévention épuisement soignant",
  ],
};

export default function Formations() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-cream py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sage-dark font-medium text-sm tracking-widest uppercase mb-4">
              Formations professionnelles
            </p>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-text mb-6">
              La Présence Thérapeutique :<br />
              <span className="text-sage-dark">du soin de soi, au geste juste</span>
            </h1>
            <p className="text-lg text-text-light leading-relaxed max-w-2xl mx-auto">
              Un parcours en 3 modules indépendants, conçu pour les professionnels de santé
              et thérapeutes qui souhaitent approfondir leur posture et retrouver du sens dans leur pratique.
            </p>
          </div>
        </div>
      </section>

      {/* Note importante */}
      <section className="bg-warm border-y border-border py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-text-light text-sm">
            <strong className="text-text">À noter :</strong> Cette formation s&apos;inscrit dans un cadre professionnel.
            Elle s&apos;adresse aux praticiens souhaitant enrichir leur posture de soin grâce à une approche
            psycho-corporelle fondée sur la physiologie et les neurosciences.
          </p>
        </div>
      </section>

      {/* Module 1 - Detail complet */}
      <section id="module-1" className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Header Module */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-6xl font-serif font-bold text-sage/20">01</span>
              <div>
                <span className="px-3 py-1 bg-sage/10 text-sage-dark text-xs font-semibold rounded-full">Inscriptions ouvertes</span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text mt-2">
                  Présence à Soi
                </h2>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
              {/* Contenu principal */}
              <div className="lg:col-span-2 space-y-10">
                <div>
                  <blockquote className="text-xl font-serif italic text-text/80 border-l-4 border-sage pl-6 mb-6">
                    Se retrouver pour mieux soigner. Un voyage de 3 jours pour ralentir, ressentir, écouter.
                    Se retrouver en tant qu&apos;humain, avant d&apos;être soignant.
                  </blockquote>
                  <p className="text-text-light leading-relaxed">
                    Revenir à l&apos;origine de la posture, du souffle, de la présence.
                    Avant d&apos;accompagner l&apos;autre, il est essentiel de se rencontrer soi.
                  </p>
                </div>

                {/* Objectifs */}
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-text mb-6">Objectifs pédagogiques</h3>
                  <div className="space-y-4">
                    {[
                      { title: "Revisiter votre identité de soignant", desc: "En questionnant vos motivations profondes, votre parcours et vos valeurs." },
                      { title: "Développer une conscience corporelle fine", desc: "En apprenant à reconnaître et écouter les signaux du corps." },
                      { title: "Identifier les liens entre émotions, corps et esprit", desc: "À travers les apports de la théorie polyvagale et des mémoires corporelles." },
                      { title: "Mettre en place des outils de régulation émotionnelle", desc: "Pour cultiver l'ancrage et prévenir l'épuisement." },
                      { title: "Apprendre à s'écouter et se respecter", desc: "En identifiant vos besoins fondamentaux pour un équilibre durable." },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-border">
                        <svg className="w-6 h-6 text-sage mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <p className="font-semibold text-text">{item.title}</p>
                          <p className="text-text-light text-sm mt-1">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Programme jour par jour */}
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-text mb-6">Programme détaillé</h3>
                  <div className="space-y-6">
                    {[
                      {
                        day: "Jour 1",
                        title: "Le corps comme boussole",
                        items: [
                          "Explorer son identité de soignant",
                          "Revisiter le sens du « prendre soin »",
                          "Observer ce que le corps dit de nous",
                          "Découvrir le lien entre posture, respiration et état intérieur",
                          "Pratiques d'ancrage et de pleine conscience",
                        ],
                      },
                      {
                        day: "Jour 2",
                        title: "Corps, émotions et mémoire",
                        items: [
                          "Comprendre ce qu'est une émotion",
                          "Identifier ce qui se passe lorsqu'elle n'est pas accueillie",
                          "Explorer la mémoire corporelle et les mécanismes de stress",
                          "Découvrir les bases de la théorie polyvagale",
                          "Pratiques d'accueil et de régulation",
                        ],
                      },
                      {
                        day: "Jour 3",
                        title: "Intégrer et réguler au quotidien",
                        items: [
                          "Identifier ses besoins fondamentaux",
                          "Expérimenter des outils de régulation émotionnelle et neurologique",
                          "Construire une routine adaptée à son rythme",
                          "Intégrer une posture plus consciente et stable",
                        ],
                      },
                    ].map((day) => (
                      <div key={day.day} className="bg-white rounded-xl p-6 border border-border">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 bg-sage/10 text-sage-dark text-xs font-semibold rounded-full">
                            {day.day}
                          </span>
                          <h4 className="font-serif text-lg font-semibold text-text">{day.title}</h4>
                        </div>
                        <ul className="space-y-2">
                          {day.items.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-text-light text-sm">
                              <div className="w-1.5 h-1.5 bg-sage rounded-full mt-2 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Methode */}
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-text mb-6">Méthode et technique pédagogique</h3>
                  <p className="text-text-light leading-relaxed mb-6">
                    Cette formation alterne en permanence : <strong>compréhension</strong>, <strong>expérimentation</strong> et <strong>intégration</strong>.
                    L&apos;objectif n&apos;est pas seulement d&apos;apprendre, mais de vivre les notions abordées.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      "Apports théoriques clairs et accessibles",
                      "Temps d'introspection guidée",
                      "Méditations (ancrage, présence, accueil)",
                      "Exercices corporels et respiratoires",
                      "Pratiques de régulation concrètes",
                      "Temps d'échange et de partage",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm text-text-light">
                        <div className="w-2 h-2 bg-sage rounded-full shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className="text-text-light leading-relaxed mt-6 italic">
                    Un apprentissage vivant, incarné, qui passe par le corps.
                    Pour faire évoluer durablement votre posture et votre pratique.
                  </p>
                </div>

                {/* Public & Modalites */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 border border-border">
                    <h4 className="font-serif text-lg font-semibold text-text mb-3">Public concerné</h4>
                    <p className="text-text-light text-sm leading-relaxed">
                      Professionnels de santé, praticiens en relation d&apos;aide et thérapeutes :
                      ostéopathes, kinésithérapeutes, psychologues, médecins, sages-femmes,
                      acupuncteurs, kinésiologue et autres praticiens du soin.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-border">
                    <h4 className="font-serif text-lg font-semibold text-text mb-3">Modalités d&apos;accès</h4>
                    <ul className="text-text-light text-sm space-y-2">
                      <li>Groupe de 6 à 8 participants maximum</li>
                      <li>Inscription via formulaire + acompte de 30%</li>
                      <li>Échange préalable par téléphone possible</li>
                      <li>Formation confirmée à partir de 6 inscrits</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sidebar - Carte tarif */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-white rounded-2xl p-8 border border-border shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-sage/10 text-sage-dark text-xs font-semibold rounded-full">Places limitées</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-1">Module 1 : Présence à Soi</h3>
                  <p className="text-text-muted text-sm mb-6">3 jours - 21h de formation</p>

                  <div className="space-y-3 mb-6 text-sm text-text-light">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-sage shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                      </svg>
                      <span>12, 13 et 14 octobre 2026</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-sage shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>9h - 17h30</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-sage shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
                      </svg>
                      <div>
                        <p>HUB Eurasanté</p>
                        <p className="text-text-muted text-xs">350 av. Eugène Avinée, 59120 Loos</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-sage shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H6.375c-.621 0-1.125-.504-1.125-1.125V14.25m17.25 0V6.375C22.5 5.754 21.996 5.25 21.375 5.25H2.625A1.125 1.125 0 001.5 6.375v7.875" />
                      </svg>
                      <span>Parking privé sur place</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-sage shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                      <span>Accessible PMR</span>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6 mb-6">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-3xl font-serif font-bold text-text">450 &euro;</span>
                    </div>
                    <p className="text-xs text-text-muted mb-1">Acompte de 135 &euro; à l&apos;inscription</p>
                    <p className="text-xs text-text-muted">Solde par virement avant le 5 octobre 2026</p>
                  </div>

                  <Link
                    href="/inscription"
                    className="block text-center w-full px-8 py-4 bg-sage text-white font-semibold rounded-full hover:bg-sage-dark transition-all hover:shadow-lg text-lg mb-3"
                  >
                    S&apos;inscrire maintenant
                  </Link>
                  <p className="text-xs text-text-muted text-center">
                    Paiement sécurisé &middot; Satisfait ou remboursé
                  </p>

                  <div className="border-t border-border mt-6 pt-6">
                    <p className="text-xs text-text-muted">
                      L&apos;inscription concerne exclusivement le module 1, sans engagement requis pour les deux autres modules.
                    </p>
                    <p className="text-xs text-text-muted mt-2">
                      Hébergement et repas non inclus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Module 2 & 3 - Apercu */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text mb-4">
              Les prochains modules
            </h2>
            <p className="text-text-light max-w-2xl mx-auto">
              Chaque module est indépendant et peut être suivi séparément.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Module 2 */}
            <div className="bg-cream rounded-2xl p-8 border border-border">
              <span className="text-5xl font-serif font-bold text-sage/15">02</span>
              <h3 className="text-2xl font-serif font-semibold text-text mt-4 mb-2">Présence à l&apos;Autre</h3>
              <p className="text-sage-dark text-sm font-medium mb-4">3 jours en présentiel &middot; Date à venir</p>
              <p className="text-text-light text-sm leading-relaxed mb-6 italic">
                Danser dans la relation avec l&apos;autre : émotions, ajustement, posture.
                Explorer la résonance, les émotions partagées, les dynamiques relationnelles.
              </p>
              <h4 className="font-semibold text-text text-sm mb-3">Objectifs :</h4>
              <ul className="space-y-2 text-sm text-text-light">
                {[
                  "Adopter une posture de neutralité bienveillante",
                  "Renforcer sa capacité à poser des limites claires",
                  "Maîtriser les outils d'écoute active",
                  "Repérer les signes de surcharge émotionnelle",
                  "Éclairer les enjeux relationnels inconscients",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-sage/50 rounded-full mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <span className="inline-flex px-5 py-2.5 bg-border text-text-muted text-sm font-semibold rounded-full">
                  Bientôt disponible
                </span>
              </div>
            </div>

            {/* Module 3 */}
            <div className="bg-cream rounded-2xl p-8 border border-border">
              <span className="text-5xl font-serif font-bold text-sage/15">03</span>
              <h3 className="text-2xl font-serif font-semibold text-text mt-4 mb-2">L&apos;Art du geste juste</h3>
              <p className="text-sage-dark text-sm font-medium mb-4">4 jours en présentiel &middot; Date à venir</p>
              <p className="text-text-light text-sm leading-relaxed mb-6 italic">
                Vers un toucher conscient. Un voyage au cœur du toucher thérapeutique,
                où respect, sécurité et consentement guident chaque geste.
              </p>
              <h4 className="font-semibold text-text text-sm mb-3">Objectifs :</h4>
              <ul className="space-y-2 text-sm text-text-light">
                {[
                  "Renforcer sa présence corporelle et émotionnelle",
                  "Éveiller son ressenti et affiner son intuition",
                  "Approfondir la compréhension du toucher thérapeutique",
                  "Intégrer les notions de cadre et de consentement",
                  "Préserver son intégrité émotionnelle",
                  "Explorer l'intimité relationnelle du soin",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-sage/50 rounded-full mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <span className="inline-flex px-5 py-2.5 bg-border text-text-muted text-sm font-semibold rounded-full">
                  Bientôt disponible
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Temoignages */}
      <section id="temoignages" className="py-20 lg:py-28 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text mb-4">
              Témoignages des participants
            </h2>
            <p className="text-text-light">Module 1 : Présence à Soi</p>
          </div>

          {/* Video placeholder */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="aspect-video bg-brown-dark/10 rounded-2xl flex items-center justify-center border border-border">
              <div className="text-center">
                <svg className="w-16 h-16 text-sage mx-auto mb-3" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
                <p className="text-text-muted text-sm">Témoignages vidéo - Bientôt disponible</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Dr. M.",
                role: "Médecin généraliste",
                text: "Trois jours qui m'ont permis de comprendre pourquoi j'étais si fatiguée. J'ai retrouvé le sens de ma pratique et des outils concrets pour ne plus m'oublier.",
              },
              {
                name: "Sophie L.",
                role: "Kinésithérapeute",
                text: "Une formation profondément humaine et scientifiquement solide. J'ai enfin mis des mots sur ce que je ressentais depuis des années dans ma pratique.",
              },
              {
                name: "Thomas R.",
                role: "Ostéopathe",
                text: "Eugénie crée un espace de confiance rare. On repart avec une conscience de soi plus fine et des outils qui changent la qualité de la relation avec nos patients.",
              },
            ].map((item) => (
              <div key={item.name} className="bg-white rounded-2xl p-8 border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-terracotta" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text-light leading-relaxed mb-6 text-sm italic">&ldquo;{item.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-text text-sm">{item.name}</p>
                  <p className="text-xs text-text-muted">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-sage/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-text mb-6">
            Prêt à vous inscrire ?
          </h2>
          <p className="text-text-light mb-8">
            Module 1 : Présence à Soi &middot; 12-14 octobre 2026 &middot; 450 &euro;
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/inscription"
              className="w-full sm:w-auto px-10 py-4 bg-sage text-white font-semibold rounded-full hover:bg-sage-dark transition-all text-lg"
            >
              S&apos;inscrire maintenant
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-10 py-4 border-2 border-sage text-sage-dark font-semibold rounded-full hover:bg-sage/5 transition-all text-lg"
            >
              Poser une question
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
