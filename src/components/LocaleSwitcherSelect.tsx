'use client';

import {useRouter, usePathname} from '@/i18n/routing';
import {useParams} from 'next/navigation';
import {useTransition} from 'react';

type Props = {
  children: React.ReactNode;
  disabled?: boolean;
  locale: string;
};

export default function LocaleSwitcherSelect({
  children,
  disabled,
  locale
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(value: string) {
    const nextLocale = value;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        {locale: nextLocale}
      );
    });
  }

  return (
    <select
      className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
      defaultValue={locale}
      disabled={disabled || isPending}
      onChange={(event) => onSelectChange(event.target.value)}
    >
      {children}
    </select>
  );
}
