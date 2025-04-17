import Link from "next/link";

const Footer = () => {
  const whatsappLink = "https://wa.me/+1234567890?text=Hi%20WhatsApp%20Wizard";
  
  return (
    <footer className="bg-black/30 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">W</span>
              </div>
              <h2 className="text-xl font-bold">WhatsApp Wizard</h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              You will never have to leave your WhatsApp. Access all your social media content in one place.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Links</h3>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li><Link href="#features" className="hover:text-emerald-400 transition-colors">Features</Link></li>
                <li><Link href="#how-it-works" className="hover:text-emerald-400 transition-colors">How it works</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li><Link href="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <Link 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-emerald-600 hover:bg-emerald-700 transition-colors text-white px-4 py-2 rounded-full inline-flex items-center gap-2 text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                Chat Now
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-10 pt-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} WhatsApp Wizard. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;