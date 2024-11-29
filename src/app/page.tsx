'use client'

import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import StorySection from './components/StorySection'
import ArticleSection from './components/ArticleSection'
import VideoSection from './components/VideoSection'
import CommunityJoinSection from './components/CommunityJoinSection'
import HelpSection from './components/HelpSection'
import NewsSection from './components/NewsSection'
import SupportSection from './components/SupportSection'
import TokenSection from './components/TokenSection'
import SocialCoverageSection from './components/SocialCoverageSection'
import Footer from './components/Footer'
import TwitterScript from './components/TwitterScript'
import GoFundMeScript from './components/GoFundMeScript'
import { CountdownTimer } from './components/CountdownTimer'
import DonationSection from './components/DonationSection'

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoState, setVideoState] = useState({
    isLoading: true,
    hasError: false,
    isPlaying: false
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadStart = () => {
      setVideoState(prev => ({ ...prev, isLoading: true }));
    };

    const handleLoadedData = async () => {
      try {
        await video.play();
        setVideoState({
          isLoading: false,
          hasError: false,
          isPlaying: true
        });
      } catch (err) {
        console.error('Video playback failed:', err);
        setVideoState({
          isLoading: false,
          hasError: true,
          isPlaying: false
        });
      }
    };

    const handleError = () => {
      console.error('Video loading error');
      setVideoState({
        isLoading: false,
        hasError: true,
        isPlaying: false
      });
    };

    // Add event listeners
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    // Cleanup
    return () => {
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <main>
      <div className="relative isolate min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/hero-bg.jpeg"
            alt="Hero Background"
            fill
            priority
            className="object-cover image-background"
            style={{ 
              opacity: videoState.isPlaying ? 0 : 1,
              transition: 'opacity 0.8s ease-in-out'
            }}
          />
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover video-background"
            style={{ 
              opacity: videoState.isPlaying ? 1 : 0,
              transition: 'opacity 0.8s ease-in-out'
            }}
          >
            <source src="/img/hero-bg.webm" type="video/webm" />
            <source src="/img/hero-bg.mov" type="video/quicktime" />
            <source src="/img/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-gradient absolute inset-0 z-10"></div>
        <div className="relative z-20 px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              {/* <div className="mb-8 flex justify-center">
                <div className="urgent-badge text-white font-semibold">
                  <span className="text-white">D135ctX8k6ZnoSG1jXttLk6oVasBjuZT9QG2Cxbkpump</span>
                </div>
              </div> */}
              <h1 className="hero-title text-4xl font-bold tracking-tight text-white sm:text-6xl mb-8">
                Help Save Conan
              </h1>
              <p className="text-lg leading-8 text-gray-300 mb-12">
                An 8-year-old Lab-Pit mix who protected his family is now facing euthanasia. Your support can save his life.
              </p>
              <div className="flex items-center justify-center gap-4">
                <a href="#help" className="primary-button rounded-md px-6 py-3 text-white font-semibold">
                  Sign the Petition
                </a>
                <a href="#token" className="secondary-button rounded-md px-6 py-3 text-white font-semibold">
                  Support $CONAN
                </a>
              </div>
              
              <CountdownTimer />

            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <StorySection />
        <ArticleSection />
        <VideoSection />
      </div>

      <div className="bg-gray-50">
        <HelpSection />
        <DonationSection />
        <TokenSection />
      </div>

      <div className="bg-white">
        <NewsSection />
      </div>
      
      <div className="bg-gray-50">
        <CommunityJoinSection />
      </div>

      <div className="bg-white border-t border-gray-100">
        <SocialCoverageSection />
        <Footer />
      </div>
      
      <TwitterScript />
      <GoFundMeScript />
    </main>
  )
} 