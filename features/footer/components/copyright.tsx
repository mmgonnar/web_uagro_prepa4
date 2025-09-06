'use client';

import Link from 'next/link';

export default function Copyright() {
  return (
    <>
      <div className="max-w-8xl flex w-full flex-col items-center justify-between gap-3 border-t-1 border-white/60 pt-6 text-center text-sm text-white md:flex-row">
        <div>
          <div className="flex flex-col justify-center gap-1 md:flex-row">
            <p className="">
              {' \u00A9'} {new Date().getFullYear()} Preparatoria No. 4 "Pablo
              Neruda"
            </p>
            <p className="hidden md:block">-</p>
            <p>Universidad Autónoma de Guerrero</p>
          </div>
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
      </div>
    </>
  );
}
