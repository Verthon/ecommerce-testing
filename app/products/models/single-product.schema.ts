import * as z from "zod";

export const singleProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  images: z.array(
    z.object({
      id: z.string(),
      url: z.string(),
      width: z.number(),
      height: z.number(),
    }),
  ),
});

export type SingleProductSchema = z.infer<typeof singleProductSchema>;
