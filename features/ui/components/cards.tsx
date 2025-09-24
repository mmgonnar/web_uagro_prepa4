'use client';

import { cn } from '@/utils/functions';
import Label from './label';
import { ReactNode } from 'react';
import { administrativeTeam } from '@/features/team/utils/constants';

interface CardProps {
  className?: string;
  children: ReactNode;
}

export default function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        'border-main-grey m-auto max-w-2xl cursor-pointer rounded-md border bg-white p-4 transition-all hover:shadow-md',
        className
      )}
    >
      {children}
    </div>
  );
}

// function Cards({ className, children }: CardsProps) {
//   return (
//     <div
//       className={cn(
//         'border-main-grey padding-4 m-auto flex max-w-2xl cursor-pointer rounded-md border-1 bg-white transition-all hover:shadow-md',
//         className
//       )}
//     >
//       {children}
//     </div>
//   );
// }

export function TeamCards() {
  return (
    <>
      {administrativeTeam.map((item, index) => (
        <Card key={index} className="h-95 pb-8">
          <div className="flex flex-col items-center justify-between pb-8">
            <img
              className="w-70 rounded-t-md"
              src="https://randomuser.me/api/portraits/men/76.jpg"
              alt="Director Dr. Arturo Jaimes Vega"
            />
            <div className="m-auto flex w-70 flex-col items-center justify-center gap-2">
              <h3 className="w-full">{item.name}</h3>
              <Label variant="announcement" labelText={item.position} />
            </div>
          </div>
        </Card>
      ))}
    </>
  );
}
