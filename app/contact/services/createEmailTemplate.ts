import { ContactFormSchema } from "../components/contact-form/contact-form.schema";
import { ContactEmailMessage } from "../models/ContactEmailMessage";

import { formatForEmail } from "./formatEmail";

export const createEmailTemplate = (
  userInput: ContactFormSchema,
  emailConfig: Omit<ContactEmailMessage, "text">,
) => {
  const sanitizedData = formatForEmail(userInput);

  const emailBody = `
      Name: ${sanitizedData.firstName} ${sanitizedData.lastName}
      Company: ${sanitizedData.companyName}
      Email: ${sanitizedData.email}
      Message:
      ${sanitizedData.message}
  `;

  return {
    ...emailConfig,
    text: emailBody,
  } as const;
};
