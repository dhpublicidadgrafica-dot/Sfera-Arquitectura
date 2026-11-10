import React, { useState, useEffect, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { ProjectItem } from '../data/projectsData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbnailsContainerRef = useRef<HTMLDivElement>(null);
  const activeThumbnailRef = useRef<HTMLButtonElement>(null);

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

  // Scroll active thumbnail smoothly into view when currentIndex changes
  useEffect(() => {
    if (activeThumbnailRef.current) {
      activeThumbnailRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [currentIndex]);

  // Handle wheel scrolling:
  // - Over the thumbnails bar: horizontal scroll of thumbnails
  // - Over the main image area: changes images (prev/next) with debounce
  const lastWheelTimeRef = useRef(0);
  const handleMainWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const now = Date.now();
    if (now - lastWheelTimeRef.current < 280) return;
    if (Math.abs(e.deltaY) > 20 || Math.abs(e.deltaX) > 20) {
      if (e.deltaY > 0 || e.deltaX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
      lastWheelTimeRef.current = now;
    }
  };

  const handleThumbnailsWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (thumbnailsContainerRef.current) {
      thumbnailsContainerRef.current.scrollLeft += e.deltaY !== 0 ? e.deltaY : e.deltaX;
    }
  };

  // Keyboard navigation & body scroll lock
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

  // Mobile touch swipe gestures
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

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 select-none"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl max-h-[96vh] bg-[#102B38] rounded-md shadow-2xl overflow-hidden border border-stone-800 flex flex-col animate-in zoom-in-95 duration-200 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar - Fixed height */}
        <div className="flex-shrink-0 flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 border-b border-stone-800/80 bg-[#102B38] z-20">
          <div className="flex flex-col gap-0.5 overflow-hidden pr-2">
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C7B49A]">
              {project.category}
            </span>
            <h3 id="modal-project-title" className="font-serif text-base sm:text-xl font-medium text-white truncate leading-snug">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
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

        {/* Carousel Visual Area: Takes remaining height; wheel scroll advances/reverses images */}
        <div
          onWheel={handleMainWheel}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative flex-1 min-h-[300px] sm:min-h-[420px] bg-black/95 flex items-center justify-center overflow-hidden touch-pan-y"
        >
          {/* Main Displayed Image with crisp contain */}
          <img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${project.title} - Vista ${currentIndex + 1} de ${total}`}
            onError={(e) => {
              e.currentTarget.src = '/propuesta-arquitectura.jpg';
            }}
            className="w-full h-full max-h-[58vh] sm:max-h-[64vh] object-contain transition-opacity duration-200"
          />

          {/* Floating Subtle View Pill on image */}
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10 px-3 py-1.5 bg-black/65 backdrop-blur-md rounded text-xs text-white border border-white/10 flex items-center gap-1.5 pointer-events-none">
            <ImageIcon className="w-3.5 h-3.5 text-[#C7B49A]" />
            <span>Vista {currentIndex + 1} de {total}</span>
          </div>

          {/* Navigation Arrows */}
          {total > 1 && (
            <>
              <button
                onClick={handlePrev}
                aria-label="Ver imagen anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 bg-black/60 hover:bg-black/90 text-white rounded-full transition-all duration-200 border border-white/20 hover:scale-105 active:scale-95 backdrop-blur-xs z-10"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Ver siguiente imagen"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 bg-black/60 hover:bg-black/90 text-white rounded-full transition-all duration-200 border border-white/20 hover:scale-105 active:scale-95 backdrop-blur-xs z-10"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </>
          )}
        </div>

        {/* Footer Navigation Bar: Thumbnails Carousel with wheel scroll support and full visibility */}
        <div className="flex-shrink-0 px-3 sm:px-6 py-2.5 sm:py-3 bg-[#102B38] border-t border-stone-800/80 z-20">
          <div
            ref={thumbnailsContainerRef}
            onWheel={handleThumbnailsWheel}
            className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto py-1 max-w-full cursor-pointer select-none no-scrollbar"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {images.map((imgUrl, idx) => {
              const isActive = currentIndex === idx;
              return (
                <button
                  key={idx}
                  ref={isActive ? activeThumbnailRef : null}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Ver imagen ${idx + 1}`}
                  className={`flex items-center gap-2 px-2 sm:px-2.5 py-1.5 rounded transition-all text-xs border flex-shrink-0 ${
                    isActive
                      ? 'bg-stone-900 border-[#C7B49A] text-white shadow-md ring-1 ring-[#C7B49A]'
                      : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:text-stone-200 hover:border-stone-600'
                  }`}
                >
                  <div className="relative w-11 h-7 sm:w-12 sm:h-8 rounded overflow-hidden flex-shrink-0 bg-stone-950">
                    <img
                      src={imgUrl}
                      alt={`Miniatura ${idx + 1}`}
                      onError={(e) => {
                        e.currentTarget.src = '/propuesta-arquitectura.jpg';
                      }}
                      className="w-full h-full object-cover pointer-events-none"
                    />
                  </div>
                  <span className="font-medium whitespace-nowrap">Vista {idx + 1}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
