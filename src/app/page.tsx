import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section - ATTENTION */}
      <section className="relative bg-gradient-to-b from-white via-cream to-warm overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-sage rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-terracotta rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-40 relative">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sage-dark font-medium text-sm tracking-widest uppercase mb-8 animate-fade-in-up">
              Formation pour professionnels de santé
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-serif font-bold text-text leading-tight mb-8 animate-fade-in-up animation-delay-200">
              <>
                <span className="block">Et si la clé d&apos;un meilleur accompagnement</span>
                <span className="block mt-4 text-3xl sm:text-4xl" style={{color: '#a1b9a1', fontStyle: 'italic'}}>commençait par soi ?</span>
              </>
            </h1>
            <p className="text-lg sm:text-xl text-text-light leading-relaxed mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
              Découvrez la Présence Thérapeutique Intégrative : une approche psycho-corporelle
              fondée sur les neurosciences, pour retrouver ancrage, conscience et justesse
              dans votre pratique de soin.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up animation-delay-600">
              <Link
                href="/formations"
                className="w-full sm:w-auto px-8 py-4 bg-sage text-white font-semibold rounded-full hover:bg-sage-dark transition-all hover:shadow-xl text-center text-lg"
              >
                Découvrir les formations
              </Link>
              <Link
                href="/a-propos"
                className="w-full sm:w-auto px-8 py-4 border-2 border-sage text-sage-dark font-semibold rounded-full hover:bg-sage/5 transition-all text-center text-lg"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-y border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-2xl font-serif font-bold text-sage-dark">8+</p>
              <p className="text-sm text-text-muted mt-1">Années d&apos;expérience clinique</p>
            </div>
            <div>
              <p className="text-2xl font-serif font-bold text-sage-dark">D.O.</p>
              <p className="text-sm text-text-muted mt-1">Ostéopathe diplômée</p>
            </div>
            <div>
              <p className="text-2xl font-serif font-bold text-sage-dark">8 max</p>
              <p className="text-sm text-text-muted mt-1">Participants par session</p>
            </div>
            <div>
              <p className="text-2xl font-serif font-bold text-sage-dark">100%</p>
              <p className="text-sm text-text-muted mt-1">Approche scientifique</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERET - Probleme / Solution */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text mb-6">
              Vous êtes professionnel de santé ou thérapeute ?
            </h2>
            <p className="text-lg text-text-light leading-relaxed">
              Vous maîtrisez les techniques. Mais qu&apos;en est-il de votre propre présence dans le soin ?
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "La fatigue s'installe",
                desc: "Après des années de pratique, le corps parle. La charge émotionnelle pèse. L'enthousiasme des débuts s'estompe.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Le sens devient flou",
                desc: "Vous vous demandez si vous êtes encore à la bonne place. Les automatismes ont pris le dessus sur la présence.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                  </svg>
                ),
              },
              {
                title: "Le corps est oublié",
                desc: "Vous prenez soin des autres, mais rarement de vous. Vos propres signaux corporels et émotionnels restent ignorés.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 bg-warm rounded-xl flex items-center justify-center text-terracotta">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-text">{item.title}</h3>
                </div>
                <p className="text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-sage/10 rounded-3xl p-8 lg:p-12 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-text mb-4">
              La Présence Thérapeutique Intégrative est née de cette réalité
            </h3>
            <p className="text-text-light leading-relaxed max-w-2xl mx-auto mb-8">
              Une formation qui ne vous apprend pas une technique de plus, mais qui vous ramène
              à l&apos;essentiel : votre corps, vos émotions, votre présence. Pour accompagner avec
              plus de conscience, de stabilité et de justesse.
            </p>
            <Link
              href="/formations"
              className="inline-flex px-8 py-3.5 bg-sage text-white font-semibold rounded-full hover:bg-sage-dark transition-all hover:shadow-lg"
            >
              Voir le programme complet
            </Link>
          </div>
        </div>
      </section>

      {/* DESIR - Formation Preview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sage-dark font-medium text-sm tracking-widest uppercase mb-4">
              Prochaine session
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text mb-4">
              Module 1 : Présence à Soi
            </h2>
            <p className="text-lg text-text-light">12, 13 et 14 octobre 2026 &middot; 3 jours &middot; Loos (59)</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <blockquote className="text-xl font-serif italic text-text/80 mb-8 border-l-4 border-sage pl-6">
                Se retrouver pour mieux soigner. Un voyage de 3 jours pour ralentir, ressentir, écouter.
              </blockquote>
              <ul className="space-y-4">
                {[
                  "Revisiter votre identité de soignant",
                  "Développer une conscience corporelle fine",
                  "Comprendre les liens entre émotions, corps et esprit",
                  "Mettre en place des outils de régulation émotionnelle",
                  "Apprendre à s'écouter et se respecter",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-sage mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-cream rounded-3xl p-8 lg:p-10 border border-border">
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 bg-sage/10 text-sage-dark text-xs font-semibold rounded-full">Places limitées</span>
                <span className="px-3 py-1 bg-terracotta/10 text-terracotta text-xs font-semibold rounded-full">8 places max</span>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-2">Module 1 : Présence à Soi</h3>
              <p className="text-text-light mb-6">3 jours intenses de reconnexion à soi</p>

              <div className="space-y-3 mb-8 text-sm">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  <span>12, 13 et 14 octobre 2026</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>9h - 17h30 (21h de formation)</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
                  </svg>
                  <span>HUB Eurasanté, Loos (59)</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                  <span>6 à 8 participants</span>
                </div>
              </div>

              <div className="border-t border-border pt-6 mb-6">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-serif font-bold text-text">450 &euro;</span>
                </div>
                <p className="text-sm text-text-muted">Acompte de 135 &euro; à l&apos;inscription (30%)</p>
              </div>

              <Link
                href="/inscription"
                className="block text-center w-full px-8 py-4 bg-sage text-white font-semibold rounded-full hover:bg-sage-dark transition-all hover:shadow-lg text-lg"
              >
                Réservez votre place
              </Link>
              <p className="text-xs text-text-muted text-center mt-3">
                Paiement sécurisé par Stripe
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methode */}
      <section className="py-20 lg:py-28 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text mb-4">
              Une approche unique, ancrée dans le corps et les neurosciences
            </h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              Ni développement personnel, ni formation technique classique.
              Un espace professionnel pour approfondir votre posture de soignant.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Apports théoriques",
                desc: "Neurosciences, théorie polyvagale, physiologie du stress. Des connaissances solides et accessibles.",
              },
              {
                title: "Pratiques corporelles",
                desc: "Exercices d'ancrage, de respiration et de pleine conscience. Le corps comme outil de connaissance.",
              },
              {
                title: "Introspection guidée",
                desc: "Des temps pour explorer votre vécu, vos mécanismes et vos ressources intérieures.",
              },
              {
                title: "Régulation émotionnelle",
                desc: "Des outils concrets pour gérer la charge émotionnelle du soin au quotidien.",
              },
              {
                title: "Échanges et partage",
                desc: "Un groupe restreint pour un espace de parole authentique entre pairs.",
              },
              {
                title: "Intégration durable",
                desc: "Des repères simples à intégrer dans votre pratique pour un changement qui dure.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-7 border border-border hover:shadow-md transition-shadow">
                <div className="w-2 h-2 bg-sage rounded-full mb-4" />
                <h3 className="font-serif text-lg font-semibold text-text mb-2">{item.title}</h3>
                <p className="text-text-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Temoignages */}
      <section id="temoignages" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text mb-4">
              Ce qu&apos;en disent les participants
            </h2>
            <p className="text-text-light">Retours du Module 1 : Présence à Soi</p>
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
              <div key={item.name} className="bg-cream rounded-2xl p-8 border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-terracotta" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text-light leading-relaxed mb-6 text-sm italic">
                  &ldquo;{item.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-text text-sm">{item.name}</p>
                  <p className="text-xs text-text-muted">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A propos preview */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
            <div>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
                <Image
                  src="/eugenie.jpg"
                  alt="Eugénie Vitse - Ostéopathe D.O. et formatrice en Présence Thérapeutique Intégrative"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <p className="text-sage-dark font-medium text-sm tracking-widest uppercase mb-4">
                Votre formatrice
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text mb-6">
                Eugénie Vitse
              </h2>
              <p className="text-text-light leading-relaxed mb-4">
                Ostéopathe D.O. spécialisée en approche biodynamique et thérapeute en constellation familiale,
                j&apos;accompagne depuis plus de 8 ans des patients au cabinet et forme de futurs médecins
                en tant que professeur d&apos;anatomie.
              </p>
              <p className="text-text-light leading-relaxed mb-6">
                La Présence Thérapeutique Intégrative est née de ma propre quête : comprendre
                comment notre état intérieur façonne la qualité du soin. Une approche fondée sur
                la physiologie du corps et les neurosciences, pas sur des croyances.
              </p>
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 text-sage-dark font-semibold hover:gap-3 transition-all"
              >
                Découvrir mon parcours
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Parcours complet */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sage-dark font-medium text-sm tracking-widest uppercase mb-4">
              La Présence Thérapeutique : du soin de soi, au geste juste
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text mb-4">
              Un parcours en 3 modules
            </h2>
            <p className="text-text-light max-w-2xl mx-auto">
              Chaque module est indépendant. Inscrivez-vous au module qui vous correspond, sans engagement pour la suite.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Présence à Soi",
                subtitle: "Se retrouver pour mieux soigner",
                duration: "3 jours",
                status: "Octobre 2026",
                available: true,
              },
              {
                num: "02",
                title: "Présence à l'Autre",
                subtitle: "Danser dans la relation avec l'autre",
                duration: "3 jours",
                status: "Date à venir",
                available: false,
              },
              {
                num: "03",
                title: "L'Art du geste juste",
                subtitle: "Vers un toucher conscient",
                duration: "4 jours",
                status: "Date à venir",
                available: false,
              },
            ].map((module) => (
              <div
                key={module.num}
                className={`rounded-2xl p-8 border ${
                  module.available
                    ? "bg-sage/5 border-sage/30 ring-2 ring-sage/20"
                    : "bg-cream border-border"
                }`}
              >
                <span className="text-5xl font-serif font-bold text-sage/20">{module.num}</span>
                <h3 className="text-xl font-serif font-semibold text-text mt-4 mb-2">{module.title}</h3>
                <p className="text-text-light text-sm mb-4">{module.subtitle}</p>
                <div className="flex items-center gap-4 text-sm text-text-muted mb-6">
                  <span>{module.duration}</span>
                  <span>&middot;</span>
                  <span>{module.status}</span>
                </div>
                {module.available ? (
                  <Link
                    href="/formations"
                    className="inline-flex px-6 py-2.5 bg-sage text-white text-sm font-semibold rounded-full hover:bg-sage-dark transition-all"
                  >
                    Voir le programme
                  </Link>
                ) : (
                  <span className="inline-flex px-6 py-2.5 bg-border text-text-muted text-sm font-semibold rounded-full">
                    Bientôt disponible
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 lg:py-28 bg-sage/10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-text mb-4">
            Restez informé
          </h2>
          <p className="text-text-light mb-8">
            Recevez les dates des prochaines formations, ateliers et stages
            directement dans votre boîte mail.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-5 py-3.5 rounded-full border border-border bg-white text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-sage/50"
              required
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-sage text-white font-semibold rounded-full hover:bg-sage-dark transition-all"
            >
              S&apos;inscrire
            </button>
          </form>
          <p className="text-xs text-text-muted mt-4">
            Pas de spam. Désabonnement en un clic.
          </p>
        </div>
      </section>

      {/* ACTION - CTA Final */}
      <section className="py-20 lg:py-28 bg-brown-dark text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
            Prêt à retrouver le sens de votre pratique ?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Rejoignez un petit groupe de professionnels engagés pour 3 jours
            de formation intensive en Présence Thérapeutique Intégrative.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/inscription"
              className="w-full sm:w-auto px-10 py-4 bg-sage text-white font-semibold rounded-full hover:bg-sage-light hover:text-text transition-all text-lg"
            >
              Réservez votre place
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-10 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all text-lg"
            >
              Posez vos questions
            </Link>
          </div>
          <p className="text-white/40 text-sm mt-6">
            8 places maximum &middot; Paiement sécurisé &middot; Satisfait ou remboursé
          </p>
        </div>
      </section>
    </>
  );
}
