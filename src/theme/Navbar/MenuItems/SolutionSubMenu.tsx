import React, { useEffect, useState } from 'react';
import SubMenu from './SubMenu';
import { HeaderMenuSingleItem } from './types';
import { uniqBy } from './utils/uniqBy';
import { useFetchPrices } from '../../../hooks/useFetchPrices';
import { getCaptchaLink } from './utils/getCaptchaLink';
import { getMainLocale } from './utils/getMainLocale';
import { useBaseUrl } from '../../../hooks/useBaseUrl.ts';

const SolutionSubMenu = ({
  handleClick,
  locale,
  title,
}: {
  handleClick?: () => void;
  locale: string;
  title: string;
}) => {
  const { baseDashboardUrl, baseLandingUrl } = useBaseUrl();

  const { prices, loading: isPricesLoading } = useFetchPrices(false);
  const link = {
    title,
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
        icon: <img src="/img/24x24_rc.svg" alt="rc" />,
        title: 'reCAPTCHA',
        url: `${baseLandingUrl}/${getMainLocale(locale)}/recaptcha`,
        gtmId: `header-solutions-recaptcha-btn`,
      },
      ...uniqBy(normalizePrices(prices), 'Name')?.map(priceItem => {
        return {
          icon: <img src={`${baseDashboardUrl}${priceItem.LogoPath}`} width={24} height={24} alt={priceItem?.Name} />,
          // как появится отдельная страница для Turnstile, поменять имя в базе
          title: priceItem?.Name === 'Cloudflare Turnstile' ? 'Cloudflare' : priceItem.Name,
          url: getCaptchaLink(locale, priceItem.LinkKey, priceItem.Id, baseLandingUrl),
          gtmId: `header-solutions-${priceItem.Id}-docs-btn`,
        };
      }),
    ];
    setSubItems(captchas);
  };

  useEffect(() => {
    fetchSolutionItems();
  }, [locale, prices, isPricesLoading]);

  return <SubMenu link={{ ...link, subItems }} handleClick={handleClick} />;
};

export default SolutionSubMenu;
