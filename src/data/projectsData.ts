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
  // PROYECTO 1: Casa Mara (Carrusel de 5 imágenes)
  // -------------------------------------------------------------
  {
    id: 'casa-mara',
    title: 'Casa Mara',
    category: 'Diseño arquitectónico',
    tagline: 'Volumetría sobria, hormigón visto, madera natural y ventanales panorámicos',
    area: '420 m²',
    highlights: ['Orientación solar bioclimática', 'Fachada en concreto y madera teca', 'Pórtico volado en voladizo'],
    description: 'Propuesta residencial de líneas depuradas concebida para integrarse con la topografía y la vegetación circundante, maximizando la iluminación natural y las terrazas de descanso.',
    image: '/casa-mara-1.jpg',
    images: [
      '/casa-mara-1.jpg', // 1. Fachada exterior contemporánea integrada en ladera natural (14qKfBC0WOXwCF61OQK210x663xQtHb97)
      '/casa-mara-2.jpg', // 2. Cocina abierta con isla, barra y estancia conectada a terraza (1YCBqohtPMN_YQ4TaeAhqcvG_saspav4x)
      '/casa-mara-3.jpg', // 3. Dormitorio contemporáneo con muro en ladrillo y ventanal exterior (1Z0kZSLDSnY3N4PPMSIagJVBDLad1xrT6)
      '/casa-mara-4.jpg', // 4. Estudio y espacio de trabajo con ventanal panorámico a la naturaleza (1FztmEYlbmlp4baeHX7f2dWHKX-QYLB38)
      '/casa-mara-5.jpg'  // 5. Suite principal en ángulo con ventanales hacia colina verde (1sooON_925lp3wzG4fB3aMbCYyxTdv7zv)
    ],
    aspect: 'col-span-1'
  },

  // -------------------------------------------------------------
  // PROYECTO 2: Hotel Portofino (Carrusel de 5 imágenes)
  // -------------------------------------------------------------
  {
    id: 'hotel-portofino',
    title: 'Hotel Portofino',
    category: 'Diseño arquitectónico',
    tagline: 'Hospitalidad contemporánea, terrazas pergoladas y arquitectura sensible al paisaje',
    area: '1.850 m²',
    highlights: ['Diseño bioclimático para confort térmico', 'Terrazas escalonadas hacia visuales abiertas', 'Materialidad noble y vegetación autóctona'],
    description: 'Complejo hotelero y de descanso proyectado con una estética sobria y acogedora, fusionando espacios de hospitalidad con pabellones de descanso y suites con vistas privilegiadas.',
    image: '/hotel-portofino-1.jpg',
    images: [
      '/hotel-portofino-1.jpg', // 1. Fachada frontal Hotel Portofino en perspectiva con acceso y paisajismo (1zQ5mdQvfuOQPXj9DNXIJ2uKq3ZoQqw6X)
      '/hotel-portofino-2.jpg', // 2. Vista frontal simétrica del Hotel Portofino con palmeras y horizonte marino (12GmTtWx_dAVccVQTDWPz3Td5t0ENRWv_)
      '/hotel-portofino-3.jpg', // 3. Zona húmeda y pérgola de descanso con piscina y palmeras (1vT4fGFNUD7XwyUksC5zAVyGJs6vnC589)
      '/hotel-portofino-4.jpg', // 4. Piscina lounge y solárium exterior con arquitectura de celosías metálicas (1GVXMF90o1d_8IYvSTV8lioW8CKjWWkrk)
      '/hotel-portofino-5.jpg'  // 5. Vista aérea del conjunto con módulos habitacionales, áreas comunes y energía solar (18Fn7GN2gPO2UYA7wdUmyR5MclOu_6L0U)
    ],
    aspect: 'col-span-1'
  },

  // -------------------------------------------------------------
  // PROYECTO 3: Edificio Madrid (Carrusel de 2 imágenes reales)
  // -------------------------------------------------------------
  {
    id: 'edificio-madrid',
    title: 'Edificio Madrid',
    category: 'Construcción y adecuaciones',
    tagline: 'Edificación mixta y multifamiliar de escala urbana con balcones continuos y locales comerciales',
    area: '2.400 m²',
    highlights: ['Estructura sismorresistente NSR-10', 'Fachada en concreto y celosías cerámicas', 'Balcón perimetral corrido e iluminación cálida'],
    description: 'Edificio residencial y comercial contemporáneo diseñado con locales en planta baja, mezzanine social diáfano y apartamentos superiores con balcones volados e iluminación escenográfica.',
    image: '/edificio-madrid-1.jpg',
    images: [
      '/edificio-madrid-1.jpg', // 1. Fachada frontal al atardecer con locales comerciales y mezzanines iluminados (1cKA4OLdriHT_MuifkqRnrOxQSp2C8Rpz)
      '/edificio-madrid-2.jpg'  // 2. Perspectiva angular esquinera de la edificación con balcones volados y celosías (1UxFjdmoVptQbeHVba4tCb8FYK0-P00Ce)
    ],
    aspect: 'col-span-1'
  },

  // -------------------------------------------------------------
  // PROYECTO 4: Apartamento Simón Bolívar (Carrusel de 4 imágenes reales)
  // -------------------------------------------------------------
  {
    id: 'apartamento-simon-bolivar',
    title: 'Apartamento Simón Bolívar',
    category: 'Diseño de interiores',
    tagline: 'Adecuación integral de acabados, pisos cerámicos y carpintería arquitectónica a medida',
    area: '135 m²',
    highlights: ['Pisos en porcelanato tono madera cálida', 'Carpintería en madera clara con clósets modulares', 'Iluminación empotrada LED y amplios ventanales'],
    description: 'Intervención y adecuación completa de interiores para apartamento residencial: renovación de muros, ventanería con marcos oscuros, pisos cerámicos continuos y carpintería fija en madera natural.',
    image: '/simon-bolivar-1.jpg',
    images: [
      '/simon-bolivar-1.jpg', // 1. Sala y área social diáfana con ventanales y pisos cerámicos cálidos (1iMmM-DzUDKMLyIaPfvoGR4skECNng_1f)
      '/simon-bolivar-2.jpg', // 2. Hall de distribución y acceso a habitaciones con carpintería en madera (1Ugw3uFy2gE-HULUJVWqOLI195hFxXmqc)
      '/simon-bolivar-3.jpg', // 3. Habitación con clóset corredizo empotrado a la medida y ventanal esquinero (1R53rQNlKL3dbFoc_eejX5NFEJMqTcL9x)
      '/simon-bolivar-4.jpg'  // 4. Perspectiva interior amplia conectando habitaciones y áreas privadas (1BsBDY7sP2xPmcMq8TJ5mxJgRfUS92AUy)
    ],
    aspect: 'col-span-1'
  },

  // -------------------------------------------------------------
  // PROYECTO 5: Proyecto VIS (Carrusel de 3 imágenes reales)
  // -------------------------------------------------------------
  {
    id: 'proyecto-vis',
    title: 'Proyecto VIS',
    category: 'Remodelación de espacios',
    tagline: 'Adecuación de acabados y mobiliario para apartamento VIS con cocina integral y baño contemporáneo',
    area: '52 m²',
    highlights: ['Cocina integral abierta con barra tipo isla en cuarzo', 'Carpintería en tono madera y electrodomésticos empotrados', 'Baño completo con división en vidrio templado y mueble flotante'],
    description: 'Transformación y entrega de acabados completos para apartamento de Vivienda de Interés Social (VIS): diseño de cocina integral en L con mesón blanco, pisos en porcelanato gris de gran formato y baño moderno totalmente enchapado.',
    image: '/proyecto-vis-1.jpg',
    images: [
      '/proyecto-vis-1.jpg', // 1. Cocina integral con barra americana blanca y muebles superiores amaderados (1zdmNK4eLlFDrReUr58FkAFx3yW7nnfPH)
      '/proyecto-vis-2.jpg', // 2. Vista panorámica conectando área social, cocina y acceso principal (1v8Z--VZ310ifdUbJmWs3Kofa07rtSxif)
      '/proyecto-vis-3.jpg'  // 3. Baño remodelado con mueble suspendido, espejo y división en vidrio (10fcsRsjZqR7twwaNiKy6dC7R2yIdWSRp)
    ],
    aspect: 'col-span-1'
  }
];
