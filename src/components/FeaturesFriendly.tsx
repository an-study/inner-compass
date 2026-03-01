import { CheckCircle2, BookOpen, BarChart3, Map, Calendar, CheckSquare, Lightbulb, Camera, Rainbow, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface FeaturesFriendlyProps {
  language: 'en' | 'ja';
}

export function FeaturesFriendly({ language }: FeaturesFriendlyProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const content = {
    ja: {
      badge: '4つの使い方',
      title: 'シンプルで使いやすい',
      titleIcon: BookOpen,
      subtitle: '人生を俯瞰する表、旅の記録、週間プラン、習慣づくり。',
      subtitle2: 'この1冊で、あなたの100年をまるごと記録できます。',
      features: [
        {
          icon: BarChart3,
          title: '100年表',
          description: '年齢、人生とキャリア、お金のこと、思い出。100年分の人生を1ページで俯瞰できます。',
          highlights: ['年齢と年号が一目で分かる', '人生とキャリアを記録', 'お金のことも管理', '大切な思い出を残す']
        },
        {
          icon: Map,
          title: '日本地図とメモ',
          description: '都道府県ごとの地域マップ付き。旅の思い出、訪れた場所、食べたもの、自由に書けます！',
          highlights: ['地域ごとの地図付き', '旅行の記録に最適', '行きたい場所リスト', '地域の思い出メモ']
        },
        {
          icon: Calendar,
          title: '週間ビュー',
          description: '見開きで6ヶ月分が週単位で見られる！予定も振り返りも、パッと見で分かりやすい。',
          highlights: ['週ごとに整理', '6ヶ月分を一覧', '予定と振り返り', 'パターンが見える']
        },
        {
          icon: CheckSquare,
          title: 'ハビットトラッカー',
          description: '続けたい習慣を楽しく記録。チェックが増えると嬉しくなる！三日坊主さんの味方です。',
          highlights: ['毎日チェックできる', '視覚的に分かりやすい', '続けるモチベUP', '習慣づくりに最適']
        }
      ],
      tips: [
        { icon: Lightbulb, title: '自由に使える', description: '決まった使い方はありません。好きなページから使ってOK！' },
        { icon: Camera, title: '写真も貼れる', description: '思い出の写真やチケットを貼って、あなただけの1冊に！' },
        { icon: Rainbow, title: '長く使える', description: '100年分のスペース。一生使える相棒です！' }
      ]
    },
    en: {
      badge: '4 Core Features',
      title: 'Simple & Easy to Use',
      titleIcon: BookOpen,
      subtitle: 'Life overview, travel records, weekly planning, habit building.',
      subtitle2: 'Everything you need to document your 100-year journey in one book.',
      features: [
        {
          icon: BarChart3,
          title: '100-Year Chronicle',
          description: 'Track your age, life & career milestones, finances, and memories. See your entire century on one page.',
          highlights: ['Age and year overview', 'Life & career tracking', 'Financial management', 'Memory preservation']
        },
        {
          icon: Map,
          title: 'Japan Regional Maps',
          description: 'Prefecture maps by region with dedicated note spaces. Record your travels, places visited, and local experiences!',
          highlights: ['Regional maps included', 'Perfect for travel logs', 'Bucket list tracking', 'Regional memory notes']
        },
        {
          icon: Calendar,
          title: 'Weekly View',
          description: 'See 6 months at a glance in weekly spreads! Easy to track plans and reflections at a glance.',
          highlights: ['Weekly organization', '6-month overview', 'Plans & reflections', 'Pattern recognition']
        },
        {
          icon: CheckSquare,
          title: 'Habit Tracker',
          description: 'Track your habits joyfully. Watch your progress grow! Perfect for building consistency.',
          highlights: ['Daily checkboxes', 'Visual tracking', 'Motivation boost', 'Habit building tool']
        }
      ],
      tips: [
        { icon: Lightbulb, title: 'Use Freely', description: 'No rules! Start from any page you like!' },
        { icon: Camera, title: 'Add Photos', description: 'Paste photos and tickets to make it uniquely yours!' },
        { icon: Rainbow, title: 'Lifetime Companion', description: '100 years of space. A lifelong partner!' }
      ]
    }
  };

  const t = content[language];
  const TitleIcon = t.titleIcon;

  // previewImages: shown inside each feature card
  const previewImages = [
    '/images/image-1.jpg',
    '/images/image-2.jpg',
    '/images/image-3.jpg',
    '/images/image-4.jpg',
  ];

  // sliderImages: used in the interior spread slideshow (use -sample versions)
  const sliderImages = [
    '/images/image-1-sample.jpg',
    '/images/image-2-sample.jpg',
    '/images/image-3-sample.jpg',
    '/images/image-4-sample.jpg',
  ];

  const handleSlideChange = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    } else {
      setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#FFF9F0] to-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="bg-[#FF9A76] text-white px-4 py-2 rounded-full text-sm font-bold inline-block mb-4">
            {t.badge}
          </span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-6 text-[#2D3748] font-bold">
            
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t.subtitle}
            <br />{t.subtitle2}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {t.features.map((feature, index) => {
            const FeatureIcon = feature.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#FFB347]">
                {/* Icon */}
                <div className="mb-6">
                  <FeatureIcon className="w-16 h-16 text-[#FF9A76]" strokeWidth={2} />
                </div>
              
                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-[#2D3748]">
                  {feature.title}
                </h3>
              
                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
              
                {/* Highlights */}
                <ul className="space-y-3 mb-6">
                  {feature.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-[#FFB347] flex-shrink-0" strokeWidth={2.5} />
                      <span className="font-medium">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Feature Image Preview */}
                <div className="mt-6 rounded-2xl overflow-hidden border-2 border-gray-200">
                  <ImageWithFallback 
                    src={previewImages[index]}
                    alt={feature.title}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Interior Spread Showcase - Slideshow */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFB347]/20 to-[#FF9A76]/20 blur-3xl rounded-full" />
          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Slideshow Container */}
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-white">
              {/* Current Slide Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <ImageWithFallback 
                  src={sliderImages[currentSlide]}
                  alt={t.features[currentSlide].title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Slide Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 md:p-8">
                <div className="flex items-center gap-3 mb-2">
                  {(() => {
                    const Icon = t.features[currentSlide].icon;
                    return <Icon className="w-8 h-8 text-[#FFB347]" strokeWidth={2} />;
                  })()}
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{t.features[currentSlide].title}</h3>
                </div>
                <p className="text-white/90 text-sm md:text-base">{t.features[currentSlide].description}</p>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => handleSlideChange('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#2D3748] rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" strokeWidth={2.5} />
              </button>
              <button
                onClick={() => handleSlideChange('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#2D3748] rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-3 mt-6">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'w-10 bg-[#FFB347]'
                      : 'w-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {t.tips.map((tip, index) => {
            const TipIcon = tip.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-[#FFE9CC] to-[#FFD9A8] p-6 rounded-2xl">
                <div className="mb-3">
                  <TipIcon className="w-10 h-10 text-[#FF9A76]" strokeWidth={2} />
                </div>
                <h4 className="font-bold text-lg mb-2 text-[#2D3748]">{tip.title}</h4>
                <p className="text-sm text-gray-700">{tip.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
