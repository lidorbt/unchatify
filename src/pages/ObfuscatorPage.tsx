import React, { useState } from 'react';
import TextInputArea from '../components/TextInputArea';
import ObfuscationSettings from '../components/ObfuscationSettings';
import OutputArea from '../components/OutputArea';
import History from '../components/History';
import CustomObfuscation from '../components/CustomObfuscation';
import { obfuscationStrategies, ObfuscationType, ObfuscationLevel } from '../utils/obfuscationStrategies';
import { RefreshCw } from 'lucide-react';
import Info from '../components/Info';

const ObfuscatorPage: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [obfuscatedText, setObfuscatedText] = useState<string>('');
  const [obfuscationType, setObfuscationType] = useState<ObfuscationType>('linguistic');
  const [obfuscationLevel, setObfuscationLevel] = useState<ObfuscationLevel>('medium');
  const [history, setHistory] = useState<string[]>([]);
  const [customStrategies, setCustomStrategies] = useState<((text: string) => string)[]>([]);
  const [error, setError] = useState<string>('');

  const handleObfuscate = () => {
    if (!inputText.trim()) {
      setError('Input text cannot be empty.');
      return;
    }
    try {
      const strategy = obfuscationStrategies[obfuscationType][obfuscationLevel];
      let result = strategy(inputText);
      customStrategies.forEach((customStrategy) => {
        result = customStrategy(result);
      });
      setObfuscatedText(result);
      setHistory([result, ...history]);
      setError('');
    } catch {
      setError('An error occurred during obfuscation.');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(obfuscatedText);
    alert('Copied to clipboard!');
  };

  const addCustomStrategy = (strategy: (text: string) => string) => {
    setCustomStrategies([...customStrategies, strategy]);
  };

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12">
      <div className="relative flex flex-col lg:flex-row gap-8">
        
        {/* Main Content Area */}
        <div className="flex-1 bg-white rounded-xl shadow-lg p-6 lg:p-8">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 flex items-center justify-center">
            <RefreshCw className="mr-3 text-purple-600" /> Obfuscate Your Text
          </h1>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Input Section */}
            <TextInputArea inputText={inputText} setInputText={setInputText} />

            {/* Obfuscation Controls */}
            <ObfuscationSettings
              obfuscationType={obfuscationType}
              setObfuscationType={setObfuscationType}
              obfuscationLevel={obfuscationLevel}
              setObfuscationLevel={setObfuscationLevel}
            />
          </div>

          {/* Obfuscation Button */}
          <div className="text-center mt-8">
            <button
              onClick={handleObfuscate}
              disabled={!inputText}
              className="bg-purple-600 text-white px-8 py-3 rounded-xl hover:bg-purple-700 transition-all disabled:opacity-50 flex items-center mx-auto"
            >
              <RefreshCw className="mr-2" /> Obfuscate Text
            </button>
            {error && <div className="text-red-500 mt-2">{error}</div>}
          </div>

          {/* Output Section */}
          {obfuscatedText && (
            <OutputArea obfuscatedText={obfuscatedText} copyToClipboard={copyToClipboard} />
          )}

          {/* Custom Obfuscation */}
          <CustomObfuscation addCustomStrategy={addCustomStrategy} />

          {/* History Section */}
          <History history={history} />

          {/* Info Section */}
          <Info />
        </div>

        {/* Sidebar Ad (Large screens) */}
        <div className="hidden lg:flex flex-col justify-center items-center w-64">
          <div className="bg-white rounded-xl shadow p-4 text-center text-gray-500 italic">
            [Ad Space - 300x600]
          </div>
        </div>
      </div>

      {/* Bottom Ad (Small screens) */}
      <div className="lg:hidden mt-8 flex justify-center">
        <div className="bg-white border border-gray-300 rounded-md w-full text-center py-4 text-gray-500 italic">
          [Ad Space - 300x250]
        </div>
      </div>
    </div>
  );
};

export default ObfuscatorPage;
