'use client';

import Card from '@/features/ui/components/cards';
import Label from '@/features/ui/components/label';
import { ChevronRight } from 'lucide-react';

export default function News() {
  return (
    <div>
      <Card className="border-2 p-0">
        <div>
          <div className="relative flex flex-col justify-center">
            <img
              src="https://picsum.photos/id/237/280/200"
              alt="noticias"
              className="rounded-t-md"
            />

            <Label
              labelText="Logros Académicos"
              variant="announcement"
              className="absolute top-3 left-3 max-w-40"
            />
            <p className="text-secondary-grey max-w-[280px] text-sm">
              Ya están abiertas las inscripciones para el nuevo ciclo escolar.
              Consulta los requisitos y fechas importantes.Ya están abiertas las
              inscripciones para el nuevo ciclo escolar.
            </p>
            <button className="flex rounded-md border-1 text-center">
              Leer más
              <ChevronRight />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
