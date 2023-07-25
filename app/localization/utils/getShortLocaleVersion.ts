export const getShortLocaleVersion = (locale?: string) => {
	if (!locale) return "pl";
	const shortLocale = locale.split("-")[0];
	return shortLocale === "en" || shortLocale === "pl" ? shortLocale : "pl";
};
