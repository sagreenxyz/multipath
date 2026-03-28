import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://sagreenxyz.github.io',
  base: '/multipath',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: 'static',
});
