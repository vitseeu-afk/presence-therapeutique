import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Entreprises & Institutions - Conférences et Interventions",
  description:
    "Conférences et interventions en entreprise, institutions et hôpitaux. Présence thérapeutique, bien-être au travail, prévention de l'épuisement professionnel des soignants.",
  keywords: [
    "ostéopathe en entreprise",
    "conférence bien-être soignant",
    "prévention burnout soignant",
    "intervention hôpital",
    "formation équipe soignante",
    "qualité de vie au travail santé",
  ],
};

export default function Entreprises() {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-cream py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sage-dark font-medium text-sm tracking-widest uppercase mb-4">
              Pour les professionnels
            </p>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-text mb-6">
              Entreprises, Institutions & Hôpitaux
            </h1>
            <p className="text-lg text-text-light leading-relaxed">
              Des conférences et interventions sur mesure autour de la présence thérapeutique,
              du bien-être au travail et de la prévention de l&apos;épuisement professionnel.
            </p>
          </div>
        </div>
      </section>

      {/* Offres */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Conférences",
                desc: "Interventions inspirantes sur la présence thérapeutique, la régulation émotionnelle et la prévention de l'épuisement. Adaptées à votre contexte et vos équipes.",
                for: "Hôpitaux, cliniques, centres de soin, écoles de formation",
                duration: "1h à 2h",
              },
              {
                title: "Ateliers en équipe",
                desc: "Des ateliers pratiques pour vos équipes soignantes : ancrage, gestion du stress, conscience corporelle. Des outils concrets et applicables immédiatement.",
                for: "Équipes soignantes, services hospitaliers, cabinets de groupe",
                duration: "Demi-journée ou journée",
              },
              {
                title: "Ostéopathie en entreprise",
                desc: "Des séances d'ostéopathie directement dans vos locaux pour améliorer le bien-être de vos collaborateurs. Prévention des TMS et gestion du stress.",
                for: "Entreprises, institutions",
                duration: "Sur devis",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-serif font-semibold text-text mb-3">{item.title}</h3>
                <p className="text-text-light text-sm leading-relaxed mb-6">{item.desc}</p>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-text">Pour qui</p>
                    <p className="text-text-muted">{item.for}</p>
                  </div>
                  <div>
                    <p className="font-medium text-text">Durée</p>
                    <p className="text-text-muted">{item.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Themes */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-text mb-4 text-center">Thèmes d&apos;intervention</h2>
          <p className="text-text-light text-center mb-14 text-lg max-w-2xl mx-auto">Des sujets ancrés dans la pratique clinique, adaptables à vos équipes et contextes.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "La présence thérapeutique : un levier de qualité de soin",
              "Prévention de l'épuisement professionnel chez les soignants",
              "Le corps du soignant : écouter pour mieux accompagner",
              "Régulation émotionnelle et théorie polyvagale en pratique",
              "Posture et conscience corporelle dans la relation de soin",
              "Neurosciences et qualité de la relation patient-soignant",
            ].map((theme) => (
              <div key={theme} className="flex flex-col gap-4 bg-cream rounded-2xl p-8 border border-border hover:shadow-md transition-shadow">
                <div className="w-3 h-3 bg-sage rounded-full shrink-0" />
                <span className="text-text font-medium text-base leading-relaxed">{theme}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-sage/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-text mb-6">
            Discutons de votre projet
          </h2>
          <p className="text-text-light mb-8">
            Chaque intervention est adaptée à vos besoins. Contactez-moi pour
            échanger sur votre projet et construire ensemble un programme sur mesure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-3.5 bg-sage text-white font-semibold rounded-full hover:bg-sage-dark transition-all">
              Me contacter
            </Link>
            <a href="tel:+33787394938" className="px-8 py-3.5 border-2 border-sage text-sage-dark font-semibold rounded-full hover:bg-sage/5 transition-all">
              07 87 39 49 38
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
