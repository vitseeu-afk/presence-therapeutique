import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.presence-therapeutique.fr"),
  title: {
    default: "Présence Thérapeutique | Formation en Présence Thérapeutique Intégrative",
    template: "%s | Présence Thérapeutique",
  },
  description:
    "Formation en Présence Thérapeutique Intégrative pour professionnels de santé et thérapeutes. Approche psycho-corporelle fondée sur les neurosciences. Module 1 : Présence à Soi - Octobre 2026.",
  keywords: [
    "présence thérapeutique",
    "formation thérapeute",
    "présence thérapeutique intégrative",
    "formation professionnels de santé",
    "psycho-corporel",
    "neurosciences",
    "formation ostéopathe",
    "approche biodynamique",
    "régulation émotionnelle",
    "théorie polyvagale",
    "formation continue thérapeute",
    "conscience corporelle",
    "posture thérapeutique",
    "formation soignant",
    "burn-out soignant",
    "épuisement professionnel thérapeute",
  ],
  authors: [{ name: "Eugénie Vitse" }],
  creator: "Eugénie Vitse",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.presence-therapeutique.fr",
    siteName: "Présence Thérapeutique",
    title: "Formation en Présence Thérapeutique Intégrative",
    description:
      "Formations pour professionnels de santé. Approche psycho-corporelle et neurosciences pour une pratique plus consciente et ajustée.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Présence Thérapeutique - Formation Intégrative",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation en Présence Thérapeutique Intégrative",
    description:
      "Formations pour professionnels de santé et thérapeutes. Approche psycho-corporelle et neurosciences.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.presence-therapeutique.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Présence Thérapeutique",
              url: "https://www.presence-therapeutique.fr",
              description:
                "Formation en Présence Thérapeutique Intégrative pour professionnels de santé",
              founder: {
                "@type": "Person",
                name: "Eugénie Vitse",
                jobTitle: "Ostéopathe D.O., Formatrice",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "4 place Jeanne d'Arc",
                addressLocality: "Hazebrouck",
                postalCode: "59190",
                addressCountry: "FR",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+33-7-87-39-49-38",
                email: "vitse.eu@gmail.com",
                contactType: "customer service",
                availableLanguage: "French",
              },
              areaServed: ["FR", "BE"],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
