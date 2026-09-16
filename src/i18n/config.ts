import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      home: "Home",
      about: "About",
    },
  },
  ar: {
    translation: {
      welcome: "أهلاً بك",
      home: "الرئيسية",
      about: "من نحن",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
