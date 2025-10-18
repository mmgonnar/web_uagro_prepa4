'use client';

import { Button } from '@/features/header/components';
import Card from '@/features/ui/components/cards';
import Label from '@/features/ui/components/label';
import { CalendarDays, ChevronRight } from 'lucide-react';

export default function Announcements() {
  return (
    <div>
      <Card
        animation="scale"
        className="border-l-main-red w-full max-w-none border-2 border-l-4"
      >
        <div className="flex items-center gap-3">
          <Label labelText="Inscripciones" variant="announcement" />
          <p className="flex items-center gap-2 text-xs text-neutral-400">
            <CalendarDays className="h-4 w-4" /> 1 de sep del 2025
          </p>
        </div>
        <p className="text-left text-base text-neutral-600">
          Ya están abiertas las inscripciones para el nuevo ciclo escolar.
          Consulta los requisitos y fechas importantes.
        </p>
        <div className="mt-2">
          <Button variant="outline" className="w-full justify-between">
            Leer más <ChevronRight />
          </Button>
        </div>
      </Card>
    </div>
  );
}
