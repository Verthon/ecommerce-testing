
import { useContext, useMemo } from 'react';
import { IntlShape, PrimitiveType, useIntl } from 'react-intl';

import { LocaleContext } from 'context/locale/LocaleContext';
import { LocaleContextValueType } from 'context/locale/LocaleContext.types';
import { TranslationsKeys } from 'i18n/i18n.types';

export const useLocale = (): IntlShape & LocaleContextValueType & { t: (id: TranslationsKeys, value?: Record<string, PrimitiveType>) => string } => {
  const intl = useIntl();
  const localeContext = useContext(LocaleContext);

  if (localeContext === undefined) {
    throw new Error('LocaleContext is unavailable, make sure you are using LocaleContextController');
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
