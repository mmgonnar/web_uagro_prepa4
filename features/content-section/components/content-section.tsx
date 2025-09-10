'use client';

import Label from '@/features/ui/components/label';
import { ContentSectionProps } from '../types/types';

export default function ContentSection({
  title,
  labelText,
  mainText,
  icon,
  children,
}: ContentSectionProps) {
  return (
    <section className="mb-8 md:mb-10">
      <div className="max-w-8xl flex flex-col items-center justify-center gap-4 text-center">
        <Label text={labelText} icon={icon}></Label>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="max-w-2xl">{mainText}</p>
        {children}
      </div>
    </section>
  );
}
