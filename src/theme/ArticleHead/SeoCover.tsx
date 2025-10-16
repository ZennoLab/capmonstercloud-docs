import React from 'react';
import { Seo } from '../../types/strapi.types.ts';
import { BLOG_BASE_URL } from '../../const/common.ts';

export const SeoCover = (seo: Seo) => {
  const coverUrl = seo.shareImage?.data?.attributes?.formats?.thumbnail?.url;

  if (!coverUrl) return null;

  const fullUrl = `${BLOG_BASE_URL}${coverUrl}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: seo.metaTitle,
    description: seo.metaDescription,
    image: [fullUrl],
  };

  return (
    <>
      <meta property="og:image" content={fullUrl} />
      <meta name="twitter:image" content={fullUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="image_src" href={fullUrl} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  );
};

/*
- Это не React-компонент! Мы **вызываем функцию**, а не рендерим <SeoCover />.
- В Docusaurus / react-helmet нельзя использовать вложенные компоненты внутри <Head>.
- Поэтому возвращаем напрямую JSX-фрагмент.
*/
