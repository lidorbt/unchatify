// src/components/History.tsx

import React from 'react';
import { History as HistoryIcon } from 'lucide-react';

interface HistoryProps {
  history: string[];
}

const History: React.FC<HistoryProps> = ({ history }) => {
  if (history.length === 0) return null;

  return (
    <div className="mt-8">
      <div className="flex items-center mb-4">
        <HistoryIcon className="mr-2 text-yellow-600" />
        <h2 className="text-xl font-semibold">Obfuscation History</h2>
      </div>
      <ul className="space-y-2 max-h-64 overflow-y-auto">
        {history.map((text, index) => (
          <li key={index} className="p-4 border-2 border-gray-300 rounded-xl bg-gray-50">
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
