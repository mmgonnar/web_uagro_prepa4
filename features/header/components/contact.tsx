'use-client';

import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3 text-sm text-white">
        <h4 className="hidden pb-2 text-white md:block">Contacto</h4>
        <div className="flex flex-col items-center justify-center gap-2 text-center text-sm">
          <MapPin className="text-sm" />
          <p>
            De Los Plateros 304A, Barrio de Mora, <br /> Taxco de Alarcón Gro.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-center text-sm">
          <Phone className="text-sm" />
          <p className="">762 111 9760</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-center text-sm">
          <Mail />
          <p className="">762 111 9760</p>
        </div>
      </div>
    </>
  );
}
