export const CAPTCHA_ID_TO_PAGES: Readonly<Partial<Record<string, string>>> = {
  amazonwaf: 'aws-waf-captcha',
  'cf-turnstile': 'turnstile',
  text: 'textcaptcha',
} as const;

export const getCaptchaLink = (currentLocale: string, LinkKey: string, Id: string) => {
  if (CAPTCHA_ID_TO_PAGES[Id]) {
    return `https://capmonster.cloud/${currentLocale}/${CAPTCHA_ID_TO_PAGES[Id]}`;
  }
  return `/${currentLocale}/docs/captchas/${LinkKey}`;
};
