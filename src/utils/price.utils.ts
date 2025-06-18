import { NormalizedPrices, PriceResponseItem, NormalizedPriceItem } from '../types/price.types';

type GetPriceTextArgs = { currentLocale: string; priceRate: number; price: number };

export const getPriceText = ({ currentLocale, priceRate, price }: GetPriceTextArgs) => {
  if (currentLocale === 'ru') {
    if (priceRate === 1) {
      return '';
    } else {
      return `${Number(price * priceRate).toFixed(2)}₽ ($${price})`;
    }
  } else {
    return `$${price}`;
  }
};

export const normalizePrices = (prices: PriceResponseItem[]) => {
  return prices.reduce<Partial<NormalizedPrices>>((acc, el) => {
    const normalizedEl: NormalizedPriceItem =
      el.Name === 'ComplexImageTask Recaptcha'
        ? {
            ...el,
            imagePath: el.Id?.includes('4x4') ? '/img/4x4.svg' : '/img/3x3.svg',
          }
        : el;

    return { ...acc, [el.Id]: normalizedEl };
  }, {});
};
