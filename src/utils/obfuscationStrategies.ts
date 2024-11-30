// src/utils/obfuscationStrategies.ts

export type ObfuscationLevel = 'low' | 'medium' | 'high';
export type ObfuscationType = 'linguistic' | 'structural';

export const obfuscationStrategies: Record<
  ObfuscationType,
  Record<ObfuscationLevel, (text: string) => string>
> = {
  linguistic: {
    low: (text: string): string => {
      // Simple linguistic obfuscation - synonym replacement, minor restructuring
      const simpleReplacements: Record<string, string> = {
        'very': 'extremely',
        'good': 'excellent',
        'said': 'articulated',
        'think': 'contemplate',
        'use': 'utilize',
      };

      return text.split(' ').map(word =>
        simpleReplacements[word.toLowerCase()] || word
      ).join(' ');
    },
    medium: (text: string): string => {
      // More advanced linguistic obfuscation
      const mediumReplacements: Record<string, string> = {
        'machine learning': 'computational cognitive algorithmic systems',
        'AI': 'advanced algorithmic intelligence',
        'data': 'informational aggregates',
        'problem': 'computational challenge',
        'solution': 'strategic resolution',
      };

      return Object.entries(mediumReplacements).reduce(
        (acc, [original, replacement]) =>
          acc.replace(new RegExp(original, 'gi'), replacement),
        text
      );
    },
    high: (text: string): string => {
      // Academic-level linguistic transformation
      const academicTransformations: Record<string, string> = {
        'creates': 'engenders a paradigmatic manifestation of',
        'develops': 'instantiates a sophisticated architectural framework for',
        'uses': 'leverages a multidimensional methodological approach incorporating',
        'shows': 'demonstrates a statistically significant phenomenological construct indicating',
        'helps': 'facilitates a comprehensive epistemological intervention through',
      };

      return Object.entries(academicTransformations).reduce(
        (acc, [original, replacement]) =>
          acc.replace(new RegExp(original, 'gi'), replacement),
        text
      );
    },
  },
  structural: {
    low: (text: string): string => {
      // Basic structural obfuscation
      return text.split('').reverse().join('')
        .split(' ').sort(() => Math.random() - 0.5).join(' ');
    },
    medium: (text: string): string => {
      // Moderate structural obfuscation with character-level mixing
      return text.split('').map((char, index) =>
        index % 3 === 0 ? char.toUpperCase() : char
      ).join('').split(' ').sort(() => Math.random() - 0.5).join(' ');
    },
    high: (text: string): string => {
      // Advanced structural obfuscation with complex transformations
      const scrambleText = text.split('').sort(() => Math.random() - 0.5).join('');
      return scrambleText.split(' ')
        .map(word => word.split('').reverse().join(''))
        .sort(() => Math.random() - 0.5)
        .join(' ');
    },
  },
};
