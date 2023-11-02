/**
 * Combines class names, filtering out any falsy values.
 *
 * @param {Array<string | undefined | null | false>} classes - List of class names
 * @returns {string} - Combined class names separated by space
 */
export const combineClassNames = (
  ...classes: Array<string | undefined | null | false>
): string => classes.filter(Boolean).join(" ");
