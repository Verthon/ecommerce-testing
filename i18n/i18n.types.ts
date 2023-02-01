import { AppMessages } from "./messages";

export type AppLocale = 'en' | 'pl'
export type TranslationsKeys = keyof typeof AppMessages;