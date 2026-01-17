import Script from "next/script";
import { ReactNode } from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-53KHKC4DTM"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Configurações dos dois IDs
            gtag('config', 'G-53KHKC4DTM');
            gtag('config', 'G-D4K5THE7XD');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}

