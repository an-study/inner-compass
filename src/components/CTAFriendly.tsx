import { ShoppingCart, Sparkles, Gift, Heart, PartyPopper } from 'lucide-react';

interface CTAFriendlyProps {
  language: 'en' | 'ja';
}

export function CTAFriendly({ language }: CTAFriendlyProps) {
  const content = {
    ja: {
      badge: '今なら特別価格！',
      title1: 'さあ、始めよう！',
      title2: 'あなたの物語',
      currentPrice: '¥1,639',
      taxIncluded: '（税込）',
      cta: '今すぐ購入する',
      features: [
        { icon: Gift, text: '可愛いギフトボックス' },
        { icon: Heart, text: 'プレゼントにも最適' }
      ],
      users: 'すでに5,000人以上が使ってます！',
      rating: '「続けられた！」の声が続々届いています',
      ratingIcon: PartyPopper
    },
    en: {
      badge: 'Special Price Now!',
      title1: "Let's Begin!",
      title2: 'Your Story',
      currentPrice: '$16.39',
      taxIncluded: '(Tax Included)',
      cta: 'Buy Now on Amazon',
      features: [
        { icon: Gift, text: 'Beautiful Gift Box' },
        { icon: Heart, text: 'Perfect Gift' }
      ],
      users: 'Over 5,000 people already using it!',
      rating: 'Success stories keep coming!',
      ratingIcon: PartyPopper
    }
  };

  const t = content[language];
  const RatingIcon = t.ratingIcon;

  return (
    <section id="cta-section" className="bg-gradient-to-b from-white to-[#FFF9F0] py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Main CTA Card */}
        <div className="bg-gradient-to-br from-[#FFE9CC] via-[#FFD9A8] to-[#FFB347] rounded-3xl p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF9A76]/20 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white text-[#FF9A76] px-6 py-3 rounded-full mb-8 shadow-lg font-bold">
              <Sparkles className="w-5 h-5" />
              <span className="text-base">{t.badge}</span>
            </div>
            
            {/* Heading */}
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#2D3748]">
              {t.title1}
              <br />
              <span className="text-[#FF9A76]">{t.title2}</span>
            </h2>
            
            {/* Price */}
            <div className="mb-8">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="text-6xl font-bold text-[#FF9A76]">
                  {t.currentPrice}
                </div>
                <span className="text-xl text-[#2D3748]">{t.taxIncluded}</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <a 
              href="https://amzn.asia/d/03iC08fX"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF9A76] hover:bg-[#FF8A66] text-white px-16 py-6 text-xl font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-4 group transform hover:scale-105 mb-8 cursor-pointer" 
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              <ShoppingCart className="w-6 h-6" />
              {t.cta}
              <span className="group-hover:translate-x-1 transition-transform text-2xl">→</span>
            </a>
            
            {/* Features */}
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto pt-8 border-t-2 border-white/50">
              {t.features.map((feature, index) => {
                const FeatureIcon = feature.icon;
                return (
                  <div key={index} className="flex flex-col items-center gap-3">
                    <FeatureIcon className="w-12 h-12 text-[#FF9A76]" strokeWidth={2} />
                    <p className="text-sm text-[#2D3748] font-bold">{feature.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-12 text-center space-y-4">
          <p className="text-gray-500 text-sm inline-flex items-center justify-center gap-2">
            {t.rating} <RatingIcon className="w-5 h-5 text-[#FF9A76]" />
          </p>
        </div>
      </div>
    </section>
  );
}
