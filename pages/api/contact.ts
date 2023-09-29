import type { NextApiHandler, NextApiRequest } from "next";

import { contactFormSchema } from "app/contact/components/contact-form/contact-form.schema";
import { sendEmail } from "app/contact/services/sendEmail";
import { createEmailTemplate } from "app/contact/services/createEmailTemplate";

const contactHandler: NextApiHandler = async (req: NextApiRequest, res) => {
  const body = req.body;
  const parsedBody = contactFormSchema.safeParse(body);
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!parsedBody.success) {
    res.status(400).json(parsedBody.error);
    return;
  }

  const emailTemplate = createEmailTemplate(
    {
      email: parsedBody.data.email,
      companyName: parsedBody.data.companyName,
      firstName: parsedBody.data.firstName,
      lastName: parsedBody.data.lastName,
      message: parsedBody.data.message,
      consent: parsedBody.data.consent,
    },
    {
      from: process.env.CONTACT_EMAIL_SENDER,
      subject: `Contact form ${parsedBody.data.firstName} ${parsedBody.data.lastName} from ${parsedBody.data.companyName}`,
      to: contactEmail,
    },
  );

  try {
    await sendEmail({ msg: emailTemplate });
    res.status(200).json({ message: "Email sent" });
    return;
  } catch (e) {
    console.log("error", e);
    res.status(500).json({ message: "Error sending email" });
    return;
  }
};

export default contactHandler;
