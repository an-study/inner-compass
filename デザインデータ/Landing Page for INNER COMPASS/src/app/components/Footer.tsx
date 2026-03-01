import { Compass } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Logo & Description */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Compass className="w-8 h-8 text-[#d4af37]" strokeWidth={1.5} />
            <span className="text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>
              Inner Compass
            </span>
          </div>
          <p className="text-gray-400 max-w-md" style={{ fontFamily: 'Inter, sans-serif' }}>
            Navigate your century with intention, purpose, and grace.
          </p>
        </div>
        
        {/* Divider */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
            © 2026 Inner Compass: 100-Year Logbook Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
