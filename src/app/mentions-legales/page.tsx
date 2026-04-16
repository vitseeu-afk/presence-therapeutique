import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales du site Présence Thérapeutique - Eugénie Vitse.",
};

export default function MentionsLegales() {
  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-text mb-12">Mentions légales</h1>

        <div className="space-y-10 text-text-light leading-relaxed">
          <div>
            <h2 className="text-xl font-serif font-semibold text-text mb-3">Éditeur du site</h2>
            <p>Eugénie Vitse</p>
            <p>Ostéopathe D.O. - Formatrice</p>
            <p>4 place Jeanne d&apos;Arc, 59190 Hazebrouck</p>
            <p>Téléphone : 07 87 39 49 38</p>
            <p>Email : vitse.eu@gmail.com</p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-semibold text-text mb-3">Directrice de la publication</h2>
            <p>Eugénie Vitse</p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-semibold text-text mb-3">Hébergement</h2>
            <p>Ce site est hébergé par Vercel Inc.</p>
            <p>340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-semibold text-text mb-3">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, vidéos, éléments graphiques) est protégé
              par le droit d&apos;auteur. Toute reproduction, même partielle, est soumise à l&apos;autorisation
              préalable de l&apos;éditeur.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-semibold text-text mb-3">Responsabilité</h2>
            <p>
              L&apos;éditeur s&apos;efforce de fournir des informations aussi précises que possible.
              Toutefois, il ne pourra être tenu responsable des omissions, inexactitudes ou
              défaillances dans la mise à jour des informations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-semibold text-text mb-3">Données personnelles</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi
              Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification et de
              suppression de vos données personnelles. Pour exercer ces droits, contactez-nous à
              l&apos;adresse : vitse.eu@gmail.com
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-semibold text-text mb-3">Cookies</h2>
            <p>
              Ce site utilise des cookies strictement nécessaires à son fonctionnement. Aucun cookie
              publicitaire ou de tracking n&apos;est utilisé.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
