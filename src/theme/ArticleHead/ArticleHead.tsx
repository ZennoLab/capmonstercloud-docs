import React from 'react';
import { useFetchMetadata } from '../../hooks/useFetchMetadata.ts';
import Head from '@docusaurus/Head';
import { SeoCover } from './SeoCover.tsx';

type Props = { slug: string };

export const ArticleHead = ({ slug }: Props) => {
  const { metadata } = useFetchMetadata({ slug });

  const seo = metadata?.attributes.seo;

  return (
    <Head>
      {seo?.metaTitle && <title>{seo.metaTitle}</title>}
      {seo?.metaDescription && <meta name="description" content={seo.metaDescription} />}
      {seo && SeoCover(seo)}
    </Head>
  );
};
