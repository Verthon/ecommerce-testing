import { STORAGE_DEFAULT_EXPIRY } from "../constants/storage-default-expiry";

export type StorageType = "localStorage" | "sessionStorage";

interface StorageManager {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string, expiry?: number) => void;
  removeItem: (key: string) => void;
  clear: () => void;
}

/**
 * This module provides an abstraction over the browser's localStorage.
 * It ensures that the storage access is consistent even when certain
 * browser features like private browsing in Safari are active. If
 * localStorage is unavailable, it gracefully falls back to an in-memory storage.
 */

export const createStorageManager = (
  storageType: StorageType = "localStorage",
): StorageManager => {
  const storage = window[storageType];

  /**
   * Check if localStorage is supported.
   * @returns {boolean} - Returns true if supported, false otherwise.
   */

  const isSupported = (): boolean => {
    try {
      const testKey = "__some_random_key_test__";
      storage.setItem(testKey, testKey);
      storage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  };

  const inMemoryStorage: Record<string, string> = {};

  /**
   * Store item with an expiry time.
   * @param {string} key - The key for the item.
   * @param {string} value - The value to be stored.
   * @param {number} [expiry=1209600000] - The expiration time in milliseconds (default is 2 weeks).
   * @returns {string} - The stored item.
   */

  const withExpiry = (key: string, value: string, expiry: number): string => {
    const now = new Date().getTime();
    const item = {
      value,
      expiry: now + expiry,
    };
    return JSON.stringify(item);
  };

  const getWithExpiry = (key: string): string | null => {
    const itemStr = isSupported() ? storage.getItem(key) : inMemoryStorage[key];
    if (!itemStr) {
      return null;
    }

    const item = JSON.parse(itemStr);
    const now = new Date().getTime();

    if (now > item.expiry) {
      removeItem(key);
      return null;
    }

    return item.value;
  };

  /**
   * Get item from the storage.
   * @param {string} key - The key for the item.
   * @returns {string | null} - The retrieved item or null if not found.
   */
  const getItem = (key: string): string | null =>
    isSupported() ? getWithExpiry(key) : inMemoryStorage[key] || null;

  /**
   * Set item in the storage.
   * @param {string} key - The key for the item.
   * @param {string} value - The value to be stored.
   * @param {number} [expiry=1209600000] - The expiration time in milliseconds (default is 2 weeks).
   */
  const setItem = (
    key: string,
    value: string,
    expiry: number = STORAGE_DEFAULT_EXPIRY,
  ): void => {
    if (isSupported()) {
      storage.setItem(key, withExpiry(key, value, expiry));
    } else {
      inMemoryStorage[key] = value;
    }
  };

  /**
   * Remove item from the storage.
   * @param {string} key - The key for the item.
   */
  const removeItem = (key: string): void => {
    if (isSupported()) {
      storage.removeItem(key);
    } else {
      delete inMemoryStorage[key];
    }
  };

  /**
   * Clear all items from the storage.
   */
  const clear = (): void => {
    if (isSupported()) {
      storage.clear();
    } else {
      Object.keys(inMemoryStorage).forEach((key) => {
        delete inMemoryStorage[key];
      });
    }
  };

  return {
    getItem,
    setItem,
    removeItem,
    clear,
  };
};
