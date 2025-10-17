import "./globals.css";
import { Poppins, Inter } from "next/font/google";
import Script from "next/script";
import GtmNoScript from "./components/GtmNoScript";
import Header from "./components/Header"; // ✅ Header global

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

export const metadata = {
  title: "Montador de Móveis Curitiba | Beto Montador",
  description:
    "Montador de móveis profissional em Curitiba e Região Metropolitana. Atendimento ágil, seguro e com garantia.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${inter.variable}`}
    >
      <head>
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
      </head>

      {/* ✅ Agora o corpo usa Poppins (font-sans) */}
      <body className="font-sans antialiased bg-white text-gray-900">
        <GtmNoScript />

        <Header /> {/* ✅ Header fixo em todas as páginas */}

        {children}
      </body>
    </html>
  );
}
