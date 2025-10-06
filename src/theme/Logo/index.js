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

  const desktop = isDark ? `/${currentLocale}/img/logo_landing.svg` : `/${currentLocale}/img/logo_landing.svg`;
  const mobile = isDark ? `/${currentLocale}/img/logoNoText.svg` : `/${currentLocale}/img/logoNoText.svg`;

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
