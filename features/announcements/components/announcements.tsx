'use client';

import { Button } from '@/features/header/components';
import Card from '@/features/ui/components/cards';
import Label from '@/features/ui/components/label';
import { ChevronRight } from 'lucide-react';

export default function Announcements() {
  const date = new Date();
  return (
    <div>
      <Card
        animation="scale"
        className="border-l-main-red max-w-78 border-2 border-l-3"
      >
        <div className="flex items-center gap-3">
          <Label labelText="Inscripciones" variant="announcement" />
          <p className="text-xs text-neutral-400">25 sept 2025</p>
        </div>
        <p className="w-10 text-left text-base text-neutral-600">
          Ya están abiertas las inscripciones para el nuevo ciclo escolar.
          Consulta los requisitos y fechas importantes.
        </p>
        <Button variant="outline">
          {' '}
          Leer más <ChevronRight />
        </Button>
      </Card>
    </div>
  );
}
