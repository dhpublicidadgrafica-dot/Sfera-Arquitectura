import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, MessageSquare, ArrowUpRight, Compass, Home } from 'lucide-react';
import { ProjectItem } from '../data/projectsData';
import { getWhatsAppLink } from '../data/servicesData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index when a new project opens
  useEffect(() => {
    setCurrentIndex(0);
  }, [project]);

  const images = project?.images && project.images.length > 0 ? project.images : (project ? [project.image] : []);
  const total = images.length;

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, handlePrev, handleNext]);

  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartX - touchEndX;
    if (deltaX > 45) {
      handleNext();
    } else if (deltaX < -45) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  if (!project) return null;

  const currentViewLabel = currentIndex === 0 ? 'Vista Exterior' : 'Vista Interior';
  const whatsappMsg = `Hola, Sfera Arquitectura. Me interesa el proyecto "${project.title}" (${project.category}) y quisiera recibir asesoría para un requerimiento similar.`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#102B38] rounded-md shadow-2xl overflow-hidden border border-stone-800 flex flex-col max-h-[94vh] animate-in zoom-in-95 duration-200 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-stone-800/80 bg-[#102B38]">
          <div className="flex items-center gap-2 sm:gap-3 overflow-hidden pr-2">
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C7B49A] flex-shrink-0">
              {project.category}
            </span>
            <span className="text-stone-500 hidden sm:inline" aria-hidden="true">·</span>
            <h3 id="modal-project-title" className="font-serif text-sm sm:text-lg font-medium text-white truncate">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* View Tag (Exterior vs Interior) */}
            <span className="text-[11px] text-[#C7B49A] bg-stone-900/90 font-medium px-2.5 py-1 rounded border border-[#C7B49A]/30">
              {currentViewLabel} ({currentIndex + 1} de {total})
            </span>

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Cerrar visor"
              className="p-1.5 text-stone-300 hover:text-white hover:bg-stone-800/80 rounded transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Visual Area with mobile swipe */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative flex-1 min-h-[280px] sm:min-h-[440px] md:min-h-[500px] bg-black flex items-center justify-center overflow-hidden select-none touch-pan-y"
        >
          {/* Main Displayed Image */}
          <img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${project.title} - ${currentViewLabel}`}
            onError={(e) => {
              e.currentTarget.src = '/propuesta-arquitectura.jpg';
            }}
            className="w-full h-full max-h-[62vh] sm:max-h-[68vh] object-contain transition-opacity duration-300"
          />

          {/* Floating Subtle View Pill on image */}
          <div className="absolute bottom-4 left-4 z-10 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded text-xs text-white border border-white/10 flex items-center gap-1.5">
            {currentIndex === 0 ? <Compass className="w-3.5 h-3.5 text-[#C7B49A]" /> : <Home className="w-3.5 h-3.5 text-[#C7B49A]" />}
            <span>{currentViewLabel}</span>
          </div>

          {/* Navigation Arrows */}
          {total > 1 && (
            <>
              <button
                onClick={handlePrev}
                aria-label="Ver imagen anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 bg-black/60 hover:bg-black/90 text-white rounded-full transition-all duration-200 border border-white/20 hover:scale-105 active:scale-95 backdrop-blur-xs"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Ver siguiente imagen"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 bg-black/60 hover:bg-black/90 text-white rounded-full transition-all duration-200 border border-white/20 hover:scale-105 active:scale-95 backdrop-blur-xs"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </>
          )}
        </div>

        {/* Footer Navigation Bar: 2 View Selectors (Exterior / Interior) & WhatsApp Action */}
        <div className="px-4 sm:px-5 py-3 bg-[#102B38] border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* 2 Concordant View Selectors */}
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
            {images.map((imgUrl, idx) => {
              const label = idx === 0 ? '1. Vista Exterior' : '2. Vista Interior';
              const isActive = currentIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Ver ${label}`}
                  className={`flex items-center gap-2.5 px-3 py-1.5 rounded transition-all text-xs border ${
                    isActive
                      ? 'bg-stone-900 border-[#C7B49A] text-white shadow-sm'
                      : 'bg-stone-900/40 border-stone-800 text-stone-400 hover:text-stone-200 hover:border-stone-700'
                  }`}
                >
                  <div className="relative w-9 h-7 rounded overflow-hidden flex-shrink-0">
                    <img
                      src={imgUrl}
                      alt={label}
                      onError={(e) => {
                        e.currentTarget.src = '/propuesta-arquitectura.jpg';
                      }}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-medium">{label}</span>
                </button>
              );
            })}
          </div>

          {/* WhatsApp Direct Inquiry Button */}
          <a
            href={getWhatsAppLink(whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#C7B49A] text-[#102B38] text-xs font-semibold tracking-wider uppercase rounded-sm hover:bg-[#E8DFD3] transition-colors shadow-md flex-shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Consultar por este proyecto</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
