'use client';

import {
  LogoUagro,
  CustomQuickLinks,
  Copyright,
  Contact,
  CustomBreadcrumb,
  SocialMedia,
} from '@/features/footer/components';

import {
  footerItems,
  headerItems,
  menuItems,
  socialMediaItems,
} from '@/utils/constants';

export default function Footer() {
  return (
    <footer className="bg-main-blue pt-2">
      <div className="max-w-8xl m-auto px-2 py-6 md:px-6">
        <div className="flex flex-col items-center justify-center gap-6 pb-4 md:flex-row md:items-start md:justify-between">
          <LogoUagro />
          <CustomBreadcrumb menuItems={menuItems} />
          <CustomQuickLinks
            title="Enlace Rápidos"
            links={headerItems}
            className="hidden md:block"
          />
          <CustomQuickLinks
            title="Otros Enlaces"
            links={footerItems}
            className="hidden md:block"
          />
          <div>
            <Contact />
            <SocialMedia socialLinks={socialMediaItems} />
          </div>
        </div>
        <Copyright />
      </div>
    </footer>
  );
}
