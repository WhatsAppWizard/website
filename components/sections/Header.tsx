import Link from "next/link";

const Header = () => {
  // WhatsApp direct chat link
  const whatsappLink = "https://wa.me/+1234567890?text=Hi%20WhatsApp%20Wizard";
  
  return (
    <header className="container mx-auto flex items-center justify-between py-6 px-4 absolute top-0 left-0 right-0 z-10">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center backdrop-blur-sm">
          <span className="text-white text-xl font-bold">W</span>
        </div>
        <h1 className="text-xl font-bold">WhatsApp Wizard</h1>
      </div>
      <nav>
        <ul className="flex gap-6">
          <li><Link href="#features" className="hover:text-emerald-400 transition-colors">Features</Link></li>
          <li><Link href="#how-it-works" className="hover:text-emerald-400 transition-colors">How it works</Link></li>
          <li>
            <Link 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-emerald-600 hover:bg-emerald-700 transition-colors text-white px-4 py-2 rounded-full"
            >
              Start Chat
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;