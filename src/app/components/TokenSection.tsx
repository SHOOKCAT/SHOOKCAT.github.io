'use client'

import { useState } from 'react'
import DexToolsLink from './DexToolsLink'

export default function TokenSection() {
  const CONTRACT_ADDRESS = "D135ctX8k6ZnoSG1jXttLk6oVasBjuZT9QG2Cxbkpump"
  
  const handleCopy = async () => {
    await navigator.clipboard.writeText(CONTRACT_ADDRESS)
  }

  return (
    <section id="token" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-6">
          Support $CONAN Token
        </h2>

        {/* Contract Address */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold text-white mb-4">Contract Address</h3>
            <div className="flex items-center justify-center gap-3">
              <code className="text-[#E01A2B] bg-gray-900/50 px-4 py-2 rounded-lg font-mono text-sm break-all">
                {CONTRACT_ADDRESS}
              </code>
              <button 
                onClick={handleCopy}
                className="bg-gray-900/50 p-2 rounded-lg hover:bg-gray-900 transition-colors"
                title="Copy address"
              >
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Chart Container */}
        <div className="max-w-5xl mx-auto">
          <style jsx>{`
            #dexscreener-embed {
              position: relative;
              width: 100%;
              padding-bottom: 125%;
            }
            @media(min-width: 1400px) {
              #dexscreener-embed {
                padding-bottom: 65%;
              }
            }
            #dexscreener-embed iframe {
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              border: 0;
              border-radius: 1rem;
            }
          `}</style>
          <div id="dexscreener-embed">
            <iframe 
              src="https://dexscreener.com/solana/CXXgu1Ck8MnCYQFqe1jQW2qtnLjNheLgPuaVKmsnCskd?embed=1&loadChartSettings=0&chartLeftToolbar=0&chartDefaultOnMobile=1&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"
              title="DexScreener Chart for $CONAN"
            />
          </div>
        </div>

        {/* DEXTools Link */}
        <DexToolsLink contractAddress={CONTRACT_ADDRESS} />

        {/* Token Info */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Why Support $CONAN?</h3>
          <p className="text-gray-300 text-lg mb-8">
            The $CONAN token represents more than just a cryptocurrency - it's a symbol of our community's 
            unity and determination to save Conan. A dedicated wallet holds $CONAN tokens, and as our 
            community grows stronger, the token's value increases, amplifying our ability to support 
            Conan's cause.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-6">
              <h4 className="text-xl font-bold text-white mb-3">Community Power</h4>
              <p className="text-gray-400">
                Join a passionate community united for Conan's cause
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <h4 className="text-xl font-bold text-white mb-3">Value Growth</h4>
              <p className="text-gray-400">
                As our community grows, so does the value of tokens in the support wallet
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <h4 className="text-xl font-bold text-white mb-3">Raise Awareness</h4>
              <p className="text-gray-400">
                Help spread Conan's story through the crypto community
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 