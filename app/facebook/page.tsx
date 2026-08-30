import React from 'react';
import { FacebookClient } from './FacebookClient';
import { SeoFaq } from '../../components/SeoFaq';
import { JsonLd } from '../../components/JsonLd';
import { ShieldCheck, Zap, Video, Smartphone, CheckCircle2, HardDrive, Award } from 'lucide-react';

export const metadata = {
  title: 'Free Facebook Reel Downloader - Download Facebook Videos in HD | VideoSave ',
  description: 'Download Facebook Reels and public videos in HD MP4 format for free. Ultra-fast processing, no watermarks, mobile and desktop supported.',
  keywords: [
    'facebook reel downloader',
    'download facebook videos hd',
    'facebook video saver mp4',
    'free facebook reel downloader',
    'facebook video downloader online',
  ],
  alternates: {
    canonical: 'https://VideoSave .media/facebook',
  },
};

export default function FacebookPage() {
  const facebookFaqs = [
    {
      question: 'How do I download Facebook Reels or videos with VideoSave ?',
      answer: 'Find the Facebook Reel or video you wish to download, click the "Share" button, and copy the link. Paste the URL into VideoSave above and click "Fetch Facebook Video". Choose your preferred quality and the file will save to your device immediately.',
    },
    {
      question: 'Can I download Facebook videos in Full HD (1080p)?',
      answer: 'Yes. VideoSave extracts Facebook Reels and videos in the highest available HD quality provided by the original creator.',
    },
    {
      question: 'Does VideoSave store or log my Facebook download history?',
      answer: 'No. VideoSave respects your privacy. Processed video streams are streamed directly to your browser and no log of your download history is stored.',
    },
    {
      question: 'Can I use VideoSave on Android and iPhone?',
      answer: 'Yes. VideoSave is completely web-based and compatible with Chrome, Safari, Firefox, Edge, and Opera on all smartphones, tablets, and desktop computers.',
    },
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://VideoSave .media' },
      { '@type': 'ListItem', position: 2, name: 'Facebook Reel Downloader', item: 'https://VideoSave .media/facebook' },
    ],
  };

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema} />

      {/* Downloader Client Tool */}
      <FacebookClient />

      {/* Comprehensive SEO Content Section for Facebook Reel Downloader */}
      <section className="max-w-5xl mx-auto space-y-12 py-8 border-t border-slate-200 dark:border-[#1E2436]">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-500 font-bold text-xs">
            <Award className="w-4 h-4" /> HD Facebook Video Saver
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-100 tracking-tight">
            High Quality <span className="text-[#2563EB] dark:text-[#3B82F6]">Facebook Reel Downloader</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Save public Facebook Reels and watch them offline on any device with crystal-clear MP4 quality.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold">
              <Video className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">Full HD Quality</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Extracts high-bitrate HD Facebook Reels and clips without compression artifacts.
            </p>
          </div>

          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-[#2563EB] dark:text-[#3B82F6] flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">Fast FFmpeg Engine</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Backend FFmpeg media processing ensures instant conversion and file delivery.
            </p>
          </div>

          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">100% Free & Safe</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              No account creation, registration, or software downloads required.
            </p>
          </div>

          <div className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-2xl p-5 space-y-2.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">Cross-Platform</h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Works across Windows, Mac, Linux, Android, and iOS web browsers.
            </p>
          </div>
        </div>

        {/* Detailed Guide */}
        <article className="bg-white dark:bg-[#121520] border border-slate-200 dark:border-[#1E2436] rounded-3xl p-6 sm:p-10 space-y-6 text-slate-700 dark:text-zinc-300 text-sm leading-relaxed shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-zinc-100 border-b border-slate-200 dark:border-[#1E2436] pb-4">
            How to Download Facebook Reels to Your Phone or PC
          </h2>


          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none p-0">
            <li className="bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200/80 dark:border-[#1E2436] rounded-2xl p-5 space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#2563EB] text-white font-extrabold flex items-center justify-center text-xs">1</span>
              <h3 className="font-bold text-slate-900 dark:text-zinc-100">Copy Facebook Link</h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                Open Facebook, locate the Reel or video you wish to save, tap "Share", and copy the link.
              </p>
            </li>

            <li className="bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200/80 dark:border-[#1E2436] rounded-2xl p-5 space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#2563EB] text-white font-extrabold flex items-center justify-center text-xs">2</span>
              <h3 className="font-bold text-slate-900 dark:text-zinc-100">Paste in VideoSave </h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                Paste the copied URL into the VideoSave  Facebook downloader box and click "Fetch Facebook Video".
              </p>
            </li>

            <li className="bg-slate-50 dark:bg-[#1A1E2E] border border-slate-200/80 dark:border-[#1E2436] rounded-2xl p-5 space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#2563EB] text-white font-extrabold flex items-center justify-center text-xs">3</span>
              <h3 className="font-bold text-slate-900 dark:text-zinc-100">Save Video</h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                Select your preferred quality option to download the HD MP4 file straight to your local device.
              </p>
            </li>
          </ol>
        </article>
      </section>




      {/* SEO FAQ Accordion */}
      <SeoFaq
        title="Facebook Reel Downloader FAQ"
        subtitle="Answers to common questions about saving Facebook Reels and videos."
        items={facebookFaqs}
      />
    </div>
  );
}
