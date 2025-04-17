import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import type { Metadata } from "next";
import { PostHogProvider } from './providers/posthog-provider';
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WhatsApp Wizard - Download Media & Create Stickers in WhatsApp",
  description: "Download videos from TikTok, Instagram, Facebook, YouTube & Twitter, create stickers, and more - all without leaving WhatsApp. The ultimate WhatsApp bot for media downloads.",
  keywords: ["WhatsApp bot", "WhatsApp Wizard", "media download", "WhatsApp stickers", "TikTok download", "Instagram download", "YouTube download", "Facebook download", "Twitter download", "WhatsApp automation"],
  authors: [{ name: "Gitnasr" }],
  creator: "Gitnasr",
  publisher: "Gitnasr",
  metadataBase: new URL('https://wwz.gitnasr.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "WhatsApp Wizard - Download Media & Create Stickers in WhatsApp",
    description: "Download videos from TikTok, Instagram, Facebook, YouTube & Twitter, create stickers, and more - all without leaving WhatsApp. The ultimate WhatsApp bot for media downloads.",
    url: 'https://wwz.gitnasr.com',
    siteName: 'WhatsApp Wizard',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WhatsApp Wizard - Your Ultimate WhatsApp Bot',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhatsApp Wizard - Download Media & Create Stickers in WhatsApp',
    description: 'Download videos from TikTok, Instagram, Facebook, YouTube & Twitter, create stickers, and more - all without leaving WhatsApp.',
    images: ['/og-image.png'],
    creator: '@gitnasr',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PostHogProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
