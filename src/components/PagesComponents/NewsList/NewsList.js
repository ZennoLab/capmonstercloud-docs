import React, { useEffect, useState } from 'react';
import qs from 'qs';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import NewsFilter from './NewsFilter';
import { localeMappings } from './localeMappings';
import EmptyBoxIcon from './EmptyBoxIcon';
import getLocaleStrings from '../../../locales/index';

const NewsList = () => {
  const { i18n, siteConfig } = useDocusaurusContext();
  const [news, setNews] = useState([]);
  const { currentLocale } = i18n;
  const { emptyUpdatesText } = getLocaleStrings(currentLocale);
  const [isLoading, setIsLoading] = useState(false);

  const publicationState = siteConfig.customFields?.APP_ENV === 'DEV' ? 'preview' : 'live';

  const fetchNewsByLang = async (locale, categoryId) => {
    setIsLoading(true);
    const queryParams = {
      sort: { publishedAt: 'desc' },
      locale: localeMappings[locale] || locale,
      publicationState,
      populate: {
        article: { populate: '*' },
      },
    };

    if (categoryId) {
      queryParams.filters = {
        changelog_category: {
          id: {
            $eq: categoryId,
          },
        },
      };
    }

    const getLink = changelog => {
      const article = changelog?.attributes?.article?.data;
      if (!article) return null;
      const articleSlug = article?.attributes?.slug;
      const articleCategory = article?.attributes?.category?.data;
      const articleCategorySlug = articleCategory?.attributes?.slug;

      return `https://blog.capmonster.cloud/${localeMappings[locale] || locale}/blog/${articleCategorySlug}/${articleSlug}`;
    };

    const urlParams = qs.stringify(queryParams);
    fetch(`https://blog-api.capmonster.cloud/api/changelogs?${urlParams}`)
      .then(response => response.json())
      .then(data => {
        setIsLoading(false);
        if (data.data) {
          const mappedNews = data.data.map(changelog => ({
            title: changelog?.attributes?.title,
            date: new Date(changelog?.attributes?.createdAt).toLocaleDateString(),
            link: getLink(changelog),
          }));
          setNews(mappedNews);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setIsLoading(false);
      });
  };

  const onFilterChange = id => {
    if (id === 'all') {
      fetchNewsByLang(i18n.currentLocale);
      return;
    }

    fetchNewsByLang(i18n.currentLocale, id);
  };

  useEffect(() => {
    fetchNewsByLang(i18n.currentLocale);
  }, [i18n.currentLocale]);

  return (
    <div>
      <NewsFilter handleChange={onFilterChange} />
      {isLoading && (
        <div className={styles.emptyWrap}>
          <span class="loader"></span>
        </div>
      )}
      {news && news.length === 0 && !isLoading && (
        <div className={styles.emptyWrap}>
          <EmptyBoxIcon />
          <div className={styles.emptyText}>{emptyUpdatesText}</div>
        </div>
      )}
      {news.map(article => (
        <div className={styles.newsArticle}>
          <span className={styles.newsArticleDate}>{article.date}</span>
          {article.link ? (
            <a className={styles.newsArticleTitle} href={article.link} target="_blank">
              {article.title}
            </a>
          ) : (
            <span className={styles.newsArticleTitle}>{article.title}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default NewsList;
