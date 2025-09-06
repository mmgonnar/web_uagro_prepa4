'use client';

import { bannerDataIcons, schoolData } from '@/utils/constants';

export default function SchoolStats() {
  return (
    <div className="flex flex-col gap-14 md:flex-row">
      {schoolData.map((item, index) => {
        const IconComponent = bannerDataIcons[item.icon];

        return (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <div className="bg-main-red/90 flex h-8 w-8 items-center justify-center rounded-full text-white">
              {IconComponent && <IconComponent size={16} />}
            </div>
            <p className="text-lg font-bold">{item.data}</p>
            <p className="text-sm text-gray-600">{item.text}</p>
          </div>
        );
      })}
    </div>
  );
}
