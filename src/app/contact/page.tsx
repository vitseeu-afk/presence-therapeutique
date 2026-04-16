import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Présence Thérapeutique",
  description:
    "Contactez Eugénie Vitse pour toute question sur les formations en Présence Thérapeutique Intégrative. Téléphone, email ou formulaire de contact.",
};

export default function Contact() {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-cream py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-text mb-6">Contact</h1>
            <p className="text-lg text-text-light">
              Une question sur les formations ? Envie d&apos;échanger avant de vous inscrire ?
              N&apos;hésitez pas à me contacter.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Formulaire */}
            <div className="bg-white rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-serif font-semibold text-text mb-6">Envoyez-moi un message</h2>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="prenom" className="block text-sm font-medium text-text mb-1.5">Prénom</label>
                    <input type="text" id="prenom" name="prenom" required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-sage/50" />
                  </div>
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-text mb-1.5">Nom</label>
                    <input type="text" id="nom" name="nom" required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-sage/50" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text mb-1.5">Email</label>
                  <input type="email" id="email" name="email" required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-sage/50" />
                </div>
                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium text-text mb-1.5">Téléphone</label>
                  <input type="tel" id="telephone" name="telephone"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-sage/50" />
                </div>
                <div>
                  <label htmlFor="sujet" className="block text-sm font-medium text-text mb-1.5">Sujet</label>
                  <select id="sujet" name="sujet"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-text focus:outline-none focus:ring-2 focus:ring-sage/50">
                    <option value="">Choisir un sujet</option>
                    <option value="formation">Question sur une formation</option>
                    <option value="inscription">Inscription</option>
                    <option value="entreprise">Intervention en entreprise</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text mb-1.5">Message</label>
                  <textarea id="message" name="message" rows={5} required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-cream/50 text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-sage/50 resize-none" />
                </div>
                <button type="submit"
                  className="w-full px-8 py-4 bg-sage text-white font-semibold rounded-full hover:bg-sage-dark transition-all text-lg">
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Infos contact */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-border">
                <h3 className="text-xl font-serif font-semibold text-text mb-6">Coordonnées</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sage/10 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-text">Eugénie Vitse</p>
                      <p className="text-text-muted text-sm">Ostéopathe D.O. &middot; Formatrice</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sage/10 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-text">Téléphone</p>
                      <a href="tel:+33787394938" className="text-sage-dark hover:underline">07 87 39 49 38</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sage/10 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-text">Email</p>
                      <a href="mailto:vitse.eu@gmail.com" className="text-sage-dark hover:underline">vitse.eu@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sage/10 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-text">Adresse</p>
                      <p className="text-text-light text-sm">4 place Jeanne d&apos;Arc<br />59190 Hazebrouck</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lieu de formation */}
              <div className="bg-white rounded-2xl p-8 border border-border">
                <h3 className="text-xl font-serif font-semibold text-text mb-4">Lieu de formation</h3>
                <p className="text-text-light text-sm mb-2">HUB Eurasanté</p>
                <p className="text-text-muted text-sm mb-4">350 avenue Eugène Avinée, 59120 Loos</p>
                <div className="flex gap-4 text-sm text-text-light">
                  <span className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-sage rounded-full" />
                    Parking privé
                  </span>
                  <span className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-sage rounded-full" />
                    Accessible PMR
                  </span>
                </div>
              </div>

              {/* Reseaux sociaux */}
              <div className="bg-white rounded-2xl p-8 border border-border">
                <h3 className="text-xl font-serif font-semibold text-text mb-4">Suivez-moi</h3>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-cream rounded-lg hover:bg-sage/10 transition-colors text-sm text-text-light">
                    Instagram
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-cream rounded-lg hover:bg-sage/10 transition-colors text-sm text-text-light">
                    LinkedIn
                  </a>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-cream rounded-lg hover:bg-sage/10 transition-colors text-sm text-text-light">
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
