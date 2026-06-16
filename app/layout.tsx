import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gergg90.vercel.app"),
  title: {
    default: "Germain Gutierrez | Analista de Ciberseguridad",
    template: "%s | Germain Gutierrez",
  },
  description:
    "Portfolio profesional de Germain Gutierrez, especialista en hacking ético, pentesting, CTF y análisis de vulnerabilidades. Certificaciones Cisco y experiencia práctica en HackTheBox.",
  keywords: [
    "ciberseguridad",
    "pentesting",
    "hacking ético",
    "CTF",
    "HackTheBox",
    "VulnHub",
    "Cisco",
    "CCNA",
    "OSCP",
    "eJPT",
    "security",
    "penetration testing",
    "vulnerability assessment",
    "Germain Gutierrez",
  ],
  authors: [{ name: "Germain Gutierrez", url: "https://github.com/gergg90" }],
  creator: "Germain Gutierrez",
  publisher: "Germain Gutierrez",
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
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://gergg90.vercel.app",
    siteName: "Germain Gutierrez | Ciberseguridad",
    title: "Germain Gutierrez | Analista de Ciberseguridad",
    description:
      "Portfolio profesional especializado en hacking ético, pentesting y CTF. Certificaciones Cisco y experiencia práctica en HackTheBox.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Germain Gutierrez - Portfolio de Ciberseguridad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Germain Gutierrez | Analista de Ciberseguridad",
    description:
      "Portfolio profesional especializado en hacking ético, pentesting y CTF. Certificaciones Cisco y experiencia práctica en HackTheBox.",
    images: ["/og-image.png"],
    creator: "@gergg90",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://gergg90.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
