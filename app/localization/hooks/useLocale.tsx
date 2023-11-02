import { useContext, useMemo } from "react";
import { type IntlShape, type PrimitiveType, useIntl } from "react-intl";

import type { TranslationsKeys } from "../models/TranslationsKeys";
import {
  LocaleContext,
  type LocaleContextValue,
} from "../contexts/locale-context";

export const useLocale = (): IntlShape &
  LocaleContextValue & {
    t: (id: TranslationsKeys, value?: Record<string, PrimitiveType>) => string;
  } => {
  const intl = useIntl();
  const localeContext = useContext(LocaleContext);

  if (localeContext === undefined) {
    throw new Error(
      "LocaleContext is unavailable, make sure you are using LocaleContextController",
    );
  }

  const t = (id: TranslationsKeys, value?: Record<string, PrimitiveType>) => {
    return intl.formatMessage({ id }, value);
  };

  const locale = useMemo(
    () => ({
      ...intl,
      ...localeContext,
      t,
    }),
    [intl, localeContext],
  );

  return locale;
};
