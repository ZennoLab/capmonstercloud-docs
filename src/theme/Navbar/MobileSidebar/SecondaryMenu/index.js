import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import { useNavbarSecondaryMenu } from '@docusaurus/theme-common/internal';
import Translate from '@docusaurus/Translate';
import { useDocsMenuPreference } from '../../docsMenuPreference';

export default function NavbarMobileSidebarSecondaryMenu() {
  const isPrimaryMenuEmpty = useThemeConfig().navbar.items.length === 0;
  const secondaryMenu = useNavbarSecondaryMenu();
  const { setPreference } = useDocsMenuPreference();
  return <>{secondaryMenu.content}</>;
}
