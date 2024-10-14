import en from './en.json';
import ru from './ru.json';
import zhHans from './zh-Hans.json'
import ptBR from './pt-BR.json'

const locales = {
  en,
  ru,
  'zh-Hans': zhHans,
  'pt-BR': ptBR
};

export const localesMappings = {
  ru: 'ru-RU',
  en: 'en-US',
  'zh-Hans': 'zh-Hans',
  'pt-BR': 'pt-BR'
}


export default function getLocaleStrings(locale) {
  return locales[locale] || locales.en;
}