import en from './en.json';
import ru from './ru.json';
import zhHans from './zh-Hans.json'

const locales = {
  en,
  ru,
  'zh-Hans': zhHans
};

export const localesMappings = {
  ru: 'ru-RU',
  en: 'en-US',
  'zh-Hans': 'zh-Hans'
}


export default function getLocaleStrings(locale) {
  return locales[locale] || locales.en;
}