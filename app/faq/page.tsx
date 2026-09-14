import React from 'react';
import { HomeClient } from '../HomeClient';
import { SeoFaq } from '../../components/SeoFaq';
import { JsonLd } from '../../components/JsonLd';
import { HelpCircle, Search, MessageSquare, ShieldCheck, Zap } from 'lucide-react';

export const metadata = {
  title: 'Frequently Asked Questions (FAQ) | VideoSave Downloader',
  description: 'Find answers to common questions about downloading TikTok, Instagram, Facebook, X (Twitter), Vimeo, and Pinterest videos in 4K, 1080p, and MP3 format for free.',
  alternates: {
    canonical: 'https://videosave.site/faq',
  },
};

export default function FaqPage() {
  const faqCategories = [
    {
      title: 'General Questions',
      items: [
        {
          question: 'What is VideoSave?',
          answer: 'VideoSave is a free, web-based online video and audio downloader tool that allows you to download videos, Reels, and audio tracks from TikTok, Instagram, Facebook, X (Twitter), Vimeo, Pinterest, and more without registering or installing software.',
        },
        {
          question: 'Is VideoSave 100% free to use?',
          answer: 'Yes! VideoSave is completely free with zero hidden fees, subscriptions, or limits on the number of downloads you can perform.',
        },
        {
          question: 'Do I need an account or registration to download?',
          answer: 'No. You do not need to create an account, log in, or provide any personal information to use VideoSave.',
        },
        {
          question: 'Which operating systems and devices are supported?',
          answer: 'VideoSave works in any modern web browser across Windows, macOS, Linux, Android Chrome, and iOS Safari.',
        },
      ],
    },
    {
      title: 'Platform Specific Downloads',
      items: [
        {
          question: 'How do I download TikTok videos without watermark?',
          answer: 'Simply copy the TikTok video link, paste it into the VideoSave input box above, and click Analyze. VideoSave automatically strips the watermark overlay and provides a clean HD MP4 file download link.',
        },
        {
          question: 'Can I download Instagram Reels and Stories?',
          answer: 'Yes! Copy the share link of any public Instagram Reel or video post, paste it into VideoSave, and click Analyze to save it in full original 1080p resolution.',
        },
        {
          question: 'How do I save X (Twitter) videos or extract MP3 audio?',
          answer: 'Paste your tweet or video link into VideoSave. Our system will analyze all available streams and present buttons for HD video resolutions and MP3 audio extraction.',
        },
        {
          question: 'Does VideoSave support downloading Facebook video Reels?',
          answer: 'Yes. VideoSave supports Facebook public Reels, Facebook Watch clips, and timeline videos in HD quality.',
        },
      ],
    },
    {
      title: 'Technical & File Quality',
      items: [
        {
          question: 'What video quality options can I choose from?',
          answer: 'Depending on the source video, you can download in 4K (2160p), 2K (1440p), 1080p Full HD, 720p HD, 480p, 360p, or high-bitrate MP3/M4A audio.',
        },
        {
          question: 'Why does 1080p or 4K video processing take a few seconds?',
          answer: 'Higher resolutions (1080p and 4K) serve video and audio in separate adaptive streams on some platforms. VideoSave merges these streams using high-speed server-side processing to give you a single complete MP4 file.',
        },
        {
          question: 'Does VideoSave keep or store my downloaded videos?',
          answer: 'No. Files are streamed dynamically to your device and are never permanently stored or shared.',
        },
      ],
    },
  ];

  const allFaqItems = faqCategories.flatMap((c) => c.items);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="space-y-16 animate-fade-in pb-16">
      <JsonLd data={faqSchema} />

      {/* Downloader Hero Header */}
      <HomeClient />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-500 dark:text-blue-400 font-bold text-xs sm:text-sm border border-blue-500/30">
            <HelpCircle className="w-4 h-4" /> Help & Support Center
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Frequently Asked <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 font-medium">
            Everything you need to know about downloading videos, quality options, and privacy on VideoSave.
          </p>
        </div>

        {/* Categorized FAQs */}
        <div className="space-y-12">
          {faqCategories.map((cat, idx) => (
            <div key={idx} className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white border-b border-slate-200 dark:border-[#1E2338] pb-3">
                {cat.title}
              </h2>
              <SeoFaq items={cat.items} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

