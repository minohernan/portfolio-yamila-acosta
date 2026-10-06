// Genera la imagen Open Graph provisoria (tipográfica, sin fotos).
// Uso: node scripts/generate-og.mjs
// Cuando exista una foto profesional, reemplazar public/og/og-image.png (1200×630).
import sharp from 'sharp';

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#77d8d7"/>
      <stop offset="0.5" stop-color="#1fa0a5"/>
      <stop offset="1" stop-color="#176770"/>
    </linearGradient>
    <radialGradient id="sun" cx="0.85" cy="0.1" r="0.5">
      <stop offset="0" stop-color="#fff6e0" stop-opacity="0.9"/>
      <stop offset="1" stop-color="#fff6e0" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#sea)"/>
  <rect width="1200" height="630" fill="url(#sun)"/>
  <path d="M0 540c150-30 300-40 450-25s300 50 450 50 225-30 300-40v105H0z" fill="#f8f1e4"/>
  <text x="90" y="250" font-family="Georgia, 'Times New Roman', serif" font-size="78" font-weight="600" fill="#ffffff">Yamila Giselle Acosta</text>
  <text x="94" y="320" font-family="Segoe UI, Arial, sans-serif" font-size="30" font-weight="600" letter-spacing="14" fill="#f8f1e4">ABOGADA</text>
  <rect x="94" y="352" width="70" height="5" rx="2.5" fill="#f2876f"/>
  <text x="94" y="420" font-family="Segoe UI, Arial, sans-serif" font-size="30" fill="#ffffff">Derecho Penal · Derecho Médico · Derecho Civil</text>
  <text x="94" y="465" font-family="Segoe UI, Arial, sans-serif" font-size="24" fill="#d5f5f3">Posadas, Misiones, Argentina</text>
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile('public/og/og-image.png');
console.log('public/og/og-image.png generado');
