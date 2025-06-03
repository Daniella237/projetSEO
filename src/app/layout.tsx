import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ViteButNotTooMuch – Le site de ceux qui veulent aller vite… mais bien.",
  description: "Découvrez ViteButNotTooMuch, la ressource incontournable pour ceux qui veulent aller vite… mais bien. Conseils, astuces et guides pour optimiser votre efficacité sans sacrifier la qualité.",
  keywords: [
    "productivité",
    "efficacité",
    "optimisation",
    "conseils",
    "astuces",
    "qualité",
    "organisation",
    "ViteButNotTooMuch"
  ],
  authors: [{ name: "ViteButNotTooMuch" }],
  openGraph: {
    title: "ViteButNotTooMuch – Le site de ceux qui veulent aller vite… mais bien.",
    description: "Découvrez ViteButNotTooMuch, la ressource incontournable pour ceux qui veulent aller vite… mais bien. Conseils, astuces et guides pour optimiser votre efficacité sans sacrifier la qualité.",
    type: "website",
    locale: "fr_FR"
  },
  twitter: {
    card: "summary_large_image",
    title: "ViteButNotTooMuch – Le site de ceux qui veulent aller vite… mais bien.",
    description: "Découvrez ViteButNotTooMuch, la ressource incontournable pour ceux qui veulent aller vite… mais bien. Conseils, astuces et guides pour optimiser votre efficacité sans sacrifier la qualité.",
    creator: "@ViteButNotTooMuch",
    site: "@ViteButNotTooMuch"
  },
  alternates: {
    canonical: "https://matioss.fr/"
  },
  verification: {
    google: "google-site-verification=jTqdr4CClpKBC2uovnm9UQGiIM3h5SEk2KUaKOtmmTs"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
