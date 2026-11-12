import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';
import { Logo } from './Logo';
import { OFFICIAL_PHONE, OFFICIAL_EMAIL, OFFICIAL_PHONE_CLEAN, SERVICES_DATA } from '../data/servicesData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Highlight first 6 services, with direct link to view all 9
  const visibleServices = SERVICES_DATA.slice(0, 6);

  return (
    <footer className="bg-[#0b1f29] text-white border-t border-stone-800/80">
      {/* Main 4-Column Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand, Description, Socials & Action Button (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <Logo variant="light" size="lg" />
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-sm font-light">
              Firma de arquitectura, interiorismo y construcción. Transformamos ideas en espacios
              funcionales, modernos y memorables, combinando rigor técnico, sensibilidad estética y
              materiales nobles para personas y empresas.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://www.instagram.com/sfera.arquitectura/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Sfera Arquitectura (@sfera.arquitectura)"
                className="w-9 h-9 rounded bg-[#102b38] hover:bg-[#C7B49A] hover:text-[#0b1f29] text-stone-300 flex items-center justify-center transition-colors border border-stone-700/60"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navegación (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-serif font-semibold text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7B49A]"></span>
              <span>Navegación</span>
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <Link
                  to="/"
                  className="text-stone-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="text-[#C7B49A] text-xs font-mono">→</span>
                  <span>Inicio</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/nosotros"
                  className="text-stone-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="text-[#C7B49A] text-xs font-mono">→</span>
                  <span>Nosotros</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios"
                  className="text-stone-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="text-[#C7B49A] text-xs font-mono">→</span>
                  <span>Servicios Arquitectónicos</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="text-stone-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="text-[#C7B49A] text-xs font-mono">→</span>
                  <span>Contacto</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Servicios Especializados (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-serif font-semibold text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7B49A]"></span>
              <span>Servicios</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {visibleServices.map((srv) => (
                <li key={srv.id}>
                  <Link
                    to={`/servicios#${srv.id}`}
                    className="text-stone-300 hover:text-[#C7B49A] transition-colors block leading-snug truncate"
                    title={srv.title}
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-1">
              <Link
                to="/servicios"
                className="text-xs text-[#C7B49A] hover:text-white transition-colors font-medium inline-flex items-center gap-1 group"
              >
                <span>Ver los 9 servicios</span>
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Column 4: Contacto (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-serif font-semibold text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7B49A]"></span>
              <span>Contacto</span>
            </h4>

            <div className="space-y-4 text-xs sm:text-sm">
              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-[#C7B49A] flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <a
                    href={`https://wa.me/${OFFICIAL_PHONE_CLEAN}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#C7B49A] transition-colors font-medium block"
                  >
                    {OFFICIAL_PHONE}
                  </a>
                  <span className="text-[11px] text-stone-400 block mt-0.5">
                    Atención telefónica y WhatsApp
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-[#C7B49A] flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <a
                    href={`mailto:${OFFICIAL_EMAIL}`}
                    className="text-white hover:text-[#C7B49A] transition-colors font-medium break-all block"
                  >
                    {OFFICIAL_EMAIL}
                  </a>
                  <span className="text-[11px] text-stone-400 block mt-0.5">
                    Consultas generales y proyectos
                  </span>
                </div>
              </div>

              {/* Sede / Ubicación */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-[#C7B49A] flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-white font-medium block">
                    Colombia
                  </span>
                  <span className="text-[11px] text-stone-400 block mt-0.5 leading-snug">
                    Proyectos y consultoría a nivel nacional
                  </span>
                </div>
              </div>

              {/* Horario */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-[#C7B49A] flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-white font-medium block">
                    Lunes a viernes: 8:00 a.m. – 6:00 p.m.
                  </span>
                  <span className="text-[11px] text-stone-400 block mt-0.5">
                    Sábados: 9:00 a.m. – 1:00 p.m.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Notice & Copyright Bar */}
      <div className="border-t border-stone-800/80 bg-[#07151c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400 font-light">
            <p className="text-center md:text-left leading-relaxed max-w-2xl text-[11px] sm:text-xs">
              <strong className="text-stone-300 font-medium">Aviso legal:</strong> El contenido de este sitio web tiene carácter informativo y de presentación profesional. Toda consultoría, diseño y ejecución arquitectónica o constructiva se formaliza mediante la respectiva propuesta técnica y contractual.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 flex-shrink-0 text-[11px] sm:text-xs">
              <span>© {currentYear} Sfera Arquitectura. Todos los derechos reservados.</span>
              <span className="hidden sm:inline text-stone-600">|</span>
              <Link to="/contacto" className="hover:text-white transition-colors">
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
