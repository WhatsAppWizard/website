import CTA from "@/components/sections/CTA";
import ChatSimulation from "@/components/sections/ChatSimulation";
import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <ChatSimulation />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
