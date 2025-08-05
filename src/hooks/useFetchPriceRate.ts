import { useState, useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export const useFetchPriceRate = () => {
  const [priceRate, setPriceRate] = useState(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { i18n } = useDocusaurusContext();
  const { currentLocale } = i18n;

  const fetchPriceRate = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://dash.capmonster.cloud/currency/rate?from=usd&to=rub', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch prices');
      }
      const data: number = await response.json();
      setPriceRate(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPriceRate();
  }, [currentLocale]);

  return { priceRate, loading, error };
};
