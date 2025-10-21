import React from 'react';
import { useColorMode, useThemeConfig } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from '@docusaurus/router';
import ColorModeToggle from '@theme/ColorModeToggle';
import styles from './styles.module.css';
import SwitchThemeIcon from '@site/static/img/SwitchTheme.svg';

export default function NavbarColorModeToggle({ className }) {
  const navbarStyle = useThemeConfig().navbar.style;
  const disabled = useThemeConfig().colorMode.disableSwitch;
  const { colorMode, setColorMode } = useColorMode();
  const { siteConfig, i18n } = useDocusaurusContext();
  const location = useLocation();

  const isHomePage = React.useMemo(() => {
    const baseUrl = siteConfig?.baseUrl ?? '/';
    const ensureSlashEnd = p => (p.endsWith('/') ? p : `${p}/`);
    const current = ensureSlashEnd(location.pathname);

    const defaultHome = ensureSlashEnd(baseUrl);
    const localeHomes = (i18n?.locales || []).map(loc =>
      loc === i18n?.defaultLocale ? defaultHome : ensureSlashEnd(`${baseUrl}${loc}/`),
    );

    return localeHomes.includes(current);
  }, [location.pathname, siteConfig?.baseUrl, i18n?.locales, i18n?.defaultLocale]);
  if (disabled || isHomePage) {
    return null;
  }
  return (
    <div
      className={styles.colorModeToggle}
      onClick={() => {
        setColorMode(colorMode === 'dark' ? 'light' : 'dark');
      }}
    >
      <SwitchThemeIcon width="24" />
    </div>
  );
}
