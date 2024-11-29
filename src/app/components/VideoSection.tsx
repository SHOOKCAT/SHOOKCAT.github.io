export default function VideoSection() {
  return (
    <section id="video" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Watch Conan's Story</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* YouTube Video */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/n7OrVYAfT0E?si=A4ukGf5d-AxOvkKO"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          
          {/* Local Video */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
            <video
              controls
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              poster="/img/conan2.png"
            >
              <source src="/img/conan2.mov" type="video/quicktime" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        
        {/* Additional Video */}
        <div className="mt-8">
          <div className="max-w-2xl mx-auto relative aspect-video rounded-2xl overflow-hidden shadow-xl">
            <video
              controls
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              poster="/img/conan.jpg"
            >
              <source src="/img/conan.mov" type="video/quicktime" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-600">
            Watch these videos to understand why Conan deserves a second chance.
          </p>
        </div>
      </div>
    </section>
  )
} 