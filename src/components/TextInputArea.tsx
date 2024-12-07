import React from 'react';
import { FileText } from 'lucide-react';

interface TextInputAreaProps {
  inputText: string;
  setInputText: (text: string) => void;
}

const TextInputArea: React.FC<TextInputAreaProps> = ({ inputText, setInputText }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-2">
        <FileText className="mr-2 text-blue-600 dark:text-blue-400" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Input Text</h2>
      </div>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Paste your AI-generated text here..."
        className="w-full h-48 p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm bg-gray-50 dark:bg-gray-700 dark:text-gray-100"
      />
    </div>
  );
};

export default TextInputArea;
