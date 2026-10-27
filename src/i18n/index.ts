import { pl, type Dictionary } from "./pl";
import { en } from "./en";

export const languages = ["pl", "en"] as const;

export type Lang = (typeof languages)[number];

const dictionaries: Record<Lang, Dictionary> = { pl, en };

export const getDictionary = (lang: Lang): Dictionary => dictionaries[lang];

export const getHomePath = (lang: Lang): string => (lang === "pl" ? "/" : "/en/");

export const getPrivacyPath = (lang: Lang): string => (lang === "pl" ? "/polityka-prywatnosci/" : "/en/privacy-policy/");

export const getOtherLang = (lang: Lang): Lang => (lang === "pl" ? "en" : "pl");
