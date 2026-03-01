import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#0a1628] to-[#1a2942] text-white py-24 md:py-32 overflow-hidden mt-20">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#d4af37]/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-[#d4af37] text-sm tracking-[0.3em] uppercase font-medium">
                Premium Life Journal
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Navigate Your<br />
              <span className="text-[#d4af37]">Century</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
              A sophisticated 100-year logbook designed to capture the extraordinary journey of your life, one day at a time.
            </p>
            
            <button className="group bg-[#d4af37] hover:bg-[#c19b2f] text-[#0a1628] px-10 py-4 text-lg font-medium tracking-wide transition-all duration-300 flex items-center gap-3">
              Buy Now on Amazon
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#d4af37]" style={{ fontFamily: 'Playfair Display, serif' }}>100</div>
                <div className="text-sm text-gray-400">Years</div>
              </div>
              <div className="w-px h-12 bg-gray-600" />
              <div className="text-center">
                <div className="text-3xl font-bold text-[#d4af37]" style={{ fontFamily: 'Playfair Display, serif' }}>365</div>
                <div className="text-sm text-gray-400">Days/Year</div>
              </div>
              <div className="w-px h-12 bg-gray-600" />
              <div className="text-center">
                <div className="text-3xl font-bold text-[#d4af37]" style={{ fontFamily: 'Playfair Display, serif' }}>∞</div>
                <div className="text-sm text-gray-400">Memories</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Product Image Placeholder */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#d4af37]/20 blur-3xl rounded-full" />
            <div className="relative z-10 w-full aspect-[3/4] bg-gray-700 rounded-lg shadow-2xl flex items-center justify-center border border-gray-600">
              <div className="text-center px-8">
                <div className="text-[#d4af37] text-2xl mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Hero Product Mockup
                </div>
                <div className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Premium Journal Cover Image
                </div>
                <div className="text-gray-500 text-xs mt-4">
                  1080 × 1440 px
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}