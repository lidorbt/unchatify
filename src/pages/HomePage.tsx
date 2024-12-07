import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { obfuscationStrategies, ObfuscationType, ObfuscationLevel } from '../utils/obfuscationStrategies';
import { RefreshCw } from 'lucide-react';
import TextInputArea from '../components/TextInputArea';
import ObfuscationSettings from '../components/ObfuscationSettings';
import OutputArea from '../components/OutputArea';
import History from '../components/History';
import ServiceAgreementModal from '../components/ServiceAgreementModal';

interface HomePageProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

const HomePage: React.FC<HomePageProps> = ({ darkMode, setDarkMode }) => {
  const [inputText, setInputText] = useState<string>('');
  const [obfuscatedText, setObfuscatedText] = useState<string>('');
  const [obfuscationType, setObfuscationType] = useState<ObfuscationType>('text');
  const [obfuscationLevel, setObfuscationLevel] = useState<ObfuscationLevel>('medium');
  const [history, setHistory] = useState<string[]>([]);
  const [error, setError] = useState<string>('');
  const [serviceAgreementOpen, setServiceAgreementOpen] = useState<boolean>(false);

  const handleObfuscate = () => {
    if (!inputText.trim()) {
      setError('Input text cannot be empty.');
      return;
    }
    try {
      const strategy = obfuscationStrategies[obfuscationType][obfuscationLevel];
      let result = strategy(inputText);
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

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onServiceAgreementClick={() => setServiceAgreementOpen(true)}
      />

      <div className="flex-1 overflow-auto scroll-smooth px-4 sm:px-6 lg:px-8 pb-24 pt-4 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 scrollbar-track-gray-200 dark:scrollbar-track-gray-800">
        
        {/* Hero Section */}
        <section className="mt-6 mb-10 flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Outsmart AI Detectors with Ease
          </h1>
          <p className="max-w-md text-gray-700 dark:text-gray-300 mb-6">
            Transform your AI-generated content into a form that’s harder to detect, ensuring privacy, originality, and a unique voice.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#obfuscate" className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Start Obfuscating
            </a>
          </div>

          {/* Desktop Ad (Top banner) */}
          <div className="hidden md:block justify-center mt-8 text-xs text-gray-500 dark:text-gray-400 italic border border-gray-200 dark:border-gray-700 rounded p-2 w-full max-w-2xl mx-auto">
            {/* Google AdSense Top Banner */}
            <ins className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-client="YOUR_ADSENSE_CLIENT_ID"
              data-ad-slot="1234567890"
              data-ad-format="horizontal"
              data-full-width-responsive="true"></ins>
            <script>{`(adsbygoogle = window.adsbygoogle || []).push({});`}</script>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12" id="features">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 dark:border-gray-700 border border-gray-200 rounded-xl p-6 text-center flex flex-col items-center">
              <div className="mb-4">
                {/* Icon for linguistic diversity */}
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M5 8l6 6M5 8l6-6M11 14l-6 6M14 5h7M14 19h7"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">Linguistic / Text Synonyms</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Substitute words with synonyms at varying intensities to mask AI-generated patterns.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 dark:border-gray-700 border border-gray-200 rounded-xl p-6 text-center flex flex-col items-center">
              <div className="mb-4">
                {/* Icon for code obfuscation */}
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M16 18 22 12 16 6M8 6 2 12l6 6"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">Code Obfuscation</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Rename variables, reorder functions, and add junk code to disguise AI-generated code.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 dark:border-gray-700 border border-gray-200 rounded-xl p-6 text-center flex flex-col items-center">
              <div className="mb-4">
                {/* Icon for subtle enhancements */}
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="m15 4-1 1M14 9l4.2 4.2a1.4 1.4 0 0 1-2 2L12 11M8 13l-3.2 3.2a1.4 1.4 0 0 0 2 2L11 15M6 9V6m0 0H3m3 0h.01M18 3l3 3"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">Various Complexity Levels</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Choose low, medium, or high complexity to control how thoroughly text or code is transformed.
              </p>
            </div>
          </div>

          {/* Desktop Sidebar Ad (Large screens) */}
          <div className="hidden lg:flex justify-center mt-8">
            <div className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg w-64 h-auto flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 italic p-2">
              {/* Google AdSense Sidebar Ad */}
              <ins className="adsbygoogle"
                style={{ display: 'block', width: '300px', height: '600px' }}
                data-ad-client="YOUR_ADSENSE_CLIENT_ID"
                data-ad-slot="0987654321"></ins>
              <script>{`(adsbygoogle = window.adsbygoogle || []).push({});`}</script>
            </div>
          </div>
        </section>

        {/* Obfuscation Tool Section */}
        <section id="obfuscate" className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">Obfuscate Your Text or Code</h2>
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 dark:border-gray-700 border border-gray-200 rounded-xl p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <TextInputArea inputText={inputText} setInputText={setInputText} />
              <ObfuscationSettings
                obfuscationType={obfuscationType}
                setObfuscationType={setObfuscationType}
                obfuscationLevel={obfuscationLevel}
                setObfuscationLevel={setObfuscationLevel}
              />
            </div>

            <div className="text-center mt-8">
              <button
                onClick={handleObfuscate}
                disabled={!inputText}
                className="bg-indigo-600 text-white px-8 py-3 rounded-xl hover:bg-indigo-700 transition-all disabled:opacity-50 flex items-center mx-auto"
              >
                <RefreshCw className="mr-2" /> Obfuscate Text
              </button>
              {error && <div className="text-red-500 mt-2">{error}</div>}
            </div>

            {obfuscatedText && (
              <OutputArea obfuscatedText={obfuscatedText} copyToClipboard={copyToClipboard} />
            )}

            <History history={history} />
          </div>
        </section>

        {/* Mobile Ad (Bottom) */}
        <div className="md:hidden mt-8 flex justify-center">
          <div className="w-full text-center py-4">
            {/* Google AdSense Mobile Ad */}
            <ins className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-client="YOUR_ADSENSE_CLIENT_ID"
              data-ad-slot="1122334455"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
            <script>{`(adsbygoogle = window.adsbygoogle || []).push({});`}</script>
          </div>
        </div>

      </div>

      <Footer />

      {serviceAgreementOpen && (
        <ServiceAgreementModal onClose={() => setServiceAgreementOpen(false)} />
      )}
    </div>
  );
};

export default HomePage;
