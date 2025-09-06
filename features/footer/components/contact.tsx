'use-client';

import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <div className="text-left text-white">
        <h4 className="hidden pb-3 text-white md:block">Contacto</h4>
        <div className="flex flex-col items-center gap-3 text-sm md:items-start">
          <div className="flex flex-col items-center justify-center gap-2 text-center text-sm font-light md:flex-row md:items-start md:text-left md:text-base">
            <MapPin size={18} />

            <p>
              De Los Plateros 304A, Barrio de Mora, <br /> Taxco de Alarcón,
              Guerrero.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 text-center text-sm font-light md:flex-row md:items-start md:text-left md:text-base">
            <Phone size={20} />
            <p className="">762 111 9760</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 text-center text-sm font-light md:flex-row md:items-start md:text-left md:text-base">
            <Mail size={20} />
            <p className="">contacto@prepa4.uagro.mx</p>
          </div>
        </div>
      </div>
    </>
  );
}
