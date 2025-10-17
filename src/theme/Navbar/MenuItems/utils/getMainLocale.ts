const localeMap: Record<string, string> = {
  'pt-br': 'pt-BR',
};

export const getMainLocale = (locale: string) => {
  if (localeMap[locale]) return localeMap[locale];
  return locale;
};
