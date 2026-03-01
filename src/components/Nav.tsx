import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Compass, Globe, ChevronDown } from 'lucide-react';

export default function Nav() {
  const { i18n, t } = useTranslation();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'ja'>('en');

  const languages = {
    en: { label: 'English', short: 'EN' },
    ja: { label: '日本語', short: 'JP' }
  };

  const handleLanguageChange = (lang: 'en' | 'ja') => {
    setCurrentLanguage(lang);
    i18n.changeLanguage(lang);
    setIsLanguageOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Compass className="w-8 h-8 text-[#d4af37]" strokeWidth={1.5} />
            <div className="flex flex-col">
              <span className="text-white text-xl leading-tight">Inner Compass</span>
              <span className="text-[#d4af37] text-xs tracking-wider uppercase">100-Year Logbook</span>
            </div>
          </div>

          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#d4af37]/50 transition-all duration-300"
              aria-label={t('nav.languageToggleAria')}
            >
              <Globe className="w-5 h-5 text-[#d4af37]" strokeWidth={1.5} />
              <span className="text-white text-sm font-medium">
                {languages[currentLanguage].short}
              </span>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLanguageOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setIsLanguageOpen(false)} />
                <div className="absolute right-0 top-full mt-2 w-48 bg-[#0a1628] border border-white/10 rounded-md shadow-2xl overflow-hidden z-50">
                  {Object.entries(languages).map(([code, lang]) => (
                    <button
                      key={code}
                      onClick={() => handleLanguageChange(code as 'en' | 'ja')}
                      className={`w-full px-4 py-3 text-left flex items-center justify-between transition-colors duration-200 ${
                        currentLanguage === code ? 'bg-[#d4af37]/20 text-[#d4af37]' : 'text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{lang.label}</span>
                      {currentLanguage === code && <div className="w-2 h-2 rounded-full bg-[#d4af37]" />}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
