import { labelIcons } from '@/features/ui/types/types';
import { ReactNode } from 'react';
import { backgrounds } from '../utils/constants';
import type { UrlObject } from 'url';
import { variants } from '@/features/ui/utils/constants';

export interface ContentSectionProps {
  title: string;
  labelText: string;
  icon?: keyof typeof labelIcons;
  mainText: string;
  children?: ReactNode;
  background: keyof typeof backgrounds;
  buttonText?: string;
  href?: string | UrlObject;
  labelVariant?: keyof typeof variants;
}
