import React, { useEffect, useState } from 'react';
import qs from 'qs';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { localeMappings } from './localeMappings';
import styles from './styles.module.css';
import getLocaleStrings from '../../../locales/index';

const NewsFilter = ({ handleChange }) => {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState('all');
  const { i18n, siteConfig } = useDocusaurusContext();
  const { currentLocale } = i18n;
  const { allCategoriesText } = getLocaleStrings(currentLocale);
  const publicationState = siteConfig.customFields?.APP_ENV === 'DEV' ? 'preview' : 'live';

  const fetchCategories = async locale => {
    const queryParams = {
      sort: { publishedAt: 'desc' },
      locale: localeMappings[locale] || locale,
      publicationState,
      populate: {
        changelog: { populate: '*' },
      },
    };

    const urlParams = qs.stringify(queryParams);
    fetch(`https://blog-api.capmonster.cloud/api/changelog-categories?${urlParams}`)
      .then(response => response.json())
      .then(data => {
        if (data.data && data.data.length > 0) {
          const mappedCategories = data.data.map(category => ({
            title: category?.attributes?.title,
            id: category.id,
            slug: category?.attributes?.slug,
          }));
          setCategories([{ title: allCategoriesText, id: 'all' }, ...mappedCategories]);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    fetchCategories(i18n.currentLocale);
  }, [i18n.currentLocale]);

  const onChangeCategory = id => {
    setSelected(id);
    handleChange && handleChange(id);
  };

  return (
    <div className={styles.categoryBlock}>
      {categories.map(category => (
        <div
          className={`${styles.categoryItem} ${selected === category.id ? styles.categorySelected : ''}`}
          onClick={() => onChangeCategory(category.id)}
        >
          {category.title}
        </div>
      ))}
    </div>
  );
};

export default NewsFilter;
