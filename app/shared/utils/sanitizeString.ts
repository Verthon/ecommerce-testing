import { JSDOM } from "jsdom";
import createDOMPurify from "dompurify";

const { window } = new JSDOM("");
const DOMPurify = createDOMPurify(window);

export const sanitizeString = (input: string) => {
  return DOMPurify.sanitize(input);
};
