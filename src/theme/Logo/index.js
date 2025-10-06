import React from 'react';
import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'; // 👈 без фигурных скобок
import styles from './styles.module.css';

export default function Logo() {
  const { colorMode } = useColorMode();
  const {
    i18n: { currentLocale, defaultLocale },
  } = useDocusaurusContext();

  const isDark = colorMode === 'dark';

  const safeLocale = currentLocale === 'en' ? '' : `/${currentLocale}`;

  // Static assets are not locale-prefixed; always serve from /img
  const desktop = isDark ? `${safeLocale}/img/logo_landing.svg` : `${safeLocale}/img/logo_landing.svg`;
  const mobile = isDark ? `${safeLocale}/img/logoNoText.svg` : `${safeLocale}/img/logoNoText.svg`;

  const href = currentLocale === defaultLocale ? '/' : `/${currentLocale}/`;

  return (
    <Link className={styles.logoLink} to={href} aria-label="Home">
      <picture>
        <source media="(max-width: 1400px)" srcSet={mobile} />
        <img className={styles.logoImg} src={desktop} alt="Logo" />
      </picture>
    </Link>
  );
}
