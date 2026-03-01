import { useState } from 'react';
import { Compass, Globe, ChevronDown } from 'lucide-react';

export function Navigation() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'ja'>('ja');

  const languages = {
    en: { label: 'English', short: 'EN' },
    ja: { label: '日本語', short: 'JP' }
  };

  const handleLanguageChange = (lang: 'en' | 'ja') => {
    setCurrentLanguage(lang);
    setIsLanguageOpen(false);
    // Dispatch custom event for language change
    window.dispatchEvent(new CustomEvent('languageChange', { detail: lang }));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#FFF5E6] to-[#FFE9CC] backdrop-blur-md border-b border-[#FFB347]/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Compass className="w-8 h-8 text-[#FF9A76]" strokeWidth={2} />
            <div className="flex flex-col">
              <span className="text-[#2D3748] text-xl font-bold leading-tight" style={{ fontFamily: 'Nunito, sans-serif' }}>
                Inner Compass
              </span>
              <span className="text-[#FF9A76] text-xs tracking-wider font-semibold">
                100年手帳プロジェクト
              </span>
            </div>
          </div>

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-[#FF9A76]/10 border-2 border-[#FFB347]/30 hover:border-[#FF9A76] transition-all duration-300 shadow-sm cursor-pointer"
              aria-label="Language Switcher"
            >
              <Globe className="w-5 h-5 text-[#FF9A76]" strokeWidth={2} />
              <span className="text-[#2D3748] text-sm font-bold" style={{ fontFamily: 'Nunito, sans-serif' }}>
                {languages[currentLanguage].short}
              </span>
              <ChevronDown 
                className={`w-4 h-4 text-[#FF9A76] transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} 
              />
            </button>

            {/* Dropdown Menu */}
            {isLanguageOpen && (
              <>
                {/* Backdrop */}
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setIsLanguageOpen(false)}
                />
                
                {/* Dropdown */}
                <div className="absolute right-0 top-full mt-2 w-48 bg-white border-2 border-[#FFB347]/30 rounded-2xl shadow-xl overflow-hidden z-50">
                  {Object.entries(languages).map(([code, lang]) => (
                    <button
                      key={code}
                      onClick={() => handleLanguageChange(code as 'en' | 'ja')}
                      className={`w-full px-4 py-3 text-left flex items-center justify-between transition-colors duration-200 cursor-pointer ${
                        currentLanguage === code
                          ? 'bg-[#FF9A76]/20 text-[#FF9A76] font-bold'
                          : 'text-[#2D3748] hover:bg-[#FFF5E6]'
                      }`}
                    >
                      <span style={{ fontFamily: 'Nunito, sans-serif' }}>
                        {lang.label}
                      </span>
                      {currentLanguage === code && (
                        <div className="w-2 h-2 rounded-full bg-[#FF9A76]" />
                      )}
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