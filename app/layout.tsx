import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SEIMEN 2026 - Salon International des Mines et de l'Énergie du Niger",
  description: "Du 20 au 23 avril 2026 à Niamey - Première édition du Salon & Exposition Internationale des Mines et de l'Énergie du Niger",
  keywords: "SEIMEN, mines, énergie, Niger, salon, exposition, Niamey, 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
