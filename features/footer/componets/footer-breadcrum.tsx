'use client';
import Link from 'next/link';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { menuItems } from '@/utils/constants';

export function FooterBreadcrumb() {
  return (
    <>
      <Breadcrumb className="md:hidden">
        <BreadcrumbList>
          {menuItems.map((item, index) => (
            <div key={item.name} className="flex items-center justify-center">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={item.href}>{item.name}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index < menuItems.length - 1 && <BreadcrumbSeparator />}
            </div>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
}
