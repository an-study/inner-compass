import { Compass, BookOpen, Calendar, Target } from 'lucide-react';

export function Concept() {
  const concepts = [
    {
      icon: Compass,
      title: "Life Navigation",
      description: "Chart your course through life's journey with intentional reflection and purpose."
    },
    {
      icon: BookOpen,
      title: "Legacy Documentation",
      description: "Create a timeless record that captures your experiences, wisdom, and evolution."
    },
    {
      icon: Calendar,
      title: "Century Perspective",
      description: "Embrace the long view with a framework designed for 100 years of life."
    },
    {
      icon: Target,
      title: "Daily Intention",
      description: "Transform each day into a purposeful step toward your grandest vision."
    }
  ];

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#d4af37] text-sm tracking-[0.3em] uppercase font-medium">
            The Philosophy
          </span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-6 text-[#0a1628]" style={{ fontFamily: 'Playfair Display, serif' }}>
            The 100-Year Life
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            In an age where we're living longer than ever, the Inner Compass empowers you to 
            design a life of meaning, purpose, and continuous growth across an entire century.
          </p>
        </div>

        {/* Concept Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {concepts.map((concept, index) => (
            <div key={index} className="text-center space-y-4 group">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#0a1628] text-[#d4af37] mb-4 group-hover:scale-110 transition-transform duration-300">
                <concept.icon className="w-10 h-10" strokeWidth={1.5} />
              </div>
              
              {/* Title */}
              <h3 className="text-xl text-[#0a1628]" style={{ fontFamily: 'Playfair Display, serif' }}>
                {concept.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                {concept.description}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center mt-20">
          <div className="h-px w-24 bg-[#d4af37]" />
          <div className="w-2 h-2 rounded-full bg-[#d4af37] mx-4" />
          <div className="h-px w-24 bg-[#d4af37]" />
        </div>
      </div>
    </section>
  );
}
