'use client';

import Breadcrumbs from './breadcrum';
import Image from 'next/image';
import LogoUagro from '../../../public/uagro-logo-2024.png';
import Contact from '@/features/header/components/contact';

export default function Footer() {
  return (
    <footer className="bg-main-blue h-100 pt-8">
      <div className="max-w-8xl m-auto px-2 py-6 md:px-6">
        <div className="flex h-16 flex-col items-center justify-center">
          <div>
            <Image
              src={LogoUagro}
              alt="Logotipo de UAGro"
              className="w-45 pb-4"
            />
          </div>
          <Breadcrumbs />
          <Contact />
        </div>
      </div>
    </footer>
  );
}
