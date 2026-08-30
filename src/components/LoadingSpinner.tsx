import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  label?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ label = 'Extracting media info...' }) => {
  return (
    <div className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 flex flex-col items-center justify-center gap-3 text-center shadow-xl shadow-gray-200/50 dark:shadow-none animate-pulse">
      <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center text-brand-600 dark:text-brand-400">
        <Loader2 className="w-6 h-6 animate-spin" />
      </div>
      <p className="font-semibold text-sm text-gray-700 dark:text-gray-300">{label}</p>
      <p className="text-xs text-gray-400 dark:text-gray-500">Communicating with backend extractor service...</p>
    </div>
  );
};
