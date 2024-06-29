import React, { createContext, useState, ReactNode, useContext } from 'react';

interface SelectContextProps {
  language: string;
  setLanguage: (value: string) => void;
}

const SelectContext = createContext<SelectContextProps | undefined>(undefined);

export const SelectProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState<string>('');

  return (
    <SelectContext.Provider value={{ language: value, setLanguage: setValue }}>
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
