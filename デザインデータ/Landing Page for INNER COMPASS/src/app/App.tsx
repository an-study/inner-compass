import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Concept } from './components/Concept';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="size-full">
      <Navigation />
      <Hero />
      <Concept />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}