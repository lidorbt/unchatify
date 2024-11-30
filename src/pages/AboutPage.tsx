// src/pages/AboutPage.tsx

import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-6 mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">About AI Text Obfuscator</h1>
        <p className="text-gray-700 leading-relaxed">
          The AI Text Obfuscator is a tool designed to help users transform their AI-generated text
          to make it less detectable by AI detection algorithms. By applying various obfuscation
          strategies, users can modify the text linguistically and structurally.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Features</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Linguistic Obfuscation:</strong> Replaces words and phrases with more complex alternatives.</li>
          <li><strong>Structural Transformation:</strong> Modifies text structure by rearranging words and characters.</li>
          <li><strong>Custom Obfuscation Rules:</strong> Allows users to add their own obfuscation rules.</li>
          <li><strong>History:</strong> Keeps track of previously obfuscated texts.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">How It Works</h2>
        <p className="text-gray-700 leading-relaxed">
          Choose an obfuscation type and complexity level, input your text, and click "Obfuscate
          Text." The application applies the selected obfuscation strategies to your text.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
