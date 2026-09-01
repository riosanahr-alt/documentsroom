export type Lang = "en" | "ru";

export type L = { en: string; ru: string };

export function L(en: string, ru: string): L {
  return { en, ru };
}
