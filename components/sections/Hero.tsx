import Link from "next/link";

const Hero = () => {
  // WhatsApp direct chat link
  const whatsappLink = "https://wa.me/+1234567890?text=Hi%20WhatsApp%20Wizard";
  
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-1">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-400">
            Never Leave Your WhatsApp Again
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Download media from TikTok, Instagram, Facebook, YouTube, Twitter and create stickers - all without leaving WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 transition-all text-white px-8 py-4 rounded-full text-center font-medium shadow-lg shadow-emerald-700/20 hover:shadow-emerald-700/40 hover:-translate-y-0.5"
            >
              Start Using Now
            </Link>
            <Link 
              href="#features"
              className="border border-border backdrop-blur-sm bg-background/30 hover:bg-secondary transition-colors px-8 py-4 rounded-full text-center font-medium"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;