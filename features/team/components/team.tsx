'use client';

import { TeamCards } from '@/features/ui/components/cards';

export default function Team() {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <TeamCards />
    </div>
  );
}
