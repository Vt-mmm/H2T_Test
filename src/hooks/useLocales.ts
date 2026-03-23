import { enUS, viVN } from '@mui/material/locale';
import { useTranslation } from 'react-i18next';
import { getLanguage, setLanguage } from 'utils';

const LANGS = [
  {
    label: 'EN',
    longLabel: 'English',
    value: 'en',
    systemValue: enUS,
  },
  {
    label: 'VI',
    longLabel: 'Tiếng Việt',
    value: 'vi',
    systemValue: viVN,
  },
] as const;

export default function useLocales() {
  const { i18n, t: translate, t } = useTranslation();
  const langStorage = getLanguage();

  const currentLang =
    LANGS.find((lang) => lang.value === i18n.resolvedLanguage) ??
    LANGS.find((lang) => lang.value === langStorage) ??
    LANGS[0];

  const handleChangeLanguage = (newLang: string) => {
    i18n.changeLanguage(newLang);
    setLanguage(newLang);
  };

  return {
    onChangeLang: handleChangeLanguage,
    translate,
    currentLang,
    allLang: LANGS,
    t,
  };
}
