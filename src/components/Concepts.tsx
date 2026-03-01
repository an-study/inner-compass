import React from 'react';
import { useTranslation } from 'react-i18next';

const items = ['mind', 'goals', 'memories', 'values'] as const;

export default function Concepts() {
  const { t } = useTranslation();
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm tracking-widest text-brandGold uppercase mb-3">{t('concepts.title').toUpperCase()}</p>
        <h2 className="font-serifHeading text-3xl md:text-4xl text-brandNavy font-semibold mb-4">The 100-Year Life</h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-10">In an age where we're living longer than ever, the Inner Compass empowers you to design a life of meaning, purpose, and continuous growth across an entire century.</p>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((key) => (
            <div key={key} className="flex flex-col items-center text-center px-4">
              <div className="w-16 h-16 rounded-full bg-brandNavy flex items-center justify-center mb-4 shadow-lg">
                {/* icon placeholder */}
                <span className="text-brandGold text-xl">•</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">{t(`concepts.${key}.label`)}</h3>
              <p className="text-sm text-slate-600">{t(`concepts.${key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
