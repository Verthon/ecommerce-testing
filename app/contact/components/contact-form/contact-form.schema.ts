import * as z from "zod";

export const contactFormSchema = z.object({
  firstName: z.string({ required_error: "contact.requiredError" }).nonempty(),
  lastName: z.string({ required_error: "contact.requiredError" }).nonempty(),
  companyName: z.string({ required_error: "contact.requiredError" }).nonempty(),
  email: z.string({ invalid_type_error: "contact.incorrectEmail", required_error: "contact.requiredError" }).email(),
  message: z.string({ required_error: "contact.requiredError" }).nonempty(),
  consent: z.literal<boolean>(true),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;