'use client';

import { administrativeTeam } from '../utils/constants';
import { TeamMember } from '../utils/types';
import TeamMemberCard from './team-member';

export default function TeamSection() {
  return (
    <section>
      <h2 className="text-center text-3xl font-bold">Nuestro Equipo</h2>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {administrativeTeam.map((member: TeamMember) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}
