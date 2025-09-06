'use client';

import { cn } from '@/utils/functions';
import { MenuItem } from '@/utils/types';
import Link from 'next/link';

interface QuickLinksProps {
  title: string;
  links: MenuItem[];
  className?: string;
}

export default function CustomQuickLinks({
  title,
  links,
  className = '',
}: QuickLinksProps) {
  return (
    <div className={cn('text-white', className)}>
      <h4 className="pb-2">{title}</h4>
      <ul>
        {links.map(item => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="hover:text-main-red cursor-pointer pb-4 text-sm font-light transition-colors duration-200 md:text-base"
              target="_blank"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
