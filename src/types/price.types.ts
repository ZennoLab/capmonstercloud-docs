type FamilyName =
  | 'reCAPTCHA'
  | 'GeeTest'
  | 'Cloudflare Turnstile / Bot Challenge'
  | 'DataDome'
  | 'Tencent captcha'
  | 'Amazon Waf'
  | 'Faucet Pay'
  | 'Imperva (Incapsula)'
  | 'Prosopo'
  | 'Text Captcha'
  | 'Binance'
  | 'ComplexImageTask Recaptcha'
  | 'ComplexImageTask Recognition';

type ComplexId =
  | 'complex-rc2'
  | 'complex-rc2e'
  | 'complex-rc2_3x3'
  | 'complex-rc2_1x1'
  | 'complex-rec_oocl_rotate_new'
  | 'complex-rec_oocl_rotate_double_new'
  | 'complex-rec_betpunch_3x3_rotate request'
  | 'complex-rec_bls';

export type PriceResponseItem = {
  Type: 'v2' | 'v3' | 'Enterprise' | 'Enterprise (Spotify, Yahoo)' | null;
  FamilyName: FamilyName;
  ComplexId: ComplexId | null;
  LogoPath: string;
  SubType: null | string;
  SubTypeLogoPath: null | string;
  TokenPrice: number | null;
  PicturePrice: number | null;
  SuccessRate: number;
  Speed: number;
  LinkKey: string;
};

export type CaptchaTokenType =
  | 'recaptchaV2Token'
  | 'recaptchaV3Token'
  | 'recaptchaV2EnterpriseToken'
  | 'recaptchaV2EnterpriseSpotifyToken'
  | 'geeTestToken'
  | 'turnstileToken'
  | 'basiliskToken'
  | 'tencentToken'
  | 'textCaptchaToken'
  | 'dataDomeToken'
  | 'amazonToken'
  | 'recaptcha3x3Image'
  | 'recaptcha3x3DynamicImage'
  | 'recaptcha4x4Image'
  | 'Imperva'
  | 'bls'
  | 'binanceToken'
  | 'prosopoToken'
  | 'complex-rec_oocl_rotate_new'
  | 'complex-rec_oocl_rotate_double_new'
  | 'complex-rec_betpunch_3x3_rotate request';

type PriceType = 'token' | 'image' | 'answers' | 'dynamic';

export interface NormalizedPriceItem {
  price: number;
  type: PriceType;
  rate: number;
  logoPath: string;
  imagePath?: string;
}

export type NormalizedPrices = Record<CaptchaTokenType, NormalizedPriceItem>;
