'use client';

import Image from "next/image";
import Link from "next/link";
import { usePostHog } from "@/lib/hooks/use-posthog";

const ChatSimulation = () => {
  const whatsappLink = "https://wa.me/+201272340825?text=Hi%20WhatsApp%20Wizard";
  const { trackButtonClick } = usePostHog();
  
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <div className="inline-block bg-emerald-600/20 backdrop-blur-sm px-4 py-1 rounded-full text-emerald-600 font-medium text-sm mb-4">Simple & Intuitive</div>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">See How It Works</h2>
            <p className="text-muted-foreground text-center max-w-2xl">
              Experience the convenience of accessing all your social media content directly in WhatsApp with just a few steps
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Chat Demo */}
            <div className="relative">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl blur-md opacity-25"></div>
              <div className="relative aspect-square max-w-md mx-auto bg-gradient-to-br from-background to-card/80 p-1.5 rounded-3xl shadow-xl">
                <div className="bg-card/80 backdrop-blur-md rounded-2xl w-full h-full p-6 overflow-hidden border border-white/10 shadow-inner shadow-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <Image 
                        src="/logo-512.png" 
                        alt="WhatsApp Wizard Logo" 
                        width={48} 
                        height={48}
                      />
                    </div>
                    <div>
                      <p className="font-bold">WhatsApp Wizard</p>
                      <p className="text-xs text-muted-foreground">Your media assistant</p>
                    </div>
                  </div>
                
                  <div className="bg-emerald-600/20 rounded-lg p-3 mb-3 max-w-[75%] backdrop-blur-sm animate-fadeIn shadow-sm">
                    Just paste the TikTok link and I&apos;ll download it for you.
                  </div>
                  <div className="bg-background/20 backdrop-blur-sm rounded-lg p-3 mb-3 ml-auto max-w-[75%] animate-fadeIn animation-delay-500 shadow-sm">
                    https://tiktok.com/...
                  </div>
                  <div className="bg-emerald-600/20 rounded-lg p-3 max-w-[75%] backdrop-blur-sm animate-fadeIn animation-delay-1000 shadow-sm">
                    <div className="mb-2">Here&apos;s your video:</div>
                    <div className="bg-black/30 rounded-md h-24 flex items-center justify-center text-sm shadow-inner shadow-black/20">
                      [TikTok Video]
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-10">
              <div className="relative">
                <div className="absolute -left-8 top-0 h-16 w-16 bg-emerald-600/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-emerald-600">1</span>
                </div>
                <div className="pl-10">
                  <h3 className="text-xl font-bold mb-2">Start a Chat</h3>
                  <p className="text-muted-foreground">
                    Simply open WhatsApp and send a message to the WhatsApp Wizard contact. No extra apps to download or accounts to create.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-8 top-0 h-16 w-16 bg-emerald-600/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-emerald-600">2</span>
                </div>
                <div className="pl-10">
                  <h3 className="text-xl font-bold mb-2">Send Any Link</h3>
                  <p className="text-muted-foreground">
                    Paste a link from TikTok, Instagram, YouTube, Twitter, or Facebook. For stickers, just send an image you want to convert.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-8 top-0 h-16 w-16 bg-emerald-600/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-emerald-600">3</span>
                </div>
                <div className="pl-10">
                  <h3 className="text-xl font-bold mb-2">Receive Instantly</h3>
                  <p className="text-muted-foreground">
                    Get your media instantly delivered back to you in WhatsApp, ready to view, save, or share with friends and groups.
                  </p>
                </div>
              </div>

              <div className="pl-10 pt-4">
                <Link 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 transition-all text-white px-6 py-3 rounded-full text-center font-medium shadow-lg shadow-emerald-700/20 hover:shadow-emerald-700/40 hover:-translate-y-0.5 inline-flex items-center gap-2"
                  onClick={() => trackButtonClick('chat_simulation_try_it_now')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
                  Try It Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSimulation;