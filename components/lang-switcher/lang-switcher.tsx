import * as React from "react";

import { useLocale } from "app/localization/hooks/useLocale";
import { useRouter } from "next/router";

export const LangSwitcher = () => {
	const { t, locale, setLocale } = useLocale();
	const router = useRouter();

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const inputValue = e.target.value;
    const VALUES = {
      en: 'en-US',
      pl: 'pl-PL'
    }
		if (inputValue === "en" || inputValue === "pl") {
			setLocale(inputValue);
			router.push(router.asPath, undefined, { locale: VALUES[inputValue] });
		}
	};

	return (
		<select
			name="langaugeSwitcher"
			id="langaugeSwitcher"
			value={locale}
			onChange={handleChange}
			className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mx-8 cursor-pointer"
		>
			<option value="en">🇨🇦 {t("global.navbar.english")}</option>
			<option value="pl">🇵🇱 {t("global.navbar.polish")}</option>
		</select>
	);
};
