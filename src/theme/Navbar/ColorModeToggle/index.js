import React from 'react';
import { useColorMode, useThemeConfig } from '@docusaurus/theme-common';
import ColorModeToggle from '@theme/ColorModeToggle';
import styles from './styles.module.css';
import SwitchThemeIcon from '@site/static/img/SwitchTheme.svg';

export default function NavbarColorModeToggle({ className }) {
  const navbarStyle = useThemeConfig().navbar.style;
  const disabled = useThemeConfig().colorMode.disableSwitch;
  const { colorMode, setColorMode } = useColorMode();
  if (disabled) {
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
    // <ColorModeToggle
    //   className={className}
    //   buttonClassName={navbarStyle === 'dark' ? styles.darkNavbarColorModeToggle : undefined}
    //   value={colorMode}
    //   onChange={setColorMode}
    // />
  );
}
