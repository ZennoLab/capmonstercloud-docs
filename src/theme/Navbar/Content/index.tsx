import React from 'react';
import { useWindowSize } from '@docusaurus/theme-common';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import NavbarItem, { Props } from '@theme/NavbarItem';

import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarLogo from '@theme/Navbar/Logo';
import styles from './styles.module.css';
import { getMenuItems } from '../menuItems';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function NavbarItems({ items }: { items: Props[] }) {
  return (
    <>
      {items.map((item, i) => (
        <NavbarItem {...item} key={i} />
      ))}
    </>
  );
}

export default function NavbarContent() {
  const { i18n } = useDocusaurusContext();
  const { currentLocale } = i18n;

  const windowSize = useWindowSize();
  const isMobile = windowSize === 'mobile';
  const mobileSidebar = useNavbarMobileSidebar();
  const { leftItems, rightItems } = getMenuItems(currentLocale);
  return (
    <>
      <div className="navbar__inner">
        <div className="navbar__items">
          <NavbarLogo />
          <NavbarItems items={leftItems} />
          {/* Search on desktop stays on the left */}
          {!isMobile && <NavbarItem type="search" position="left" />}
        </div>
        <div className="navbar__items navbar__items--right navbar-mobile__items">
          {/* Other right items first */}
          <NavbarItems items={rightItems} />
          {/* Search only on mobile shows on the right */}
          {isMobile && <NavbarItem type="search" position="right" />}
          {/* Theme toggle between search and burger */}
          <NavbarColorModeToggle className={styles.colorModeToggle} />
          {/* Burger at the end */}
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
        </div>
      </div>
    </>
  );
}
