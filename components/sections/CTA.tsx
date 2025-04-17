'use client';

import { usePostHog } from "@/lib/hooks/use-posthog";
import Link from "next/link";

const CTA = () => {
  const whatsappLink = "https://wa.me/+201272340825?text=Hi%20WhatsApp%20Wizard";
  const { trackButtonClick } = usePostHog();
  
  return (
    <section className="py-20 bg-gradient-to-br from-black to-emerald-950">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to supercharge your WhatsApp?</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
          Join thousands of users who never leave WhatsApp to download their favorite content. Start using WhatsApp Wizard now - it&apos;s completely free!
        </p>
        <Link 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-700 transition-colors text-white px-10 py-4 rounded-full text-lg font-medium inline-flex items-center gap-2 animate-pulse hover:animate-none"
          onClick={() => trackButtonClick('cta_start_using_now', { section: 'bottom_cta' })}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
          Start Using WhatsApp Wizard Now
        </Link>
      </div>
    </section>
  );
};

export default CTA;