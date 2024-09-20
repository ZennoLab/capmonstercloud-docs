import React, { useEffect, useState } from 'react';
import qs from "qs";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

const localeMappings = {
  'zh-Hans': 'zh'
}

const NewsList = () => {
  const { i18n } = useDocusaurusContext();
  const [news, setNews] = useState([]);

  const fetchNewsByLang = async (locale) => {
    const queryParams = {
      sort: { publishedAt: "desc" },
      locale: localeMappings[locale] || locale,
      populate: {
        article: { populate: "*" },
      }
    };

    const getLink = (changelog) => {
      const article = changelog?.attributes?.article?.data;
      if (!article) return null;
      const articleSlug = article?.attributes?.slug;
      const articleCategory = article?.attributes?.category?.data;
      const articleCategorySlug = articleCategory?.attributes?.slug

      return `https://blog.capmonster.cloud/${localeMappings[locale] || locale}/blog/${articleCategorySlug}/${articleSlug}`
    }

    const urlParams = qs.stringify(queryParams);
    fetch(`https://blog-api.capmonster.cloud/api/changelogs?${urlParams}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data && data.data.length > 0 ) {
          const mappedNews = data.data.map((changelog) => ({ 
            title: changelog?.attributes?.title,
            date: new Date(changelog?.attributes?.createdAt).toLocaleDateString(),
            link: getLink(changelog)
          }))
          setNews(mappedNews)
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    
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
            {article.link ? (
                <a className={styles.newsArticleTitle} href={article.link} target='_blank'>{article.title}</a>
              ) : (
                <span className={styles.newsArticleTitle}>{article.title}</span>
              )
            }
          </div>
        ))
      }
    </div>
  );
};

export default NewsList;