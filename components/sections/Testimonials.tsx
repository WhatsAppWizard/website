const Testimonials = () => {
  return (
    <section className="bg-secondary/30 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#10b981" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              ))}
            </div>
            <p className="mb-6 italic">&quot;This bot is amazing! I can grab videos from all my favorite platforms without switching apps. Saves me so much time!&quot;</p>
            <p className="font-semibold">Maria S.</p>
          </div>
          
          <div className="bg-card rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#10b981" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              ))}
            </div>
            <p className="mb-6 italic">&quot;The sticker feature is so fun! I&apos;ve created dozens of custom stickers from my photos. My friends keep asking how I do it!&quot;</p>
            <p className="font-semibold">James T.</p>
          </div>
          
          <div className="bg-card rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#10b981" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              ))}
            </div>
            <p className="mb-6 italic">&quot;Fast responses and high-quality downloads. It&apos;s like having a social media assistant right in my WhatsApp!&quot;</p>
            <p className="font-semibold">Ahmed K.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;