import { useEffect, useState } from 'react';
import { localeMappings } from '../components/PagesComponents/NewsList/localeMappings';
import qs from 'qs';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { DocDataItem, DocDataResponse } from '../types/strapi.types.ts';
import { BLOG_BASE_URL } from '../const/common.ts';

type Props = { slug: string };
export const useFetchMetadata = ({ slug }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [metadata, setMetadata] = useState<DocDataItem | null>(null);

  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();

  const queryParams = {
    locale: localeMappings[currentLocale] || currentLocale,
    publicationState: process.env.NODE_ENV === 'production' ? 'live' : 'preview',
    populate: {
      seo: { populate: '*' },
    },
    pagination: {
      limit: 10000,
    },
    filters: {
      slug: {
        $eq: slug,
      },
    },
  };

  useEffect(() => {
    const urlParams = qs.stringify(queryParams);

    const fetchMetadata = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${BLOG_BASE_URL}/api/docs-pages?${urlParams}`);

        if (!response.ok) {
          throw new Error('Failed to fetch prices');
        }
        const data: DocDataResponse = await response.json();

        setMetadata(data.data.at(0) ?? null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setIsLoading(false);
      }
    };

    void fetchMetadata();
  }, []);

  return { isLoading, error, metadata };
};
