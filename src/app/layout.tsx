import type { Metadata } from "next";
import { DM_Sans, Barriecito } from "next/font/google";
import "./globals.css";
import { siteCopy } from "@/content/copy";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const barriecito = Barriecito({
  variable: "--font-barriecito-var",
  subsets: ["latin"],
  weight: "400",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "No Fapp — The Self-Control Challenge",
  description: siteCopy.description,
  openGraph: {
    title: "No Fapp — The Self-Control Challenge",
    description: siteCopy.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "No Fapp — The Self-Control Challenge",
    description: siteCopy.description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Barriecito&display=swap" rel="stylesheet" />
      </head>
      <body className={`${barriecito.variable} ${dmSans.variable} bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
