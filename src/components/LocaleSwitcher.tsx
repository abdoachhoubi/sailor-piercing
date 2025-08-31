import {useLocale, useTranslations} from 'next-intl';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';
import {routing} from '@/i18n/routing';

export default function LocaleSwitcher() {
  const t = useTranslations('common');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect locale={locale}>
      {routing.locales.map((cur) => (
        <option key={cur} value={cur}>
          {getLanguageName(cur)}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}

function getLanguageName(locale: string) {
  switch (locale) {
    case 'en':
      return 'English';
    case 'fr':
      return 'Français';
    case 'ar':
      return 'العربية';
    default:
      return locale;
  }
}
