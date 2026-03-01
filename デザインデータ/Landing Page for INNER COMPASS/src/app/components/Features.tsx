import { FileText, Map, Heart } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: FileText,
      title: "Daily Log",
      description: "Thoughtfully designed pages for capturing your daily experiences, gratitude, and insights with elegant prompts.",
      highlights: ["Morning intentions", "Evening reflections", "Gratitude practice", "Energy tracking"]
    },
    {
      icon: Map,
      title: "Vision Map",
      description: "Strategic planning sections to map your long-term goals, aspirations, and the milestones of your century.",
      highlights: ["Decade planning", "Life domains", "Goal architecture", "Progress tracking"]
    },
    {
      icon: Heart,
      title: "Anniversary List",
      description: "Dedicated spaces to commemorate special moments, relationships, and achievements throughout your journey.",
      highlights: ["Memory markers", "Relationship map", "Achievement log", "Celebration tracker"]
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#d4af37] text-sm tracking-[0.3em] uppercase font-medium">
            Interior Design
          </span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-6 text-[#0a1628]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Expertly Crafted Pages
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            Every page is meticulously designed to guide your reflection, planning, and growth with sophistication and clarity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0a1628] text-[#d4af37] mb-6">
                <feature.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              
              {/* Title */}
              <h3 className="text-2xl mb-4 text-[#0a1628]" style={{ fontFamily: 'Playfair Display, serif' }}>
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                {feature.description}
              </p>
              
              {/* Highlights */}
              <ul className="space-y-2">
                {feature.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                    <span style={{ fontFamily: 'Inter, sans-serif' }}>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Interior Spread Placeholder */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-[#d4af37]/10 blur-3xl rounded-full transform -translate-y-10" />
          <div className="relative z-10 w-full aspect-[16/9] bg-gray-700 rounded-lg shadow-2xl flex items-center justify-center border-2 border-gray-600">
            <div className="text-center px-8">
              <div className="text-[#d4af37] text-3xl mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                Interior Page Spread Layout
              </div>
              <div className="text-gray-400 text-base mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                Full Journal Spread Showcase
              </div>
              <div className="text-gray-500 text-sm">
                Daily Log • Vision Map • Anniversary Pages
              </div>
              <div className="text-gray-600 text-xs mt-4">
                1920 × 1080 px
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}