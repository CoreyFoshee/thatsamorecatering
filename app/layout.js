import './globals.css'

export const metadata = {
  title: "That's Amore Catering | Professional Event Catering in Metairie",
  description: "Professional catering services for corporate events, parties, and special occasions. Pizza trays, pasta, appetizers, and complete meal packages available.",
  keywords: "catering, pizza catering, corporate catering, event catering, Metairie, Louisiana, Italian catering",
  authors: [{ name: "That's Amore Pizza" }],
  creator: "That's Amore Pizza",
  openGraph: {
    title: "That's Amore Catering | Professional Event Catering",
    description: "Professional catering services for corporate events, parties, and special occasions.",
    url: "https://thatsamorecatering.com",
    siteName: "That's Amore Catering",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "That's Amore Catering | Professional Event Catering",
    description: "Professional catering services for corporate events, parties, and special occasions.",
  },
  robots: "index, follow",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Logo/favicon.jpg" />
        <link rel="apple-touch-icon" href="/Logo/favicon.jpg" />
        <link rel="manifest" href="/manifest.json" />
        <script src="https://app.thatsamorepizzaonline.com/js/form_embed.js"></script>
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  )
}
