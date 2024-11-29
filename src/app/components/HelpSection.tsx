import GoFundMeScript from './GoFundMeScript'

export default function HelpSection() {
  return (
    <section id="help" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Take Action Now
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Sign Petition Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
            <div className="bg-red-50 w-14 h-14 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-7 h-7 text-[#E01A2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Sign the Petition</h3>
            <p className="text-gray-600 mb-8 text-center">
              Add your voice to thousands of others demanding justice for Conan.
            </p>
            <div className="mt-auto flex justify-center">
              <a 
                href="https://www.change.org/p/save-conan-the-burbank-family-dog-from-unfair-euthanasia" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#E01A2B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#c0172b] transition-colors"
              >
                Sign Now
              </a>
            </div>
          </div>

          {/* Support Fund Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
            <div className="bg-green-50 w-14 h-14 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Support Legal Fund</h3>
            <p className="text-gray-600 mb-8 text-center">
              Help cover legal expenses in the fight to save Conan's life.
            </p>
            <div className="mt-auto flex justify-center">
              <a 
                href="https://www.gofundme.com/f/help-save-conan-a-loving-dogs-second-chance" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#E01A2B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#c0172b] transition-colors"
              >
                Donate Now
              </a>
            </div>
          </div>

          {/* Share Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
            <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Spread the Word</h3>
            <p className="text-gray-600 mb-8 text-center">
              Share Conan's story on X to raise awareness.
            </p>
            <div className="mt-auto flex justify-center">
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  "💔 Conan, an 8-year-old family dog who protected his loved ones, now faces euthanasia for doing what any loyal companion would do. He deserves a second chance at life.\n\n" +
                  "Please help save Conan by:\n" +
                  "📝 Signing the petition: https://www.change.org/p/save-conan-the-burbank-family-dog-from-unfair-euthanasia\n" +
                  "💝 Supporting his legal fund: https://www.gofundme.com/f/help-save-conan-a-loving-dogs-second-chance\n" +
                  "🌐 Learn more: https://justiceforconan.com\n\n" +
                  "#SaveConan #JusticeForConan #DogLover #PetRights #SaveDogs"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-[#E01A2B] text-[#E01A2B] px-8 py-3 rounded-lg font-semibold hover:bg-[#E01A2B] hover:text-white transition-colors"
              >
                Share on X
              </a>
            </div>
          </div>
        </div>

        {/* Time is Critical Banner */}
        <div className="border border-[#E01A2B]/20 bg-red-50/50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Time is Critical</h3>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto px-4 whitespace-normal">
            Every signature, share, and donation brings us closer to saving Conan. Please take action today.
          </p>
        </div>
      </div>
    </section>
  )
} 