import type { CartExpiry } from "./CartExpiry";
import type { CartProduct } from "./CartProduct";

export type CartStorage = {
  totalQuantity: number;
  productsList: CartProduct[];
} & CartExpiry;
