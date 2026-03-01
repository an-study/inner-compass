import { FileText, Map, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ImagePlaceholder from './ImagePlaceholder';

export default function Features() {
  const { t } = useTranslation();

  const features = [
    {
      icon: FileText,
      title: t('features.dayLog.title'),
      description: t('features.dayLog.desc'),
      highlights: [
        t('features.dayLog.h1'),
        t('features.dayLog.h2'),
        t('features.dayLog.h3'),
        t('features.dayLog.h4')
      ]
    },
    {
      icon: Map,
      title: t('features.visionMap.title'),
      description: t('features.visionMap.desc'),
      highlights: [
        t('features.visionMap.h1'),
        t('features.visionMap.h2'),
        t('features.visionMap.h3'),
        t('features.visionMap.h4')
      ]
    },
    {
      icon: Heart,
      title: t('features.anniversaryList.title'),
      description: t('features.anniversaryList.desc'),
      highlights: [
        t('features.anniversaryList.h1'),
        t('features.anniversaryList.h2'),
        t('features.anniversaryList.h3'),
        t('features.anniversaryList.h4')
      ]
    }
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#d4af37] text-sm tracking-[0.3em] uppercase font-medium">{t('features.kicker')}</span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-6 text-[#0a1628]">{t('features.title')}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{t('features.subtitle')}</p>
        </div>
      </div>

      {/* Full-bleed gray band for the interior design area */}
      <div className="w-full bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0a1628] text-[#d4af37] mb-6">
                <feature.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl mb-4 text-[#0a1628]">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
              <ul className="space-y-2">
                {feature.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          </div>

          <div className="mt-8 relative">
            <div className="absolute inset-0 bg-[#d4af37]/10 blur-3xl rounded-full transform -translate-y-10" />
            <div className="relative z-10 w-full aspect-[16/9] bg-gray-700 rounded-lg shadow-2xl flex items-center justify-center border-2 border-gray-600">
              <div className="text-center px-8">
                <div className="text-[#d4af37] text-3xl mb-3">{t('features.spread.title')}</div>
                <div className="text-gray-400 text-base mb-2">{t('features.spread.subtitle')}</div>
                <div className="text-gray-500 text-sm">{t('features.spread.meta')}</div>
                <div className="text-gray-600 text-xs mt-4">1920 × 1080 px</div>
              </div>
            </div>
            <div className="mt-8 relative z-10 w-full">
              <ImagePlaceholder id="placeholder-spread" src="/images/spread-mockup.png" expectedSize="1920 × 1080 px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
