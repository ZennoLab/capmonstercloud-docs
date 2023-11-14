import React from 'react';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function AnnounceBar() {
  const { i18n } = useDocusaurusContext();
  const titleRu = 'Ссылка на старую версию документации';
  const titleEn = 'Link to old version of documentation'
  const title = i18n.currentLocale === 'ru' ? titleRu : titleEn;

  return (
    <div className={styles.barBlock}><a href="https://zenno.link/doc_old">{title}</a></div>
  );
}
