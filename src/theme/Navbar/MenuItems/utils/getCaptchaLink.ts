import { getMainLocale } from './getMainLocale';

export const CAPTCHA_ID_TO_PAGES: Readonly<Partial<Record<string, string>>> = {
  amazonwaf: 'aws-waf-captcha',
  'cf-turnstile': 'cloudflare',
  text: 'textcaptcha',
} as const;

export const getCaptchaLink = (currentLocale: string, LinkKey: string, Id: string, baseLandingUrl: string) => {
  if (CAPTCHA_ID_TO_PAGES[Id]) {
    return `${baseLandingUrl}/${getMainLocale(currentLocale)}/${CAPTCHA_ID_TO_PAGES[Id]}`;
  }
  return `${currentLocale === 'en' ? '' : `/${currentLocale}`}/docs/captchas/${LinkKey}`;
};
