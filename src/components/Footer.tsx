import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import { Logo } from './Logo';
import { OFFICIAL_PHONE, OFFICIAL_EMAIL, SERVICES_DATA } from '../data/servicesData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#102B38] text-white border-t border-stone-800/80">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Column 1: Brand Info (6 cols) */}
          <div className="lg:col-span-6 space-y-5">
            <Logo variant="light" size="lg" />
            <p className="text-sm text-stone-300 leading-relaxed max-w-md pt-2">
              Transformamos ideas en espacios funcionales, modernos y únicos. Combinamos rigor técnico,
              sensibilidad espacial y materiales nobles para crear ambientes que inspiran y elevan el bienestar.
            </p>

            <div className="pt-2 flex flex-col gap-2.5 text-xs text-stone-300">
              <a
                href={`tel:+${OFFICIAL_PHONE.replace(/[^0-9]/g, '')}`}
                className="flex items-center gap-2.5 hover:text-[#C7B49A] transition-colors group"
              >
                <div className="w-7 h-7 rounded-full bg-stone-800/80 flex items-center justify-center text-[#C7B49A] group-hover:bg-[#C7B49A] group-hover:text-[#102B38] transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{OFFICIAL_PHONE}</span>
              </a>

              <a
                href={`mailto:${OFFICIAL_EMAIL}`}
                className="flex items-center gap-2.5 hover:text-[#C7B49A] transition-colors group"
              >
                <div className="w-7 h-7 rounded-full bg-stone-800/80 flex items-center justify-center text-[#C7B49A] group-hover:bg-[#C7B49A] group-hover:text-[#102B38] transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>{OFFICIAL_EMAIL}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C7B49A]">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-stone-300 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-stone-300 hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-stone-300 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-stone-300 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C7B49A]">
              Servicios Especializados
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <Link
                    to={`/servicios#${srv.id}`}
                    className="text-stone-300 hover:text-[#C7B49A] transition-colors flex items-center justify-between group py-0.5"
                  >
                    <span>{srv.title}</span>
                    <span className="text-[10px] text-stone-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
