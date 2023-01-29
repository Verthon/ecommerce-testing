import { renderHook, act } from "@testing-library/react";
import { useToggle } from "./useToggle";

describe("useToggle Hook - toggle state between true and false", () => {
	it("should have initial state", () => {
		const { result } = renderHook(() => useToggle(true));

		expect(result.current.state).toEqual(true);
	});

	it("should toggle state", () => {
		const { result } = renderHook(() => useToggle(false));

		act(() => {
			result.current.toggle();
		});

		expect(result.current.state).toEqual(true);
	});

	it("should reset state to initial", async () => {
		const { result } = renderHook(() => useToggle(true));

		act(() => {
			result.current.toggle();
		});

		act(() => {
			result.current.resetToInitialState();
		});

		expect(result.current.state).toEqual(false);
	});
});
