'use client';

import React, { useEffect, useState } from 'react';
import SubMenu from './SubMenu';
import { HeaderMenuItem, HeaderMenuSingleItem } from './types';
import DashboardIcon from '@site/static/img/24x24_dashboard.svg';
import ExtensionIcon from '@site/static/img/24x24_extension.svg';

const ProductsSubMenu = ({ handleClick, locale }: { handleClick?: () => void; locale: string }) => {
  const link = {
    title: 'Products',
    subItems: [
      {
        icon: <DashboardIcon width={24} height={24} />,
        title: 'API',
        url: `/${''}/captcha-api`,
        gtmId: 'header-products-cap-monster-cloud-api-btn',
      },
      {
        icon: <ExtensionIcon width={24} height={24} />,
        title: 'Extensiopn',
        url: `/${''}/browser-extension-captcha`,
        gtmId: 'browser-extension-btn',
      },
    ],
  };

  return <SubMenu link={link} isMobile={false} handleClick={handleClick} />;
};

export default ProductsSubMenu;
