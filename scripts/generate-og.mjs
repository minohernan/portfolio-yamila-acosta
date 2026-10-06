// Genera la imagen Open Graph (1200×630) a partir de la foto profesional.
// Uso: node scripts/generate-og.mjs
import sharp from 'sharp';

const PHOTO = 'src/assets/images/yamila/00.jpeg';
const W = 1200;
const H = 630;
const PHOTO_W = 480;

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#77d8d7"/>
      <stop offset="0.5" stop-color="#1fa0a5"/>
      <stop offset="1" stop-color="#176770"/>
    </linearGradient>
    <radialGradient id="sun" cx="0.15" cy="0.05" r="0.5">
      <stop offset="0" stop-color="#fff6e0" stop-opacity="0.7"/>
      <stop offset="1" stop-color="#fff6e0" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#sea)"/>
  <rect width="${W}" height="${H}" fill="url(#sun)"/>
  <path d="M0 560c120-24 240-32 360-20s200 40 360 40v50H0z" fill="#f8f1e4"/>
  <text x="70" y="200" font-family="Georgia, 'Times New Roman', serif" font-size="72" font-weight="600" fill="#ffffff">Yamila Giselle</text>
  <text x="70" y="282" font-family="Georgia, 'Times New Roman', serif" font-size="72" font-weight="600" fill="#ffffff">Acosta</text>
  <text x="74" y="342" font-family="Segoe UI, Arial, sans-serif" font-size="28" font-weight="600" letter-spacing="12" fill="#f8f1e4">ABOGADA</text>
  <rect x="74" y="370" width="64" height="5" rx="2.5" fill="#f2876f"/>
  <text x="74" y="430" font-family="Segoe UI, Arial, sans-serif" font-size="26" fill="#ffffff">Derecho Penal · Derecho Médico · Derecho Civil</text>
  <text x="74" y="472" font-family="Segoe UI, Arial, sans-serif" font-size="22" fill="#d5f5f3">Posadas, Misiones, Argentina</text>
</svg>`;

const photo = await sharp(PHOTO)
  .rotate()
  .resize({ width: PHOTO_W, height: H, fit: 'cover', position: 'top' })
  .toBuffer();

// Borde suave entre el fondo y la foto
const fade = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${PHOTO_W}" height="${H}">
    <defs><linearGradient id="f" x1="0" x2="1"><stop offset="0" stop-color="#1fa0a5" stop-opacity="0.55"/><stop offset="0.12" stop-color="#1fa0a5" stop-opacity="0"/></linearGradient></defs>
    <rect width="${PHOTO_W}" height="${H}" fill="url(#f)"/>
  </svg>`,
);

await sharp(Buffer.from(svg))
  .composite([
    { input: photo, left: W - PHOTO_W, top: 0 },
    { input: fade, left: W - PHOTO_W, top: 0 },
  ])
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile('public/og/og-image.jpg');

console.log('public/og/og-image.jpg generado');
