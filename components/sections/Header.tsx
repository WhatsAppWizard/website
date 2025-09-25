'use client';

import { usePostHog } from "@/lib/hooks/use-posthog";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  // WhatsApp direct chat link
  const whatsappLink = "https://wa.me/+201223371854?text=Hi%20WhatsApp%20Wizard";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { trackButtonClick } = usePostHog();
  
  return (
    <>
     <div className="w-full bg-yellow-500 text-white text-center py-4 text-xl mb-8">
        WhatsApp Wizard is Blocked By WhatsApp, We have new number, Please use +201223371854 for WhatsApp Wizard. Also Subscribe to our <a href="https://t.me/gitnasr" target="_blank" rel="noopener noreferrer" className="underline font-bold">Telegram Channel</a> for latest updates.
      </div>
      <header className="container mx-auto flex items-center justify-between py-4 md:py-8 px-4">
         
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
            <Image 
              src="/logo-512.png" 
              alt="WhatsApp Wizard Logo" 
              width={40}
              height={40}
              style={{ width: 'auto', height: 'auto' }}
              className="max-w-full max-h-full"
            />
          </div>
          <h1 className="text-xl md:text-2xl font-bold">WhatsApp Wizard</h1>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 12h16M4 6h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 text-base lg:text-lg">
            <li><Link href="#features" className="hover:text-emerald-400 transition-colors">Features</Link></li>
            <li><Link href="#how-it-works" className="hover:text-emerald-400 transition-colors">How it works</Link></li>
            <li>
              <Link 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-emerald-600 hover:bg-emerald-700 transition-colors text-white px-5 py-2.5 rounded-full"
                onClick={() => trackButtonClick('header_start_chat')}
              >
                Start Chat
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm shadow-lg py-4 px-4 md:hidden">
            <ul className="flex flex-col gap-4">
              <li><Link href="#features" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Features</Link></li>
              <li><Link href="#how-it-works" className="block py-2" onClick={() => setMobileMenuOpen(false)}>How it works</Link></li>
              <li>
                <Link 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="bg-emerald-600 hover:bg-emerald-700 transition-colors text-white px-4 py-2 rounded-full block text-center mt-2"
                  onClick={() => {
                    trackButtonClick('mobile_header_start_chat');
                    setMobileMenuOpen(false);
                  }}
                >
                  Start Chat
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;