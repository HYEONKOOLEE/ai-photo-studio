
import React, { useState } from 'react';
import { SparklesIcon } from './icons/SparklesIcon';

interface ApiKeyModalProps {
  onApiKeySubmit: (apiKey: string) => void;
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ onApiKeySubmit }) => {
  const [apiKey, setApiKey] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      onApiKeySubmit(apiKey.trim());
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-md bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-700">
        <div className="flex justify-center items-center space-x-3 mb-6">
           <SparklesIcon className="w-10 h-10 text-indigo-400" />
           <h1 className="text-2xl font-bold text-white tracking-tight">AI Product Studio</h1>
        </div>
        
        <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-200 mb-2">Welcome! Please enter your API Key.</h2>
            <p className="text-sm text-gray-400 mb-6">
            Your Google AI API key is required to power the image generation features. Your key is stored only in your browser and never sent to our servers.
            </p>
        </div>

        <form onSubmit={handleSubmit} className="mb-8">
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter your Google AI API Key"
            className="w-full bg-gray-700 border-gray-600 rounded-md px-4 py-3 text-sm text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition mb-4"
            aria-label="Google AI API Key"
          />
          <button
            type="submit"
            disabled={!apiKey.trim()}
            className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-900 disabled:text-gray-400 disabled:cursor-not-allowed transition-all duration-300 shadow-lg"
          >
            Save & Continue
          </button>
        </form>

        <div className="pt-6 border-t border-gray-700">
            <h3 className="text-md font-semibold text-gray-200 mb-4 text-left">How to Get Your Free API Key</h3>
            <ol className="list-decimal list-inside text-sm text-gray-400 space-y-3 text-left">
                <li>
                    Go to{' '}
                    <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="font-semibold text-indigo-400 hover:underline">
                        Google AI Studio
                    </a>.
                </li>
                <li>
                    Click the <span className="font-semibold text-white">"Create API key in new project"</span> button. You may need to sign in with your Google account.
                </li>
                <li>
                    Copy the generated API key and paste it in the field above.
                </li>
            </ol>
        </div>

      </div>
    </div>
  );
};
