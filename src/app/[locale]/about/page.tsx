import {getTranslations} from 'next-intl/server';
import {setRequestLocale} from 'next-intl/server';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import Navigation from '@/components/Navigation';

type Props = {
  params: Promise<{locale: string}>;
};

export default async function About({params}: Props) {
  const {locale} = await params;
  
  // Enable static rendering
  setRequestLocale(locale);
  
  const t = await getTranslations('navigation');
  const tCommon = await getTranslations('common');

  return (
    <div className="font-sans min-h-screen p-8">
      <header className="flex justify-between items-center mb-8">
        <Navigation />
        <div className="flex items-center gap-2">
          <span className="text-sm">{tCommon('language')}:</span>
          <LocaleSwitcher />
        </div>
      </header>
      
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{t('about')}</h1>
        <p className="text-lg">
          This is the about page. Content would be localized for each language.
        </p>
      </main>
    </div>
  );
}
