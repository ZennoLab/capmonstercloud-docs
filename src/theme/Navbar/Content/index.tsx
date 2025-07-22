import React from 'react';
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

  const mobileSidebar = useNavbarMobileSidebar();
  const { leftItems, rightItems } = getMenuItems(currentLocale);
  return (
    <>
      <div className="navbar__inner">
        <div className="navbar__items">
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarLogo />
          <NavbarItems items={leftItems} />
        </div>
        <div className="navbar__items navbar__items--right">
          <NavbarItems items={rightItems} />
          <NavbarColorModeToggle className={styles.colorModeToggle} />
        </div>
      </div>
    </>
  );
}
