export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'solicitar-asesoria',
    question: '¿Cómo puedo solicitar una asesoría?',
    answer: 'Puedes solicitar tu asesoría directamente escribiéndonos a nuestra línea oficial de WhatsApp ((+57) 312 8102916) o a través de nuestro formulario en la sección de Contacto. Coordinamos una primera conversación en la que revisamos tus expectativas, el tipo de inmueble y la intención inicial de tu proyecto para orientarte sobre los siguientes pasos.'
  },
  {
    id: 'informacion-cotizar',
    question: '¿Qué información debo compartir para cotizar mi proyecto?',
    answer: 'Para elaborar una propuesta adecuada a tu caso, resulta muy útil contar con: la ubicación o ciudad del proyecto, el área aproximada en metros cuadrados, fotos o videos actuales del espacio (en caso de remodelación), planos existentes si se dispone de ellos, el tipo de uso deseado y tus tiempos esperados de ejecución.'
  },
  {
    id: 'solo-diseno-o-planos',
    question: '¿Puedo solicitar únicamente el diseño o los planos?',
    answer: 'Sí, totalmente. Nuestros servicios son modulares y se ajustan al alcance que requieras. Podemos realizar exclusivamente el anteproyecto conceptual, el paquete completo de planos arquitectónicos y técnicos, los modelos y renders 3D para visualización, o el diseño de interiores independiente.'
  },
  {
    id: 'remodelaciones-existentes',
    question: '¿Realizan remodelaciones de espacios existentes?',
    answer: 'Sí. Desarrollamos proyectos de remodelación y transformación integral o puntual: desde cocinas, baños y zonas sociales hasta adecuaciones completas de viviendas y espacios de trabajo, cuidando la viabilidad técnica y optimizando la distribución actual.'
  },
  {
    id: 'proceso-de-trabajo',
    question: '¿Cómo funciona el proceso de trabajo?',
    answer: 'Nuestro proceso estructurado comprende cinco etapas clave: 1) Escuchamos tus ideas y necesidades; 2) Analizamos el espacio y los requerimientos específicos; 3) Desarrollamos la propuesta de diseño preliminar; 4) Definimos planos, visualizaciones 3D y especificaciones de acuerdo con el alcance contratado; y 5) Acompañamos la ejecución del proyecto cuando el servicio convenido lo contempla.'
  },
  {
    id: 'costo-proyecto',
    question: '¿Cuánto cuesta un proyecto arquitectónico?',
    answer: 'El costo y los tiempos de un proyecto arquitectónico varían en función del alcance contratado, las dimensiones en metros cuadrados, la complejidad del diseño y las condiciones del espacio. Por esta razón, en Sfera Arquitectura no manejamos tarifas estándar arbitrarias, sino que realizamos una evaluación personalizada para brindarte una propuesta justa, transparente y ajustada a tu proyecto.'
  }
];
