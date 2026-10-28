export type ProjectCategory =
  | 'Diseño arquitectónico'
  | 'Diseño de interiores'
  | 'Remodelación de espacios'
  | 'Construcción y adecuaciones';

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  tagline: string;
  area: string;
  highlights: string[];
  description: string;
  image: string;
  images: string[];
  aspect: string;
}

export const PROJECT_CATEGORIES = [
  'Todos',
  'Diseño arquitectónico',
  'Diseño de interiores',
  'Remodelación de espacios',
  'Construcción y adecuaciones'
] as const;

export const PROJECTS_DATA: ProjectItem[] = [
  // -------------------------------------------------------------
  // 1. DISEÑO ARQUITECTÓNICO (2 proyectos: Exterior e Interior concordantes)
  // -------------------------------------------------------------
  {
    id: 'residencia-bosque-alto',
    title: 'Residencia Bosque Alto',
    category: 'Diseño arquitectónico',
    tagline: 'Volumetría sobria, hormigón visto y ventanales de piso a techo',
    area: '380 m²',
    highlights: ['Orientación solar bioclimática', 'Fachada en concreto y madera teca', 'Pórtico volado en voladizo'],
    description: 'Propuesta residencial de líneas depuradas concebida para integrarse con la vegetación perimetral.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80', // Exterior: Fachada y voladizos en concreto visto
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=80'  // Interior: Estar con muros de concreto y ventanales piso a techo
    ],
    aspect: 'col-span-1'
  },
  {
    id: 'casa-patio-contemporanea',
    title: 'Casa Patio & Galerías Exteriores',
    category: 'Diseño arquitectónico',
    tagline: 'Articulación de volúmenes alrededor de un espejo de agua central',
    area: '450 m²',
    highlights: ['Espejo de agua central reflectante', 'Pérgola metálica con parasoles', 'Muros de contención en piedra local'],
    description: 'Proyecto arquitectónico que reinterpreta la casa de patio tradicional con lenguaje contemporáneo.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80', // Exterior: Fachada contemporánea con iluminación perimetral y terrazas
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80'  // Interior: Sala y comedor abiertos a la terraza
    ],
    aspect: 'col-span-1'
  },

  // -------------------------------------------------------------
  // 2. DISEÑO DE INTERIORES (2 proyectos: Exterior e Interior concordantes)
  // -------------------------------------------------------------
  {
    id: 'living-escandinavo-calido',
    title: 'Área Social & Sala Doble Altura',
    category: 'Diseño de interiores',
    tagline: 'Doble altura, chimenea empotrada y maderas cálidas',
    area: '90 m²',
    highlights: ['Cielorraso acústico en roble', 'Lámpara suspendida de diseño', 'Mobiliario modular a escala'],
    description: 'Diseño interior para una estancia de doble altura que requería calidez y serenidad.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80', // Exterior: Galería de acceso y terraza con maderas cálidas
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80'  // Interior: Sala doble altura con roble y chimenea
    ],
    aspect: 'col-span-1'
  },
  {
    id: 'suite-hotelera-residencial',
    title: 'Suite Principal & Vestidor Walk-In',
    category: 'Diseño de interiores',
    tagline: 'Cabecero tapizado de pared a pared y vestidor con vidrios ahumados',
    area: '55 m²',
    highlights: ['Panelado acústico en tela y madera', 'Armarios iluminados con sensor', 'Rincón de lectura junto a la ventana'],
    description: 'Diseño integral de dormitorio principal pensado para el descanso reparador.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80', // Exterior: Fachada y ventanales del módulo residencial privado
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80'  // Interior: Habitación suite con cabecero e iluminación
    ],
    aspect: 'col-span-1'
  },

  // -------------------------------------------------------------
  // 3. REMODELACIÓN DE ESPACIOS (2 proyectos: Exterior e Interior concordantes)
  // -------------------------------------------------------------
  {
    id: 'remodelacion-cocina-isla',
    title: 'Renovación Integral Cocina & Comedor',
    category: 'Remodelación de espacios',
    tagline: 'Cocina abierta con isla central en madera y ventanal panorámico',
    area: '48 m²',
    highlights: ['Isla en madera y cuarzo blanco', 'Ventanales piso a techo con marco negro', 'Distribución lineal de máxima ergonomía'],
    description: 'Transformación completa de una cocina tradicional en un espacio social luminoso y diáfano integrado al entorno exterior.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80',
    images: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80', // Exterior: Fachada remodelada con conexión hacia el área social
      '/servicio-remodelacion.png'                                                                      // Interior: Cocina con isla central de madera y ventanal
    ],
    aspect: 'col-span-1'
  },
  {
    id: 'loft-urbano-remodelacion',
    title: 'Transformación Loft Urbano Diáfano',
    category: 'Remodelación de espacios',
    tagline: 'Redistribución de espacios diáfanos y restauración de texturas',
    area: '115 m²',
    highlights: ['Unificación de sala, comedor y cocina', 'Refuerzo estructural discreto', 'Pisos continuos en microcemento'],
    description: 'Intervención integral de un apartamento compartimentado para convertirlo en un espacio abierto, luminoso y fluido.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80', // Exterior: Fachada y balcones del edificio residencial urbano
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80'  // Interior: Loft contemporáneo diáfano unificado
    ],
    aspect: 'col-span-1'
  },

  // -------------------------------------------------------------
  // 4. CONSTRUCCIÓN Y ADECUACIONES (2 proyectos: Exterior e Interior concordantes)
  // -------------------------------------------------------------
  {
    id: 'supervision-adecuaciones-obra',
    title: 'Dirección Técnica & Supervisión en Obra',
    category: 'Construcción y adecuaciones',
    tagline: 'Control minucioso de especificaciones y rigor constructivo',
    area: '320 m²',
    highlights: ['Acompañamiento técnico presencial', 'Control de plomos, niveles y empalmes', 'Revisión técnica de planos en sitio'],
    description: 'Acompañamiento y supervisión técnica para la materialización de obras y adecuaciones.',
    image: '/servicio-construccion.jpg',
    images: [
      '/servicio-construccion.jpg',                                                                    // Exterior: Supervisión técnica en obra con planos e ingenieros
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=80' // Interior: Ejecución técnica de adecuaciones y acabados
    ],
    aspect: 'col-span-1'
  },
  {
    id: 'adecuacion-fachada-pergola',
    title: 'Adecuación Fachada & Pérgola Estructural',
    category: 'Construcción y adecuaciones',
    tagline: 'Estructura metálica pergolada y fachada en madera tecnológica',
    area: '280 m²',
    highlights: ['Parasoles y celosías de protección solar', 'Escalinata en piedra abujardada', 'Estructura esbelta en acero blanco'],
    description: 'Desarrollo de adecuaciones exteriores y fachada contemporánea que optimiza el confort térmico.',
    image: '/presentacion-sfera.png',
    images: [
      '/presentacion-sfera.png',          // Exterior: Fachada con estructura pergolada y celosías en madera
      '/propuesta-arquitectura.jpg'        // Interior: Área interior con diseño contemporáneo conectada tras la fachada
    ],
    aspect: 'col-span-1'
  }
];
