'use client'

import posthog from 'posthog-js'

// Define a more specific type for properties instead of using 'any'
type PostHogProperties = Record<string, string | number | boolean | null | undefined>

// Hook for using posthog throughout the app
export const usePostHog = () => {
  // Function to track button clicks with custom properties
  const trackButtonClick = (buttonName: string, properties?: PostHogProperties) => {
    posthog.capture('button_clicked', {
      button_name: buttonName,
      ...properties,
    })
  }

  // Function to track custom events
  const trackEvent = (eventName: string, properties?: PostHogProperties) => {
    posthog.capture(eventName, properties)
  }

  // Function to identify users when they perform certain actions
  const identifyUser = (distinctId: string, properties?: PostHogProperties) => {
    posthog.identify(distinctId, properties)
  }

  return {
    trackButtonClick,
    trackEvent,
    identifyUser,
    posthog,
  }
}