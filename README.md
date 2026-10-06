# portfolio-yamila-acosta

Portfolio profesional de Yamila Giselle Acosta, abogada (Posadas, Misiones).

Sitio estático hecho con **Astro** y **Tailwind CSS**, publicado en GitHub Pages:
https://minohernan.github.io/portfolio-yamila-acosta/

## Comandos

| Comando           | Acción                                                              |
| ----------------- | ------------------------------------------------------------------- |
| `npm install`     | Instala dependencias                                                |
| `npm run dev`     | Desarrollo en `http://localhost:4321/portfolio-yamila-acosta/`      |
| `npm run check`   | Verifica tipos (astro check)                                        |
| `npm run build`   | Build de producción en `dist/`                                      |
| `npm run preview` | Sirve el build bajo el base path de GitHub Pages                    |

## Editar contenido

Todo el contenido (textos, contacto, experiencia, formación, fotos) está en
**`src/data/profile.ts`**. Los campos vacíos no se muestran en el sitio.

- **Fotos**: copiar en `src/assets/images/<carpeta>/`, importarlas en `profile.ts`
  y reemplazar `src: null`. Astro las optimiza automáticamente.
- **Video de portada**: copiar en `public/videos/hero.mp4` y poner
  `hero.video: 'videos/hero.mp4'`. Recomendado: MP4 H.264, sin audio, < 4 MB.
  Agregar también `hero.poster` (primer fotograma).
- **Imagen para compartir (Open Graph)**: `public/og/og-image.jpg` (1200×630), generada desde la foto `00.jpeg`.
  Se regenera con `node scripts/generate-og.mjs`.

Los placeholders de fotos solo se ven con `npm run dev`; en producción se ocultan.

## Despliegue

`.github/workflows/deploy.yml` publica automáticamente en cada push a `main`.
Requisito (una sola vez): GitHub → Settings → Pages → Source: **GitHub Actions**.

Dominio propio a futuro: cambiar `site` y quitar `base` en `astro.config.mjs`.
