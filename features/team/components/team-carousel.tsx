import * as React from 'react';

//import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Card from '@/features/ui/components/cards';
import { administrativeTeam } from '../utils/constants';
import { TeamMember } from '../utils/types';
import TeamMemberCard from './team-member';

export function TeamCarousel() {
  return (
    <Carousel
      opts={{
        align: 'start',
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
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {administrativeTeam.map((member: TeamMember) => (
          <CarouselItem
            key={member.id}
            className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <Card className="max-w-[280px]">
              <TeamMemberCard key={member.id} member={member} />
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
