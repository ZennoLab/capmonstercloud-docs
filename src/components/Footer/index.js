import React from 'react';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { localesMappings } from '../../locales';

export default function Footer() {
  const { i18n } = useDocusaurusContext();
  const { currentLocale } = i18n;

  const footerLink = `https://capmonster.cloud/footerFrame?culture=${localesMappings[currentLocale]}`;

  return (
    <section className={styles.footerWrap}>
      <iframe src={footerLink} />
    </section>
  );
}
