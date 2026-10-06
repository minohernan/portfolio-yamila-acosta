// Interacciones mínimas del sitio: header, menú móvil, botón flotante,
// apariciones al hacer scroll, video de portada y filtro de galería.

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

/* ---------- Header y menú móvil ---------- */
const header = document.getElementById('site-header');
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('mobile-menu');
const floatBtn = document.getElementById('whatsapp-float');
let menuOpen = false;

function updateHeader() {
  const scrolled = window.scrollY > 40;
  header?.toggleAttribute('data-solid', scrolled || menuOpen);

  if (floatBtn) {
    const hide = window.scrollY < window.innerHeight * 0.6;
    floatBtn.toggleAttribute('data-hidden', hide);
    floatBtn.setAttribute('aria-hidden', String(hide));
    floatBtn.tabIndex = hide ? -1 : 0;
  }
}

function setMenu(open: boolean, restoreFocus = false) {
  if (!toggle || !menu) return;
  menuOpen = open;
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  toggle.querySelector('.menu-open')?.classList.toggle('hidden', open);
  toggle.querySelector('.menu-close')?.classList.toggle('hidden', !open);
  menu.classList.toggle('hidden', !open);
  updateHeader();
  if (open) menu.querySelector<HTMLElement>('a')?.focus();
  else if (restoreFocus) toggle.focus();
}

toggle?.addEventListener('click', () => setMenu(!menuOpen));
menu?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menuOpen) setMenu(false, true);
});
window.matchMedia('(min-width: 1024px)').addEventListener('change', (e) => {
  if (e.matches) setMenu(false);
});
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

/* ---------- Aparición suave al hacer scroll ---------- */
const revealEls = document.querySelectorAll<HTMLElement>('.reveal');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

/* ---------- Video de portada ---------- */
const video = document.getElementById('hero-video') as HTMLVideoElement | null;
if (video) {
  const syncVideo = () => {
    if (reducedMotion.matches) {
      video.pause();
    } else {
      // Si el navegador bloquea la reproducción, queda visible el poster.
      video.play().catch(() => {});
    }
  };
  reducedMotion.addEventListener('change', syncVideo);
  syncVideo();
}

/* ---------- Filtro de galería ---------- */
const filters = document.querySelectorAll<HTMLButtonElement>('.gallery-filter');
const galleryItems = document.querySelectorAll<HTMLElement>('#gallery-grid [data-category]');
filters.forEach((btn) =>
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    filters.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
    galleryItems.forEach((item) => {
      item.hidden = filter !== 'all' && item.dataset.category !== filter;
    });
  }),
);
