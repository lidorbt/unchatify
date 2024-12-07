import { Wand2, Code, Brain } from 'lucide-react';

const Info = () => (
  <div className="mt-12 max-w-4xl w-full bg-white shadow-lg rounded-xl p-6 mx-auto">
    <h3 className="text-2xl font-bold mb-4 text-gray-800">How It Works</h3>
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-purple-50 p-4 rounded-xl flex flex-col items-start">
        <Brain className="text-purple-600 mb-2 h-6 w-6" />
        <h4 className="font-semibold mb-2">Linguistic Obfuscation</h4>
        <p className="text-sm text-gray-600">
          Replace words and phrases with more complex alternatives, reducing recognizable AI patterns.
        </p>
      </div>
      <div className="bg-green-50 p-4 rounded-xl flex flex-col items-start">
        <Code className="text-green-600 mb-2 h-6 w-6" />
        <h4 className="font-semibold mb-2">Structural Transformation</h4>
        <p className="text-sm text-gray-600">
          Rearrange words, adjust character cases, and add subtle randomness for unique text flows.
        </p>
      </div>
      <div className="bg-blue-50 p-4 rounded-xl flex flex-col items-start">
        <Wand2 className="text-blue-600 mb-2 h-6 w-6" />
        <h4 className="font-semibold mb-2">Adaptive Complexity</h4>
        <p className="text-sm text-gray-600">
          Select low, medium, or high complexity levels to tailor the intensity of obfuscation.
        </p>
      </div>
    </div>
  </div>
);

export default Info;
