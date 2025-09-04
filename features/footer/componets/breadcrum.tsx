'use client';

import { menuItems } from '@/utils/constants';
import Link from 'next/link';

export default function Breadcrumbs() {
  const headerMenu = menuItems.filter(item => item.isHeader);
  const footerMenu = menuItems.filter(item => item.isFooter);

  return (
    <div className="m-auto flex flex-col justify-center">
      {/* <div>
        {headerMenu.map(item => (
          <Link
            key={item.name}
            href={item.href}
            className="cursor-pointer text-white"
          >
            {item.name}
          </Link>
        ))}
      </div> */}
      <h4 className="hidden md:block">Otros</h4>
      <div className="m-auto flex justify-center md:flex-col">
        {footerMenu.map(item => (
          <Link
            key={item.name}
            href={item.href}
            className="w-auto cursor-pointer text-center text-sm text-white md:text-left"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
