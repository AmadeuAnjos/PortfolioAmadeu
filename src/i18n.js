import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Importa os ficheiros de tradução
import translationEN from "./locales/en/translation.json";
import translationPT from "./locales/pt/translation.json";

// Define os recursos disponíveis por idioma
const resources = {
  en: {
    translation: translationEN,
  },
  pt: {
    translation: translationPT,
  },
};

// Inicializa o i18next
i18n
  .use(LanguageDetector) // detecta automaticamente o idioma do navegador
  .use(initReactI18next) // integra com React
  .init({
    resources,
    fallbackLng: "en", // idioma padrão, caso não consiga detectar
    debug: false, // coloca true para ver logs no console

    interpolation: {
      escapeValue: false, // necessário para React
    },

    detection: {
      order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"],
      caches: ["localStorage"], // guarda preferência no localStorage
    },
  });

export default i18n;
