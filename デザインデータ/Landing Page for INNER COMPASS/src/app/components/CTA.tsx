import { ShoppingCart, Gift, Star } from 'lucide-react';

export function CTA() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Main CTA Card */}
        <div className="bg-gradient-to-br from-[#0a1628] to-[#1a2942] rounded-2xl p-12 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#d4af37] text-[#0a1628] px-6 py-2 rounded-full mb-8">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium tracking-wide">Limited Edition</span>
            </div>
            
            {/* Heading */}
            <h2 className="text-4xl md:text-6xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Begin Your Journey Today
            </h2>
            
            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Join thousands who have transformed their lives with the Inner Compass. 
              Your 100-year adventure awaits.
            </p>
            
            {/* Price */}
            <div className="mb-8">
              <div className="text-5xl font-bold text-[#d4af37] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                $149
              </div>
              <p className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                Free shipping worldwide
              </p>
            </div>
            
            {/* CTA Button */}
            <button className="bg-[#d4af37] hover:bg-[#c19b2f] text-[#0a1628] px-12 py-5 text-lg font-medium tracking-wide transition-all duration-300 inline-flex items-center gap-3 group mb-8">
              <ShoppingCart className="w-5 h-5" />
              Purchase on Amazon
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            
            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8 border-t border-white/10">
              <div className="flex flex-col items-center gap-2">
                <Gift className="w-6 h-6 text-[#d4af37]" />
                <p className="text-sm text-gray-300">Premium Gift Box</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Star className="w-6 h-6 text-[#d4af37]" />
                <p className="text-sm text-gray-300">Lifetime Warranty</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <ShoppingCart className="w-6 h-6 text-[#d4af37]" />
                <p className="text-sm text-gray-300">30-Day Returns</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Trusted by over 10,000+ customers worldwide
          </p>
          <div className="flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#d4af37] text-[#d4af37]" />
            ))}
            <span className="ml-2 text-gray-700 font-medium">4.9/5</span>
          </div>
        </div>
      </div>
    </section>
  );
}
