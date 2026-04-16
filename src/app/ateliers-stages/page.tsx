import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ateliers et Stages - Présence Thérapeutique",
  description:
    "Découvrez nos ateliers et stages en présence thérapeutique intégrative. Des formats courts pour explorer la conscience corporelle, la régulation émotionnelle et la posture de soin.",
  keywords: [
    "atelier présence thérapeutique",
    "stage thérapeute",
    "atelier conscience corporelle",
    "stage régulation émotionnelle",
    "formation courte thérapeute",
  ],
};

export default function AteliersStages() {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-cream py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sage-dark font-medium text-sm tracking-widest uppercase mb-4">
              Explorer, expérimenter, intégrer
            </p>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-text mb-6">
              Ateliers & Stages
            </h1>
            <p className="text-lg text-text-light leading-relaxed">
              Des formats courts et intenses pour découvrir ou approfondir la Présence Thérapeutique Intégrative.
              Ouverts aux professionnels de santé et thérapeutes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sage/10 rounded-3xl p-8 lg:p-12 text-center mb-16">
            <div className="w-16 h-16 bg-sage/20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-sage" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-serif font-bold text-text mb-4">Prochainement</h2>
            <p className="text-text-light max-w-xl mx-auto mb-8">
              Les premiers ateliers et stages sont en cours de préparation.
              Inscrivez-vous à la newsletter pour être informé des prochaines dates.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-5 py-3 rounded-full border border-border bg-white text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-sage/50"
                required
              />
              <button type="submit" className="px-6 py-3 bg-sage text-white font-semibold rounded-full hover:bg-sage-dark transition-all">
                Me prévenir
              </button>
            </form>
          </div>

          {/* Types d'ateliers prevus */}
          <h2 className="text-2xl font-serif font-bold text-text mb-8 text-center">À venir</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Atelier Ancrage & Respiration",
                desc: "Découvrez des techniques simples d'ancrage et de respiration pour réguler votre système nerveux au quotidien.",
                duration: "Demi-journée",
              },
              {
                title: "Stage Théorie Polyvagale en pratique",
                desc: "Comprendre et appliquer la théorie polyvagale dans votre pratique de soin. Aspects théoriques et exercices pratiques.",
                duration: "1 journée",
              },
              {
                title: "Atelier Conscience corporelle du soignant",
                desc: "Explorer les signaux de votre corps pendant le soin. Apprendre à les écouter pour une meilleure qualité de présence.",
                duration: "Demi-journée",
              },
              {
                title: "Stage Émotions et mémoire corporelle",
                desc: "Plongez dans la compréhension des mécanismes émotionnels et leur empreinte dans le corps. Exercices de régulation.",
                duration: "1 journée",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-7 border border-border">
                <span className="text-xs text-sage-dark font-semibold bg-sage/10 px-3 py-1 rounded-full">{item.duration}</span>
                <h3 className="font-serif text-lg font-semibold text-text mt-4 mb-2">{item.title}</h3>
                <p className="text-text-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-text-light mb-6">
            Vous souhaitez organiser un atelier pour votre équipe ou votre structure ?
          </p>
          <Link href="/contact" className="px-8 py-3.5 bg-sage text-white font-semibold rounded-full hover:bg-sage-dark transition-all inline-block">
            Me contacter
          </Link>
        </div>
      </section>
    </>
  );
}
