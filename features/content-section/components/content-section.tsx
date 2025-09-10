'use client';

import { Button } from '@/features/header/components';
import Label from '@/features/ui/components/label';
import { cn } from '@/utils/functions';
import Link from 'next/link';
import { ContentSectionProps } from '../types/types';
import { backgrounds } from '../utils/constants';

export default function ContentSection({
  title,
  labelText,
  mainText,
  icon,
  children,
  background,
  buttonText,
  href,
  labelVariant,
}: ContentSectionProps) {
  return (
    <section
      className={cn('mb-8 px-6 py-10 md:mb-10', backgrounds[background])}
    >
      <div className="m-auto flex max-w-7xl flex-col items-center justify-center gap-4 text-center">
        <Label labelText={labelText} icon={icon} variant={labelVariant}></Label>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="max-w-2xl">{mainText}</p>
        {children}
        {/* agregar condicional aqui */}
        {href ? (
          <Link href={href}>
            <Button>{buttonText}</Button>
          </Link>
        ) : (
          ''
        )}
      </div>
    </section>
  );
}
