import * as React from "react";

import { useLocale } from "hooks/useLocale/useLocale";

export const LangSwitcher = () => {
	const { t, locale, setLocale } = useLocale();

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const inputValue = e.target.value;
		if (inputValue === "en" || inputValue === "pl") setLocale(inputValue);
	};

	return (
		<select
			name="langaugeSwitcher"
			id="langaugeSwitcher"
			value={locale}
			onChange={handleChange}
		>
			<option value="en">🇨🇦 {t("global.navbar.english")}</option>
			<option value="pl">🇵🇱 {t("global.navbar.polish")}</option>
		</select>
	);
};
