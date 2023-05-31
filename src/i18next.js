import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import En from "./Locales/en.json";
import Ar from "./Locales/ar.json";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation:En
            },
            ar:{
                translation: Ar
            }
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });