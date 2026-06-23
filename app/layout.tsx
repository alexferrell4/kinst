import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins, Inter, Geist_Mono } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
})
const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default:
      'Konnecting the Dots Developmental Institute, LLC',
    template: '%s | Konnecting the Dots Developmental Institute',
  },
  description:
    'Konnecting the Dots Developmental Institute is devoted to restoring, reshaping, and restructuring the lives of individuals by maximizing their growth and development. Serving Houston, Texas since 2017.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#2a7e8c',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`light ${poppins.variable} ${inter.variable} ${geistMono.variable}`}
    >
      <body className="bg-background font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
