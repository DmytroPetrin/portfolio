"use client"
import React, { createContext, useState, ReactNode, useContext } from 'react';

interface SelectContextProps {
  language: string;
  setLanguage: (value: string) => void;
  estilo: string
  setEstilo: (value: string) => void;
}

const SelectContext = createContext<SelectContextProps | undefined>(undefined);

export const SelectProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<string>('es');
  const [estilo, setEstilo] = useState<string>('light')

  return (
    <SelectContext.Provider value={{ language: language, setLanguage: setLanguage, estilo: estilo, setEstilo: setEstilo }}>
      {children}
    </SelectContext.Provider>
  );
};

export const useSelect = () => {
  const context = useContext(SelectContext);
  if (context === undefined) {
    throw new Error('useSelect must be used within a SelectProvider');
  }
  return context;
};
