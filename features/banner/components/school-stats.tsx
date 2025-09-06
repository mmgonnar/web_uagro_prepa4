'use client';

import { schoolData } from '@/utils/constants';
import { bannerDataIcons } from '../types/types';

export default function SchoolStats() {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-14">
      {schoolData.map((item, index) => {
        const IconComponent =
          bannerDataIcons[item.icon as keyof typeof bannerDataIcons];

        return (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-1"
          >
            <div className="bg-main-red/90 flex h-10 w-10 items-center justify-center rounded-full text-white">
              {IconComponent && <IconComponent size={18} />}
            </div>
            <p className="text-lg font-bold">{item.data}</p>
            <p className="text-main-grey text-sm">{item.text}</p>
          </div>
        );
      })}
    </div>
  );
}
