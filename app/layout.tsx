import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Oswald } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
})

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Balbo Agro Maquinarias | Maquinaria Agrícola de Calidad",
  description:
    "Balbo Agromaquinas ofrece maquinaria, implementos e insumos agrícolas de calidad con respaldo técnico. Tractores LOVOL, implementos David, Orsi, Lavrale y más marcas líderes.",
  keywords:
    "maquinaria agrícola, tractores, implementos agrícolas, LOVOL, David, Orsi, Lavrale, Grass Cutter, Rocha, agro, campo argentino",
  authors: [{ name: "Balbo Agromaquinas" }],
  creator: "Balbo Agromaquinas",
  publisher: "Balbo Agromaquinas",
  robots: "index, follow",
  themeColor: "#ffdd02",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://balboa-agromaquinas.vercel.app",
    siteName: "Balbo Agro Maquinarias",
    title: "Balbo Agro Maquinarias | Maquinaria Agrícola de Calidad",
    description:
      "Impulsamos el agro con innovación y confianza. Maquinarias, implementos e insumos agrícolas de calidad con respaldo técnico profesional.",
    images: [
      {
        url: "/images/og-image-balboa.jpg",
        width: 1200,
        height: 630,
        alt: "Balbo Agromaquinas - Maquinaria Agrícola de Calidad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Balbo Agro Maquinarias | Maquinaria Agrícola de Calidad",
    description:
      "Impulsamos el agro con innovación y confianza. Maquinarias, implementos e insumos agrícolas de calidad.",
    images: ["/images/og-image-balboa.jpg"],
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${oswald.variable} antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
