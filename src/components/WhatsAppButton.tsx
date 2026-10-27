import React, { useState } from 'react';
import { MessageSquare, X, ChevronRight, Send } from 'lucide-react';
import { OFFICIAL_PHONE, getWhatsAppLink } from '../data/servicesData';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickOptions = [
    {
      label: 'Asesoría general de proyecto',
      msg: 'Hola, Sfera Arquitectura. Quiero recibir asesoría para un proyecto arquitectónico.'
    },
    {
      label: 'Diseño de interiores o remodelación',
      msg: 'Hola, Sfera Arquitectura. Quisiera consultar sobre el diseño de interiores o remodelación de un espacio.'
    },
    {
      label: 'Planos y renders 3D',
      msg: 'Hola, Sfera Arquitectura. Deseo información y cotización para planos técnicos y renders 3D.'
    }
  ];

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Quick Context Card */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Atención directa por WhatsApp"
          className="mb-3 w-[calc(100vw-2.5rem)] sm:w-96 max-w-sm bg-white rounded-xl shadow-2xl border border-stone-200/80 overflow-hidden transform transition-all duration-300 animate-in fade-in slide-in-from-bottom-3"
        >
          {/* Card Header in Petroleum Blue */}
          <div className="bg-[#102B38] text-white p-4 flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-xs font-semibold tracking-wider uppercase text-[#C7B49A]">
                  Línea Oficial de Atención
                </p>
              </div>
              <h3 className="font-serif text-lg text-white font-medium mt-1">
                Sfera Arquitectura
              </h3>
              <p className="text-xs text-stone-300 mt-0.5">
                {OFFICIAL_PHONE} · Respuesta oportuna
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-stone-300 hover:text-white p-1 rounded-md transition-colors"
              aria-label="Cerrar ventana de WhatsApp"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Body */}
          <div className="p-4 bg-[#F4F3EF]/60">
            <p className="text-xs text-[#30383D] leading-relaxed mb-3">
              Conversa directamente con nuestro equipo de arquitectura para revisar tus ideas o agendar una llamada.
            </p>

            <div className="space-y-2">
              {quickOptions.map((opt, idx) => (
                <a
                  key={idx}
                  href={getWhatsAppLink(opt.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-stone-200/90 text-xs font-medium text-[#102B38] hover:border-[#C7B49A] hover:bg-stone-50 transition-all group"
                >
                  <span className="truncate pr-2">{opt.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#102B38] group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </a>
              ))}
            </div>

            <div className="mt-3 pt-3 border-t border-stone-200/80">
              <a
                href={getWhatsAppLink('Hola, Sfera Arquitectura. Me gustaría conversar sobre mi próximo proyecto.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#102B38] text-white rounded-lg text-xs font-medium tracking-wide uppercase hover:bg-[#1A3E50] transition-colors shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                Abrir chat directo
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="flex items-center gap-3">
        {!isOpen && (
          <span className="hidden sm:inline-block px-3 py-1.5 bg-[#102B38] text-white text-xs font-medium rounded-full shadow-lg border border-stone-700/30 tracking-wide pointer-events-none">
            Asesoría por WhatsApp
          </span>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Cerrar opciones de WhatsApp' : 'Abrir chat de WhatsApp con Sfera Arquitectura'}
          className="relative group w-14 h-14 rounded-full bg-[#102B38] text-[#C7B49A] hover:text-white hover:bg-[#183C4E] flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-[#C7B49A]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C7B49A] focus-visible:ring-offset-2"
        >
          {/* Subtle pulsating ring */}
          <span className="absolute -inset-1 rounded-full bg-[#C7B49A]/20 opacity-70 group-hover:opacity-100 animate-ping pointer-events-none" />

          {isOpen ? (
            <X className="w-6 h-6 text-white relative z-10" />
          ) : (
            <div className="relative z-10 flex items-center justify-center">
              {/* WhatsApp custom vector icon */}
              <svg
                viewBox="0 0 24 24"
                className="w-7 h-7 fill-current transition-transform duration-300 group-hover:rotate-6"
              >
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15ZM16.56 14.39C16.31 14.27 15.1 13.67 14.87 13.58C14.65 13.5 14.48 13.46 14.32 13.71C14.15 13.96 13.68 14.51 13.53 14.68C13.39 14.84 13.24 14.86 12.99 14.74C12.75 14.61 11.96 14.36 11.02 13.52C10.29 12.87 9.8 12.07 9.65 11.82C9.51 11.58 9.64 11.44 9.76 11.32C9.87 11.21 10.01 11.03 10.13 10.88C10.26 10.74 10.3 10.63 10.38 10.47C10.46 10.3 10.42 10.16 10.36 10.03C10.3 9.91 9.8 8.68 9.59 8.18C9.39 7.69 9.18 7.76 9.03 7.75C8.88 7.74 8.71 7.74 8.55 7.74C8.38 7.74 8.11 7.8 7.89 8.05C7.66 8.3 7.02 8.9 7.02 10.12C7.02 11.34 7.91 12.51 8.03 12.67C8.16 12.84 9.77 15.31 12.24 16.37C12.83 16.63 13.28 16.78 13.64 16.9C14.23 17.08 14.77 17.06 15.2 16.99C15.68 16.92 16.67 16.39 16.88 15.8C17.08 15.22 17.08 14.72 17.02 14.61C16.96 14.51 16.81 14.45 16.56 14.39Z" />
              </svg>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};
