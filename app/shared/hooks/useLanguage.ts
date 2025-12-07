import type { Union } from "~/shared/utils/union";
import { useTranslation } from "react-i18next";

const Language = {
  KO: "ko",
  EN: "en",
} as const;
export type Language = Union<typeof Language>;

const useLanguage = () => {
  const { i18n } = useTranslation();
  const language = i18n?.language?.split("-")[0] ?? "ko";

  return (language === "ko" ? "ko" : "en") as Language;
};

export default useLanguage;
