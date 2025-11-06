import "./globals.css";
import { Poppins, Inter } from "next/font/google";
import Script from "next/script";
import GtmNoScript from "./components/GtmNoScript";
import Header from "./components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const GTM_ID = "GTM-5XC5B7H6";

// 🎯 METADADOS GLOBAIS OTIMIZADOS
export const metadata = {
  // Título principal
  title: "Montador de Móveis em Curitiba e Região Metropolitana | (41) 99700-9479",
  description: "Montador de móveis profissional em Curitiba. Montagem ágil, segura e com preço justo. Orçamento grátis!",
  
  // 🎯 FAVICON - Seu arquivo JPG convertido para ICO
  icons: {
    icon: '/favicon.ico', // Coloque aqui após converter fav.jpg para .ico
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png', // Opcional: para iPhone/iPad
  },

  // Metadados essenciais
  metadataBase: new URL('https://www.betomontadordemoveis.com.br'),
  alternates: {
    canonical: 'https://www.betomontadordemoveis.com.br',
  },
  
  // OpenGraph (para compartilhamentos)
  openGraph: {
    title: "Montador de Móveis em Curitiba | Beto Montador",
    description: "Montagem de móveis profissional com agilidade, segurança e preço justo.",
    url: 'https://www.betomontadordemoveis.com.br',
    siteName: 'Beto Montador de Móveis',
    images: [
      {
        url: 'https://www.betomontadordemoveis.com.br/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: "Montador de Móveis em Curitiba",
    description: "Montagem ágil e com preço justo",
  },

  // Viewport e verificações
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${inter.variable}`}
    >
      <head>
        {/* 🎯 GOOGLE TAG MANAGER */}
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />

        {/* 🎯 PRECONNECT PARA MELHOR PERFORMANCE */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>

      <body className="font-sans antialiased bg-white text-gray-900">
        {/* GTM NoScript */}
        <GtmNoScript />

        {/* Header fixo em todas as páginas */}
        <Header />

        {/* Conteúdo da página */}
        {children}
      </body>
    </html>
  );
}
