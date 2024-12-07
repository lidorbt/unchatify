// utils/obfuscationStrategies.ts

// We define two obfuscation types: "text" and "code"
// For text, we incorporate a synonym substitution strategy at various complexity levels.
// For code, we define a few strategies, such as variable renaming, adding dummy code lines, etc.

export type ObfuscationType = 'text' | 'code';
export type ObfuscationLevel = 'low' | 'medium' | 'high';

// A mock dictionary for synonyms (in a real scenario, you could import a full dictionary)
const synonymsDictionary: Record<string, string[]> = {
  "example": ["instance", "sample", "illustration"],
  "writing": ["composing", "penning"],
  "now": ["currently", "presently"],
  "text": ["content", "writing", "paragraph"]
  // Add more words and synonyms as needed
};

function randomNumber(seed: number) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// A generic synonym replacement strategy inspired by competitor’s approach
// ratio: fraction of words to attempt to replace
function synonymReplacementStrategy(input: string, ratio: number): string {
  let seed = 1;
  const words = input.split(' ');
  const replacedWords = words.map((word) => {
    const lowerWord = word.toLowerCase().replace(/[^a-z0-9]/gi, '');
    const candidateSynonyms = synonymsDictionary[lowerWord];
    if (candidateSynonyms && candidateSynonyms.length > 0) {
      // pseudo-random check
      const rand = randomNumber(seed++);
      if (rand < ratio) {
        // pick a synonym in a consistent manner
        const synonymIndex = Math.floor(rand * candidateSynonyms.length);
        let synonym = candidateSynonyms[synonymIndex];
        // preserve capitalization if the original started capitalized
        if (word.charAt(0) === word.charAt(0).toUpperCase()) {
          synonym = synonym.charAt(0).toUpperCase() + synonym.slice(1);
        }
        return synonym;
      }
    }
    return word;
  });

  return replacedWords.join(' ');
}

// Code strategies
// low: Rename some variables to obscure names
// medium: Also reorder some functions (simple simulation)
// high: Add nonsense comments

function codeRenameVariables(input: string): string {
  // A simple example: replace variable names "varX" with "vx_XXXX"
  return input.replace(/\bvar([A-Za-z0-9_]+)\b/g, (match, p1) => `vx_${p1}_${Math.floor(Math.random()*1000)}`);
}

function codeAddComments(input: string): string {
  // Insert a random comment line at random places
  const lines = input.split('\n');
  if (lines.length > 0) {
    const index = Math.floor(Math.random() * lines.length);
    lines.splice(index, 0, `// ${Math.random().toString(36).substring(2)}`);
  }
  return lines.join('\n');
}

function codeReorderFunctions(input: string): string {
  // Very naive approach: detect functions named function foo(...){...}
  const funcRegex = /function\s+([A-Za-z0-9_]+)\s*\([^)]*\)\s*\{[^}]*\}/g;
  const funcs = [...input.matchAll(funcRegex)].map(m => m[0]);
  if (funcs.length <= 1) return input;
  // Reorder them randomly
  const shuffled = funcs.sort(() => 0.5 - Math.random());
  let output = input;
  for (const f of funcs) {
    output = output.replace(f, '');
  }
  return shuffled.join('\n\n') + '\n' + output.trim();
}

// Define strategies per type and complexity
export const obfuscationStrategies: Record<ObfuscationType, Record<ObfuscationLevel, (input: string) => string>> = {
  text: {
    low: (input: string) => synonymReplacementStrategy(input, 0.1),
    medium: (input: string) => synonymReplacementStrategy(input, 0.3),
    high: (input: string) => synonymReplacementStrategy(input, 0.5),
  },
  code: {
    low: (input: string) => {
      // just rename variables
      return codeRenameVariables(input);
    },
    medium: (input: string) => {
      // rename variables + reorder functions
      let out = codeRenameVariables(input);
      out = codeReorderFunctions(out);
      return out;
    },
    high: (input: string) => {
      // rename variables + reorder functions + add comments
      let out = codeRenameVariables(input);
      out = codeReorderFunctions(out);
      out = codeAddComments(out);
      return out;
    },
  },
};
