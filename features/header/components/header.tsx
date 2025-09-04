'use client';

import Image from 'next/image';
import Logo from '../../../public/logo-05.webp';
import { useState } from 'react';
import { cn } from '@/utils/functions';
//import Logo from './logo';
import Navbar from './navbar';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={cn('bg-main-blue')}>
      <div className="max-w-8xl m-auto px-2 py-2 md:px-6">
        <div className={cn('flex h-16 items-center justify-between')}>
          <div className="flex items-center space-x-3">
            {/* <Logo /> */}
            <Image
              src={Logo}
              alt="Logotipo de UAGro"
              className="h-13 w-13 md:h-14 md:w-14"
            />
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

export default Header;
