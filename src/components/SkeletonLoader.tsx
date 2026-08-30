import React from 'react';

export const SkeletonLoader: React.FC = () => {
  return (
    <div className="w-full bg-slate-50/80 dark:bg-[#0B0D14] border border-slate-200/80 dark:border-zinc-800 rounded-2xl p-5 space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row gap-5 items-start">
        {/* Thumbnail skeleton */}
        <div className="w-full md:w-60 aspect-video rounded-xl skeleton-shimmer shrink-0" />

        {/* Text skeleton lines */}
        <div className="flex-1 space-y-3 w-full py-1">
          <div className="w-24 h-5 rounded-full skeleton-shimmer" />
          <div className="w-full h-6 rounded-lg skeleton-shimmer" />
          <div className="w-3/4 h-6 rounded-lg skeleton-shimmer" />
          <div className="w-1/2 h-4 rounded-lg skeleton-shimmer pt-2" />
        </div>
      </div>

      {/* Quality options skeleton */}
      <div className="space-y-3 pt-4 border-t border-slate-200/60 dark:border-zinc-800">
        <div className="w-36 h-5 rounded-md skeleton-shimmer" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="h-14 rounded-xl skeleton-shimmer" />
          <div className="h-14 rounded-xl skeleton-shimmer" />
        </div>
      </div>
    </div>
  );
};

