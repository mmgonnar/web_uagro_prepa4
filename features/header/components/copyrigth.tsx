'use client';

import Link from 'next/link';

export default function Copyright() {
  return (
    <>
      <div className="w-full border-t-1 border-white/60 text-center text-sm text-white">
        <p className="pt-6">
          {' \u00A9'} {new Date().getFullYear()} Preparatoria No. 4 "Pablo
          Neruda"
        </p>
        <p className="hidden">|</p>
        <p>Universidad Autónoma de Guerrero</p>
      </div>
      <p className="text-sm text-white/10">
        Created by
        <Link
          href="https://github.com/mmgonnar"
          target="_blank"
          className="transition-colors hover:text-gray-300"
        >
          <strong className="font-medium"> Mariela González</strong>
        </Link>
      </p>
    </>
  );
}
