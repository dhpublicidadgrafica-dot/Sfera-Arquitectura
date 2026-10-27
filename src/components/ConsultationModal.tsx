import React, { useState, useEffect } from 'react';
import { X, Send, MessageSquare, Mail, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { OFFICIAL_PHONE, OFFICIAL_EMAIL, getWhatsAppLink, SERVICES_DATA } from '../data/servicesData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultService,
}) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [selectedService, setSelectedService] = useState(defaultService || 'Diseño arquitectónico');
  const [city, setCity] = useState('');
  const [note, setNote] = useState('');

  useEffect(() => {
    if (defaultService) {
      setSelectedService(defaultService);
    }
  }, [defaultService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const buildMessage = () => {
    let msg = `Hola, Sfera Arquitectura. Quisiera agendar una asesoría para mi proyecto.`;
    if (name.trim()) msg += ` Mi nombre es ${name.trim()}.`;
    if (selectedService) msg += ` Servicio de interés: ${selectedService}.`;
    if (city.trim()) msg += ` Ciudad: ${city.trim()}.`;
    if (note.trim()) msg += ` Detalle de la idea: ${note.trim()}.`;
    return msg;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const link = getWhatsAppLink(buildMessage());
    window.open(link, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleEmailSubmit = () => {
    const subject = encodeURIComponent(`Solicitud de Asesoría - ${selectedService} - Sfera Arquitectura`);
    const body = encodeURIComponent(
      `Nombre: ${name || 'No especificado'}\n` +
      `Servicio: ${selectedService}\n` +
      `Ciudad: ${city || 'No especificada'}\n\n` +
      `Descripción del proyecto:\n${note || 'Deseo recibir asesoría para mi espacio.'}\n\n` +
      `Enviado desde el sitio web de Sfera Arquitectura.`
    );
    window.location.href = `mailto:${OFFICIAL_EMAIL}?subject=${subject}&body=${body}`;
    onClose();
  };

  const handleGoToFullForm = () => {
    onClose();
    navigate('/contacto');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-lg shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col border border-stone-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#102B38] text-white p-5 sm:p-6 relative flex-shrink-0">
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="absolute top-4 right-4 text-stone-300 hover:text-white p-1 rounded-md"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C7B49A]">
            Atención Personalizada
          </div>
          <h3 id="consultation-title" className="font-serif text-xl sm:text-2xl font-medium mt-1">
            Agenda una Asesoría
          </h3>
          <p className="text-xs text-stone-300 mt-1">
            Conversemos sobre tu espacio directamente por WhatsApp o correo oficial.
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleWhatsAppSubmit} className="p-5 sm:p-6 space-y-4 bg-white text-[#30383D] overflow-y-auto">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
              Tu Nombre (Opcional)
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej. Carolina Gómez"
              className="w-full px-3 py-2.5 text-base sm:text-sm bg-stone-50 border border-stone-300 rounded focus:border-[#102B38] focus:bg-white focus:outline-none transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                Servicio de interés
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-3 py-2.5 text-base sm:text-sm bg-stone-50 border border-stone-300 rounded focus:border-[#102B38] focus:bg-white focus:outline-none transition-colors"
              >
                {SERVICES_DATA.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                Ciudad / Ubicación
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Ej. Bogotá, Medellín, Cali..."
                className="w-full px-3 py-2.5 text-base sm:text-sm bg-stone-50 border border-stone-300 rounded focus:border-[#102B38] focus:bg-white focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
              Idea o breve descripción
            </label>
            <textarea
              rows={2}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Cuéntanos brevemente qué tienes en mente..."
              className="w-full px-3 py-2.5 text-base sm:text-sm bg-stone-50 border border-stone-300 rounded focus:border-[#102B38] focus:bg-white focus:outline-none transition-colors"
            />
          </div>

          <p className="text-[11px] text-stone-500 leading-normal">
            Al hacer clic en Continuar, se abrirá la conversación en WhatsApp con tu información estructurada para darte una respuesta inmediata.
          </p>

          <div className="pt-2 space-y-2">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#102B38] text-white text-xs font-semibold uppercase tracking-[0.15em] rounded hover:bg-[#183C4E] flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-[#C7B49A]" />
              <span>Continuar por WhatsApp ({OFFICIAL_PHONE})</span>
            </button>

            <button
              type="button"
              onClick={handleEmailSubmit}
              className="w-full py-2.5 px-4 bg-stone-100 text-stone-800 text-xs font-semibold uppercase tracking-wider rounded hover:bg-stone-200 flex items-center justify-center gap-2 transition-colors border border-stone-200"
            >
              <Mail className="w-4 h-4 text-stone-600" />
              <span>O enviar solicitud por Correo ({OFFICIAL_EMAIL})</span>
            </button>
          </div>

          <div className="pt-3 border-t border-stone-100 text-center">
            <button
              type="button"
              onClick={handleGoToFullForm}
              className="text-xs text-stone-600 hover:text-[#102B38] font-medium inline-flex items-center gap-1 transition-colors"
            >
              <span>Ver formulario detallado de Contacto con cotización</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
