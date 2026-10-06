/** Antepone el `base` de Astro a una ruta de public/ (necesario en GitHub Pages). */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

/** Placeholders visibles solo en desarrollo; en producción se ocultan. */
export const showPlaceholders = import.meta.env.DEV;

/** Indica si una foto debe renderizarse (real, o placeholder en desarrollo). */
export function isPhotoVisible(photo: { src: unknown }): boolean {
  return Boolean(photo.src) || showPlaceholders;
}
