// src/components/ObfuscationSettings.tsx

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
    <div>
      <div className="flex items-center mb-4">
        <Settings className="mr-2 text-green-600" />
        <h2 className="text-xl font-semibold">Obfuscation Settings</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block mb-2 font-medium">Obfuscation Type</label>
          <div className="flex space-x-2">
            {(['linguistic', 'structural'] as ObfuscationType[]).map((type) => (
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
            {(['low', 'medium', 'high'] as ObfuscationLevel[]).map((level) => (
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
  );
};

export default ObfuscationSettings;
