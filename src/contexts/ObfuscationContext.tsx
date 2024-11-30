// src/contexts/ObfuscationContext.jsx
import React, { createContext, useState, useContext } from 'react';
import { performObfuscation } from '../utils/obfuscationStrategies';

const ObfuscationContext = createContext();

export const ObfuscationProvider = ({ children }) => {
  const [inputText, setInputText] = useState('');
  const [obfuscatedText, setObfuscatedText] = useState('');
  const [obfuscationType, setObfuscationType] = useState('linguistic');
  const [obfuscationLevel, setObfuscationLevel] = useState('medium');

  const obfuscate = () => {
    const result = performObfuscation(inputText, obfuscationType, obfuscationLevel);
    setObfuscatedText(result);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(obfuscatedText);
    alert('Copied to clipboard!');
  };

  return (
    <ObfuscationContext.Provider value={{
      inputText,
      setInputText,
      obfuscatedText,
      setObfuscatedText,
      obfuscationType,
      setObfuscationType,
      obfuscationLevel,
      setObfuscationLevel,
      obfuscate,
      copyToClipboard
    }}>
      {children}
    </ObfuscationContext.Provider>
  );
};

export const useObfuscation = () => useContext(ObfuscationContext);