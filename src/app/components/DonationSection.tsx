'use client'

import { useState } from 'react'
import { FaWallet } from 'react-icons/fa'

export default function DonationSection() {
  const MULTISIG_ADDRESS = "3RTpyyS5Dcqex9F1JJrBSrEcy3oDbqW149KjgbkC2QR8"
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(MULTISIG_ADDRESS)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-24 bg-black">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Support Our Mission
          </h2>
          <p className="text-gray-500 text-lg">
            Your contribution will directly support our community efforts to save Conan. 
            All donations are managed through a transparent MultiSig wallet controlled by trusted community members.
          </p>
        </div>

        {/* Wallet Card */}
        <div className="bg-[#111] rounded-3xl p-8">
          {/* Wallet Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-[#E01A2B] rounded-2xl p-4">
              <FaWallet className="h-6 w-6 text-white" />
            </div>
          </div>

          {/* Wallet Info */}
          <div className="text-center mb-8">
            <h3 className="text-white text-xl font-semibold mb-2">Community MultiSig Wallet</h3>
            <p className="text-gray-500">Managed by trusted community members</p>
          </div>

          {/* Address Box */}
          <div className="bg-black rounded-xl p-4 mb-8 flex items-center justify-between">
            <code className="text-[#E01A2B] font-mono text-sm break-all">
              {MULTISIG_ADDRESS}
            </code>
            <button 
              onClick={handleCopy}
              className="bg-[#E01A2B] p-3 rounded-xl ml-4"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
              </svg>
            </button>
          </div>

          {/* Impact Section */}
          <div>
            <h4 className="text-white text-lg font-medium text-center mb-6">Community Impact</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#1A1A1A] rounded-xl p-4">
                <p className="text-gray-400 text-center text-sm">Public Awareness</p>
              </div>
              <div className="bg-[#1A1A1A] rounded-xl p-4">
                <p className="text-gray-400 text-center text-sm">Media Outreach</p>
              </div>
              <div className="bg-[#1A1A1A] rounded-xl p-4">
                <p className="text-gray-400 text-center text-sm">Community Events</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 