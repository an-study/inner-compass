import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote: "This journal has transformed how I think about my life. The 100-year perspective is both humbling and empowering.",
      author: "Sarah Mitchell",
      role: "Life Coach & Author"
    },
    {
      quote: "The quality is extraordinary. Every page feels like an invitation to be intentional and present with my life's journey.",
      author: "Dr. James Chen",
      role: "Clinical Psychologist"
    },
    {
      quote: "I've tried countless journals, but Inner Compass is in a class of its own. It's both beautiful and deeply functional.",
      author: "Emma Rodriguez",
      role: "Executive & Mindfulness Practitioner"
    }
  ];

  return (
    <section className="bg-[#0a1628] text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#d4af37] text-sm tracking-[0.3em] uppercase font-medium">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl mt-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            Trusted by Visionaries
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-[#d4af37]/50 transition-colors duration-300">
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-[#d4af37] mb-6" strokeWidth={1.5} />
              
              {/* Quote */}
              <p className="text-lg text-gray-300 leading-relaxed mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="border-t border-white/10 pt-6">
                <p className="text-white font-medium mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Element */}
        <div className="flex items-center justify-center mt-20">
          <div className="h-px w-24 bg-[#d4af37]" />
          <div className="w-2 h-2 rounded-full bg-[#d4af37] mx-4" />
          <div className="h-px w-24 bg-[#d4af37]" />
        </div>
      </div>
    </section>
  );
}
