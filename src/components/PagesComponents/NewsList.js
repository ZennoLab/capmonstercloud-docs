import React, { useEffect, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

const mockRuNews = [
  {
    title: 'Получение актуального userAgent через Get-метод',
    date: '04.07.2024',
    link: '/news'
  },
  {
    title: 'Добавлено автоматическое решение Faucet Pay капчи',
    date: '03.06.2024',
    link: '/news'
  },
  {
    title: 'UserAgent обновлен до 126',
    date: '02.05.2024',
    link: '/news'
  },
];

const mockEnNews = [
  {
    title: 'Obtaining the current userAgent via GET method',
    date: '04.07.2024',
    link: '/news'
  },
  {
    title: 'Automatic Faucet Pay captcha solving added',
    date: '03.06.2024',
    link: '/news'
  },
  {
    title: 'UserAgent updated to 126',
    date: '02.05.2024',
    link: '/news'
  },
];

const mockNews = {
  ru: mockRuNews,
  en: mockEnNews
}

const NewsList = () => {
  const { i18n } = useDocusaurusContext();
  const [news, setNews] = useState([]);

  const fetchNewsByLang = async (locale) => {
    setNews(mockNews[locale] || mockNews.en)
  }

  useEffect(() => {
    fetchNewsByLang(i18n.currentLocale)
  }, [i18n.currentLocale])
  
  return (
    <div>
      {
        news.map((article) => (
          <div className={styles.newsArticle}>
            <span className={styles.newsArticleDate}>{article.date}</span>
            <a href={article.link}>{article.title}</a>
          </div>
        ))
      }
    </div>
  );
};

export default NewsList;