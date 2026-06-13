import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Noscanda Group | Görünmenin Ötesinde, Hissedilmek İçin",
  description: "Nos Canda Group — Premium reed diffusers, auto fragrances, ve kurumsal koku çözümleri. Yüksek konsantrasyonlu Extrait de Parfum formülleri ile affordable luxury kozmetik grubu.",
  keywords: "Nos Canda, Noscanda Group, premium reed diffuser, auto fragrance, franchise, Extrait de Parfum, İRAY, DMO",
  openGraph: {
    title: "Noscanda Group | Görünmenin Ötesinde, Hissedilmek İçin",
    description: "Premium reed diffusers, auto fragrances, ve kurumsal koku çözümleri.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        {/* Font stylesheets — loaded via link tags to avoid Tailwind v4 @import ordering conflict */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Rosario:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/century-gothic-paneuropean" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/garet" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col font-body antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
