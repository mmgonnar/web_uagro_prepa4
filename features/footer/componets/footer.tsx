'use client';

import Image from 'next/image';
import LogoUagro from '../../../public/uagro-logo-2024.png';
import Contact from '@/features/header/components/contact';
import { FooterBreadcrumb } from './footer-breadcrum';
import Copyright from '@/features/header/components/copyrigth';

export default function Footer() {
  return (
    <footer className="bg-main-blue pt-2">
      <div className="max-w-8xl m-auto px-2 py-6 md:px-6">
        <div className="flex flex-col items-center justify-center gap-6">
          <div>
            <Image
              src={LogoUagro}
              alt="Logotipo de UAGro"
              className="w-45 pb-4"
            />
          </div>
          <FooterBreadcrumb />
          <Contact />
          <Copyright />
        </div>
      </div>
    </footer>
  );
}
