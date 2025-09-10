import { History, CircleAlert, Newspaper, UserStar } from 'lucide-react';
import { ReactNode } from 'react';

export const labelIcons = {
  History: History,
  CircleAlert: CircleAlert,
  Newspaper: Newspaper,
  UserStar: UserStar,
};

export interface ContentSectionProps {
  title: string;
  labelText: string;
  icon?: keyof typeof labelIcons;
  mainText: string;
  children?: ReactNode;
}
