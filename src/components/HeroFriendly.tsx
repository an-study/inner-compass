import { ArrowRight, Sparkles, Smile } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroFriendlyProps {
  language: 'en' | 'ja';
}

export function HeroFriendly({ language }: HeroFriendlyProps) {
  const content = {
    ja: {
      badge: '三日坊主でも大丈夫！',
      title1: '気楽に始める',
      title2: '100年手帳',
      description: '完璧じゃなくていい。自分のペースで、自分らしく。',
      description2: '人生を俯瞰できる4つのツールで、楽しく記録。',
      cta: '今すぐ始める',
      stat1: '4つ',
      stat1Label: 'の機能',
      stat2: Smile,
      stat2Label: '続けやすい',
      stat3: Sparkles,
      stat3Label: '自分らしく'
    },
    en: {
      badge: 'Perfect for Everyone!',
      title1: 'Start Your',
      title2: '100-Year Journey',
      description: 'No need to be perfect. At your own pace, in your own way.',
      description2: 'Four tools to help you document your life journey.',
      cta: 'Get Started',
      stat1: '4',
      stat1Label: 'Features',
      stat2: Smile,
      stat2Label: 'Easy to Use',
      stat3: Sparkles,
      stat3Label: 'Be Yourself'
    }
  };

  const t = content[language];
  const Stat2Icon = t.stat2;
  const Stat3Icon = t.stat3;

  return (
    <section className="relative bg-gradient-to-br from-[#FFF5E6] via-[#FFE9CC] to-[#FFD9A8] py-24 md:py-32 overflow-hidden mt-20">
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-[#FF9A76]/20 blur-2xl" />
      <div className="absolute bottom-10 left-20 w-40 h-40 rounded-full bg-[#FFB347]/20 blur-2xl" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-[#FF9A76] text-white px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                {t.badge}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl leading-tight font-bold text-[#2D3748]">
              {t.title1}<br />
              <span className="text-[#FF9A76]">{t.title2}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              {t.description}
              <br />{t.description2}
            </p>
            
            <button 
              onClick={() => {
                document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group bg-[#FF9A76] hover:bg-[#FF8A66] text-white px-10 py-4 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 cursor-pointer" 
            >
              {t.cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-md">
                <div className="text-3xl font-bold text-[#FF9A76]">{t.stat1}</div>
                <div className="text-sm text-gray-600">{t.stat1Label}</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-md">
                <Stat2Icon className="w-10 h-10 mx-auto text-[#FF9A76]" strokeWidth={2} />
                <div className="text-sm text-gray-600 mt-1">{t.stat2Label}</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-md">
                <Stat3Icon className="w-10 h-10 mx-auto text-[#FF9A76]" strokeWidth={2} />
                <div className="text-sm text-gray-600 mt-1">{t.stat3Label}</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Product Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#FFB347]/30 to-[#FF9A76]/30 rounded-3xl blur-2xl" />
            <div className="relative z-10 w-full aspect-[3/4] rounded-3xl shadow-2xl overflow-hidden">
              <ImageWithFallback 
                src="/images/hero-friendly.jpg"
                alt={language === 'ja' ? '100年手帳の表紙' : 'Inner Compass Journal Cover'}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
