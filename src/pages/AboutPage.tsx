import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12">
      <div className="relative flex flex-col lg:flex-row gap-8">
        
        {/* Main Content */}
        <div className="flex-1 bg-white rounded-xl shadow-lg p-6 lg:p-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">About AI Text Obfuscator</h1>
          <p className="text-gray-700 leading-relaxed mb-6">
            The AI Text Obfuscator helps users transform AI-generated text to make it less detectable 
            by AI detection algorithms. By applying various obfuscation strategies, users can modify 
            text linguistically and structurally, enhancing privacy and creativity.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Features</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li><strong>Linguistic Obfuscation:</strong> More complex alternatives for words and phrases.</li>
            <li><strong>Structural Transformation:</strong> Rearranging words, characters, and structure.</li>
            <li><strong>Custom Rules:</strong> Add personalized obfuscation rules.</li>
            <li><strong>History Tracking:</strong> View and reuse previously obfuscated texts.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">How It Works</h2>
          <p className="text-gray-700 leading-relaxed">
            Select an obfuscation type and complexity level, paste your text, and click "Obfuscate." 
            The app applies the chosen strategies, delivering output ready for your needs.
          </p>
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

export default AboutPage;
