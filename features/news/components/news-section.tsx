'use client';

import News from './news';

export default function NewsSection() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-8">
      <News />
      <News />
      <News />
    </div>
  );
}
