import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Justice for Conan: Help Save a Beloved Family Dog',
  description: 'Join us in saving Conan, a loving family dog facing an unjust fate. Support through petition, donations, or $CONAN token.',
  keywords: 'Justice for Conan, Save Conan, Animal Rights, Dog Lovers, Support Conan, CONAN token, Solana',
  openGraph: {
    title: 'Justice for Conan: Help Save a Beloved Family Dog',
    description: 'Join us in saving Conan, a loving family dog facing an unjust fate. Support through petition, donations, or $CONAN token.',
    images: ['/img/conan.jpg'],
    url: 'https://justiceforconan.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Justice for Conan: Help Save a Beloved Family Dog',
    description: 'Join us in saving Conan, a loving family dog facing an unjust fate. Support through petition, donations, or $CONAN token.',
    images: ['/img/conan.jpg'],
    creator: '@SaveConanDog',
  },
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
        <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm">
          <div className="flex justify-between items-center px-5 py-4 max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold">
              <a href="#" className="text-[#E01A2B] hover:text-[#c0172b] transition-colors">
                #JusticeForConan
              </a>
            </h1>
            <ul className="flex gap-6">
              <li>
                <a href="#story" className="text-gray-700 hover:text-[#E01A2B] transition-colors px-3 py-2 rounded-lg hover:bg-red-50">
                  Story
                </a>
              </li>
              <li>
                <a href="#article" className="text-gray-700 hover:text-[#E01A2B] transition-colors px-3 py-2 rounded-lg hover:bg-red-50">
                  The Tale
                </a>
              </li>
              <li>
                <a href="#video" className="text-gray-700 hover:text-[#E01A2B] transition-colors px-3 py-2 rounded-lg hover:bg-red-50">
                  Watch
                </a>
              </li>
              <li>
                <a href="#help" className="text-gray-700 hover:text-[#E01A2B] transition-colors px-3 py-2 rounded-lg hover:bg-red-50">
                  Help
                </a>
              </li>
              <li>
                <a href="#token" className="text-gray-700 hover:text-[#E01A2B] transition-colors px-3 py-2 rounded-lg hover:bg-red-50">
                  $CONAN
                </a>
              </li>
              <li>
                <a href="#news" className="text-gray-700 hover:text-[#E01A2B] transition-colors px-3 py-2 rounded-lg hover:bg-red-50">
                  News
                </a>
              </li>
              <li>
                <a href="#community" className="text-gray-700 hover:text-[#E01A2B] transition-colors px-3 py-2 rounded-lg hover:bg-red-50">
                  Community
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
} 