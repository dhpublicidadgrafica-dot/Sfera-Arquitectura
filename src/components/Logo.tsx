import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark' | 'auto';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  className = '',
  size = 'md',
}) => {
  const isDark = variant === 'dark';

  // Prominent sizing ensuring the spherical wireframe and typography are fully legible
  const sizeClasses = {
    sm: 'h-12 sm:h-14',
    md: 'h-16 sm:h-18 lg:h-22', // Substantially larger for the navbar
    lg: 'h-22 sm:h-28 lg:h-32', // Prominent in the footer
    xl: 'h-32 sm:h-36 lg:h-44',
  }[size];

  return (
    <Link
      to="/"
      aria-label="Sfera Arquitectura - Inicio"
      className={`inline-flex items-center group transition-opacity hover:opacity-95 flex-shrink-0 ${className}`}
    >
      <img
        src="/logo-sfera.png"
        alt="Sfera Arquitectura"
        className={`${sizeClasses} w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] drop-shadow-sm ${
          isDark
            ? 'brightness-0 contrast-200'
            : 'filter-none'
        }`}
        loading="eager"
      />
    </Link>
  );
};
