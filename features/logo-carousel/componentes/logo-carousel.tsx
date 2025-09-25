'use client';

import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/features/ui/components/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { logos } from '../utils/constants';

export function LogoCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <div className="bg-main-blue w-full py-4">
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: 'start',
          loop: true,
        }}
        className="mx-auto w-full max-w-6xl"
      >
        <CarouselContent className="items-center">
          {logos.map(logo => (
            <CarouselItem key={logo.id} className="md:basis-1/3 lg:basis-1/4">
              <div className="flex items-center justify-center p-4">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 w-auto object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden" />
        <CarouselNext className="hidden" />
      </Carousel>
    </div>
  );
}
