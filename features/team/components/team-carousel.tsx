'use client';
import * as React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/features/ui/components/carousel';
import Card from '@/features/ui/components/cards';
import { administrativeTeam } from '../utils/constants';
import { TeamMember } from '../utils/types';
import TeamMemberCard from './team-member';

import Autoplay from 'embla-carousel-autoplay';

export function TeamCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full max-w-[calc(100vw_-_150px)]"
    >
      <CarouselContent>
        {administrativeTeam.map((member: TeamMember) => (
          <CarouselItem
            key={member.id}
            className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <Card>
              <TeamMemberCard key={member.id} member={member} />
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden" />
      <CarouselNext className="hidden" />
    </Carousel>
  );
}
