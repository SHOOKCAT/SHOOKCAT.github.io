import Image from 'next/image'

const supportImages = [
  {
    src: "/img/support/1.jpeg",
    alt: "Protest sign: Conan Deserves to Live",
    caption: "A good boy! Such a sweetie! Conan deserves to live"
  },
  {
    src: "/img/support/2.jpeg",
    alt: "Protest sign: We are Conan's Voice",
    caption: "We are Conan's voice. He is not property, he is family. Justice 4 Conan"
  },
  {
    src: "/img/support/3.jpeg",
    alt: "Support for Conan",
    caption: "Justice for Conan - Every life matters"
  }
]

export default function SupportSection() {
  return (
    <section id="support" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Community Support</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Support Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-video relative">
              <img 
                src="/img/support/1.jpeg" 
                alt="Community Support"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Local Rally</h3>
              <p className="text-gray-600">
                Community members gather to show their support for Conan and his family.
              </p>
            </div>
          </div>

          {/* Support Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-video relative">
              <img 
                src="/img/support/2.jpeg" 
                alt="Community Support"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Social Media Campaign</h3>
              <p className="text-gray-600">
                Online supporters spread awareness and share Conan's story worldwide.
              </p>
            </div>
          </div>

          {/* Support Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-video relative">
              <img 
                src="/img/support/3.jpeg" 
                alt="Community Support"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Legal Support</h3>
              <p className="text-gray-600">
                Legal experts and advocates join forces to fight for Conan's freedom.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="text-center">
            <div className="text-[#E01A2B] text-4xl font-bold mb-2">2.1K+</div>
            <div className="text-gray-600">Petition Signatures</div>
          </div>
          <div className="text-center">
            <div className="text-[#E01A2B] text-4xl font-bold mb-2">$13K+</div>
            <div className="text-gray-600">Funds Raised</div>
          </div>
          <div className="text-center">
            <div className="text-[#E01A2B] text-4xl font-bold mb-2">10K+</div>
            <div className="text-gray-600">Social Shares</div>
          </div>
        </div>

      </div>
    </section>
  )
} 