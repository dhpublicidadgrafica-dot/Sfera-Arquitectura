import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { OFFICIAL_PHONE } from '../data/servicesData';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  // Handle scroll detection for dynamic transparent-to-solid transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Inicio', path: '/' },
    { label: 'Nosotros', path: '/nosotros' },
    { label: 'Servicios', path: '/servicios' },
    { label: 'Contacto', path: '/contacto' },
  ];

  // If on Home and at the very top, we can use a transparent background with white text;
  // otherwise, a crisp solid petroleum / frosted light background.
  const isSolid = isScrolled || !isHome || mobileMenuOpen;

  const handleConsultationClick = () => {
    if (onOpenConsultation) {
      onOpenConsultation();
    } else {
      navigate('/contacto');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isSolid
          ? 'bg-[#102B38]/95 backdrop-blur-md shadow-md py-2.5 sm:py-3 border-b border-stone-800/40 text-white'
          : 'bg-gradient-to-b from-[#102B38]/85 via-[#102B38]/45 to-transparent py-3 sm:py-4 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo on Left */}
          <Logo variant="light" />

          {/* Desktop Navigation on Right */}
          <nav className="hidden lg:flex items-center" aria-label="Navegación principal">
            <ul className="flex items-center gap-8">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) =>
                      `relative text-xs tracking-[0.14em] uppercase font-medium py-1 transition-colors duration-200 group ${
                        isActive
                          ? 'text-[#C7B49A] font-semibold'
                          : 'text-stone-200 hover:text-white'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span>{item.label}</span>
                        {/* Elegant architectural underline */}
                        <span
                          className={`absolute bottom-0 left-0 h-[1.5px] bg-[#C7B49A] transition-all duration-300 ${
                            isActive ? 'w-full' : 'w-0 group-hover:w-full'
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={handleConsultationClick}
              className="px-3 py-1.5 bg-[#C7B49A] text-[#102B38] text-[11px] font-semibold uppercase tracking-wider rounded-sm"
            >
              Asesoría
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
              aria-expanded={mobileMenuOpen}
              className="p-2 text-stone-200 hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#C7B49A]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#102B38] border-b border-stone-800 px-4 pt-4 pb-6 mt-2 shadow-xl animate-in slide-in-from-top-2">
          <nav aria-label="Menú móvil" className="flex flex-col space-y-3">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `flex items-center justify-between py-2.5 px-3 text-sm tracking-wider uppercase border-b border-stone-800/80 transition-colors ${
                    isActive
                      ? 'text-[#C7B49A] font-semibold bg-stone-900/40'
                      : 'text-stone-300 hover:text-white'
                  }`
                }
              >
                <span>{item.label}</span>
                <span className="text-xs text-stone-500">→</span>
              </NavLink>
            ))}

            <div className="pt-3 flex flex-col gap-3">
              <a
                href={`tel:+${OFFICIAL_PHONE.replace(/[^0-9]/g, '')}`}
                className="flex items-center gap-2 text-xs text-stone-300 py-1 px-3"
              >
                <Phone className="w-4 h-4 text-[#C7B49A]" />
                <span>{OFFICIAL_PHONE}</span>
              </a>

              <button
                onClick={handleConsultationClick}
                className="w-full py-3 bg-[#C7B49A] text-[#102B38] text-xs font-semibold uppercase tracking-wider rounded-sm text-center flex items-center justify-center gap-2"
              >
                <span>Agenda una asesoría</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
