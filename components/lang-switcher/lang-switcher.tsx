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
			className="bg-transparent border border-gray-600 text-gray-100 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 py-1.5 px-2  cursor-pointer"
		>
			<option value="en">🇨🇦 &#160;{t("global.navbar.english")}</option>
			<option value="pl">🇵🇱 &#160;{t("global.navbar.polish")}</option>
		</select>
	);
};
