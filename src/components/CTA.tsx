import { ShoppingCart, Gift, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function CTA() {
  const { t } = useTranslation();
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="bg-gradient-to-br from-[#0a1628] to-[#1a2942] rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#d4af37] text-[#0a1628] px-6 py-2 rounded-full mb-8">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium tracking-wide">{t('cta.badge')}</span>
            </div>
            <h2 className="text-4xl md:text-6xl mb-6">{t('cta.heading')}</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">{t('cta.description')}</p>
            <div className="mb-6">
              <div className="text-5xl font-bold text-[#d4af37] mb-2">{t('cta.price')}</div>
              <p className="text-gray-400">{t('cta.shipping', 'Free shipping worldwide')}</p>
            </div>
            <button className="bg-[#d4af37] hover:bg-[#c19b2f] text-[#0a1628] px-10 py-4 text-lg font-medium tracking-wide transition-all duration-300 inline-flex items-center gap-3 group mb-6">
              <ShoppingCart className="w-5 h-5" />
              {t('cta.purchase')}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8 border-t border-white/10">
              <div className="flex flex-col items-center gap-2">
                <Gift className="w-6 h-6 text-[#d4af37]" />
                <p className="text-sm text-gray-300">{t('cta.feature1', 'Premium Gift Box')}</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Star className="w-6 h-6 text-[#d4af37]" />
                <p className="text-sm text-gray-300">{t('cta.feature2', 'Lifetime Warranty')}</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <ShoppingCart className="w-6 h-6 text-[#d4af37]" />
                <p className="text-sm text-gray-300">{t('cta.feature3', '30-Day Returns')}</p>
              </div>
            </div>
          </div>
        </div>
  <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">{t('cta.trustText')}</p>
          <div className="flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#d4af37] text-[#d4af37]" />
            ))}
            <span className="ml-2 text-gray-700 font-medium">{t('cta.rating')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
