'use client'

import TwitterScript from './TwitterScript'

const tweets = [
  {
    id: "1861370653364134289",
    author: "wokhardteth",
    title: "Community Support"
  },
  {
    id: "1861397769120030957",
    author: "wokhardteth",
    title: "Legal Updates"
  },
  {
    id: "1861373821707788724",
    author: "wokhardteth",
    title: "Campaign Progress"
  },
  {
    id: "1861762635252838874",
    author: "J0KER_World",
    title: "Media Coverage"
  },
  {
    id: "1861377312618414334",
    author: "TheW3Journal",
    title: "Public Support"
  },
  {
    id: "1861375878237725153",
    author: "dzoni_blejz",
    title: "Community Impact"
  }
]

export default function SocialCoverageSection() {
  return (
    <section id="social" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Media Coverage</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Our mission has gained significant attention across social media platforms, 
            with supporters worldwide joining the cause to save Conan.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
            <div className="text-[#E01A2B] text-4xl font-bold mb-2">1M+</div>
            <div className="text-gray-600 font-medium">Social Impressions</div>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
            <div className="text-[#E01A2B] text-4xl font-bold mb-2">10K+</div>
            <div className="text-gray-600 font-medium">Content Shares</div>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
            <div className="text-[#E01A2B] text-4xl font-bold mb-2">20+</div>
            <div className="text-gray-600 font-medium">Countries Reached</div>
          </div>
        </div>

        {/* Featured Tweets Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {tweets.map((tweet, index) => (
            <div key={tweet.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="twitter-embed" style={{ minHeight: '400px' }}>
                <blockquote className="twitter-tweet">
                  <a href={`https://twitter.com/${tweet.author}/status/${tweet.id}`}></a>
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        {/* Twitter Script for Embedding */}
        <TwitterScript />
      </div>
    </section>
  )
} 