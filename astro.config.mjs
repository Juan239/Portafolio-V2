import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  server:{
    allowedHosts: ['https://592ed08a78d9.ngrok-free.app']
  },
  integrations: [tailwind()],
});
