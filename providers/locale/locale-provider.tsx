
import * as React from 'react';
import { IntlProvider } from 'react-intl';

import { translations } from 'i18n/messages';
import { AppLocale } from 'i18n/i18n.types';
import { LocaleContext } from 'context/locale/LocaleContext';

import type { LocaleProviderProps } from './locale-provider.types';
import { useRouter } from 'next/router';

export const LocaleProvider = ({ children }: LocaleProviderProps) => {
  const router = useRouter();
  const defaultLocale = router.locale?.split("-")[0] as AppLocale|| 'en';
  const [locale, setLocale] = React.useState<AppLocale>(defaultLocale);

  return (
    <IntlProvider defaultLocale={defaultLocale} locale={locale} messages={translations[locale]}>
      <LocaleContext.Provider value={{ defaultLocale, locale, setLocale }}>{children}</LocaleContext.Provider>
    </IntlProvider>
  );
};