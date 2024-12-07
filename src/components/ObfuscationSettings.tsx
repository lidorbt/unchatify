import React from 'react';
import { Settings } from 'lucide-react';
import { ObfuscationType, ObfuscationLevel } from '../utils/obfuscationStrategies';

interface ObfuscationSettingsProps {
  obfuscationType: ObfuscationType;
  setObfuscationType: (type: ObfuscationType) => void;
  obfuscationLevel: ObfuscationLevel;
  setObfuscationLevel: (level: ObfuscationLevel) => void;
}

const ObfuscationSettings: React.FC<ObfuscationSettingsProps> = ({
  obfuscationType,
  setObfuscationType,
  obfuscationLevel,
  setObfuscationLevel,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-2">
        <Settings className="mr-2 text-green-600 dark:text-green-400" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Obfuscation Settings</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block mb-2 font-medium text-gray-800 dark:text-gray-200">Obfuscation Type</label>
          <div className="flex space-x-2">
            {(['text', 'code'] as ObfuscationType[]).map((type) => (
              <button
                key={type}
                onClick={() => setObfuscationType(type)}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  obfuscationType === type
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-800 dark:text-gray-200">Complexity Level</label>
          <div className="flex space-x-2">
            {(['low', 'medium', 'high'] as ObfuscationLevel[]).map((level) => (
              <button
                key={level}
                onClick={() => setObfuscationLevel(level)}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  obfuscationLevel === level
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObfuscationSettings;
