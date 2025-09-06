'use client';
import Image from 'next/image';
import Link from 'next/link';
import { SocialMediaItem } from '../types';

interface SocialMediaProps {
  title?: string;
  socialLinks: SocialMediaItem[];
  className?: string;
  imageSize?: number;
}

export default function SocialMedia({
  socialLinks,
  imageSize = 16,
}: SocialMediaProps) {
  return (
    <div className="flex justify-center space-x-3 pt-8 md:justify-end">
      {socialLinks.map(item => (
        <div
          key={item.alt}
          className="bg-main-red/50 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full"
        >
          <Link
            href={item.href}
            className="cursor-pointer text-white"
            target="_blank"
          >
            <Image
              src={item.src}
              alt={item.alt}
              className="text-white brightness-0 invert filter"
              width={imageSize}
              height={imageSize}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
