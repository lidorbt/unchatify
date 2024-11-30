import React from 'react'
import { Wand2 } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-white shadow-md py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center mb-4">
          <Wand2 className="mr-2 text-purple-600" />
          <span className="text-xl font-bold">AI Text Obfuscator</span>
        </div>
        <p className="text-gray-600">
          © {new Date().getFullYear()} AI Text Obfuscator. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
