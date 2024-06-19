import * as locales from "./locale";
import englandFlag from "../assets/flags/england.svg";
import spainFlag from "../assets/flags/spain.svg";
import franceFlag from "../assets/flags/france.svg";
import indiaFlag from "../assets/flags/india.svg";
import italyFlag from "../assets/flags/italy.svg";
import japanFlag from "../assets/flags/japan.svg";
import russiaFlag from "../assets/flags/russia.svg";
import albaniaFlag from "../assets/flags/albania.svg";
import denmarkFlag from "../assets/flags/denmark.svg";
import germanyFlag from "../assets/flags/german.svg";

export const languages = {
  [locales.sqAL]: {
    language: "Albanian",
    locale: locales.sqAL,
    img: albaniaFlag,
  },
  [locales.enUS]: {
    language: "English",
    locale: locales.enUS,
    img: englandFlag,
  },
  [locales.esES]: {
    language: "Spanish",
    locale: locales.esES,
    img: spainFlag,
  },
  [locales.frFR]: {
    language: "French",
    locale: locales.frFR,
    img: franceFlag,
  },
  [locales.hiHI]: {
    language: "Hindi",
    locale: locales.hiHI,
    img: indiaFlag,
  },
  [locales.itIT]: {
    language: "Italian",
    locale: locales.itIT,
    img: italyFlag,
  },
  [locales.jaJP]: {
    language: "Japanese",
    locale: locales.jaJP,
    img: japanFlag,
  },
  [locales.ruRU]: {
    language: "Russian",
    locale: locales.ruRU,
    img: russiaFlag,
  },
  [locales.daDA]: {
    language: "Danish",
    locale: locales.daDA,
    img: denmarkFlag,
  },
  [locales.deDE]: {
    language: "German",
    locale: locales.deDE,
    img: germanyFlag,
  },
};
