import React from 'react';
import { Copy, Lock } from 'lucide-react';

interface OutputAreaProps {
  obfuscatedText: string;
  copyToClipboard: () => void;
}

const OutputArea: React.FC<OutputAreaProps> = ({ obfuscatedText, copyToClipboard }) => {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Lock className="mr-2 text-green-600 dark:text-green-400" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Obfuscated Text</h2>
        </div>
        <button
          onClick={copyToClipboard}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all flex items-center text-sm"
        >
          <Copy className="mr-2" /> Copy
        </button>
      </div>
      <div className="w-full p-4 border border-green-300 dark:border-green-700 rounded-lg bg-green-50 dark:bg-green-900 max-h-64 overflow-auto text-sm leading-6 text-gray-800 dark:text-gray-200 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 scrollbar-track-gray-200 dark:scrollbar-track-gray-800">
        {obfuscatedText}
      </div>
    </div>
  );
};

export default OutputArea;
