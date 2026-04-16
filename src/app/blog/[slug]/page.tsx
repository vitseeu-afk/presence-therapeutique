import Link from "next/link";
import { notFound } from "next/navigation";

const articles: Record<string, { title: string; category: string; date: string; readTime: string; content: string[] }> = {
  "qu-est-ce-que-la-presence-therapeutique-integrative": {
    title: "Qu'est-ce que la Présence Thérapeutique Intégrative ?",
    category: "Fondamentaux",
    date: "15 mars 2026",
    readTime: "5 min",
    content: [
      "La Présence Thérapeutique Intégrative est une approche qui place le corps, les émotions et les neurosciences au cœur de la relation de soin. Elle ne remplace aucune technique : elle vient enrichir la posture du praticien en l'invitant à explorer sa propre présence.",
      "Dans la relation de soin, nous développons des compétences, des techniques, des outils. Et c'est essentiel. Mais nous prenons rarement le temps d'explorer ce qui se passe en nous lorsque nous accompagnons un patient. Comment notre corps réagit. Comment nos émotions influencent notre posture. Comment notre état intérieur façonne la qualité de la relation.",
      "La présence thérapeutique intégrative s'appuie sur trois piliers fondamentaux : la conscience corporelle, la régulation émotionnelle et la compréhension des mécanismes neurophysiologiques. Chacun de ces piliers est soutenu par les avancées des neurosciences et de la physiologie.",
      "Le premier pilier, la conscience corporelle, invite le soignant à porter attention à ses propres sensations pendant la consultation. Tension dans les épaules, respiration qui s'accélère, oppression thoracique : autant de signaux que le corps envoie et que nous avons appris à ignorer.",
      "Le deuxième pilier, la régulation émotionnelle, propose des outils concrets pour gérer la charge émotionnelle inhérente au métier de soignant. Il ne s'agit pas de supprimer les émotions, mais d'apprendre à les accueillir, les comprendre et les réguler pour qu'elles ne deviennent pas un obstacle.",
      "Le troisième pilier s'appuie sur les neurosciences, notamment la théorie polyvagale de Stephen Porges. Cette théorie offre un éclairage précieux sur les mécanismes de régulation du système nerveux autonome et leur impact sur notre capacité à être présent et disponible dans la relation de soin.",
      "La Présence Thérapeutique Intégrative n'est pas une formation de développement personnel. Elle s'inscrit dans un cadre professionnel et s'adresse aux praticiens qui souhaitent enrichir leur posture de soin grâce à une approche fondée sur la physiologie et les neurosciences.",
    ],
  },
  "theorie-polyvagale-et-pratique-de-soin": {
    title: "Théorie polyvagale : comprendre votre système nerveux pour mieux soigner",
    category: "Neurosciences",
    date: "28 février 2026",
    readTime: "7 min",
    content: [
      "La théorie polyvagale, développée par le neuroscientifique Stephen Porges, a révolutionné notre compréhension du système nerveux autonome. Pour les professionnels de santé, elle offre des clés concrètes pour comprendre leurs propres réactions physiologiques pendant le soin.",
      "Au cœur de cette théorie se trouve l'idée que notre système nerveux autonome n'est pas simplement divisé en deux branches (sympathique et parasympathique), mais en trois circuits hiérarchiques qui déterminent nos réponses face à l'environnement.",
      "Le circuit vagal ventral, le plus évolué, est celui de l'engagement social. Lorsque nous nous sentons en sécurité, ce circuit est actif : notre voix est modulée, notre expression faciale est ouverte, nous sommes capables d'écoute et de présence. C'est l'état optimal pour le soin.",
      "Le circuit sympathique s'active face à une menace perçue. Notre rythme cardiaque augmente, notre respiration s'accélère, nos muscles se tendent. En consultation, cela peut se manifester par de l'agitation, de l'irritabilité ou une difficulté à rester pleinement présent.",
      "Le circuit vagal dorsal, le plus ancien, est celui de l'immobilisation. Face à un danger extrême, le corps se fige, se déconnecte. Chez le soignant, cela peut se traduire par un sentiment d'engourdissement, de déconnexion émotionnelle, voire d'épuisement profond.",
      "Comprendre ces mécanismes permet au soignant de reconnaître son propre état physiologique et d'utiliser des stratégies de régulation pour revenir dans la fenêtre de tolérance du vagal ventral. Des exercices simples de respiration, d'ancrage et de conscience corporelle peuvent activer ce circuit.",
      "L'application de la théorie polyvagale dans la pratique de soin va au-delà de la seule régulation du soignant. Elle permet également de mieux comprendre les réactions des patients et d'adapter sa posture pour créer un environnement de sécurité neuroceptive favorable à la guérison.",
    ],
  },
  "prevenir-epuisement-professionnel-soignant": {
    title: "Prévenir l'épuisement professionnel : le rôle de la conscience corporelle",
    category: "Prévention",
    date: "10 février 2026",
    readTime: "6 min",
    content: [
      "L'épuisement professionnel des soignants est un enjeu majeur de santé publique. Selon les études récentes, près d'un soignant sur deux présente des signes de burn-out au cours de sa carrière. La conscience corporelle constitue un levier puissant et souvent sous-estimé de prévention.",
      "L'épuisement ne s'installe pas du jour au lendemain. Il est le résultat d'une accumulation progressive de micro-stress, de charges émotionnelles non régulées et de signaux corporels ignorés. Le corps envoie des alertes bien avant que l'esprit ne prenne conscience de la surcharge.",
      "La conscience corporelle, c'est la capacité à percevoir et à interpréter les signaux que notre corps nous envoie en temps réel. Une tension dans la mâchoire entre deux patients, un souffle qui se raccourcit, des épaules qui se crispent : ces signaux sont des indicateurs précieux de notre état intérieur.",
      "Développer cette conscience ne demande pas des heures de méditation. Il s'agit d'apprendre à s'arrêter quelques secondes entre deux consultations pour scanner ses sensations. Où est-ce que je ressens de la tension ? Comment est ma respiration ? Suis-je encore ancré dans mon corps ?",
      "Des outils simples de régulation peuvent ensuite être mobilisés : trois respirations profondes avec un temps d'expiration allongé pour activer le système parasympathique, un ancrage par les pieds pour se reconnecter au sol, un mouvement d'épaules pour relâcher la tension.",
      "L'intégration de ces pratiques dans le quotidien professionnel ne nécessite que quelques minutes par jour. Mais leur impact est considérable : réduction du stress, meilleure qualité de présence avec les patients, prévention des premiers signes d'épuisement.",
      "La prévention de l'épuisement passe aussi par la capacité à identifier ses besoins fondamentaux et à poser des limites claires. Le corps est un allié précieux dans cette démarche : il nous indique quand nous avons dépassé nos limites, bien avant que notre mental ne l'accepte.",
    ],
  },
  "emotions-du-soignant-comprendre-et-reguler": {
    title: "Les émotions du soignant : comprendre pour mieux réguler",
    category: "Régulation émotionnelle",
    date: "25 janvier 2026",
    readTime: "8 min",
    content: [
      "Le soignant est un être humain avant d'être un professionnel. À ce titre, il ressent des émotions face à la souffrance, la maladie, la mort. Pourtant, la formation initiale aborde rarement cette dimension, laissant le praticien seul face à sa charge émotionnelle.",
      "Une émotion est avant tout un processus physiologique. Avant de la nommer ou de la comprendre, nous la ressentons dans notre corps : accélération cardiaque, boule dans la gorge, chaleur au visage, tension musculaire. Le corps réagit toujours avant l'esprit.",
      "Quand une émotion n'est pas accueillie, elle ne disparaît pas. Elle se stocke dans le corps sous forme de tensions, de douleurs chroniques, de fatigue inexpliquée. C'est ce que les neurosciences appellent la mémoire somatique ou mémoire corporelle.",
      "La régulation émotionnelle ne consiste pas à supprimer ou à contrôler ses émotions. Elle consiste a les accueillir, a les reconnaître et à utiliser des stratégies pour revenir à un état d'équilibre. Plusieurs approches sont possibles.",
      "La co-régulation, d'abord, qui passe par la qualité du lien avec les pairs. Un groupe de supervision, un collegue de confiance, un espace de parole : autant de ressources pour partager et deposer ce qui pese.",
      "L'auto-régulation ensuite, qui s'appuie sur des outils concrets : respiration guidée, techniques d'ancrage, mouvement, écriture. Chaque praticien peut trouver les outils qui lui correspondent et les intégrer dans sa routine quotidienne.",
      "Enfin, la comprehension de ses propres mécanismes émotionnels est un facteur protecteur puissant. Comprendre pourquoi telle situation me touche plus qu'une autre, identifier mes zones de vulnérabilité, reconnaître mes schémas répétitifs : autant de pas vers une pratique plus consciente et plus durable.",
    ],
  },
  "pourquoi-le-corps-est-le-chemin-de-la-conscience": {
    title: "Pourquoi le corps est le chemin de la conscience",
    category: "Approche psycho-corporelle",
    date: "8 janvier 2026",
    readTime: "5 min",
    content: [
      "Le corps est le chemin de la conscience. Cette phrase, loin d'etre une simple formule poétique, résume une réalité que les neurosciences confirment : c'est par le corps que nous accedons à une compréhension plus profonde de nous-memes et de nos interactions.",
      "La conscience corporelle, ou intéroception, est notre capacité à percevoir les signaux internes de notre corps. Battements cardiaques, respiration, sensations digestives, tensions musculaires : ces informations, souvent infraconscientes, constituent un flux continu de données sur notre état intérieur.",
      "Les recherches en neurosciences montrent que les personnes ayant une bonne conscience intéroceptive ont généralement une meilleure régulation émotionnelle, une plus grande empathie et une prise de décision plus ajustée. Pour un soignant, ces compétences sont essentielles.",
      "Dans la relation de soin, le corps du praticien est un instrument de perception. Il capte des informations subtiles sur l'état du patient, bien au-delà de ce que l'examen clinique standard peut révéler. Cette perception fine nécessite un corps éveillé, présent, attentif.",
      "Mais pour que le corps devienne un outil de conscience, il faut d'abord le retrouver. Des années de formation intellectuelle, de charge de travail et de stress chronique peuvent nous couper de nos sensations. Le retour au corps est un apprentissage, un chemin progressif.",
      "C'est ce chemin que propose la Présence Thérapeutique Intégrative : non pas un savoir théorique supplémentaire, mais une expérience vécue, incarnée, qui passe par le corps pour toucher quelque chose de plus profond dans la qualité de présence du soignant.",
    ],
  },
  "ancrage-et-respiration-outils-du-quotidien": {
    title: "Ancrage et respiration : vos outils au quotidien",
    category: "Pratique",
    date: "20 décembre 2025",
    readTime: "4 min",
    content: [
      "L'ancrage et la respiration sont deux outils fondamentaux de regulation du système nerveux, accessibles a tous et mobilisables en quelques secondes. Pour le soignant, ils représentent des ressources précieuses entre deux consultations.",
      "L'ancrage consiste a porter son attention sur ses points de contact avec le sol. Sentir ses pieds sur le sol, le poids de son corps sur la chaise, ses mains posees sur ses genoux. Ce geste simple active le systeme vagal ventral et favorise un sentiment de sécurité et de stabilité.",
      "La respiration est un levier direct sur le système nerveux autonome. En allongeant le temps d'expiration par rapport a l'inspiration (par exemple 4 temps d'inspiration pour 6 temps d'expiration), on active le système parasympathique et on favorise le retour au calme.",
      "La respiration diaphragmatique, ou respiration abdominale, amplifie cet effet. En respirant par le ventre plutot que par le thorax, on stimule le nerf vague et on diminue le taux de cortisol. C'est une réponse physiologique directe, mesurable et reproductible.",
      "En pratique, quelques micro-pauses respiratoires dans la journee suffisent. Trois respirations profondes entre deux patients, un scan corporel de 30 secondes avant de commencer la consultation, un ancrage par les pieds en entrant dans le cabinet.",
      "L'essentiel est la régularité, pas la durée. Cinq secondes d'attention consciente à sa respiration, répétées dix fois dans la journee, auront plus d'impact qu'une séance de méditation de 20 minutes isolée. C'est la pratique quotidienne qui transforme la posture en profondeur.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // This is a sync wrapper - in production use async
  return {
    title: "Article - Présence Thérapeutique",
    description: "Article sur la présence thérapeutique intégrative, les neurosciences et la posture du soignant.",
  };
}

export default async function BlogArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  return (
    <article className="py-16 lg:py-24 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sage-dark text-sm font-medium mb-8 hover:gap-3 transition-all">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Retour au blog
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 bg-sage/10 text-sage-dark text-xs font-semibold rounded-full">{article.category}</span>
          <span className="text-text-muted text-xs">{article.date}</span>
          <span className="text-text-muted text-xs">&middot; {article.readTime} de lecture</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-text mb-8 leading-tight">
          {article.title}
        </h1>

        <div className="flex items-center gap-4 mb-12 pb-8 border-b border-border">
          <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center">
            <span className="text-sage-dark font-serif text-lg">E</span>
          </div>
          <div>
            <p className="font-semibold text-text text-sm">Eugénie Vitse</p>
            <p className="text-text-muted text-xs">Ostéopathe D.O. &middot; Formatrice</p>
          </div>
        </div>

        <div className="space-y-6 text-text-light leading-relaxed text-[17px]">
          {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-sage/10 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-serif font-semibold text-text mb-3">
            Envie d&apos;aller plus loin ?
          </h3>
          <p className="text-text-light text-sm mb-6">
            Découvrez la formation Module 1 : Présence à Soi - 12, 13 et 14 octobre 2026.
          </p>
          <Link href="/formations" className="px-6 py-3 bg-sage text-white font-semibold rounded-full hover:bg-sage-dark transition-all inline-block">
            Voir la formation
          </Link>
        </div>
      </div>
    </article>
  );
}
