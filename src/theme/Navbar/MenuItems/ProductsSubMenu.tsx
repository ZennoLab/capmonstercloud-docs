import React from 'react';
import SubMenu from './SubMenu';
type ProductsSubMenuProps = {
  getLabel: (locale: string, key: string, fallback: string) => string;
  handleClick?: () => void;
  locale: string;
};
const ProductsSubMenu = ({ handleClick, locale, getLabel }: ProductsSubMenuProps) => {
  const link = {
    title: getLabel(locale, 'item.label.HeaderProducts', 'Products'),
    subItems: [
      {
        icon: <img src="/img/24x24_dashboard.svg" />,
        title: getLabel(locale, 'item.label.CloudAPI', 'CapMonster Cloud API'),
        url: `https://capmonster.cloud/${locale}/captcha-api`,
        gtmId: 'header-products-cap-monster-cloud-api-btn',
      },
      {
        icon: <img src="/img/24x24_extension.svg" />,
        title: getLabel(locale, 'item.label.Extension', 'Extension for browsers'),
        url: `https://capmonster.cloud/${locale}/browser-extension-captcha`,
        gtmId: 'browser-extension-btn',
      },
    ],
  };

  return <SubMenu link={link} handleClick={handleClick} />;
};

export default ProductsSubMenu;
