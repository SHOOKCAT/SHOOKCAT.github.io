import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://justiceforconan.com'),
  title: 'Justice for Conan: Help Save a Beloved Family Dog',
  description: 'Join us in saving Conan, a loving family dog facing an unjust fate. Support through petition, donations, or $CONAN token.',
  keywords: 'Justice for Conan, Save Conan, Animal Rights, Dog Lovers, Support Conan, CONAN token, Solana',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://justiceforconan.com',
    siteName: 'Justice For Conan',
    title: 'Justice for Conan: Help Save a Beloved Family Dog',
    description: 'Join us in saving Conan, a loving family dog facing an unjust fate. Support through petition, donations, or $CONAN token.',
    images: [
      {
        url: '/img/conan.jpg',
        width: 1200,
        height: 630,
        alt: 'Conan - A Beloved Family Dog',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@weloveconan',
    creator: '@weloveconan',
    title: 'Justice for Conan: Help Save a Beloved Family Dog',
    description: 'Join us in saving Conan, a loving family dog facing an unjust fate. Support through petition, donations, or $CONAN token.',
    images: ['/img/conan.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'your-google-verification-code', // Add if you have one
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Roboto+Mono:wght@400;500&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
} 