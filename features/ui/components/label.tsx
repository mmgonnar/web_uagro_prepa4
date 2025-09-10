'use client';

import { cn } from '@/utils/functions';
import { labelIcons, LabelProps } from '../types/types';
import { variants } from '../utils/constants';

export default function Label({
  labelText,
  variant = 'default',
  icon,
}: LabelProps) {
  const IconComponent = labelIcons[icon as keyof typeof labelIcons];

  return (
    <div className="max-w-8xl">
      <div
        className={cn(
          'm-auto flex items-center justify-center gap-1 rounded-full px-5 py-1 text-xs',
          variants[variant],
          IconComponent != null && 'gap-2'
        )}
      >
        {IconComponent && <IconComponent size={18}></IconComponent>}
        <p>{labelText}</p>
      </div>
    </div>
  );
}
