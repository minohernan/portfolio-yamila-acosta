/**
 * ÚNICA FUENTE DE CONTENIDO DEL SITIO
 * ------------------------------------------------------------------
 * Todos los textos, datos de contacto, fotos y experiencia se editan aquí.
 * Los componentes solo consumen estos datos.
 *
 * Reglas:
 * - No inventar información: todo lo que figura aquí fue provisto por Yamila.
 * - Campos de texto vacíos ('') NO se muestran en el sitio.
 * - Fotos con `src: null` se ven como placeholder rotulado SOLO en desarrollo
 *   (`npm run dev`); en producción se ocultan.
 *
 * Cómo agregar una foto:
 *   1. Copiarla en src/assets/images/<carpeta>/
 *   2. Importarla arriba:  import fotoPerfil from '../assets/images/profile/yamila.jpg';
 *   3. Reemplazar `src: null` por `src: fotoPerfil` y revisar el `alt`.
 */
import type { Profile } from '../types/profile';

// Fotos reales (src/assets/images/yamila/)
import fotoPerfil from '../assets/images/yamila/00.jpeg';
import fotoProduccion from '../assets/images/yamila/01.jpeg';
import fotoProfesional from '../assets/images/yamila/02.jpeg';
import fotoRunning from '../assets/images/yamila/running00.jpeg';
import fotoRunning2 from '../assets/images/yamila/running02.jpeg';
import fotoEquitacion from '../assets/images/yamila/equitacion00.jpeg';
import fotoWindsurf from '../assets/images/yamila/windsurf00.jpeg';
import fotoNatacion from '../assets/images/yamila/windsurf01.jpeg';
import fotoWindsurf2 from '../assets/images/yamila/windsurf02.jpeg';
// TODO: poster del video → import heroPoster from '../assets/images/hero/poster.jpg';

