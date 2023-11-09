'use client'

import React, { createContext, useContext, useEffect, useState } from 'react';

interface IsClientContextProps {
  children: React.ReactNode;
}

const isClientContext = createContext<boolean>(false);

export const IsClientContextProvider: React.FC<IsClientContextProps> = ({ children }) => {
  const [isClient, setIsClient] = useState<boolean>(false)
  useEffect(() => setIsClient(true), []);

  return (
    <isClientContext.Provider value={isClient}>{children}</isClientContext.Provider>
  );
};

export function useIsClient(): boolean {
  return useContext(isClientContext)
}