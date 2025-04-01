import React, { createContext, useContext } from 'react';
import { useFetchPriceRate } from './hooks/useFetchPriceRate';
import { useFetchPrices } from './hooks/useFetchPrices';
import { NormalizedPrices } from './types/price.types';

const PricesContext = createContext<{ priceRate: number; normalizedPrices: Partial<NormalizedPrices> }>({
  normalizedPrices: {},
  priceRate: 1,
});

export const usePricesContext = () => useContext(PricesContext);

export const PricesProvider = ({ children }: React.PropsWithChildren) => {
  const { normalizedPrices } = useFetchPrices();
  const { priceRate } = useFetchPriceRate();

  return <PricesContext.Provider value={{ priceRate, normalizedPrices }}>{children}</PricesContext.Provider>;
};
