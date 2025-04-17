import {
    FacebookIcon,
    InstagramIcon,
    StickerIcon,
    TiktokIcon,
    TwitterIcon,
    YoutubeIcon
} from "@/components/social-icons";

import { SparklesIcon } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-1">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <div className="inline-block bg-emerald-600/20 backdrop-blur-sm px-4 py-1 rounded-full text-emerald-600 font-medium text-sm mb-4 flex items-center gap-2">
              <SparklesIcon size={16} />
              <span>All-in-one Solution</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">All Your Social Media In One Place</h2>
            <p className="text-muted-foreground text-center max-w-2xl">
              Access content from all major platforms without switching apps or installing additional software
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* TikTok */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-card/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/10 h-full flex flex-col">
                <div className="h-14 w-14 bg-black/20 text-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <TiktokIcon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">TikTok</h3>
                <p className="text-muted-foreground mb-6">Download videos from TikTok instantly and share them with your contacts.</p>
                <div className="mt-auto">
                  <span className="text-xs font-medium bg-pink-500/10 text-pink-500 px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              </div>
            </div>

            {/* Instagram */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-card/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/10 h-full flex flex-col">
                <div className="h-14 w-14 bg-black/20 text-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <InstagramIcon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Instagram</h3>
                <p className="text-muted-foreground mb-6">Save photos and videos from Instagram posts, stories, and reels.</p>
                <div className="mt-auto">
                  <span className="text-xs font-medium bg-purple-500/10 text-purple-500 px-3 py-1 rounded-full">
                    Posts & Stories
                  </span>
                </div>
              </div>
            </div>

            {/* YouTube */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-card/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/10 h-full flex flex-col">
                <div className="h-14 w-14 bg-black/20 text-red-600 rounded-xl flex items-center justify-center mb-6">
                  <YoutubeIcon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">YouTube</h3>
                <p className="text-muted-foreground mb-6">Download YouTube videos in different quality options directly to your phone.</p>
                <div className="mt-auto">
                  <span className="text-xs font-medium bg-red-500/10 text-red-500 px-3 py-1 rounded-full">
                    HD Quality
                  </span>
                </div>
              </div>
            </div>

            {/* Facebook */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-card/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/10 h-full flex flex-col">
                <div className="h-14 w-14 bg-black/20 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <FacebookIcon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Facebook</h3>
                <p className="text-muted-foreground mb-6">Get photos, videos and reels from Facebook without hassle.</p>
                <div className="mt-auto">
                  <span className="text-xs font-medium bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full">
                    Public & Private
                  </span>
                </div>
              </div>
            </div>

            {/* Twitter */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-sky-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-card/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/10 h-full flex flex-col">
                <div className="h-14 w-14 bg-black/20 text-blue-400 rounded-xl flex items-center justify-center mb-6">
                  <TwitterIcon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Twitter</h3>
                <p className="text-muted-foreground mb-6">Save tweets, videos, and images from Twitter with a simple link.</p>
                <div className="mt-auto">
                  <span className="text-xs font-medium bg-blue-400/10 text-blue-400 px-3 py-1 rounded-full">
                    Including GIFs
                  </span>
                </div>
              </div>
            </div>

            {/* Stickers */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-card/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/10 h-full flex flex-col">
                <div className="h-14 w-14 bg-black/20 text-amber-400 rounded-xl flex items-center justify-center mb-6">
                  <StickerIcon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Stickers</h3>
                <p className="text-muted-foreground mb-6">Create custom WhatsApp stickers from any photo you send.</p>
                <div className="mt-auto">
                  <span className="text-xs font-medium bg-amber-500/10 text-amber-400 px-3 py-1 rounded-full">
                    Custom Design
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;