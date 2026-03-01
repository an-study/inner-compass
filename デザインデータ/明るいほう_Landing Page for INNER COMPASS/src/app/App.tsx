import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HeroFriendly } from './components/HeroFriendly';
import { ConceptFriendly } from './components/ConceptFriendly';
import { FeaturesFriendly } from './components/FeaturesFriendly';
import { CTAFriendly } from './components/CTAFriendly';
import { FooterFriendly } from './components/FooterFriendly';

export default function App() {
  const [language, setLanguage] = useState<'en' | 'ja'>('ja');

  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent<'en' | 'ja'>) => {
      setLanguage(event.detail);
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, []);

  return (
    <div className="size-full">
      <Navigation />
      <HeroFriendly language={language} />
      <ConceptFriendly language={language} />
      <FeaturesFriendly language={language} />
      <CTAFriendly language={language} />
      <FooterFriendly language={language} />
    </div>
  );
}