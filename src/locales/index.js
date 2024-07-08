import en from './en.json';
import ru from './ru.json';

const locales = {
  en,
  ru,
};

export const localesMappings = {
  ru: 'ru-RU',
  en: 'en-US',
  'zh-Hans': 'zh-Hans'
}


export default function getLocaleStrings(locale) {
  return locales[locale] || locales.en;
}