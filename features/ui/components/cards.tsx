'use client';

import { cn } from '@/utils/functions';
import Label from './label';
import { ReactNode } from 'react';
import { administrativeTeam } from '@/features/team/utils/constants';
import Image from 'next/image';

const animations = {
  scale: 'transition-all duration-300  hover:scale-[1.02] sm:hover:scale-[1]',
  none: '',
};
interface CardProps {
  className?: string;
  children: ReactNode;
  animation?: keyof typeof animations;
}

export default function Card({
  className,
  children,
  animation = 'none',
}: CardProps) {
  return (
    <div
      className={cn(
        `border-main-grey m-auto max-w-2xl cursor-pointer rounded-md border bg-white p-4 transition-all hover:shadow-md ${animations[animation]}`,
        className
      )}
    >
      {children}
    </div>
  );
}

export function TeamCards() {
  return (
    <>
      {administrativeTeam.map(item => (
        <Card
          key={item.id}
          className="pb-8m-auto m-auto flex h-95 flex-col items-center justify-between pb-8"
        >
          <Image
            src={item.src}
            alt={`Foto de ${item.name}`}
            width={100}
            height={100}
            className="w-70 rounded-t-md object-cover"
          />
          <div className="m-auto flex w-70 flex-col items-center justify-center gap-2">
            <h3 className="w-full">{item.name}</h3>
            <Label variant="announcement" labelText={item.position} />
          </div>
        </Card>
      ))}
    </>
  );
}
