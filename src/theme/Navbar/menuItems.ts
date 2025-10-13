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
      href: `https://capmonster.cloud/${typedLocales[locale]}/blog`,
      label: getLabel(locale, 'item.label.Блог', locale === 'ru' ? 'Блог' : locale === 'zh' ? '博客' : 'Blog'),
      position: 'right',
    },
    {
      href: `https://capmonster.cloud/${typedLocales[locale]}`,
      label: getLabel(locale, 'item.label.Сайт', locale === 'ru' ? 'Сайт' : 'Website'),
      position: 'right',
    },
    {
      href: `https://capmonster.cloud/${typedLocales[locale]}/browser-extension-captcha`,
      label: getLabel(locale, 'item.label.Расширение', 'Extension'),
      position: 'right',
    },
    {
      type: 'localeDropdown',
      position: 'right',
      dropdownItemsBefore: [],
      dropdownItemsAfter: [],
      href: '',
      label: '',
    },
    {
      href: `https://dash.capmonster.cloud?culture=${typedLocales[locale]}`,
      label: getLabel(locale, 'item.label.Личный кабинет', 'Dashboard'),
      position: 'right',
      className: 'lk-link',
    },
  ];

  return { leftItems, rightItems };
};
