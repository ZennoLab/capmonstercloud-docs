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

const reCaptchaKeyMap = {
  v2: 'recaptchaV2Token',
  v3: 'recaptchaV3Token',
  Enterprise: 'recaptchaV2EnterpriseToken',
  'Enterprise (Spotify, Yahoo)': 'recaptchaV2EnterpriseSpotifyToken',
} as const;

const commonTokenKeyMap = {
  GeeTest: 'geeTestToken',
  'Cloudflare Turnstile / Bot Challenge': 'turnstileToken',
  'Faucet Pay': 'basiliskToken',
  DataDome: 'dataDomeToken',
  'Amazon Waf': 'amazonToken',
  'Tencent captcha': 'tencentToken',
  'Imperva (Incapsula)': 'Imperva',
  Prosopo: 'prosopoToken',
  'Text Captcha': 'textCaptchaToken',
  Binance: 'binanceToken',
  Temu: 'temuToken'
} as const;

const complexImageTaskRecaptchaMap = {
  'complex-rc2_3x3_dynamic': 'recaptcha3x3DynamicImage',
  'complex-rc2_4x4': 'recaptcha4x4Image',
  'complex-rc2_3x3': 'recaptcha3x3Image',
} as const;

export const normalizePrices = (prices: PriceResponseItem[]) => {
  return prices.reduce<Partial<NormalizedPrices>>((acc, el) => {
    if (el.FamilyName === 'reCAPTCHA') {
      if (el.TokenPrice && el.Type) {
        const key = reCaptchaKeyMap[el.Type]; // as keyof typeof reCaptchaKeyMap добавить если Type будет проставлен не только у reCAPTCHA
        const normalizedEl: NormalizedPriceItem = {
          price: el.TokenPrice,
          type: 'token',
          rate: el.SuccessRate,
          logoPath: el.LogoPath,
        };

        return { ...acc, [key]: normalizedEl };
      }

      return acc;
    }

    if (el.FamilyName === 'ComplexImageTask Recaptcha') {
      const key = complexImageTaskRecaptchaMap[el.ComplexId as keyof typeof complexImageTaskRecaptchaMap];
      if (key && el.TokenPrice) {
        const normalizedEl: NormalizedPriceItem = {
          price: el.TokenPrice,
          type: el.ComplexId?.includes('dynamic') ? 'dynamic' : 'image',
          rate: el.SuccessRate,
          logoPath: el.LogoPath,
          imagePath: el.ComplexId?.includes('4x4') ? '/img/4x4.svg' : '/img/3x3.svg',
        };

        return { ...acc, [key]: normalizedEl };
      }

      return acc;
    }

    if (el.FamilyName === 'ComplexImageTask Recognition') {
      const isBls = el.ComplexId === 'complex-rec_bls';
      const key = isBls ? 'bls' : el.ComplexId;

      if (key && el.TokenPrice) {
        const normalizedEl: NormalizedPriceItem = {
          price: el.TokenPrice,
          type: isBls ? 'image' : 'answers',
          rate: el.SuccessRate,
          logoPath: el.LogoPath,
        };

        return { ...acc, [key]: normalizedEl };
      }
      return acc;
    }

    if (el.TokenPrice) {
      const key = commonTokenKeyMap[el.FamilyName as keyof typeof commonTokenKeyMap];
      if (key) {
        const normalizedEl: NormalizedPriceItem = {
          price: el.TokenPrice,
          type: 'token',
          rate: el.SuccessRate,
          logoPath: el.LogoPath,
        };

        return { ...acc, [key]: normalizedEl };
      }
      return acc;
    }

    return acc;
  }, {});
};
