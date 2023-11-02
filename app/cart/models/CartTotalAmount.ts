import type { CartExpiry } from "./CartExpiry";

export type CartTotalAmount = {
  total: number;
  quantity: number;
} & CartExpiry;
