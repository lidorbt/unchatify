import React, { useState, useRef } from 'react';
import { Copy, RefreshCw, Lock, Wand2, FileText, Code, Brain, Settings } from 'lucide-react';

// Obfuscation Utility Functions
const obfuscationStrategies = {
  linguistic: {
    low: (text) => {
      // Simple linguistic obfuscation - synonym replacement, minor restructuring
      const simpleReplacements = {
        'very': 'extremely',
        'good': 'excellent',
        'said': 'articulated',
        'think': 'contemplate',
        'use': 'utilize'
      };
      
      return text.split(' ').map(word => 
        simpleReplacements[word.toLowerCase()] || word
      ).join(' ');
    },
    medium: (text) => {
      // More advanced linguistic obfuscation
      const mediumReplacements = {
        'machine learning': 'computational cognitive algorithmic systems',
        'AI': 'advanced algorithmic intelligence',
        'data': 'informational aggregates',
        'problem': 'computational challenge',
        'solution': 'strategic resolution'
      };
      
      return Object.entries(mediumReplacements).reduce(
        (acc, [original, replacement]) => 
          acc.replace(new RegExp(original, 'gi'), replacement),
        text
      );
    },
    high: (text) => {
      // Academic-level linguistic transformation
      const academicTransformations = {
        'creates': 'engenders a paradigmatic manifestation of',
        'develops': 'instantiates a sophisticated architectural framework for',
        'uses': 'leverages a multidimensional methodological approach incorporating',
        'shows': 'demonstrates a statistically significant phenomenological construct indicating',
        'helps': 'facilitates a comprehensive epistemological intervention through'
      };
      
      return Object.entries(academicTransformations).reduce(
        (acc, [original, replacement]) => 
          acc.replace(new RegExp(original, 'gi'), replacement),
        text
      );
    }
  },
  structural: {
    low: (text) => {
      // Basic structural obfuscation
      return text.split('').reverse().join('')
        .split(' ').sort(() => Math.random() - 0.5).join(' ');
    },
    medium: (text) => {
      // Moderate structural obfuscation with character-level mixing
      return text.split('').map((char, index) => 
        index % 3 === 0 ? char.toUpperCase() : char
      ).join('').split(' ').sort(() => Math.random() - 0.5).join(' ');
    },
    high: (text) => {
      // Advanced structural obfuscation with complex transformations
      const scrambleText = text.split('').sort(() => Math.random() - 0.5).join('');
      return scrambleText.split(' ')
        .map(word => word.split('').reverse().join(''))
        .sort(() => Math.random() - 0.5)
        .join(' ');
    }
  }
};

const AITextObfuscator = () => {
  const [inputText, setInputText] = useState('');
  const [obfuscatedText, setObfuscatedText] = useState('');
  const [obfuscationType, setObfuscationType] = useState('linguistic');
  const [obfuscationLevel, setObfuscationLevel] = useState('medium');
  const outputRef = useRef(null);

  const handleObfuscate = () => {
    if (!inputText) return;
    
    const strategy = obfuscationStrategies[obfuscationType][obfuscationLevel];
    const result = strategy(inputText);
    setObfuscatedText(result);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(obfuscatedText);
    alert('Copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 flex items-center justify-center">
          <Wand2 className="mr-3 text-purple-600" /> AI Text Obfuscator
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Input Section */}
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

          {/* Obfuscation Controls */}
          <div>
            <div className="flex items-center mb-4">
              <Settings className="mr-2 text-green-600" />
              <h2 className="text-xl font-semibold">Obfuscation Settings</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block mb-2 font-medium">Obfuscation Type</label>
                <div className="flex space-x-2">
                  {['linguistic', 'structural'].map((type) => (
                    <button 
                      key={type}
                      onClick={() => setObfuscationType(type)}
                      className={`px-4 py-2 rounded-lg transition-all ${
                        obfuscationType === type 
                          ? 'bg-purple-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block mb-2 font-medium">Complexity Level</label>
                <div className="flex space-x-2">
                  {['low', 'medium', 'high'].map((level) => (
                    <button 
                      key={level}
                      onClick={() => setObfuscationLevel(level)}
                      className={`px-4 py-2 rounded-lg transition-all ${
                        obfuscationLevel === level 
                          ? 'bg-green-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {level.charAt(0).toUpperCase() + level.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Obfuscation Button */}
        <div className="text-center mt-6">
          <button 
            onClick={handleObfuscate}
            disabled={!inputText}
            className="bg-purple-600 text-white px-8 py-3 rounded-xl hover:bg-purple-700 transition-all disabled:opacity-50 flex items-center mx-auto"
          >
            <RefreshCw className="mr-2" /> Obfuscate Text
          </button>
        </div>

        {/* Output Section */}
        {obfuscatedText && (
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
            <div 
              ref={outputRef}
              className="w-full p-4 border-2 border-green-300 rounded-xl bg-green-50 max-h-64 overflow-y-auto"
            >
              {obfuscatedText}
            </div>
          </div>
        )}
      </div>

      {/* Information Section */}
      <div className="mt-8 max-w-4xl w-full bg-white shadow-xl rounded-2xl p-6">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">How It Works</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-purple-50 p-4 rounded-xl">
            <Brain className="text-purple-600 mb-2" />
            <h4 className="font-semibold mb-2">Linguistic Obfuscation</h4>
            <p className="text-sm text-gray-600">
              Replaces words and phrases with more complex alternatives, making the text less recognizable as AI-generated.
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-xl">
            <Code className="text-green-600 mb-2" />
            <h4 className="font-semibold mb-2">Structural Transformation</h4>
            <p className="text-sm text-gray-600">
              Modifies text structure by rearranging words, changing character cases, and introducing controlled randomness.
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-xl">
            <Wand2 className="text-blue-600 mb-2" />
            <h4 className="font-semibold mb-2">Adaptive Complexity</h4>
            <p className="text-sm text-gray-600">
              Choose from low to high complexity levels to match your specific obfuscation needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITextObfuscator;