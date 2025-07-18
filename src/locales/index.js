import en from './en.json';
import ru from './ru.json';
import zh from './zh.json';
import ptBR from './pt-br.json';

const locales = {
  en,
  ru,
  zh,
  'pt-br': ptBR,
};

export const localesMappings = {
  ru: 'ru',
  en: 'en',
  zh: 'zh',
  'pt-br': 'pt-BR',
};

export default function getLocaleStrings(locale) {
  return locales[locale] || locales.en;
}
