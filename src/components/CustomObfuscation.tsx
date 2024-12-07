import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';

interface CustomObfuscationProps {
  addCustomStrategy: (strategy: (text: string) => string) => void;
}

/**
 * Instead of regex, we use a simple keyword replacement.
 * For example, if user specifies find="Hello" and replace="Hi",
 * all instances of "Hello" are replaced with "Hi".
 */
const CustomObfuscation: React.FC<CustomObfuscationProps> = ({ addCustomStrategy }) => {
  const [customRule, setCustomRule] = useState<{ find: string; replace: string }>({ find: '', replace: '' });

  const handleAddRule = () => {
    if (customRule.find.trim() === '') return;
    const findText = customRule.find;
    const replaceText = customRule.replace;
    const newStrategy = (text: string) => text.split(findText).join(replaceText);
    addCustomStrategy(newStrategy);
    setCustomRule({ find: '', replace: '' });
  };

  return (
    <div className="mt-12">
      <div className="flex items-center mb-4">
        <PlusCircle className="mr-2 text-indigo-600 dark:text-indigo-400" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Add Custom Keyword Replacement</h2>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        Specify a keyword to find and what to replace it with. This helps personalize your text obfuscation.
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <input
          type="text"
          value={customRule.find}
          onChange={(e) => setCustomRule({ ...customRule, find: e.target.value })}
          placeholder="Keyword to find"
          className="w-full sm:w-1/2 p-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50 dark:bg-gray-700 dark:text-gray-100 text-sm"
        />
        <input
          type="text"
          value={customRule.replace}
          onChange={(e) => setCustomRule({ ...customRule, replace: e.target.value })}
          placeholder="Replace with"
          className="w-full sm:w-1/2 p-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50 dark:bg-gray-700 dark:text-gray-100 text-sm"
        />
        <button
          onClick={handleAddRule}
          className="whitespace-nowrap bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all text-sm"
        >
          Add Rule
        </button>
      </div>
    </div>
  );
};

export default CustomObfuscation;
