'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { JsonLd } from './JsonLd';

export interface FaqItem {
  question: string;
  answer: string;
}

interface SeoFaqProps {
  title?: string;
  subtitle?: string;
  items: FaqItem[];
}

export const SeoFaq: React.FC<SeoFaqProps> = ({
  title = 'Frequently Asked Questions',
  subtitle = 'Everything you need to know about downloading videos and playlists with VideoSave .',
  items,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate Schema.org FAQPage JSON-LD
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-8">
      <JsonLd data={faqSchema} />

      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-[#2563EB] dark:text-[#3B82F6] border border-blue-200/60 dark:border-blue-800/60 font-semibold text-xs shadow-xs">
          <HelpCircle className="w-4 h-4" /> FAQ Guide
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-100 tracking-tight">
          {title}
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 max-w-xl mx-auto">
          {subtitle}
        </p>
      </div>

      <div className="space-y-4">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white dark:bg-[#11131F] border border-slate-200/90 dark:border-zinc-800/90 rounded-2xl overflow-hidden shadow-xs transition-all"
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-base text-slate-900 dark:text-zinc-100 hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors cursor-pointer"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#2563EB]' : ''
                    }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-sm text-slate-600 dark:text-zinc-400 border-t border-slate-100 dark:border-zinc-800/60 leading-relaxed animate-fade-in">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>




    </section>
  );
};
