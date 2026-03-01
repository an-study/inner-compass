import { Smile, Coffee, Heart, Sparkles, Sprout } from 'lucide-react';

interface ConceptFriendlyProps {
  language: 'en' | 'ja';
}

export function ConceptFriendly({ language }: ConceptFriendlyProps) {
  const content = {
    ja: {
      badge: '続けられる秘密',
      title: 'ムリせず、マイペースで',
      titleIcon: Sprout,
      subtitle1: '「毎日書かなきゃ」というプレッシャーはゼロ。',
      subtitle2: 'あなたらしく、楽しく続けられる工夫がたくさんあります。',
      concepts: [
        {
          icon: Smile,
          title: '完璧じゃなくていい',
          description: '毎日書けなくても大丈夫。あなたのペースで、気が向いたときに。'
        },
        {
          icon: Coffee,
          title: 'コーヒータイムに5分',
          description: '朝のコーヒーを飲みながら、今日の気分を一言メモするだけでOK。'
        },
        {
          icon: Heart,
          title: '自分へのプレゼント',
          description: '未来の自分が振り返ったとき、きっと嬉しくなる小さな記録。'
        },
        {
          icon: Sparkles,
          title: '続けるコツ満載',
          description: '三日坊主さんのために、続けやすい工夫がいっぱい詰まってます。'
        }
      ],
      encouragement1: '「あー、今日も書けなかった…」',
      encouragement2: 'そんな罪悪感とは、さようなら！',
      encouragement3: 'この手帳は、あなたの味方です',
      encouragementIcon: Heart
    },
    en: {
      badge: 'The Secret to Success',
      title: 'No Pressure, Your Own Pace',
      titleIcon: Sprout,
      subtitle1: 'Zero pressure to "write every day."',
      subtitle2: 'Packed with thoughtful features to help you continue in your own way.',
      concepts: [
        {
          icon: Smile,
          title: 'Perfection Not Required',
          description: "It's okay if you miss days. Write when you feel like it, at your own pace."
        },
        {
          icon: Coffee,
          title: '5 Minutes with Coffee',
          description: 'Just jot down how you feel while enjoying your morning coffee. That\'s all it takes.'
        },
        {
          icon: Heart,
          title: 'A Gift to Yourself',
          description: 'Small records that your future self will treasure when looking back.'
        },
        {
          icon: Sparkles,
          title: 'Built for Consistency',
          description: 'Designed with helpful features specifically for those who struggle to keep up.'
        }
      ],
      encouragement1: '"Oh no, I forgot to write again..."',
      encouragement2: 'Say goodbye to that guilt!',
      encouragement3: 'This journal is on your side',
      encouragementIcon: Heart
    }
  };

  const t = content[language];
  const TitleIcon = t.titleIcon;
  const EncouragementIcon = t.encouragementIcon;

  return (
    <section className="bg-gradient-to-b from-white to-[#FFF9F0] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="bg-[#FFB347] text-white px-4 py-2 rounded-full text-sm font-bold block w-fit mx-auto mb-8">
            {t.badge}
          </span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-6 text-[#2D3748] font-bold inline-flex items-center justify-center gap-3" style={{ fontFamily: 'Nunito, sans-serif' }}>
            {t.title} <TitleIcon className="w-12 h-12 text-[#8BC34A]" strokeWidth={2} />
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: 'Nunito, sans-serif' }}>
            {t.subtitle1}
            <br />{t.subtitle2}
          </p>
        </div>

        {/* Concept Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8">
          {t.concepts.map((concept, index) => {
            const Icon = concept.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#FFB347] group">
                {/* Icon */}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-14 h-14 text-[#FF9A76]" strokeWidth={2} />
                </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-[#2D3748]" style={{ fontFamily: 'Nunito, sans-serif' }}>
                {concept.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Nunito, sans-serif' }}>
                {concept.description}
              </p>
            </div>
            );
          })}
        </div>

        {/* Encouraging Message */}
        <div className="mt-16 bg-gradient-to-r from-[#FFE9CC] to-[#FFD9A8] rounded-3xl p-8 md:p-12 text-center">
          <p className="text-2xl md:text-3xl font-bold text-[#2D3748] mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
            {t.encouragement1}
            <br />{t.encouragement2}
          </p>
          <p className="text-lg text-gray-700 inline-flex items-center justify-center gap-2" style={{ fontFamily: 'Nunito, sans-serif' }}>
            {t.encouragement3} <EncouragementIcon className="w-6 h-6 text-[#FF9A76] fill-[#FF9A76]" />
          </p>
        </div>
      </div>
    </section>
  );
}