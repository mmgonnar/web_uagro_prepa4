'use client';

import { Button } from '@/features/header/components';
import SchoolStats from './school-stats';

export default function Banner() {
  return (
    <section className="bg-main-blue/85 relative flex h-dvh items-center justify-center bg-[url('/img/prepa_1.jpg')] bg-cover bg-center bg-no-repeat p-15 md:p-0">
      <div className="bg-main-blue/70 absolute inset-0" />
      <div className="max-w-8xl z-10 m-auto">
        <div className="flex flex-col items-center justify-center gap-10 text-white">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-4xl md:text-5xl">60 Aniversario</h1>
            <h2 className="text-xl md:text-3xl">
              Preparatoria No.4 "Pablo Neruda"
            </h2>
            <h3 className="text-lg md:text-xl">1965 - 2025</h3>
            <h3 className="text-lg md:text-xl">
              "Seis décadas formando líderes"
            </h3>
          </div>

          <Button size="lg" variant="default">
            Más información
          </Button>
          <div>
            <SchoolStats />
          </div>
        </div>
      </div>
    </section>
  );
}
