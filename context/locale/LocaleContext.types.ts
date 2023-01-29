import { AppLocale } from "../../i18n/i18n.types";

export type LocaleContextValueType = {
	defaultLocale: AppLocale;
	locale: AppLocale;
	setLocale: (locale: AppLocale) => void;
};
