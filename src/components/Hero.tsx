import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ImagePlaceholder from './ImagePlaceholder';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="relative bg-gradient-to-b from-[#0a1628] to-[#1a2942] text-white py-24 md:py-32 overflow-hidden mt-20">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#d4af37]/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-[#d4af37] text-sm tracking-[0.3em] uppercase font-medium">{t('hero.kicker')}</span>
            </div>

            <h1 className="text-5xl md:text-7xl leading-tight">
              {t('hero.titleLine1')}<br />
              <span className="text-[#d4af37]">{t('hero.titleHighlight')}</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
              {t('hero.subtitle')}
            </p>

            <button className="group bg-[#d4af37] hover:bg-[#c19b2f] text-[#0a1628] px-10 py-4 text-lg font-medium tracking-wide transition-all duration-300 flex items-center gap-3">
              {t('hero.buy')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#d4af37]">{t('hero.stats.years')}</div>
                <div className="text-sm text-gray-400">{t('hero.stats.yearsLabel')}</div>
              </div>
              <div className="w-px h-12 bg-gray-600" />
              <div className="text-center">
                <div className="text-3xl font-bold text-[#d4af37]">{t('hero.stats.days')}</div>
                <div className="text-sm text-gray-400">{t('hero.stats.daysLabel')}</div>
              </div>
              <div className="w-px h-12 bg-gray-600" />
              <div className="text-center">
                <div className="text-3xl font-bold text-[#d4af37]">{t('hero.stats.memories')}</div>
                <div className="text-sm text-gray-400">{t('hero.stats.memoriesLabel')}</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#d4af37]/20 blur-3xl rounded-full" />
            <div className="relative z-10 w-full aspect-[3/4] rounded-lg shadow-2xl overflow-hidden">
              <ImagePlaceholder id="placeholder-hero-mockup" src="/images/hero-mockup.png" expectedSize="1080 × 1440 px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
