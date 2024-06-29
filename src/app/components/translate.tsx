import { useSelect } from './selectProvider'
import es from '../translateText/es.json'
import en from '../translateText/en.json'

type Language = 'es' | 'en'

type Translations = {
  [key in Language]: {
    [key: string]: string
  }
}

const translations: Translations = {
  es,
  en,
}

export const translate = (key: string): string => {
  const { language } = useSelect();

  if (language in translations) {
    const lang = language as Language;
    return translations[lang][key] || key
  } else {
    return key
  }
}