import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { PostHogProvider } from './providers/posthog-provider';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WhatsApp Wizard - Your Ultimate WhatsApp Bot",
  description: "Download media from TikTok, Instagram, Facebook, YouTube & Twitter, plus create stickers without ever leaving WhatsApp.",
  keywords: ["WhatsApp bot", "WhatsApp Wizard", "media download", "WhatsApp stickers", "TikTok download", "Instagram download"],
  openGraph: {
    title: "WhatsApp Wizard - Your Ultimate WhatsApp Bot",
    description: "Download media from TikTok, Instagram, Facebook, YouTube & Twitter, plus create stickers without ever leaving WhatsApp.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WhatsApp Wizard",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Wizard - Your Ultimate WhatsApp Bot",
    description: "Download media from TikTok, Instagram, Facebook, YouTube & Twitter, plus create stickers without ever leaving WhatsApp.",
    images: ["/og-image.png"],
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
