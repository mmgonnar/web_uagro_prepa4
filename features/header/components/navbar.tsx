'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/utils/functions';
import { headerItems } from '@/utils/constants';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <>
      <nav className="hidden space-x-6 md:flex">
        {headerItems.map(item => (
          <Link
            key={item.name}
            href={item.href}
            className="hover:text-main-red font-medium text-white transition-colors duration-200"
          >
            {item.name}
          </Link>
        ))}
      </nav>
      {/* Burger */}
      <Button
        variant="ghost"
        size="icon"
        className="text-white md:hidden"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
      <nav
        className={cn(
          'bg-main-blue absolute top-20 left-0 z-50 flex w-full transform flex-col items-center gap-2 py-2 shadow-md transition-all duration-150',
          !isMenuOpen && 'hidden',
          isMenuOpen && 'border-t-1 border-white'
        )}
      >
        {headerItems.map(item => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              'hover:text-main-red w-full p-2 text-center font-medium text-white transition-colors duration-200'
            )}
          >
            {isMenuOpen && item.name}
          </Link>
        ))}
      </nav>
    </>
  );
}
