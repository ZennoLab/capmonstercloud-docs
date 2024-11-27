import React, { createContext, useContext, useState, useEffect } from 'react';

// Создание контекста
const PriceRateContext = createContext();

// Хук для использования контекста
export const usePriceRate = () => useContext(PriceRateContext);

// Провайдер контекста
export const PriceRateProvider = ({ children }) => {
  const [priceRate, setPriceRate] = useState(1);

  const updatePriceToRub = async () => {
    const url = 'https://capmonster.cloud/currency/rate?from=usd&to=rub';

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data) {
          setPriceRate(data)
        }
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
  }

  useEffect(() => {
    updatePriceToRub();
  }, []);

  return (
    <PriceRateContext.Provider value={{ priceRate, setPriceRate }}>
      {children}
    </PriceRateContext.Provider>
  );
};