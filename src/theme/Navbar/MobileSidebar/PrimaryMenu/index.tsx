import React from 'react';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';
import { getMenuItems } from '../../menuItems';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function NavbarMobilePrimaryMenu() {
  const mobileSidebar = useNavbarMobileSidebar();
  const { i18n } = useDocusaurusContext();
  const { currentLocale } = i18n;
  const { rightItems } = getMenuItems(currentLocale);

  return (
    <ul className="menu__list">
      {rightItems.map((item, i) => (
        <NavbarItem mobile {...item} onClick={mobileSidebar.toggle} key={i} />
      ))}
    </ul>
  );
}
