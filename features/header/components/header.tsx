'use client';

import Image from 'next/image';
import Logo from '../../../public/logo-05.webp';
import Link from 'next/link';
import { menuItems } from '@/utils/constants';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-main-blue">
      <div className="m-auto max-w-8xl px-6 py-2">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src={Logo} alt="Logotipo de UAGro" className="h-14 w-14" />
            <div className="text-white">
              <p className="text-lg font-bold">Preparatoria No. 4</p>
              <p className="text-md font-bold">'Pablo Neruda'</p>
            </div>
          </div>
          <nav className="hidden space-x-6 md:flex">
            {menuItems.map(item => (
              <Link
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
            className="md:hidden text-primary-foreground hover:bg-primary/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          
        </div>
      </div>
    </header>
  );
}

export default Header;
