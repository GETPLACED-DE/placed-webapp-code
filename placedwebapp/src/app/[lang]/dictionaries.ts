import 'server-only';

const dictionaries = {
  en: () => import('@/locales/en/common.json').then((module) => module.default),
  de: () => import('@/locales/de/common.json').then((module) => module.default),
};

export const getDictionary = async (locale: 'en' | 'de') => dictionaries[locale](); 