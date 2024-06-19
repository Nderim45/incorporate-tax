const LOCALE = "locale";
export const dataLocalStorage = {
  setLocale(locale) {
    localStorage.setItem(LOCALE, locale);
  },

  getLocale() {
    return localStorage.getItem(LOCALE);
  },
};
