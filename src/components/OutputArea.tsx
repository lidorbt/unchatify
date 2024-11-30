// src/components/OutputArea.tsx

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
          <Lock className="mr-2 text-green-600" />
          <h2 className="text-xl font-semibold">Obfuscated Text</h2>
        </div>
        <button
          onClick={copyToClipboard}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all flex items-center"
        >
          <Copy className="mr-2" /> Copy
        </button>
      </div>
      <div className="w-full p-4 border-2 border-green-300 rounded-xl bg-green-50 max-h-64 overflow-y-auto">
        {obfuscatedText}
      </div>
    </div>
  );
};

export default OutputArea;
