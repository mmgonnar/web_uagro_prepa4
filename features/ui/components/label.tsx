'use client';
import { cn } from '@/utils/functions';
import { ReactNode } from 'react';

interface LabelProps {
  children?: ReactNode;
  text: string;
  variant?: keyof typeof variants;
}

const variants = {
  default: ' text-neutral-600 bg-main-grey',
  secondary: ' text-main-red bg-main-red/20',
  announcement: 'bg-main-red text-white font-semibold',
};

export default function Label({
  text,
  children,
  variant = 'default',
}: LabelProps) {
  return (
    <div className="max-w-8xl">
      <div
        className={cn(
          'm-auto flex w-38 items-center justify-center gap-1 rounded-full px-1 py-1 text-xs',
          variants[variant],
          children != null && 'gap-1'
        )}
      >
        {children}
        <p>{text}</p>
      </div>
    </div>
  );
}
