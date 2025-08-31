import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

export default function Navigation() {
  const t = useTranslations('navigation');

  return (
    <nav className="flex gap-6 items-center">
      <Link href="/" className="hover:underline">
        {t('home')}
      </Link>
      <Link href="/about" className="hover:underline">
        {t('about')}
      </Link>
      <Link href="/services" className="hover:underline">
        {t('services')}
      </Link>
      <Link href="/contact" className="hover:underline">
        {t('contact')}
      </Link>
    </nav>
  );
}
