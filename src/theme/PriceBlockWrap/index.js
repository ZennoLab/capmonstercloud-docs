import React from 'react';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import getLocaleStrings from '../../locales/index';

const PriceBlockWrap = ({ children }) => {
  const { i18n } = useDocusaurusContext();
  const { currentLocale } = i18n;
  const { fullPriceText } = getLocaleStrings(currentLocale);

  return (
    <div className={styles.wrap}>
      <div className={styles.linkWrap}>
        <a href="/#price" className={styles.link}>{fullPriceText}</a>
      </div>
      <div className={styles.wrapBlock}>
        {children}
      </div>
    </div>
    
  );
};

export default PriceBlockWrap;