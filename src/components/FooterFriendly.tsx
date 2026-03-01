import { Heart, BookOpen } from 'lucide-react';

interface FooterFriendlyProps {
  language: 'en' | 'ja';
}

export function FooterFriendly({ language }: FooterFriendlyProps) {
  const content = {
    ja: {
      title: '100年手帳',
      description1: 'あなたらしく、気楽に、楽しく。',
      description2: '人生を記録する、やさしい手帳。',
      heartMessage: '毎日があなたにとって、すこしでも素敵な日になりますように',
      copyright: '© 2026 100年手帳プロジェクト All rights reserved.'
    },
    en: {
      title: '100-Year Journal',
      description1: 'Be yourself, relax, enjoy.',
      description2: 'A gentle journal to document your life.',
      heartMessage: 'May every day bring you a little more joy',
      copyright: '© 2026 100-Year Journal Project. All rights reserved.'
    }
  };

  const t = content[language];

  return (
    <footer className="bg-gradient-to-br from-[#FF9A76] to-[#FFB347] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Logo & Description */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-12 h-12 text-white" strokeWidth={2} />
            <span className="text-2xl font-bold">
              {t.title}
            </span>
          </div>
          <p className="text-white/90 max-w-md font-medium">
            {t.description1}
            <br />
            {t.description2}
          </p>
        </div>
        
        {/* Heart Message */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Heart className="w-5 h-5 fill-white" />
          <span className="text-sm font-medium">{t.heartMessage}</span>
          <Heart className="w-5 h-5 fill-white" />
        </div>
        
        {/* Divider */}
        <div className="border-t-2 border-white/20 pt-8 text-center">
          <p className="text-sm text-white/80">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
