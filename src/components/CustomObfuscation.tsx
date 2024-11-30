// src/components/CustomObfuscation.tsx

import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';

interface CustomObfuscationProps {
  addCustomStrategy: (strategy: (text: string) => string) => void;
}

const CustomObfuscation: React.FC<CustomObfuscationProps> = ({ addCustomStrategy }) => {
  const [customRule, setCustomRule] = useState<{ find: string; replace: string }>({ find: '', replace: '' });

  const handleAddRule = () => {
    if (customRule.find.trim() === '') return;

    const newStrategy = (text: string) => text.replace(new RegExp(customRule.find, 'gi'), customRule.replace);
    addCustomStrategy(newStrategy);
    setCustomRule({ find: '', replace: '' });
  };

  return (
    <div className="mt-8">
      <div className="flex items-center mb-4">
        <PlusCircle className="mr-2 text-indigo-600" />
        <h2 className="text-xl font-semibold">Add Custom Obfuscation Rule</h2>
      </div>
      <div className="flex space-x-2">
        <input
          type="text"
          value={customRule.find}
          onChange={(e) => setCustomRule({ ...customRule, find: e.target.value })}
          placeholder="Find (regex)"
          className="w-1/2 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="text"
          value={customRule.replace}
          onChange={(e) => setCustomRule({ ...customRule, replace: e.target.value })}
          placeholder="Replace with"
          className="w-1/2 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={handleAddRule}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all"
        >
          Add Rule
        </button>
      </div>
    </div>
  );
};

export default CustomObfuscation;
