import { AppLocale } from "i18n/i18n.types";

export type Localization<T extends { locale: AppLocale }[]> = {
	locale: AppLocale;
	[key: string]: T | AppLocale;
};

export const getLocalizedData = <T extends { locale: AppLocale }[]>(
	locale: AppLocale,
	localizations: Localization<T>[]
) => {
	if (!localizations) {
		return "-";
	}

	const result = localizations.find((item) => item.locale === locale);
	if (!result) {
		return (
			localizations.find((item) => item.locale === "en") || localizations[0]
		);
	}
	return result;
};

export const getShortLocaleVersion = (locale?: string): AppLocale => {
	if (!locale) return "pl";
	return locale?.split("-")[0] as AppLocale;
};
