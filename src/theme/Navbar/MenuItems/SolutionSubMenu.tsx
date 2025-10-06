import React, { useEffect, useState } from 'react';
import SubMenu from './SubMenu';
import { HeaderMenuSingleItem } from './types';
import RecaptchaIcon from '@site/static/img/24x24_rc.svg';
import { uniqBy } from './utils/uniqBy';
import { useFetchPrices } from '../../../hooks/useFetchPrices';
import { getCaptchaLink } from './utils/getCaptchaLink';

const SolutionSubMenu = ({
  isMobile,
  handleClick,
  locale,
}: {
  isMobile?: boolean;
  handleClick?: () => void;
  locale: string;
}) => {
  const { prices, loading: isPricesLoading } = useFetchPrices(false);
  const link = {
    title: 'Solutions',
    isTwoColumn: true,
    isSolutionItem: true,
  };
  const [subItems, setSubItems] = useState<HeaderMenuSingleItem[]>([]);

  const normalizePrices = (prices: Record<string, any>[]) => {
    const pricesMap = prices.reduce<Partial<Record<string, any>>>((acc, el) => {
      const priceKey = el.ResultType === 'image' ? 'priceComplex' : 'price';
      const currenEl = acc[el.Name] ?? el;

      return { ...acc, [el.Name]: { ...currenEl, [priceKey]: el.Price } };
    }, {});

    return Object.values(pricesMap);
  };

  const fetchSolutionItems = async () => {
    const captchas = [
      {
        icon: <RecaptchaIcon width={24} height={24} />,
        title: 'reCAPTCHA',
        url: `https://capmonster.cloud/${locale}/recaptcha`,
        gtmId: `header-solutions-recaptcha-btn`,
      },
      ...uniqBy(normalizePrices(prices), 'Name')?.map(priceItem => {
        return {
          icon: (
            <img
              src={`https://dash.capmonster.cloud${priceItem.LogoPath}`}
              width={24}
              height={24}
              alt={priceItem?.Name}
            />
          ),
          title: priceItem?.Name,
          url: getCaptchaLink(locale, priceItem.LinkKey, priceItem.Id),
          gtmId: `header-solutions-${priceItem.Id}-docs-btn`,
        };
      }),
    ];
    setSubItems(captchas);
  };

  useEffect(() => {
    fetchSolutionItems();
  }, [locale, prices, isPricesLoading]);

  return <SubMenu link={{ ...link, subItems }} isMobile={isMobile} handleClick={handleClick} />;
};

export default SolutionSubMenu;
