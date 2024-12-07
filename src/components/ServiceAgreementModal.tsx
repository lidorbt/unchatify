import React from 'react';

interface ServiceAgreementModalProps {
  onClose: () => void;
}

const ServiceAgreementModal: React.FC<ServiceAgreementModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-lg w-full text-center border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Service Agreement</h2>
        <div className="text-sm text-gray-700 dark:text-gray-300 text-left max-h-60 overflow-auto scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 scrollbar-track-gray-200 dark:scrollbar-track-gray-800 p-2 rounded">
          <p>By using AI Text Obfuscator, you agree to the following terms and conditions...</p>
          <ul className="list-disc list-inside my-4">
            <li>You will not use the service for illegal activities.</li>
            <li>You understand the content is transformed automatically and may not be perfect.</li>
            <li>We do not store your input text permanently; however, we may log usage data.</li>
            {/* Add more terms as needed */}
          </ul>
          <p>Please read the terms carefully before continuing.</p>
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition text-sm"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ServiceAgreementModal;
