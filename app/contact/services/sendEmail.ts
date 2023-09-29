import sgMail from "@sendgrid/mail";
import { ContactEmailMessage } from "../models/ContactEmailMessage";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmail = async ({ msg }: { msg: ContactEmailMessage }) => {
  return sgMail.send(msg);
};
