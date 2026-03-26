import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import NextTopLoader from "nextjs-toploader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fusionaiagency.com"), // REPLACE with your real domain
  title: {
    default: "Fusion AI | High-Performance AI Voice Solutions",
    template: "%s | Fusion AI",
  },
  description:
    "Scale your clinic with Fusion AI. We build interruptible, low-latency AI voice agents for medical practices and high-growth businesses.",
  keywords: [
    "AI Voice Agent",
    "Dental AI",
    "Fusion AI Agency",
    "Automated Patient Booking",
    "Full-Stack AI Development",
  ],
  authors: [{ name: "Kanat Nazarov" }],
  openGraph: {
    title: "Fusion AI | Next-Gen AI Voice Agency",
    description: "Interruptible, human-like AI voice agents for your business.",
    url: "https://www.fusionaiagency.com",
    siteName: "Fusion AI",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/fusion.png", sizes: "48x48", type: "image/png" }, // Add this
      { url: "/fusion.png", sizes: "96x96", type: "image/png" }, // Add this
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader
          color="#d4ff33"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #C5A059,0 0 5px #C5A059"
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
