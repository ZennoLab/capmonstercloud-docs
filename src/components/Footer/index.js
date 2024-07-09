import React from 'react';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { localesMappings } from '../../locales/index';

export default function Footer() {
  const { i18n } = useDocusaurusContext();
  const { currentLocale } = i18n;

  const footerLink = `https://capmonster.cloud/footer?culture=${localesMappings[currentLocale] || localesMappings.en}`

  return (
    <section className={styles.footerWrap}>
          <iframe src={footerLink} />
    </section>
  );
}
