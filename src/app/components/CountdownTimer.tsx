'use client'

import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Set target date: December 2, 2024 13:30:00 PST
      const targetDate = new Date('2024-12-02T21:30:00.000Z') // 13:30 PST = 21:30 UTC
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    // Calculate immediately
    calculateTimeLeft()
    
    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000)

    // Cleanup interval on unmount
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="mt-12">
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        <span className="text-white/90 font-medium">Time is Running Out</span>
      </div>
      
      <div className="flex flex-col items-center space-y-1">
        <div className="flex flex-wrap items-center justify-center gap-2 text-white font-mono">
          <div className="flex items-center">
            <span className="text-2xl sm:text-3xl font-bold">{String(timeLeft.days).padStart(3, '0')}</span>
            <span className="text-[10px] sm:text-xs ml-1">Days</span>
          </div>
          <span className="text-lg sm:text-xl">:</span>
          <div className="flex items-center">
            <span className="text-2xl sm:text-3xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="text-[10px] sm:text-xs ml-1">Hours</span>
          </div>
          <span className="text-lg sm:text-xl">:</span>
          <div className="flex items-center">
            <span className="text-2xl sm:text-3xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="text-[10px] sm:text-xs ml-1">Minutes</span>
          </div>
          <span className="text-lg sm:text-xl">:</span>
          <div className="flex items-center">
            <span className="text-2xl sm:text-3xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="text-[10px] sm:text-xs ml-1">Seconds</span>
          </div>
        </div>
        <div className="text-white/80 text-[10px] sm:text-xs text-center px-4">
          Until Trial Date: December 2, 2024 13:30:00 PST
        </div>
      </div>
    </div>
  )
} 