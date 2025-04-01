import { useState, useEffect } from 'react';
import { PriceResponseItem } from '../types/price.types';
import { normalizePrices } from '../utils/price.utils';

interface FetchPricesResponse {
  Prices: PriceResponseItem[];
}

export const useFetchPrices = () => {
  const [prices, setPrices] = useState<PriceResponseItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrices = async () => {
      setLoading(true);
      try {
        // поправить потом урл на прод
        const response = await fetch('https://cmadmin.dev.k8s.zenno.services/api/prices?all=true');
        if (!response.ok) {
          throw new Error('Failed to fetch prices');
        }
        const data: FetchPricesResponse = await response.json();
        setPrices(data.Prices);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
  }, []);

  const normalizedPrices = normalizePrices(prices);

  return { normalizedPrices, prices, loading, error };
};
