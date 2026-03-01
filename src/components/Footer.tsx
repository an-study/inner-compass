import { Compass } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#0a1628] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Compass className="w-8 h-8 text-[#d4af37]" strokeWidth={1.5} />
            <span className="text-2xl">Inner Compass</span>
          </div>
          <p className="text-gray-400 max-w-md">
            {t('footer.tagline', 'Navigate your century with intention, purpose, and grace.')}
          </p>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-400">
            {t('footer.copy')}
          </p>
        </div>
      </div>
    </footer>
  );
}
