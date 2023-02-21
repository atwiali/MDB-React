import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationsEN from "./i18n/en/en.json";
import translationsAR from "./i18n/ar/ar.json";
import translationsFR  from "./i18n/fr/fr.json";
import translationsSP  from "./i18n/sp/sp.json";

const resources = {
  en: {
    translation: translationsEN,
  },
  ar: {
    translation: translationsAR,
  },
  fr: {
    translation: translationsFR,
  },
  sp: {
    translation: translationsSP,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "en", // default language
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;