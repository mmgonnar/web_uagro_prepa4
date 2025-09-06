'use client';

import Image from 'next/image';
import Logo from '../../../public/uagro-logo-2024.png';
import Link from 'next/link';

export default function LogoUagro() {
  return (
    <div>
      <Link
        href="https://www.uagro.mx/"
        className="cursor-pointer pb-4"
        target="_blank"
      >
        <Image src={Logo} alt="Logotipo de UAGro" className="w-45" />
      </Link>
    </div>
  );
}
