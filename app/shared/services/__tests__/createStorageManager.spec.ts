import { createStorageManager } from "../createStorageManager";

describe("createStorageManager operations", () => {
  it("should set and get an item correctly in localStorage", () => {
    const storageManager = createStorageManager();
    storageManager.setItem("testKey", "testValue");
    expect(storageManager.getItem("testKey")).toBe("testValue");
  });

  it("should set and get an item correctly in sessionStorage", () => {
    const storageManager = createStorageManager("sessionStorage");
    storageManager.setItem("testKey", "testValue");
    expect(storageManager.getItem("testKey")).toBe("testValue");
  });

  it("should remove an item correctly", () => {
    const storageManager = createStorageManager();
    storageManager.setItem("testKey", "testValue");
    storageManager.removeItem("testKey");
    expect(storageManager.getItem("testKey")).toBeNull();
  });

  it("should clear all items correctly", () => {
    const storageManager = createStorageManager();
    storageManager.setItem("testKey", "testValue");
    storageManager.setItem("testKey2", "testValue2");
    storageManager.clear();
    expect(storageManager.getItem("testKey")).toBeNull();
    expect(storageManager.getItem("testKey2")).toBeNull();
  });
});

describe("createStorageManager with unsupported storage", () => {
  beforeAll(() => {
    Object.defineProperty(window, "localStorage", {
      get: jest.fn(() => {
        console.error("Storage not supported");
      }),
    });
  });

  it("should fallback to inMemoryStorage when storage is not supported", () => {
    const storageManager = createStorageManager();
    storageManager.setItem("testKey", "testValue");
    expect(storageManager.getItem("testKey")).toBe("testValue");
  });
});
