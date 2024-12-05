import en from './en.json';
import ru from './ru.json';
import zh from './zh.json'
import ptBR from './pt-br.json'

const locales = {
  en,
  ru,
  zh,
  'pt-br': ptBR
};

export const localesMappings = {
  ru: 'ru-RU',
  en: 'en-US',
  zh: 'zh-Hans',
  'pt-br': 'pt-BR'
}


export default function getLocaleStrings(locale) {
  return locales[locale] || locales.en;
}