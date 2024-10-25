import React from 'react';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Tooltip } from 'react-tooltip'
import getLocaleStrings from '../../locales/index';
import { localesMappings } from '../../locales/index';

export default function Prices() {
  const { i18n } = useDocusaurusContext();
  const { currentLocale } = i18n;
  const { priceTitle, priceSubTitle, priceSubTooltipText } = getLocaleStrings(currentLocale);

  const priceLink = `https://capmonster.cloud/prices?culture=${localesMappings[currentLocale] || localesMappings.en}`

  return (
    <section className={styles.pricesWrap} id="price">
      <div className={`container ${styles.pricesContainer}`}>
        <div className={styles.mainTitle}>{priceTitle}</div>
        <div className={`${styles.subTitle} priceSub`}>{priceSubTitle}</div>
        <Tooltip anchorSelect=".priceSub" place="top" style={{ backgroundColor: 'white', color: "#222" }}>
          {priceSubTooltipText}
        </Tooltip>
        <div className={styles.prices}>
          <iframe src={priceLink} />
        </div>
      </div>
    </section>
  );
}


