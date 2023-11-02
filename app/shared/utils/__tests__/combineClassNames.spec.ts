import { combineClassNames } from "../combineClassNames";

describe("combineClassNames - combines class names, filtering out any falsy values", () => {
  it("should combine class names", () => {
    expect(combineClassNames("bg-red", "text-white")).toBe("bg-red text-white");
  });

  it("should filter out undefined values", () => {
    expect(combineClassNames("bg-red", undefined, "text-white")).toBe(
      "bg-red text-white",
    );
  });

  it("should filter out null values", () => {
    expect(combineClassNames("bg-red", null, "text-white")).toBe(
      "bg-red text-white",
    );
  });

  it("should filter out false values", () => {
    expect(combineClassNames("bg-red", false, "text-white")).toBe(
      "bg-red text-white",
    );
  });

  it("should handle all falsy values", () => {
    expect(combineClassNames(undefined, null, false, "text-white")).toBe(
      "text-white",
    );
  });

  it("should return an empty string if no truthy values", () => {
    expect(combineClassNames(undefined, null, false)).toBe("");
  });
});
