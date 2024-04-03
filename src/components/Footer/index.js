import React from 'react';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Footer() {
  const { i18n } = useDocusaurusContext();
  const isRULocale = i18n.currentLocale === 'ru'
  const footerLink = isRULocale ? 'https://capmonster.cloud/footer?culture=ru-RU' : 'https://capmonster.cloud/footer?culture=en-US';

  return (
    <section className={styles.footerWrap}>
          <iframe src={footerLink} />
    </section>
  );
}
