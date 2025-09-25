import { StaticImageData } from "next/image";

export interface TeamMember {
    id: string | number;
    name: string;
    position: string;
    src: StaticImageData | string;
  }