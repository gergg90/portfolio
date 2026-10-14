import type { Metadata, Viewport } from "next";
import { Archivo, DM_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
});

const description =
  "Portfolio de Germain Gutierrez: perfil híbrido de redes, ciberseguridad e IA. Camino al CCNA 200-301, 7 certificaciones Cisco NetAcad, formación en Hack4u y desarrollo de apps con IA agéntica.";

export const viewport: Viewport = {
  themeColor: "#0a0907",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gergg90.vercel.app"),
  title: {
    default: "Germain Gutierrez | Redes, Ciberseguridad e IA",
    template: "%s | Germain Gutierrez",
  },
  description,
  keywords: [
    "Germain Gutierrez",
    "CCNA",
    "CCNA 200-301",
    "Cisco",
    "Cisco Networking Academy",
    "redes",
    "networking",
    "routing",
    "switching",
    "ciberseguridad",
    "hacking ético",
    "Hack4u",
    "seguridad defensiva",
    "IA agéntica",
    "agentic AI",
    "Claude Code",
    "network security",
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
    siteName: "Germain Gutierrez",
    title: "Germain Gutierrez | Redes, Ciberseguridad e IA",
    description:
      "Redes, seguridad e IA en un mismo perfil. Camino al CCNA 200-301, certificaciones Cisco y desarrollo de apps con IA agéntica.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Germain Gutierrez — Redes, Ciberseguridad e IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Germain Gutierrez | Redes, Ciberseguridad e IA",
    description:
      "Redes, seguridad e IA en un mismo perfil. Camino al CCNA 200-301, certificaciones Cisco y desarrollo de apps con IA agéntica.",
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
      className={`${archivo.variable} ${dmMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
