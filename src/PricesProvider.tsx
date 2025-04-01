import React, { createContext, useContext } from 'react';
import { useFetchPriceRate } from './hooks/useFetchPriceRate';
import { useFetchPrices } from './hooks/useFetchPrices';
import { NormalizedPrices } from './types/price.types';

const PricesContext = createContext<{
  isLoading: boolean;
  priceRate: number;
  normalizedPrices: Partial<NormalizedPrices>;
}>({
  normalizedPrices: {},
  priceRate: 1,
  isLoading: false,
});

export const usePricesContext = () => useContext(PricesContext);

export const PricesProvider = ({ children }: React.PropsWithChildren) => {
  const { normalizedPrices, loading: isPricesLoading } = useFetchPrices();
  const { priceRate, loading: isPriceRateLoading } = useFetchPriceRate();

  return (
    <PricesContext.Provider value={{ isLoading: isPricesLoading || isPriceRateLoading, priceRate, normalizedPrices }}>
      {children}
    </PricesContext.Provider>
  );
};
