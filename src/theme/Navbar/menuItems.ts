import { DefaultNavbarItemProps } from '@theme/NavbarItem';
import { localesMappings } from '../../locales';

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
      label: 'Docs',
      href: '',
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
      href: `https://capmonster.cloud/${typedLocales[locale]}/browser-extension-captcha`,
      label: 'Extension',
      position: 'right',
    },
    {
      href: `https://dash.capmonster.cloud?culture=${typedLocales[locale]}`,
      label: 'Dashboard',
      position: 'right',
      className: 'lk-link',
    },
  ];

  return { leftItems, rightItems };
};
