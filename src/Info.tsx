import { Wand2, Code, Brain } from 'lucide-react';


const Info = () => (<div className="mt-8 max-w-4xl w-full bg-white shadow-xl rounded-2xl p-6">
    <h3 className="text-2xl font-bold mb-4 text-gray-800">How It Works</h3>
    <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-purple-50 p-4 rounded-xl">
            <Brain className="text-purple-600 mb-2" />
            <h4 className="font-semibold mb-2">Linguistic Obfuscation</h4>
            <p className="text-sm text-gray-600">
                Replaces words and phrases with more complex alternatives, making the text less recognizable as AI-generated.
            </p>
        </div>
        <div className="bg-green-50 p-4 rounded-xl">
            <Code className="text-green-600 mb-2" />
            <h4 className="font-semibold mb-2">Structural Transformation</h4>
            <p className="text-sm text-gray-600">
                Modifies text structure by rearranging words, changing character cases, and introducing controlled randomness.
            </p>
        </div>
        <div className="bg-blue-50 p-4 rounded-xl">
            <Wand2 className="text-blue-600 mb-2" />
            <h4 className="font-semibold mb-2">Adaptive Complexity</h4>
            <p className="text-sm text-gray-600">
                Choose from low to high complexity levels to match your specific obfuscation needs.
            </p>
        </div>
    </div>
</div>
)

export default Info