import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MuiThemeProvider } from "@/providers/MuiThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: "ConnEthics - Ethical Connections in Competitive Environments",
  description: "Building products and animating business ecosystems based on radical candor, integrity, and innovation. Expert consulting in self-sovereign identity, competitive intelligence, and product leadership.",
  keywords: ["self-sovereign identity", "competitive intelligence", "product leadership", "ethical business", "ecosystem cartography", "trust deployment"],
  authors: [{ name: "ConnEthics" }],
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/images/favicon.ico",
  },
  openGraph: {
    title: "ConnEthics - Ethical Connections in Competitive Environments",
    description: "Building products and animating business ecosystems based on radical candor, integrity, and innovation.",
    type: "website",
    images: [
      {
        url: "/images/logo-connethics.webp",
        width: 256,
        height: 256,
        alt: "ConnEthics Logo",
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
    <html lang="en" suppressHydrationWarning className="light">
      <head />
      <body className="font-sans antialiased bg-white text-gray-900 transition-colors">
        <MuiThemeProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </MuiThemeProvider>
      </body>
    </html>
  );
}
