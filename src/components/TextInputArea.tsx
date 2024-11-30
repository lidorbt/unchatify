// src/components/TextInputArea.tsx

import React from 'react';
import { FileText } from 'lucide-react';

interface TextInputAreaProps {
  inputText: string;
  setInputText: (text: string) => void;
}

const TextInputArea: React.FC<TextInputAreaProps> = ({ inputText, setInputText }) => {
  return (
    <div>
      <div className="flex items-center mb-4">
        <FileText className="mr-2 text-blue-600" />
        <h2 className="text-xl font-semibold">Input Text</h2>
      </div>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Paste your AI-generated text here..."
        className="w-full h-64 p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
      />
    </div>
  );
};

export default TextInputArea;
