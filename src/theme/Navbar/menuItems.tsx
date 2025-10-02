import React from 'react';
import Link from '@docusaurus/Link';
import { DefaultNavbarItemProps } from '@theme/NavbarItem';

import { localesMappings } from '../../locales';
import ptBrNavbar from '../../../i18n/pt-br/docusaurus-theme-classic/navbar.json';
import enNavbar from '../../../i18n/en/docusaurus-theme-classic/navbar.json';
import ruNavbar from '../../../i18n/ru/docusaurus-theme-classic/navbar.json';
import zhNavbar from '../../../i18n/zh/docusaurus-theme-classic/navbar.json';

const messages: Record<string, Record<string, { message: string; description: string }>> = {
  en: enNavbar,
  'pt-br': ptBrNavbar,
  zh: zhNavbar,
  ru: ruNavbar,
};

const getLabel = (locale: string, key: string, fallback: string) => {
  const messageSet = messages[locale];
  return messageSet?.[key]?.message || fallback;
};

const leftItems: DefaultNavbarItemProps[] = [
  {
    type: 'search',
    position: 'left',
    label: '',
    href: '',
  },
];

export const getMenuItems = (locale: string) => {
  const typedLocales = localesMappings as Record<string, string>;
  const rightItems: DefaultNavbarItemProps[] = [
    {
      type: 'docSidebar',
      sidebarId: 'tutorialSidebar',
      position: 'right',
      label: getLabel(locale, 'item.label.Документация', 'Docs'),
      href: '',
    },
    {
      type: 'localeDropdown',
      position: 'right',
      dropdownItemsBefore: [],
      dropdownItemsAfter: [],
      href: '',
      label: '',
      className: 'localeDropdownWithFlags',
    },
    {
      href: `https://capmonster.cloud/${typedLocales[locale]}/browser-extension-captcha`,
      label: getLabel(locale, 'item.label.Расширение', 'Extension'),
      position: 'right',
    },
    {
      href: `https://dash.capmonster.cloud?culture=${typedLocales[locale]}`,
      label: getLabel(locale, 'item.label.Личный кабинет', 'Dashboard'),
      position: 'right',
      className: 'lk-link',
    },
    {
      type: 'component',
      className: '',
      render: ({ onClick }: { onClick?: () => void } = {}) => (
        <Link className="navbar__link" to="/docs/faq" onClick={onClick}>
          <img src="/img/18x18_faq_icon.svg" alt="" width={18} height={18} style={{ marginRight: 8 }} />
          FAQ
        </Link>
      ),
    } as unknown as DefaultNavbarItemProps,
  ];

  return { leftItems, rightItems };
};
