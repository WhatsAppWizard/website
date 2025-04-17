'use client'

import { ReactNode, useEffect } from 'react'

import { PostHogProvider as Provider } from 'posthog-js/react'
import posthog from 'posthog-js'
import { usePathname } from 'next/navigation'

export function PostHogProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    // Initialize PostHog
    if (typeof window !== 'undefined') {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || '', {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || '',
        capture_pageview: false, // We'll handle this manually
        capture_pageleave: true,
        autocapture: true,
      })
    }
  }, [])

  // Track page views
  useEffect(() => {
    if (pathname) {
      const url = window.origin + pathname
     
      
      posthog.capture('$pageview', {
        $current_url: url,
      })
    }
  }, [pathname])

  return <Provider client={posthog}>{children}</Provider>
}