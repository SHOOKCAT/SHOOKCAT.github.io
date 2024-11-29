import Image from 'next/image'

const newsItems = [
  {
    href: "https://ktla.com/news/local-news/burbank-family-fights-to-save-dogs-life-after-alleged-self-defense-bite/",
    image: "/img/news/ktla-logo.jpg",
    title: "Burbank family fights to save dog's life after alleged self-defense bite",
    source: "KTLA"
  },
  {
    href: "https://www.foxla.com/news/burbank-couple-fighting-keep-dog-from-being-euthanized",
    image: "/img/news/fox-news.png",
    title: "Burbank couple fighting to keep dog from being euthanized",
    source: "FOX LA"
  },
  {
    href: "https://abc7.com/post/burbank-family-trying-save-dog-bit-neighbor-being-euthanized/15591981",
    image: "/img/news/abc-news.png",
    title: "Burbank family trying to save dog that bit neighbor from being euthanized",
    source: "ABC7"
  }
]

export default function NewsSection() {
  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Media Coverage</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* KTLA News */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-video relative">
              <img 
                src="/img/news/ktla-logo.jpg" 
                alt="KTLA News Logo"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">KTLA Coverage</h3>
              <p className="text-gray-600 mb-6">
                KTLA brings attention to Conan's story and the community's fight for justice.
              </p>
              <a 
                href="https://ktla.com/news/local-news/burbank-family-fights-to-save-dogs-life-after-alleged-self-defense-bite/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E01A2B] hover:text-[#c0172b] font-semibold inline-flex items-center"
              >
                Read Article
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Fox News */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-video relative">
              <img 
                src="/img/news/fox-news.png" 
                alt="Fox News Logo"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Fox News Report</h3>
              <p className="text-gray-600 mb-6">
                Fox News investigates the circumstances surrounding Conan's case.
              </p>
              <a 
                href="https://www.foxla.com/news/burbank-couple-fighting-keep-dog-from-being-euthanized" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E01A2B] hover:text-[#c0172b] font-semibold inline-flex items-center"
              >
                Read Article
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* ABC News */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-video relative">
              <img 
                src="/img/news/abc-news.png" 
                alt="ABC News Logo"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">ABC News Coverage</h3>
              <p className="text-gray-600 mb-6">
                ABC News highlights the community's efforts to save Conan.
              </p>
              <a 
                href="https://abc7.com/post/burbank-family-trying-save-dog-bit-neighbor-being-euthanized/15591981" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E01A2B] hover:text-[#c0172b] font-semibold inline-flex items-center"
              >
                Read Article
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 