'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export default function StorySection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const images = [
    '/img/conan.jpg',
    '/img/conan2.png',
    '/img/conan3.jpg',
    '/img/conan2.mov',
    '/img/conan.mov'
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section id="story" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-[42px] font-bold text-gray-900 text-center mb-20">
          Meet Conan: A Cherished Family Member
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
          {/* Image Carousel */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-3 hover:bg-white transition-all hover:scale-110 hover:shadow-lg"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-3 hover:bg-white transition-all hover:scale-110 hover:shadow-lg"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Media Container */}
            <div className="relative w-full h-full">
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === currentSlide 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-105'
                  }`}
                >
                  {src.endsWith('.mov') ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={src} type="video/quicktime" />
                    </video>
                  ) : (
                    <Image
                      src={src}
                      alt={`Conan - Image ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === currentSlide 
                      ? 'bg-white w-6' 
                      : 'bg-white/60 hover:bg-white/80'
                  }`}
                  onClick={() => setCurrentSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <p className="text-xl leading-relaxed text-gray-700">
              Conan is more than just a pet; he's a beloved member of his family and community. 
              Adopted eight years ago as the last puppy of his litter, Conan has brought 
              immeasurable joy and love to everyone around him.
            </p>
            <p className="text-xl leading-relaxed text-gray-700">
              Recently, Conan faced an incident that doesn't reflect his true nature. Despite 
              his calm demeanor and friendly personality, he's been unfairly accused and faces 
              a dire outcome. We believe one mistake shouldn't define his life.
            </p>
            <p className="text-xl leading-relaxed text-gray-700">
              Now, Conan needs your help to fight an unjust decision. Let's come together to 
              give Conan the second chance he so rightly deserves.
            </p>
          </div>
        </div>

        {/* Quote Section */}
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute -left-12 top-0 text-[120px] leading-none text-[#E01A2B]/10 font-serif">
            "
          </div>
          <div className="bg-red-50/50 rounded-3xl p-12 md:p-16 text-center">
            <blockquote className="text-3xl text-[#E01A2B] font-medium italic mb-6 relative">
              "From the moment Conan ran into my arms, I knew we were family."
            </blockquote>
            <cite className="text-gray-600 not-italic text-lg">— Conan's Dad</cite>
          </div>
          <div className="absolute -right-12 bottom-0 text-[120px] leading-none text-[#E01A2B]/10 font-serif rotate-180">
            "
          </div>
        </div>
      </div>
    </section>
  )
} 