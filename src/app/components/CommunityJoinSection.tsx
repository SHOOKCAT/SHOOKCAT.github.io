import { FaTwitter, FaTelegram, FaTiktok } from 'react-icons/fa'

export default function CommunityJoinSection() {
  return (
    <section id="community" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-lg p-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Text and Stats */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Community</h2>
              <p className="text-gray-600 text-lg mb-12">
                Be part of Conan's journey. Join thousands of supporters fighting for justice.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-[#E01A2B] text-3xl font-bold mb-2">1K+</div>
                  <div className="text-gray-600">Telegram Members</div>
                </div>
                <div>
                  <div className="text-[#E01A2B] text-3xl font-bold mb-2">500+</div>
                  <div className="text-gray-600">X Community</div>
                </div>
                <div>
                  <div className="text-[#E01A2B] text-3xl font-bold mb-2">2.5K+</div>
                  <div className="text-gray-600">Token Holders</div>
                </div>
                <div>
                  <div className="text-[#E01A2B] text-3xl font-bold mb-2">2.1K+</div>
                  <div className="text-gray-600">Petition Signers</div>
                </div>
                <div className="col-span-2">
                  <div className="text-[#E01A2B] text-3xl font-bold mb-2">$13K+</div>
                  <div className="text-gray-600">Donations Raised</div>
                </div>
              </div>
            </div>

            {/* Right Column - Social Links */}
            <div className="flex flex-col justify-center gap-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h3>
              
              {/* X (Twitter) Link */}
              <a 
                href="https://twitter.com/weloveconan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-black text-white px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
              >
                <div className="flex items-center gap-3">
                  <FaTwitter className="h-6 w-6" />
                  <span className="text-xl font-medium">Follow on X</span>
                </div>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* TikTok Link */}
              <a 
                href="https://www.tiktok.com/@justiceforconan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-black text-white px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
              >
                <div className="flex items-center gap-3">
                  <FaTiktok className="h-6 w-6" />
                  <span className="text-xl font-medium">Follow on TikTok</span>
                </div>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Telegram Link */}
              <a 
                href="https://t.me/ConanJustice"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-[#229ED9] text-white px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
              >
                <div className="flex items-center gap-3">
                  <FaTelegram className="h-6 w-6" />
                  <span className="text-xl font-medium">Join Telegram</span>
                </div>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 