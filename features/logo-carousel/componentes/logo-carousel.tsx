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
import Image from 'next/image';
import Link from 'next/link';

export function LogoCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <div className="bg-main-blue flex w-full items-center justify-center py-4">
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full max-w-[calc(100vw_-_200px)]"
      >
        <CarouselContent className="flex flex-row items-center">
          {logos.map(logo => (
            <CarouselItem
              key={logo.id}
              className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <Link className="" target="_blank" href={logo.href}>
                <div className="flex items-center justify-center p-4">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={150}
                    height={150}
                  />
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden" />
        <CarouselNext className="hidden" />
      </Carousel>
    </div>
  );
}
