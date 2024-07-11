// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "welcome": "Welcome to Dubai Project",
          "home": "Home",
          "services": "Services",
          "realEstate": "Real Estate",
          "medicalVacation": "Medical Vacation",
          "businessSolutions": "Business Solutions",
          "aboutUs": "About Us",
          "contact": "Contact"
        }
      },
      ar: {
        translation: {
          "welcome": "مرحبًا بك في مشروع دبي",
          "home": "الصفحة الرئيسية",
          "services": "الخدمات",
          "realEstate": "العقارات",
          "medicalVacation": "إجازة طبية",
          "businessSolutions": "حلول الأعمال",
          "aboutUs": "معلومات عنا",
          "contact": "اتصل"
        }
      }
    },
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language
    interpolation: {
      escapeValue: false // React already safes from xss
    }
  });

export default i18n;
