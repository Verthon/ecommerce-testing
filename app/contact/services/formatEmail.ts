import { sanitizeString } from "app/shared/utils/sanitizeString";
import { ContactFormSchema } from "../components/contact-form/contact-form.schema";

export const formatForEmail = (input: ContactFormSchema) => {
  return {
    firstName: sanitizeString(input.firstName),
    lastName: sanitizeString(input.lastName),
    companyName: sanitizeString(input.companyName),
    email: sanitizeString(input.email),
    message: sanitizeString(input.message),
  } as const;
};
