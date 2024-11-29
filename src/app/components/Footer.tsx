import Link from 'next/link'
import { FaTwitter, FaTelegram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <p className="text-gray-400">
              Justice For Conan is a community-driven movement fighting to save a beloved family dog 
              from unjust euthanasia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#story" className="text-gray-400 hover:text-white transition-colors">
                  Conan's Story
                </a>
              </li>
              <li>
                <a href="#help" className="text-gray-400 hover:text-white transition-colors">
                  Take Action
                </a>
              </li>
              <li>
                <a href="#news" className="text-gray-400 hover:text-white transition-colors">
                  News Coverage
                </a>
              </li>
              <li>
                <a href="#token" className="text-gray-400 hover:text-white transition-colors">
                  $CONAN Token
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://twitter.com/weloveconan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <FaTwitter className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a 
                  href="https://t.me/ConanJustice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Telegram</span>
                  <FaTelegram className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400">
              For media inquiries or support:<br />
              <a 
                href="mailto:theconancommunity@gmail.com"
                className="text-[#E01A2B] hover:text-[#c0172b] transition-colors"
              >
                theconancommunity@gmail.com 
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Justice For Conan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 