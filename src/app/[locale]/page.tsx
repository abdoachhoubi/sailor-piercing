import Image from "next/image";
import {getTranslations} from 'next-intl/server';
import {setRequestLocale} from 'next-intl/server';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import Navigation from '@/components/Navigation';

type Props = {
  params: Promise<{locale: string}>;
};

export default async function Home({params}: Props) {
  const {locale} = await params;
  
  // Enable static rendering
  setRequestLocale(locale);
  
  const t = await getTranslations('home');
  const tCommon = await getTranslations('common');
  const tFooter = await getTranslations('footer');

  return (
    <div className="font-sans min-h-screen">
      <header className="flex justify-between items-center p-8">
        <Navigation />
        <div className="flex items-center gap-2">
          <span className="text-sm">{tCommon('language')}:</span>
          <LocaleSwitcher />
        </div>
      </header>
      
      <main className="flex flex-col gap-[32px] items-center text-center px-8 py-16">
        <div>
          <h1 className="text-5xl font-bold mb-6">{t('title')}</h1>
          <p className="text-xl mb-6 text-gray-600 max-w-2xl">{t('subtitle')}</p>
          <p className="text-lg mb-8 max-w-3xl">{t('description')}</p>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-12 px-8">
            {t('cta')}
          </button>
          <button className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-12 px-8">
            {t('learn_more')}
          </button>
        </div>
      </main>
      
      <footer className="text-center py-8 text-sm text-gray-600">
        <span>© 2025 Sailor Piercing. {tFooter('rights')}</span>
      </footer>
    </div>
  );
}
