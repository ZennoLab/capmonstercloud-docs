import React from 'react';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import getLocaleStrings from '../../locales/index';

export default function MainHero() {
  const { i18n } = useDocusaurusContext();
  const { currentLocale } = i18n;
  const { heroTitle, heroDescription, goText } = getLocaleStrings(currentLocale);

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.mainWrap}>
          <div className={styles.leftBlock}>
            <div className={styles.title}>{heroTitle}</div>
            <div  className={styles.subTitle}>{heroDescription}</div>
            <a  className={styles.btn} href="docs/getting-start">{goText}</a>
          </div>

          <img src="/img/hero.gif" className={styles.heroImg} />
        </div>
        
      </div>
    </section>
  );
}
