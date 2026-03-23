import { StorageKeys } from '../constants';

export const setLocalStorage = (name: string, value: string) => {
  localStorage.setItem(name, value);
};

export const getLocalStorage = (name: string) => localStorage.getItem(name);

export const removeLocalStorage = (name: string) => {
  localStorage.removeItem(name);
};

export const setLanguage = (language: string) => setLocalStorage(StorageKeys.I18_LANGUAGE, language);
export const getLanguage = () => getLocalStorage(StorageKeys.I18_LANGUAGE);
export const removeLanguage = () => removeLocalStorage(StorageKeys.I18_LANGUAGE);
