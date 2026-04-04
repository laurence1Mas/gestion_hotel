import type { Metadata } from 'next'
import { Poppins, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-poppins',
  display: 'swap'
});

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-dm-sans',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'IturiStay - Réservation d\'Hôtels en Ituri, RDC',
  description: 'Découvrez et réservez les meilleurs hôtels de la province d\'Ituri en République Démocratique du Congo. Réservation facile avec paiement mobile.',

  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${poppins.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
