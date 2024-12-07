import React from 'react';
import { History as HistoryIcon } from 'lucide-react';

interface HistoryProps {
  history: string[];
}

const History: React.FC<HistoryProps> = ({ history }) => {
  if (history.length === 0) return null;

  return (
    <div className="mt-12">
      <div className="flex items-center mb-4">
        <HistoryIcon className="mr-2 text-yellow-600 dark:text-yellow-400" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Obfuscation History</h2>
      </div>
      <ul className="space-y-2 max-h-64 overflow-auto border border-gray-200 dark:border-gray-700 rounded-xl p-4 bg-gray-50 dark:bg-gray-800 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 scrollbar-track-gray-200 dark:scrollbar-track-gray-800">
        {history.map((text, index) => (
          <li key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-100">
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
