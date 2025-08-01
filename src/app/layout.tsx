import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MuiThemeProvider } from "@/providers/MuiThemeProvider";

// Note: Google Fonts temporarily commented out due to network restrictions in build environment
// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
//   display: "swap",
// });

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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Force light mode always - ExFabrica inspired approach
                document.documentElement.classList.add('light');
                document.documentElement.classList.remove('dark');
                document.documentElement.setAttribute('data-theme', 'light');
                document.documentElement.style.colorScheme = 'light';
                
                // Inject override CSS to ensure light mode dominance
                var styleOverride = document.createElement('style');
                styleOverride.textContent = \`
                  /* Force light mode - inspired by exFabrica approach */
                  html, body { 
                    background-color: white !important; 
                    color-scheme: light !important;
                  }
                  
                  @media (prefers-color-scheme: dark) {
                    html, body, main, [data-theme] {
                      background-color: white !important;
                      color-scheme: light !important;
                    }
                    
                    .min-h-screen {
                      background-color: white !important;
                    }
                  }
                \`;
                document.head.appendChild(styleOverride);
                
                // Set theme-color meta tag for light mode
                var metaThemeColor = document.querySelector('meta[name="theme-color"]');
                if (metaThemeColor) {
                  metaThemeColor.setAttribute('content', '#ffffff');
                } else {
                  var meta = document.createElement('meta');
                  meta.name = 'theme-color';
                  meta.content = '#ffffff';
                  document.head.appendChild(meta);
                }
              })()
            `,
          }}
        />
      </head>
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
