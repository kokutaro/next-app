'use client';

import {
  Cog6ToothIcon,
  CurrencyYenIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Home', href: '/home', icon: HomeIcon },
  {
    name: 'Expences',
    href: '/home/expences',
    icon: CurrencyYenIcon,
  },
  { name: 'Fare Types', href: '/home/faretypes', icon: Cog6ToothIcon },
];
export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            aria-label={`Goto ${link.name} page`}
            className={clsx(
              `flex h-8 grow items-center justify-center gap-2 rounded-md hover:bg-gray-100 md:flex-none md:justify-normal md:p-2`,
              { 'bg-green-50 text-green-600': pathname === link.href },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
