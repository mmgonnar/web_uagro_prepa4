'use client';

import { Button } from '@/features/header/components';
import Card from '@/features/ui/components/cards';
import Label from '@/features/ui/components/label';
import { ChevronRight } from 'lucide-react';

export default function News() {
  return (
    <div className="p-1">
      <Card animation="scale" className="max-w-100 border-2 p-0">
        <div>
          <div className="relative flex flex-col justify-center gap-2">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-t-md"
                style={{
                  background:
                    'radial-gradient(ellipse at center, transparent 0%, transparent 20%, rgba(31, 59, 95, 0.8) 100%)',
                }}
              ></div>
              <img
                src="https://picsum.photos/310/300"
                alt="noticias"
                className="h-auto w-full rounded-t-md object-cover"
              />
            </div>

            <Label
              labelText="Logros Académicos"
              variant="announcement"
              className="absolute top-3 left-3 max-w-40"
            />
            <div className="px-4">
              <h4 className="font-base line-clamp-1 pb-1 text-left text-base font-bold text-ellipsis md:text-lg">
                Titulo del post aqui dsadasdas adsasdasdasdasdasdasasdasdasd
              </h4>
              <p className="line-clamp-3 w-full text-left text-base text-ellipsis text-neutral-500 md:line-clamp-4">
                Ya están abiertas las inscripciones para el nuevo ciclo escolar.
                Consulta los requisitos y fechas importantes. Ya están abiertas
                las inscripciones para el nuevo ciclo escolar. Ya están abiertas
                las inscripciones para el nuevo ciclo escolar. Consulta los
                requisitos y fechas importantes. Ya están abiertas las
                inscripciones para el nuevo ciclo escolar.
              </p>
              <Button variant="outline">
                Leer más <ChevronRight />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
