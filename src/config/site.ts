import { DOCS_PATH, HOPE_PATH } from '@/config/paths';

export const siteConfig = {
  title: 'oi.ico',
  description: '',
  navItems: [
    {
      href: HOPE_PATH,
      content: 'Home',
      target: undefined,
    },
    {
      href: DOCS_PATH,
      content: 'Documentation',
      target: undefined,
    },
  ],
};

export type SiteConfig = typeof siteConfig;