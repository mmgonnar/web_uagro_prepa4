'use client';
import Image from 'next/image';
import Logotipo from '../../../public/logo-05.webp';

function Logo() {
  return (
    <>
      <Image
        src={Logotipo}
        alt="Logotipo de UAGro"
        className="h-13 w-13 md:h-14 md:w-14"
      />
    </>
  );
}

export default Logo;
