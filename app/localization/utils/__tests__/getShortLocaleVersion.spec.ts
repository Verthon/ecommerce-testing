import { getShortLocaleVersion } from "../getShortLocaleVersion";

describe("getShortLocaleVersion", () => {
	it('should return "pl" when locale is undefined', () => {
		expect(getShortLocaleVersion(undefined)).toBe("pl");
	});

	it('should return "pl" when locale is an empty string', () => {
		expect(getShortLocaleVersion("")).toBe("pl");
	});

	it("should return the short version of a locale", () => {
		expect(getShortLocaleVersion("en-US")).toBe("en");
		expect(getShortLocaleVersion("pl-PL")).toBe("pl");
	});

	it('should return "pl" when the short version of a locale is not "en" or "pl"', () => {
		expect(getShortLocaleVersion("es-ES")).toBe("pl");
	});
});
