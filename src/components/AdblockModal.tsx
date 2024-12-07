import React from 'react';

const AdblockModal: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full text-center border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Please Disable Your Ad Blocker
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm">
          We rely on ads to keep our service free. Please disable your ad blocker and refresh the page.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition text-sm"
        >
          I Disabled It
        </button>
      </div>
    </div>
  );
};

export default AdblockModal;
