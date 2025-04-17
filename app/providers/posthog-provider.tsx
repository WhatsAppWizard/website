'use client'

import { ReactNode, useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

import { PostHogProvider as Provider } from 'posthog-js/react'
import posthog from 'posthog-js'

export function PostHogProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

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
      let url = window.origin + pathname
      if (searchParams?.toString()) {
        url = url + `?${searchParams.toString()}`
      }
      
      posthog.capture('$pageview', {
        $current_url: url,
      })
    }
  }, [pathname, searchParams])

  return <Provider client={posthog}>{children}</Provider>
}