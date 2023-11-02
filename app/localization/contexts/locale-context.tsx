import * as React from "react";
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";

import { translations } from "../config";
import type { AppLocale } from "../models/AppLocale";

export type LocaleContextValue = {
  defaultLocale: AppLocale;
  locale: AppLocale;
  setLocale: (locale: AppLocale) => void;
};

type LocaleProviderProps = {
  children: React.ReactNode;
};

export const LocaleContext = React.createContext<
  LocaleContextValue | undefined
>(undefined);

export const LocaleProvider = ({ children }: LocaleProviderProps) => {
  const router = useRouter();
  const defaultLocale = (router.locale?.split("-")[0] as AppLocale) || "en";
  const [locale, setLocale] = React.useState<AppLocale>(defaultLocale);

  return (
    <IntlProvider
      defaultLocale={defaultLocale}
      locale={locale}
      messages={translations[locale]}
    >
      <LocaleContext.Provider value={{ defaultLocale, locale, setLocale }}>
        {children}
      </LocaleContext.Provider>
    </IntlProvider>
  );
};
