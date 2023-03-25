import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(LanguageDetector)
  .use(HttpBackend)
  .init({
    fallbackLng: 'en', // langue par défaut
    supportedLngs: ['en', 'fr'], // langues supportées
    detection: {
      order: ['localStorage', 'navigator'], // ordre de détection de la langue
      caches: ['localStorage'], // options de cache
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // chemin vers les fichiers de traduction
    },
    interpolation: {
      escapeValue: false, // permet l'utilisation de balises HTML dans les traductions
    },
  });

export default i18n;
