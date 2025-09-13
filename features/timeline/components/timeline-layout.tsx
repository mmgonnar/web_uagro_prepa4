import {
  Timeline,
  TimelineItem,
  TimelineTitle,
  TimelineDescription,
  TimelineTime,
  TimelineHeader,
} from '../components/timeline';
import { TimelineItemType } from '../types/types';

interface TimeLineProps {
  items: TimelineItemType[];
}

export const TimelineLayout = ({ items }: TimeLineProps) => {
  return (
    <Timeline className="mt-8">
      {items.map(item => (
        <TimelineItem key={item.id}>
          <TimelineHeader>
            <TimelineTime className="bg-blue text-left text-neutral-600">
              {item.time}
            </TimelineTime>
            <TimelineTitle>{item.title}</TimelineTitle>
          </TimelineHeader>
          {item.description && (
            <TimelineDescription>{item.description}</TimelineDescription>
          )}
        </TimelineItem>
      ))}
    </Timeline>
  );
};
