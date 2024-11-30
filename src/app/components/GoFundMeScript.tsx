'use client'

import { useEffect } from 'react'

export default function GoFundMeScript() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://www.gofundme.com/static/js/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return null
} 