import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://carrinho.escolhacertabrasil.com.br',
  integrations: [tailwind()],
  output: 'static'
});