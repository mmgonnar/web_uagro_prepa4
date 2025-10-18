'use client';
import React from 'react';

import { Calendar } from '@/features/ui/components/calendar';
import Announcements from './announcements';
import { Database } from 'lucide-react';
import Card from '@/features/ui/components/cards';

export default function AnnouncementsSection() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="grid w-full max-w-4xl gap-8 md:grid-cols-[1fr_auto]">
      <Card className="hover:none border-2 shadow-none" animation="none">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          classNames={{
            today: `outline-2 outline-[#1E3A8A] rounded-full font-medium text-[#1E3A8A] -outline-offset-6 ${date ? 'outline-none' : 'outline-2 '}`,
            chevron: ` fill-[#1E3A8A]`,
            selected: `bg-[#1E3A8A] text-white rounded-full`,
          }}
        />
      </Card>

      <div className="max-w-1xl flex flex-col gap-6">
        <Announcements />
        <Announcements />
      </div>
    </div>
  );
}
