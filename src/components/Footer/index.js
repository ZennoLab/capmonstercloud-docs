import React from 'react';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Footer() {
  const { i18n } = useDocusaurusContext();
  const isRULocale = i18n.currentLocale === 'ru'
  const footerLink = isRULocale ? 'https://cmadmin.dev.k8s.zenno.services/footer?culture=ru-RU' : 'https://cmadmin.dev.k8s.zenno.services/footer?culture=en-US';

  return (
    <section className={styles.footerWrap}>
          <iframe src={footerLink} />
    </section>
  );
}
