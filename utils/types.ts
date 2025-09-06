import type { UrlObject } from 'url';
type Url = string | UrlObject;
import { LucideIcon } from 'lucide-react';
import { bannerDataIcons } from './constants';

export interface MenuItem {
    name: string;
    href: string;
  }
  export interface IconItem {
  icon: keyof typeof bannerDataIcons; 
  data: string;
  text: string;
  }
