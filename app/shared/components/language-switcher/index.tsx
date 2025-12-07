import useLanguage from "~/shared/hooks/useLanguage";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const language = useLanguage();

  const toggleLanguage = () => {
    const newLang = language === "en" ? "ko" : "en";

    console.log(i18n);
    i18n.changeLanguage(newLang);

    console.log(i18n);
  };

  return (
    <button className="text-gray-600" onClick={toggleLanguage}>
      {language}
    </button>
  );
};

export default LanguageSwitcher;
