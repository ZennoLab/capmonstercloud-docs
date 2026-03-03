import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import getLocaleStrings, { localesMappings } from '../../../locales';
import styles from './styles.module.css';
import Logo from './Logo';
import Link from '@docusaurus/Link';

const MainSiteBanner = () => {
  const { i18n } = useDocusaurusContext();
  const { currentLocale } = i18n;
  const { mainSiteBannerTitle } = getLocaleStrings(currentLocale);

  return (
    <Link
      className={styles.wrapper}
      href={`https://capmonster.cloud/${localesMappings[currentLocale]}/?utm_source=docs&utm_medium=banner-right `}
    >
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.title}>{mainSiteBannerTitle}</div>
      <img className={styles.image} src={require('./img.png').default} alt="" />
    </Link>
  );
};

export default MainSiteBanner;
