import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface MetaConfig {
  title: string;
  description: string;
  keywords?: string;
}

const ROUTE_META: Record<string, MetaConfig> = {
  '/': {
    title: 'Sfera Arquitectura | Diseño Arquitectónico e Interiores',
    description: 'Diseñamos espacios funcionales y modernos. Conoce nuestros servicios de arquitectura, interiores, remodelación, planos y renders 3D.',
    keywords: 'diseño arquitectónico, diseño de interiores, remodelación, planos arquitectónicos, renders 3D, arquitectura moderna Colombia'
  },
  '/nosotros': {
    title: 'Nosotros | Sfera Arquitectura',
    description: 'Conoce la filosofía de Sfera Arquitectura y nuestro enfoque en el diseño de espacios funcionales, personalizados y contemporáneos.',
    keywords: 'filosofía arquitectónica, sobre Sfera Arquitectura, equipo de diseño arquitectónico, proceso de trabajo arquitectónico'
  },
  '/servicios': {
    title: 'Servicios de Arquitectura e Interiores | Sfera Arquitectura',
    description: 'Descubre nuestros servicios de diseño arquitectónico, interiores, remodelaciones, construcción, planos y renders 3D.',
    keywords: 'servicios de arquitectura, diseño de cocinas, remodelación de espacios, planos 3D, renders fotorrealistas, supervisión de obra'
  },
  '/contacto': {
    title: 'Contacto | Sfera Arquitectura',
    description: 'Contacta a Sfera Arquitectura y solicita asesoría para tu proyecto arquitectónico, remodelación o diseño de interiores.',
    keywords: 'contacto Sfera Arquitectura, cotizar proyecto arquitectónico, asesoría arquitectura WhatsApp, diseño de interiores cotización'
  }
};

export const SEO: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const meta = ROUTE_META[location.pathname] || ROUTE_META['/'];

    // Update document title
    document.title = meta.title;

    // Update meta description
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) {
      descTag.setAttribute('content', meta.description);
    }

    // Update OpenGraph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', meta.title);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', meta.description);
    }

    // Update Twitter tags
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) {
      twTitle.setAttribute('content', meta.title);
    }

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) {
      twDesc.setAttribute('content', meta.description);
    }
  }, [location.pathname]);

  return null;
};
