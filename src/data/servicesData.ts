export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  deliverables: string[];
  image: string;
  imageAlt: string;
  whatsappMessage: string;
}

export const OFFICIAL_PHONE = '(+57) 312 8102916';
export const OFFICIAL_PHONE_CLEAN = '573128102916';
export const OFFICIAL_EMAIL = 'arquitectura.sfera@outlook.com';

export function getWhatsAppLink(message?: string): string {
  const text = message || 'Hola, Sfera Arquitectura. Quiero recibir asesoría para un proyecto arquitectónico.';
  return `https://wa.me/${OFFICIAL_PHONE_CLEAN}?text=${encodeURIComponent(text)}`;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'diseno-arquitectonico',
    number: '01',
    title: 'Diseño arquitectónico',
    shortDesc: 'Desarrollo conceptual y volumétrico de espacios contemporáneos que responden al entorno, a la funcionalidad y a tu estilo de vida.',
    fullDesc: 'Desarrollamos proyectos arquitectónicos desde su concepción inicial hasta la definición integral de volumetrías, distribuciones funcionales, orientación bioclimática y relación con el entorno. Cada propuesta equilibra proporción, elegancia visual y uso óptimo de cada metro cuadrado.',
    benefits: [
      'Propuestas espaciales personalizadas según tus necesidades específicas.',
      'Aprovechamiento inteligente del terreno, la luz natural y la ventilación.',
      'Coherencia estética contemporánea con soluciones constructivas viables.',
      'Integración armónica entre áreas interiores y exteriores.'
    ],
    deliverables: [
      'Esquemas conceptuales y zonificación espacial.',
      'Plantas arquitectónicas detalladas con cotas y accesos.',
      'Cortes longitudinales, transversales y fachadas.',
      'Visualizaciones y perspectivas volumétricas preliminares.'
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Residencia contemporánea con grandes ventanales y arquitectura sobria',
    whatsappMessage: 'Hola, Sfera Arquitectura. Quiero solicitar asesoría para un proyecto de Diseño Arquitectónico.'
  },
  {
    id: 'diseno-interiores',
    number: '02',
    title: 'Diseño de interiores',
    shortDesc: 'Planificación sensible de ambientes mediante iluminación, materiales nobles, texturas y mobiliario a la medida.',
    fullDesc: 'Transformamos el interior de residencias y espacios de trabajo en atmósferas acogedoras y ordenadas. Seleccionamos paletas de materiales, cuidamos la temperatura lumínica y coordinamos cada elemento para lograr equilibrio visual y confort diario.',
    benefits: [
      'Ambientes con carácter propio que reflejan tu identidad y gustos.',
      'Selección de acabados perdurables, maderas, metales y piedras naturales.',
      'Diseño de iluminación arquitectónica directa, indirecta y de acento.',
      'Optimización de la circulación y ergonomía en cada área habitable.'
    ],
    deliverables: [
      'Concept board de materiales, paleta de colores y acabados.',
      'Diseño y modulación de mobiliario fijo (carpintería arquitectónica).',
      'Plano de distribución de mobiliario y luminarias.',
      'Renders fotorrealistas de los ambientes interiores clave.'
    ],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Diseño de sala de estar contemporánea con mobiliario elegante y luz cálida',
    whatsappMessage: 'Hola, Sfera Arquitectura. Quiero recibir asesoría para un proyecto de Diseño de Interiores.'
  },
  {
    id: 'remodelacion-espacios',
    number: '03',
    title: 'Remodelación de espacios',
    shortDesc: 'Actualización y renovación integral de espacios existentes para devolverles modernidad, amplitud y valor estético.',
    fullDesc: 'Revitalizamos cocinas, baños, áreas sociales o propiedades completas que requieren una nueva vida. Analizamos la estructura actual para redistribuir muros, modernizar instalaciones y aplicar acabados modernos que transformen la habitabilidad del lugar.',
    benefits: [
      'Ampliación visual y funcional sin necesidad de cambiar de propiedad.',
      'Actualización estética con materiales modernos de fácil mantenimiento.',
      'Mejora sustancial en la valoración comercial del inmueble.',
      'Planeación cuidadosa para minimizar imprevistos durante la intervención.'
    ],
    deliverables: [
      'Diagnóstico del estado actual y levantamiento arquitectónico.',
      'Propuesta de redistribución y demoliciones selectivas.',
      'Especificación técnica de nuevos recubrimientos y enchapes.',
      'Renders comparativos de la transformación proyectada.'
    ],
    image: '/servicio-remodelacion.png',
    imageAlt: 'Cocina contemporánea remodelada con isla central en madera y ventanales piso a techo',
    whatsappMessage: 'Hola, Sfera Arquitectura. Me interesa solicitar asesoría para la Remodelación de un espacio existente.'
  },
  {
    id: 'construccion-adecuaciones',
    number: '04',
    title: 'Construcción y adecuaciones',
    shortDesc: 'Soluciones y dirección técnica para materializar adecuaciones y ejecuciones constructivas con rigor y calidad.',
    fullDesc: 'Brindamos soluciones constructivas y adecuaciones físicas ajustadas a las características técnicas de cada obra. Gestionamos los detalles técnicos, la coordinación de mano de obra calificada y la selección de materiales para garantizar la fidelidad con los diseños aprobados.',
    benefits: [
      'Acompañamiento técnico con supervisión en obra.',
      'Cuidado meticuloso en empalmes, plomos, nivelaciones y acabados finales.',
      'Cumplimiento de las especificaciones y buenas prácticas constructivas.',
      'Coordinación directa para resolver dudas en el sitio de trabajo.'
    ],
    deliverables: [
      'Planificación de actividades constructivas y cronograma estimado.',
      'Especificaciones técnicas de materiales y dosificaciones.',
      'Control de calidad en obra durante las etapas pactadas.',
      'Entrega a satisfacción con revisión minuciosa de detalles.'
    ],
    image: '/servicio-construccion.jpg',
    imageAlt: 'Revisión técnica de planos arquitectónicos en obra con equipo de construcción',
    whatsappMessage: 'Hola, Sfera Arquitectura. Deseo consultar sobre servicios de Construcción y Adecuaciones.'
  },
  {
    id: 'planos-renders-3d',
    number: '05',
    title: 'Planos y renders 3D',
    shortDesc: 'Representación técnica fotorrealista y planimetría precisa para visualizar y validar tu proyecto antes de construirlo.',
    fullDesc: 'La visualización 3D y los planos constructivos permiten experimentar volúmenes, texturas, sombras y reflejos antes de colocar el primer ladrillo. Facilitamos la toma de decisiones estéticas y presupuestales evitando reprocesos costosos en obra.',
    benefits: [
      'Certeza visual absoluta de cómo lucirá el espacio terminado.',
      'Facilidad para evaluar combinaciones de colores, maderas e iluminación.',
      'Planimetría técnica clara para constructores y contratistas.',
      'Ahorro de tiempo y dinero al corregir detalles en fase digital.'
    ],
    deliverables: [
      'Renders fotorrealistas en alta resolución de espacios interiores y exteriores.',
      'Planos acotados de plantas, cortes y detalles constructivos.',
      'Planos de carpintería e instalaciones especiales acordadas.',
      'Recorridos virtuales o vistas 360° según el alcance requerido.'
    ],
    image: '/servicio-planos-renders.jpg',
    imageAlt: 'Modelado arquitectónico 3D y análisis de volumetría en pantalla digital',
    whatsappMessage: 'Hola, Sfera Arquitectura. Quiero cotizar un paquete de Planos y Renders 3D para mi proyecto.'
  },
  {
    id: 'asesoria-proyectos',
    number: '06',
    title: 'Asesoría y acompañamiento',
    shortDesc: 'Orientación estratégica profesional para definir alcances, evaluar alternativas y tomar decisiones certeras.',
    fullDesc: 'Te asesoramos en cada encrucijada del proceso arquitectónico: desde evaluar el potencial de un inmueble que deseas comprar o remodelar, hasta la selección de proveedores, optimización presupuestal y definición del programa de necesidades.',
    benefits: [
      'Claridad profesional para no tomar decisiones a ciegas.',
      'Optimización de recursos y priorización acertada de inversiones.',
      'Resolución de dudas sobre distribución, viabilidad espacial y normatividad.',
      'Acompañamiento cercano y comunicación fluida en cada etapa acordada.'
    ],
    deliverables: [
      'Sesión de diagnóstico y análisis de requerimientos espaciales.',
      'Documento de conclusiones con recomendaciones estratégicas.',
      'Listado de prioridades y ruta de trabajo sugerida.',
      'Soporte directo vía WhatsApp y reuniones técnicas de seguimiento.'
    ],
    image: '/servicio-asesoria.jpg',
    imageAlt: 'Reunión de asesoría arquitectónica y consulta de proyecto en tablet digital',
    whatsappMessage: 'Hola, Sfera Arquitectura. Deseo agendar una Asesoría y acompañamiento para mi proyecto.'
  }
];
