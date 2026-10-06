// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages (proyecto): https://minohernan.github.io/portfolio-yamila-acosta/
// Si en el futuro se usa un dominio propio: cambiar `site` y eliminar `base`.
export default defineConfig({
  site: 'https://minohernan.github.io',
  base: '/portfolio-yamila-acosta',
  trailingSlash: 'ignore',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
