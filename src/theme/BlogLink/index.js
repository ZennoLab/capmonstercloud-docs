import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import getLocaleStrings from '../../locales/index';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const BlogLink = ({ url, title, children }) => {
  const { i18n } = useDocusaurusContext();
  const { currentLocale } = i18n;
  const { moreBlogInfo } = getLocaleStrings(currentLocale);
  const [metadata, setMetadata] = useState(null);

  const fetchMetadata = async () => {
    try {
      const response = await fetch(url); // Загружаем страницу
      const html = await response.text(); // Получаем HTML-код страницы
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      // Парсим Open Graph данные
      const title = doc.querySelector('meta[property="og:title"]')?.content || doc.title;
      const description = doc.querySelector('meta[property="og:description"]')?.content || '';
      const image = doc.querySelector('meta[property="og:image"]')?.content || '';

      setMetadata({ title, description, image });
    } catch (error) {
      console.error('Ошибка получения метаданных:', error);
    }
  };

  useEffect(() => {
    if (!title) {
      fetchMetadata()
    }
  }, [url, title])

  return (
    <a className={styles.wrapper} href={url} target='_blank'>
      <div>
        <div className={styles.moreText}>{moreBlogInfo}</div>
        <div className={styles.title}>{metadata?.title || title}</div>
      </div>
      {(metadata?.image) && <img src={metadata?.image || img} className={styles.image} />}
      {children && <div className={styles.customBlock}>{children}</div>}
    </a>
  );
};

export default BlogLink;