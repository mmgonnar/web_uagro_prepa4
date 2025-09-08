'use client';
import { ReactNode } from 'react';

interface LabelProps {
  children: ReactNode;
  text: string;
}

export default function Label({ text, children }: LabelProps) {
  return (
    <div className="max-w-8xl">
      <div className="bg-main-grey m-auto flex w-40 items-center justify-center gap-1 rounded-full px-2 py-1 text-xs text-neutral-600">
        {children}
        <p>{text}</p>
      </div>
    </div>
  );
}
