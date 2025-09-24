import Card from '@/features/ui/components/cards';
import { TeamMember } from '../utils/types';
import Label from '@/features/ui/components/label';

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="">
      <img
        className="w-full rounded-t-md object-cover"
        src={member.imageUrl}
        alt={`Director ${member.name}`}
      />
      <div className="flex w-full flex-col items-center gap-2 sm:py-3 md:p-4">
        <h3 className="mt-2 text-base font-semibold md:text-xl">
          {member.name}
        </h3>
        <Label variant="announcement" labelText={member.position}></Label>
      </div>
    </div>
  );
}
