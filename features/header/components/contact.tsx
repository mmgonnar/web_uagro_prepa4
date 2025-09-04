'use-client';

import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <div className="text-white">
        <h4>Contacto</h4>
        <div className="flex gap-2 text-sm">
          <MapPin className="text-sm" />
          <p className="">
            De Los Plateros 304A, Barrio de Mora, Taxco de Alarcón, Gro.
          </p>
        </div>
        <div className="flex gap-2 text-sm">
          <Phone className="text-sm" />
          <p className="">762 111 9760</p>
        </div>
        <div className="flex gap-2 text-sm">
          <Mail />
          <p className="">762 111 9760</p>
        </div>
      </div>
    </>
  );
}
