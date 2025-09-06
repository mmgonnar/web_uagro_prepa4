import { Users, BookOpen, GraduationCap} from 'lucide-react';

const bannerDataIcons = {
    Users: Users,
    BookOpen: BookOpen,
    GraduationCap:GraduationCap
  }

export interface IconItem {
    icon: keyof typeof bannerDataIcons; 
    data: string;
    text: string;
    }