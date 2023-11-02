import { type AppLocale } from "./models/AppLocale";
import enMessages from "./translations/en.json";
import plMessages from "./translations/pl.json";

type KeyAsValue<T> = { [P in keyof T]: P };

const keysToValues = <T extends Record<string, string | unknown>>(
	source: T
): KeyAsValue<typeof source> => {
	return (Object.keys(source) as Array<keyof T>).reduce(
		(accumulated, current) => {
			accumulated[current] = current;
			return accumulated;
		},
		{} as KeyAsValue<typeof source>
	);
};

export const AppMessages = {
	...keysToValues(enMessages),
	...keysToValues(plMessages),
};

export const translations: Record<
	AppLocale,
	Record<keyof typeof AppMessages, string>
> = {
	en: enMessages,
	pl: plMessages,
};