export const profile: Profile = {
  name: 'Yamila Giselle Acosta',
  firstName: 'Yamila',
  profession: 'Abogada',
  location: 'Posadas, Misiones, Argentina',
  yearsLabel: 'Más de 10 años de trayectoria profesional',
  tagline: 'Preparación, compromiso y cercanía para acompañar cada caso.',
  specialtiesShort: ['Derecho Penal', 'Derecho Médico', 'Derecho Civil'],

  seo: {
    title: 'Yamila Giselle Acosta | Abogada',
    description:
      'Portfolio profesional de Yamila Giselle Acosta, abogada de Posadas, Misiones, con trayectoria en Derecho Penal, Derecho Médico y Derecho Civil.',
    // Generada con scripts/generate-og.mjs a partir de 00.jpeg (1200×630).
    ogImage: 'og/og-image.jpg',
    ogImageAlt: 'Yamila Giselle Acosta, Abogada',
  },

  hero: {
    // TODO: copiar el video en public/videos/hero.mp4 y poner aquí 'videos/hero.mp4'.
    video: '',
    // TODO: poster = primer fotograma del video o foto de la misma escena.
    poster: { src: null, alt: '', placeholder: 'Poster del video de portada' },
  },

  about: {
    photo: {
      src: fotoPerfil,
      alt: 'Retrato profesional de Yamila Giselle Acosta, sonriendo, con blazer blanco',
      position: '50% 20%',
    },
    intro:
      'Soy Yamila Giselle Acosta, de Posadas, Misiones, abogada con más de diez años de trayectoria profesional, máster en Derecho Penal y especialista en Derecho Penal y Derecho Médico.',
    paragraphs: [
      'Cuento también con experiencia en Derecho Civil y brindo asesoramiento y representación jurídica en distintas áreas del derecho, con una atención personalizada y adaptada a cada caso.',
      'Entiendo el ejercicio del derecho como una responsabilidad que exige preparación continua, ética y rigor profesional.',
    ],
    service:
      'Actualmente formo parte de la Policía de Misiones, una experiencia que fortalece mi sentido de la responsabilidad, mi vocación de servicio y mi capacidad para actuar en situaciones que requieren criterio y sensibilidad.',
    highlights: [
      { value: '+10 años', label: 'Trayectoria profesional' },
      { value: 'Máster', label: 'Derecho Penal' },
      { value: 'Especialista', label: 'Derecho Penal y Derecho Médico' },
      { value: 'Experiencia', label: 'Derecho Civil' },
    ],
  },

  values: {
    intro:
      'Mi manera de trabajar se basa en la escucha, la confidencialidad y el estudio cuidadoso de cada caso.',
    items: [
      {
        title: 'Ética',
        text: 'Entiendo el ejercicio del derecho como una responsabilidad que exige ética y rigor profesional.',
      },
      {
        title: 'Confidencialidad',
        text: 'La confidencialidad es una de las bases de mi forma de trabajar.',
      },
      {
        title: 'Escucha',
        text: 'Mi manera de trabajar se basa en la escucha de cada persona.',
      },
      {
        title: 'Preparación continua',
        text: 'Una preparación continua y el estudio cuidadoso de cada caso.',
      },
      {
        title: 'Comunicación clara',
        text: 'Para que cada persona comprenda su situación, conozca las alternativas y sus posibles consecuencias.',
      },
      {
        title: 'Acompañamiento',
        text: 'Un acompañamiento cercano para tomar decisiones informadas.',
      },
    ],
  },

  specialties: [
    { title: 'Derecho Penal', text: 'Máster y especialista en Derecho Penal.' },
    { title: 'Derecho Médico', text: 'Especialista en Derecho Médico.' },
    { title: 'Derecho Civil', text: 'Experiencia en Derecho Civil.' },
    {
      title: 'Asesoramiento jurídico',
      text: 'Asesoramiento y representación jurídica con atención personalizada y adaptada a cada caso.',
    },
  ],

  experience: {
    summary: 'Más de diez años de trayectoria profesional en el ejercicio del derecho.',
    photo: {
      src: fotoProfesional,
      alt: 'Yamila Giselle Acosta con traje oscuro, sentada frente a un escritorio con documentos',
      position: '50% 30%',
    },
    // Agregar experiencias anteriores con el mismo formato.
    // TODO: pedir a Yamila período, cargo, institución y lugar de cada experiencia.
    items: [
      {
        period: 'Actualidad',
        role: '', // TODO: cargo (si desea publicarlo)
        institution: 'Policía de Misiones',
        place: 'Misiones',
        description:
          'Actualmente formo parte de la Policía de Misiones, una experiencia que fortalece mi sentido de la responsabilidad, mi vocación de servicio y mi capacidad para actuar en situaciones que requieren criterio y sensibilidad.',
        current: true,
      },
    ],
  },

  // TODO: completar institución y año de cada título.
  education: [
    { title: 'Máster en Derecho Penal', institution: '', year: '' },
    { title: 'Especialista en Derecho Penal', institution: '', year: '' },
    { title: 'Especialista en Derecho Médico', institution: '', year: '' },
  ],

  sports: {
    intro: 'El deporte es una parte esencial de mi identidad.',
    activities: [
      'Atletismo',
      'Running',
      'Natación',
      'Equitación',
      'Deportes extremos',
      'Deportes náuticos',
      'Fútbol',
    ],
    qualities: ['Disciplina', 'Perseverancia', 'Adaptación', 'Trabajo en equipo'],
    closing:
      'Soy atleta, corredora y nadadora; practico equitación y disfruto de los deportes extremos y náuticos. Además, soy una apasionada del fútbol y del trabajo en equipo. Estas actividades me enseñan a sostener el esfuerzo, adaptarme y afrontar cada desafío con disciplina y perseverancia.',
    photos: [
      { src: fotoRunning, alt: 'Yamila corriendo una carrera de trail entre la vegetación', position: '50% 35%' },
      { src: fotoEquitacion, alt: 'Yamila montando a caballo en un picadero', position: '50% 45%' },
      { src: fotoWindsurf, alt: 'Yamila con traje de neopreno en la playa, junto a equipos de deportes náuticos', position: '50% 75%' },
    ],
  },

  communication: {
    intro: 'También participo en producciones fotográficas y desfiles para marcas.',
    qualities: ['Creatividad', 'Seguridad', 'Comunicación', 'Conexión con distintos públicos'],
    closing:
      'Esta faceta me permite expresar mi creatividad, fortalecer mi seguridad y desarrollar mi capacidad para comunicar y conectar con distintos públicos. Es una experiencia que complementa mi perfil profesional y aporta naturalidad a mi trato con las personas.',
    photos: [
      {
        src: fotoProduccion,
        alt: 'Perfil de Yamila con blazer claro y accesorios dorados en una producción fotográfica',
        position: '50% 40%',
      },
    ],
  },

  personal: {
    quote:
      'Me considero una persona activa y curiosa, con interés por aprender y emprender nuevos proyectos.',
    keywords: ['Derecho', 'Servicio', 'Deporte', 'Comunicación'],
    closing:
      'Forman parte de mi vida y expresan mi manera de involucrarme en lo que hago: con dedicación, cercanía y voluntad de superación.',
  },

  // Galería: agregar fotos reales con su categoría.
  gallery: [
    {
      category: 'deporte',
      src: fotoNatacion,
      alt: 'Yamila con gorra de natación, preparándose para nadar en aguas abiertas',
      position: '50% 40%',
    },
    { category: 'deporte', src: fotoRunning2, alt: 'Yamila durante una carrera de trail en el monte', position: '50% 25%' },
    { category: 'deporte', src: fotoWindsurf2, alt: 'Yamila practicando windsurf en el agua', position: '50% 60%' },
  ],

  contact: {
    whatsapp: '5493764290349',
    whatsappDisplay: '+54 9 376 429-0349',
    whatsappMessage: 'Hola Yamila, vi tu portfolio y quisiera realizar una consulta.',
    email: '', // TODO
    linkedin: '', // TODO: URL completa https://www.linkedin.com/in/...
    instagram: '', // TODO: URL completa https://www.instagram.com/...
  },
};
