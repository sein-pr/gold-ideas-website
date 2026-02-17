import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Gold Ideas | Ewald Gann Goldsmith - Windhoek, Namibia",
  description:
    "Bespoke jewelry design and craftsmanship by master goldsmith Ewald Gann. Handcrafted pieces using Namibian gemstones, gold, and unique materials. Located at 324 Sam Nujoma Drive, Klein Windhoek.",
  keywords: [
    "goldsmith",
    "Windhoek",
    "Namibia",
    "bespoke jewelry",
    "handcrafted",
    "Ewald Gann",
    "Gold Ideas",
    "custom jewelry",
    "Namibian gemstones",
  ],
  icons: {
    icon: [
      { url: '/images/logo.png', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: [{ url: '/images/logo.png', sizes: '180x180' }],
    shortcut: [{ url: '/images/logo.png', type: 'image/png' }],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F0E8" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
