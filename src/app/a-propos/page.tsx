import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "À propos - Eugénie Vitse, Ostéopathe et Formatrice",
  description:
    "Découvrez le parcours d'Eugénie Vitse, ostéopathe D.O. spécialisée en approche biodynamique, thérapeute en constellation familiale et formatrice en Présence Thérapeutique Intégrative.",
};

export default function APropos() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-cream py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
            <div>
              <p className="text-sage-dark font-medium text-sm tracking-widest uppercase mb-4">À propos</p>
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-text mb-6">
                Eugénie Vitse
              </h1>
              <p className="text-lg text-text-light leading-relaxed mb-4">
                Ostéopathe D.O., spécialisée en approche psycho-corporelle et biodynamique, et thérapeute en constellation familiale.
                Professeur d&apos;anatomie en prépa de faculté de médecine depuis plusieurs années.
              </p>
              <p className="text-text-light leading-relaxed mb-6">
                Cabinet installé à Hazebrouck (59). Formatrice en Présence Thérapeutique Intégrative.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="px-6 py-3 bg-sage text-white font-semibold rounded-full hover:bg-sage-dark transition-all">
                  Me contacter
                </Link>
                <Link href="/formations" className="px-6 py-3 border-2 border-sage text-sage-dark font-semibold rounded-full hover:bg-sage/5 transition-all">
                  Voir les formations
                </Link>
              </div>
            </div>
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
              <Image
                src="/eugenie.jpg"
                alt="Eugénie Vitse - Ostéopathe D.O. et formatrice en Présence Thérapeutique Intégrative"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mon histoire */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-text mb-8">Mon histoire</h2>
          <div className="prose prose-lg text-text-light leading-relaxed space-y-6">
            <p>
              Je suis Eugénie, une femme en mouvement, une âme curieuse et passionnée avec toutes mes couleurs.
              J&apos;aime vivre pleinement, vibrer, explorer, créer. J&apos;ai mille idées, mille rêves et mille projets.
            </p>
            <p>
              Je crois en un monde plus doux, plus respectueux, où l&apos;on prend le temps de s&apos;écouter,
              de se comprendre, de se révéler et de se libérer.
            </p>
            <p>
              Je suis aussi maman d&apos;un incroyable petit garçon, Oscar. La maternité a bouleversé ma vie.
              Elle m&apos;a montré la puissance du corps, du féminin, du vivant. Elle m&apos;a ouvert à un
              nouveau champ de conscience et de connaissance, à une nouvelle dimension de moi-même,
              que je chéris chaque jour un peu plus.
            </p>
          </div>
        </div>
      </section>

      {/* Pourquoi cette formation */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-text mb-8">Pourquoi cette formation ?</h2>
          <div className="space-y-6 text-text-light leading-relaxed">
            <p>
              Dans la relation de soin, nous développons des compétences, des techniques, des outils.
              Et c&apos;est essentiel.
            </p>
            <p>
              Mais nous prenons rarement le temps d&apos;explorer ce qui se passe en nous lorsque nous
              accompagnons. Comment notre corps réagit. Comment nos émotions influencent notre posture.
              Comment notre état intérieur façonne la qualité de la relation.
            </p>
            <p>
              Avec le temps, si cet espace n&apos;existe pas, la fatigue peut s&apos;installer et le sens devenir plus flou.
            </p>
            <div className="bg-sage/10 rounded-2xl p-8 my-8">
              <p className="font-serif text-xl text-text italic">
                Cette formation est née de cette réalité. Offrir un temps pour se recentrer, mieux se comprendre,
                écouter les signaux du corps et des émotions, et intégrer des repères simples pour rester présent
                dans sa pratique.
              </p>
            </div>
            <p>
              Un espace pour approfondir sa posture et accompagner avec plus de conscience,
              de stabilité et de justesse.
            </p>
          </div>
        </div>
      </section>

      {/* Mon fil rouge */}
      <section className="py-16 bg-brown-dark text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/60 text-sm uppercase tracking-widest mb-4">Mon fil rouge</p>
          <p className="text-3xl font-serif font-bold italic">
            Le corps est le chemin de la conscience.
          </p>
        </div>
      </section>

      {/* Mon expertise */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-text mb-4 text-center">Mon expertise</h2>
          <p className="text-text-light text-center mb-12 max-w-2xl mx-auto">
            Une approche unique fondée sur la physiologie du corps et les neurosciences,
            nourrie par plus de 8 ans de pratique clinique et de formations complémentaires.
          </p>

          <div className="space-y-4">
            {[
              { year: "2025", title: "Constellation familiale et systémique", org: "Eric Laudière" },
              { year: "2024", title: "Ostéopathie biodynamique, Transgénérationnel et BBT", org: "Centre Aguila" },
              { year: "2023", title: "Déformation crânienne positionnelle du nourrisson", org: "Plagio'asso" },
              { year: "2022", title: "Ostéopathie biodynamique, maladies chroniques et psychosomatiques", org: "Centre Aguila" },
              { year: "2020", title: "Ostéopathie aquatique", org: "Aix-les-Bains" },
              { year: "2019", title: "Ostéopathie grossesse, accouchement et post-partum", org: "ISO Lille" },
              { year: "2019", title: "Grossesse et prévention pédiatrique", org: "Lille" },
              { year: "2018", title: "Diplôme d'Ostéopathe D.O.", org: "Lille" },
            ].map((item) => (
              <div key={item.year + item.title} className="flex items-start gap-6 bg-white rounded-xl p-5 border border-border">
                <span className="text-sage-dark font-mono font-bold text-sm shrink-0 pt-0.5">{item.year}</span>
                <div>
                  <p className="font-semibold text-text">{item.title}</p>
                  <p className="text-text-muted text-sm">{item.org}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-sage/10 rounded-2xl p-8">
            <p className="text-text-light leading-relaxed text-center">
              Tout au long de mon parcours, je m&apos;appuie sur la physiologie du corps et les neurosciences.
              Mes mentors dans cette évolution : <strong className="text-text">Eric Laudière</strong> et <strong className="text-text">Pascal Anselin</strong>,
              ainsi que de nombreux stages, rencontres, lectures et podcasts.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-sage/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-text mb-6">
            Envie d&apos;échanger ?
          </h2>
          <p className="text-text-light mb-8">
            Je suis disponible pour répondre à vos questions sur la formation ou
            échanger sur votre parcours.
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
