import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Articles sur la Présence Thérapeutique et les Neurosciences",
  description:
    "Articles, réflexions et ressources sur la présence thérapeutique, la régulation émotionnelle, la théorie polyvagale et la posture du soignant. Par Eugénie Vitse.",
  keywords: [
    "blog présence thérapeutique",
    "articles neurosciences soignant",
    "théorie polyvagale",
    "régulation émotionnelle thérapeute",
    "épuisement professionnel soignant",
    "conscience corporelle praticien",
    "posture thérapeutique",
  ],
};

const articles = [
  {
    slug: "qu-est-ce-que-la-presence-therapeutique-integrative",
    title: "Qu'est-ce que la Présence Thérapeutique Intégrative ?",
    excerpt:
      "La présence thérapeutique intégrative est une approche qui place le corps et les neurosciences au cœur de la relation de soin. Elle invite le praticien à explorer sa propre présence pour mieux accompagner ses patients.",
    date: "15 mars 2026",
    category: "Fondamentaux",
    readTime: "5 min",
  },
  {
    slug: "theorie-polyvagale-et-pratique-de-soin",
    title: "Théorie polyvagale : comprendre votre système nerveux pour mieux soigner",
    excerpt:
      "La théorie polyvagale de Stephen Porges offre un éclairage précieux sur les mécanismes de régulation du système nerveux. Découvrez comment l'appliquer concrètement dans votre pratique quotidienne.",
    date: "28 février 2026",
    category: "Neurosciences",
    readTime: "7 min",
  },
  {
    slug: "prevenir-epuisement-professionnel-soignant",
    title: "Prévenir l'épuisement professionnel : le rôle de la conscience corporelle",
    excerpt:
      "L'épuisement professionnel des soignants est une réalité. La conscience corporelle et la régulation émotionnelle sont des leviers puissants pour en prévenir les premiers signes.",
    date: "10 février 2026",
    category: "Prévention",
    readTime: "6 min",
  },
  {
    slug: "emotions-du-soignant-comprendre-et-reguler",
    title: "Les émotions du soignant : comprendre pour mieux réguler",
    excerpt:
      "Comment nos émotions influencent notre posture de soin ? Comprendre les mécanismes émotionnels pour développer des stratégies de régulation concrètes et durables.",
    date: "25 janvier 2026",
    category: "Régulation émotionnelle",
    readTime: "8 min",
  },
  {
    slug: "pourquoi-le-corps-est-le-chemin-de-la-conscience",
    title: "Pourquoi le corps est le chemin de la conscience",
    excerpt:
      "Explorer le lien entre conscience corporelle et qualité de présence dans le soin. Comment l'écoute du corps transforme la relation thérapeutique et prévient l'usure.",
    date: "8 janvier 2026",
    category: "Approche psycho-corporelle",
    readTime: "5 min",
  },
  {
    slug: "ancrage-et-respiration-outils-du-quotidien",
    title: "Ancrage et respiration : vos outils au quotidien",
    excerpt:
      "Des techniques simples et accessibles d'ancrage et de respiration pour réguler votre système nerveux entre deux consultations. Approche fondée sur la physiologie.",
    date: "20 décembre 2025",
    category: "Pratique",
    readTime: "4 min",
  },
];

export default function Blog() {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-cream py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-text mb-6">
              Blog & Ressources
            </h1>
            <p className="text-lg text-text-light leading-relaxed">
              Réflexions, articles et ressources autour de la présence thérapeutique,
              des neurosciences et de la posture du soignant.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="bg-white rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-sage/10 text-sage-dark text-xs font-semibold rounded-full">
                    {article.category}
                  </span>
                  <span className="text-text-muted text-xs">{article.date}</span>
                  <span className="text-text-muted text-xs">&middot; {article.readTime} de lecture</span>
                </div>
                <h2 className="text-xl font-serif font-semibold text-text mb-3 hover:text-sage-dark transition-colors">
                  <Link href={`/blog/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>
                <p className="text-text-light text-sm leading-relaxed mb-4">{article.excerpt}</p>
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-2 text-sage-dark text-sm font-semibold hover:gap-3 transition-all"
                >
                  Lire l&apos;article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-sage/10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-serif font-bold text-text mb-4">
            Ne manquez aucun article
          </h2>
          <p className="text-text-light mb-6 text-sm">
            Recevez les nouveaux articles et les dates des prochaines formations.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-5 py-3 rounded-full border border-border bg-white text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-sage/50"
              required
            />
            <button type="submit" className="px-6 py-3 bg-sage text-white font-semibold rounded-full hover:bg-sage-dark transition-all">
              S&apos;abonner
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
