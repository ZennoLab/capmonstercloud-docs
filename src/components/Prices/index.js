import React from 'react';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Prices() {
  const { i18n } = useDocusaurusContext();
  const isRULocale = i18n.currentLocale === 'ru'
  const titleRu = 'Цена';
  const titleEn = 'Price';
  const title = isRULocale ? titleRu : titleEn;
  const priceLink = isRULocale ? 'https://capmonster.cloud/prices?culture=ru-RU' : 'https://capmonster.cloud/prices?culture=en-US'

  return (
    <section className={styles.pricesWrap}>
      <div className="container">
        <div className={styles.mainTitle}>{title}</div>

        <div className={styles.prices}>
          <iframe src={priceLink} />
        </div>
      </div>
    </section>
  );
}
