'use client'

import Image from 'next/image'

interface DexToolsLinkProps {
  contractAddress: string;
}

export default function DexToolsLink({ contractAddress }: DexToolsLinkProps) {
  return (
    <div className="flex justify-center mt-8">
      <a 
        href={`https://www.dextools.io/app/en/solana/pair-explorer/${contractAddress}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#1C1C1C] hover:bg-[#252525] transition-colors px-6 py-3 rounded-xl"
      >
        <Image
          src="/img/Brand_DEXTools_Light.svg"
          alt="DEXTools Logo"
          width={120}
          height={24}
          className="h-6 w-auto"
        />
        <span className="text-white font-medium">View on DEXTools</span>
      </a>
    </div>
  )
} 