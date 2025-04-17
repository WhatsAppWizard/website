import Link from "next/link";

const Hero = () => {
  // WhatsApp direct chat link
  const whatsappLink = "https://wa.me/+201272340825?text=Hi%20WhatsApp%20Wizard";
  
  return (
    <section className="min-h-screen pt-20 sm:pt-24 md:pt-32 flex items-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 md:w-[30rem] md:h-[30rem] bg-emerald-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 md:w-[30rem] md:h-[30rem] bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 md:w-[30rem] md:h-[30rem] bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-1">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 md:mb-10 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-400 leading-tight">
            Never Leave Your WhatsApp Again
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto">
            Download media from TikTok, Instagram, Facebook, YouTube, Twitter and create stickers - all without leaving WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 transition-all text-white px-6 sm:px-8 py-3 sm:py-4 md:py-5 md:px-10 rounded-full text-center font-medium shadow-lg shadow-emerald-700/20 hover:shadow-emerald-700/40 hover:-translate-y-0.5 text-base md:text-lg"
            >
              Start Using Now
            </Link>
            <Link 
              href="#features"
              className="border border-border backdrop-blur-sm bg-background/30 hover:bg-secondary transition-colors px-6 sm:px-8 py-3 sm:py-4 md:py-5 md:px-10 rounded-full text-center font-medium text-base md:text-lg"
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