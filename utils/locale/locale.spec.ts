import { AppLocale } from "i18n/i18n.types";
import { getLocalizedData, Localization } from "./locale";

type TestLocalization = {
	locale: AppLocale;
	name: string;
	description: string;
};

describe("getLocalizedData", () => {
	it("should return the data for the specified locale if it exists", () => {
		const localizations: Localization<TestLocalization[]> = [
			{
				locale: "en",
				name: "English",
				description: "English description",
			},
			{
				locale: "pl",
				name: "Polish",
				description: "Polish description",
			},
		];

		const result = getLocalizedData<TestLocalization[]>("pl", localizations);

		expect(result).toEqual({
			locale: "pl",
			name: "Polish",
			description: "Polish description",
		});
	});

	it("should return the data for the default locale (English) if the specified locale does not exist", () => {
		const localizations = [
			{
				locale: "en",
				name: "English",
				description: "English description",
			},
			{
				locale: "pl",
				name: "Polish",
				description: "Polish description",
			},
		];

		const result = getLocalizedData<{ name: string; description: string }>(
			//@ts-expect-error
			"de",
			localizations
		);

		expect(result).toEqual({
			locale: "en",
			name: "English",
			description: "English description",
		});
	});

	it("should return the first data in the list if both the specified locale and default locale do not exist", () => {
		const localizations = [
			{
				locale: "en",
				name: "English",
				description: "English description",
			},
			{
				locale: "pl",
				name: "Polish",
				description: "Polish description",
			},
		];

		const result = getLocalizedData<{ name: string; description: string }>(
			//@ts-expect-error
			"fr",
			localizations
		);

		expect(result).toEqual({
			locale: "en",
			name: "English",
			description: "English description",
		});
	});

	it("should handle an empty list of localizations", () => {
		const localizations: Localization<{ name: string; description: string }>[] =
			[];

		const result = getLocalizedData("en", localizations);

		expect(result).toBeUndefined();
	});
});
