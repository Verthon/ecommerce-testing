import {
  type StorageType,
  createStorageManager,
} from "app/shared/services/createStorageManager";
import { CART_KEY } from "../constants/cart-key";
import { type CartProduct } from "../models/CartProduct";
import { type CartTotalAmount } from "../models/CartTotalAmount";
import { CART_TOTAL_AMOUNT } from "../constants/cart-total-key";
import { STORAGE_DEFAULT_EXPIRY } from "app/shared/constants/storage-default-expiry";

type StorageManager = ReturnType<typeof createStorageManager>;

const getCartItems = (storageManager: StorageManager): CartProduct[] => {
  const existingCart = storageManager.getItem(CART_KEY);
  return existingCart ? JSON.parse(existingCart) : [];
};

const setCartItems = (
  storageManager: StorageManager,
  cartItems: CartProduct[],
): void => {
  storageManager.setItem(CART_KEY, JSON.stringify(cartItems));
};

const getTotalAmount = (storageManager: StorageManager): CartTotalAmount => {
  const existingTotal = storageManager.getItem(CART_TOTAL_AMOUNT);
  return existingTotal ? JSON.parse(existingTotal) : { total: 0, quantity: 0 };
};

const setTotalAmount = (
  storageManager: StorageManager,
  cartTotalAmount: CartTotalAmount,
): void => {
  storageManager.setItem(CART_TOTAL_AMOUNT, JSON.stringify(cartTotalAmount));
};

export const createCartManager = (
  storageType: StorageType = "localStorage",
) => {
  const storageManager = createStorageManager(storageType);

  return {
    addToCart: (product: CartProduct): void => {
      const cartItems = getCartItems(storageManager);
      cartItems.push(product);
      setCartItems(storageManager, cartItems);

      const currentTotals = getTotalAmount(storageManager);
      const newTotal = currentTotals.total + product.price;
      const newQuantity = currentTotals.quantity + 1;
      setTotalAmount(storageManager, {
        total: newTotal,
        quantity: newQuantity,
        expires: STORAGE_DEFAULT_EXPIRY,
      });
    },
    removeFromCart: (productId: string): void => {
      const cartItems = getCartItems(storageManager);
      const productToRemove = cartItems.find((item) => item.id === productId);
      const updatedCart = cartItems.filter((item) => item.id !== productId);
      setCartItems(storageManager, updatedCart);

      if (productToRemove) {
        const currentTotals = getTotalAmount(storageManager);
        const newTotal = currentTotals.total - productToRemove.price;
        const newQuantity = currentTotals.quantity - 1;
        setTotalAmount(storageManager, {
          total: newTotal,
          quantity: newQuantity,
          expires: STORAGE_DEFAULT_EXPIRY,
        });
      }
    },
    clearCart: (): void => {
      storageManager.removeItem(CART_KEY);
    },
    getCart: (): CartProduct[] => {
      return getCartItems(storageManager);
    },
    getTotalAmount: (): CartTotalAmount => {
      return getTotalAmount(storageManager);
    },
  };
};
