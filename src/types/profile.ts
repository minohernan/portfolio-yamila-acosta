import type { ImageMetadata } from 'astro';

/** Imagen local (importada desde src/assets). `null` = todavía no disponible. */
export type Photo = {
  src: ImageMetadata | null;
  alt: string;
  /** Texto que identifica el placeholder durante el desarrollo. */
  placeholder?: string;
};

export type Highlight = { value: string; label: string };

export type Value = { title: string; text: string };

export type Specialty = { title: string; text: string };

/** Campos vacíos ('') no se muestran al visitante. */
export type ExperienceItem = {
  period: string;
  role: string;
  institution: string;
  place: string;
  description: string;
  current?: boolean;
};

export type EducationItem = {
  title: string;
  institution: string;
  year: string;
};

export type GalleryCategory = 'profesional' | 'deporte' | 'producciones' | 'eventos';

export type GalleryItem = Photo & { category: GalleryCategory };

export type Profile = {
  name: string;
  firstName: string;
  profession: string;
  location: string;
  yearsLabel: string;
  tagline: string;
  specialtiesShort: string[];
  seo: {
    title: string;
    description: string;
    /** Ruta dentro de public/ */
    ogImage: string;
    ogImageAlt: string;
  };
  hero: {
    /** Ruta dentro de public/ (ej. 'videos/hero.mp4'). '' = sin video. */
    video: string;
    /** Poster/fallback del video (src/assets). */
    poster: Photo;
  };
  about: {
    photo: Photo;
    intro: string;
    paragraphs: string[];
    service: string;
    highlights: Highlight[];
  };
  values: { intro: string; items: Value[] };
  specialties: Specialty[];
  experience: { summary: string; items: ExperienceItem[] };
  education: EducationItem[];
  sports: {
    intro: string;
    activities: string[];
    qualities: string[];
    closing: string;
    photos: Photo[];
  };
  communication: {
    intro: string;
    qualities: string[];
    closing: string;
    photos: Photo[];
  };
  personal: { quote: string; keywords: string[]; closing: string };
  gallery: GalleryItem[];
  contact: {
    whatsapp: string;
    whatsappDisplay: string;
    whatsappMessage: string;
    email: string;
    linkedin: string;
    instagram: string;
  };
};
