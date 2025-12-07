import * as lang from "../../lang";
import i18next, { type InitOptions } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

export type Locale = keyof typeof lang;
export const defaultNS: keyof (typeof lang)[Locale] = "common";
export const resources = lang;

const initOptions: InitOptions = {
  resources,
  defaultNS,
  fallbackLng: "ko", // 사용자가 요청한 언어 번역이 존재하지 않는 경우 대체 언어
  supportedLngs: ["ko", "en"], // 해당 언어만 지원하겠다는 의미로 en-US, en-GB 또한 전부 en으로 처리 됨
  nonExplicitSupportedLngs: true, // 다국어를 지원할때 언어 코드의 세부 버전 처리 방식, supportedLngs와 함께 사용 됨
  load: "languageOnly", // 언어만 로드하고, 지역화는 하지 않음
  interpolation: { escapeValue: false },
  detection: {
    order: ["localStorage", "navigator", "cookie"], // 감지 순서
    lookupLocalStorage: "i18nextLng",
  },
};

i18next.use(LanguageDetector).use(initReactI18next).init(initOptions);
