
import { History, CircleAlert, Newspaper, UserStar } from 'lucide-react';
import { variants } from '../utils/constants';
import { ReactNode } from 'react';
export const labelIcons = {
    History: History,
    CircleAlert: CircleAlert,
    Newspaper: Newspaper,
    UserStar: UserStar,
  };

  export interface LabelProps {
    children?: ReactNode;
    labelText: string
    variant?: keyof typeof variants;
    icon?: keyof typeof labelIcons;
  }