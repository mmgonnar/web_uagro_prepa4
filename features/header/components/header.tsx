'use client';

import { Logo, Navbar } from '@/features/header/components';

export default function Header() {
  return (
    <header className="bg-main-blue">
      <div className="max-w-8xl m-auto px-2 py-2 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-3">
            <Logo />
            <div className="h-8 border-l-1 border-white md:h-12"></div>
            <div className="w-full text-white">
              <p className="text-sm font-bold md:text-lg">Preparatoria No. 4</p>
              <p className="md:text-md text-sm font-bold">'Pablo Neruda'</p>
            </div>
          </div>
          <Navbar />
        </div>
      </div>
    </header>
  );
}
