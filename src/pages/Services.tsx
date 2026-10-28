import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronDown, MessageSquare, ArrowUpRight, Check, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';
import { SERVICES_DATA, getWhatsAppLink, ServiceItem } from '../data/servicesData';
import { FAQ_DATA } from '../data/faqData';

interface ServicesProps {
  onOpenConsultationWithService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenConsultationWithService }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('solicitar-asesoria');
  const location = useLocation();

  // Scroll to hash if provided (e.g., #diseno-interiores)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.hash]);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="bg-[#F4F3EF] text-[#30383D] pt-24 sm:pt-28">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative py-24 sm:py-32 bg-[#102B38] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80"
            alt="Mesa de diseño y planos arquitectónicos"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C7B49A] mb-3 block">
            Servicios Profesionales
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal leading-[1.12] text-white mb-6">
            Soluciones arquitectónicas para cada espacio.
          </h1>
          <p className="text-base sm:text-xl text-stone-200 font-light leading-relaxed max-w-3xl mx-auto">
            Desde la idea inicial hasta el desarrollo de tu proyecto, ofrecemos soluciones adaptadas a tus necesidades,
            tus objetivos y las características de cada espacio.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SERVICES DETAILED BREAKDOWN (6 SERVICES)
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F4F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {SERVICES_DATA.map((srv: ServiceItem, index: number) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={srv.id}
                id={srv.id}
                className="scroll-mt-28 bg-white rounded-sm border border-stone-200/90 shadow-sm overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Service Image Column */}
                  <div
                    className={`lg:col-span-6 relative bg-stone-900 min-h-[320px] sm:min-h-[420px] ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <img
                      src={srv.image}
                      alt={srv.imageAlt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span className="absolute top-6 left-6 font-serif text-3xl text-white/90 drop-shadow">
                      {srv.number}
                    </span>
                  </div>

                  {/* Service Details Column */}
                  <div
                    className={`lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-6 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div>
                      <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#102B38] mb-4">
                        {srv.title}
                      </h2>

                      <p className="text-sm sm:text-base text-[#30383D] leading-relaxed font-light mb-6">
                        {srv.fullDesc}
                      </p>

                      {/* Main Benefits List */}
                      <div className="space-y-3 pt-2 border-t border-stone-100">
                        <h4 className="text-xs uppercase tracking-wider font-semibold text-[#102B38]">
                          Beneficios y Alcance Clave
                        </h4>
                        <ul className="space-y-2">
                          {srv.benefits.map((benefit, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                              <span className="w-4 h-4 rounded-full bg-[#102B38]/10 text-[#102B38] flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check className="w-2.5 h-2.5" />
                              </span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action Area with WhatsApp contextual trigger */}
                    <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <button
                        onClick={() => onOpenConsultationWithService(srv.title)}
                        className="px-6 py-3 bg-[#102B38] text-white text-xs font-semibold uppercase tracking-[0.14em] rounded-sm hover:bg-[#183C4E] transition-colors shadow-sm flex items-center justify-center gap-2"
                      >
                        <span>Solicitar asesoría</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#C7B49A]" />
                      </button>

                      <a
                        href={getWhatsAppLink(srv.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 bg-stone-100 text-stone-800 hover:text-[#102B38] hover:bg-stone-200 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors border border-stone-200 flex items-center justify-center gap-2"
                      >
                        <MessageSquare className="w-4 h-4 text-[#102B38]" />
                        <span>Consultar en WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          FAQ ACCORDION SECTION
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-b border-stone-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#102B38]">
              Resolución de Inquietudes
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#102B38] mt-2 mb-4">
              Preguntas frecuentes.
            </h2>
            <p className="text-sm text-stone-600 font-light leading-relaxed">
              Encuentra respuestas claras y transparentes sobre nuestros alcances, proceso de cotización y dinámicas de trabajo.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {FAQ_DATA.map((faq) => {
              const isOpen = openFaqId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`rounded-sm border transition-colors ${
                    isOpen ? 'border-[#102B38] bg-[#F4F3EF]/60 shadow-xs' : 'border-stone-200/80 bg-white hover:border-stone-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full py-5 px-6 flex items-center justify-between text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#102B38]"
                  >
                    <span className="font-serif text-lg sm:text-xl font-medium text-[#102B38]">
                      {faq.question}
                    </span>
                    <span
                      className={`p-1.5 rounded-full text-stone-500 transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-[#102B38] bg-white' : ''
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-[#30383D] leading-relaxed font-light border-t border-stone-200/50">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 p-6 bg-[#F4F3EF] rounded-sm border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-[#C7B49A] flex-shrink-0" />
              <p className="text-xs text-stone-700">
                ¿Tienes una consulta específica sobre tu inmueble que no aparece aquí?
              </p>
            </div>
            <a
              href={getWhatsAppLink('Hola, Sfera Arquitectura. Tengo una consulta específica sobre mi proyecto que me gustaría revisar con ustedes.')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold uppercase tracking-wider text-[#102B38] hover:text-[#C7B49A] whitespace-nowrap inline-flex items-center gap-1 transition-colors"
            >
              <span>Escríbenos por WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CALL TO ACTION (CTA)
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#102B38] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C7B49A]">
            Evaluación Personalizada
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
            Cuéntanos tu idea y encontremos la mejor solución.
          </h2>
          <p className="text-base text-stone-300 font-light max-w-xl mx-auto leading-relaxed">
            Sin compromisos iniciales. Te asesoramos para dimensionar el alcance ideal y brindarte un presupuesto transparente.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contacto"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C7B49A] text-[#102B38] text-xs font-semibold tracking-[0.16em] uppercase rounded-sm hover:bg-[#E8DFD3] transition-colors shadow-lg"
            >
              <span>Cotizar mi proyecto</span>
              <ArrowRight className="w-4 h-4 text-[#102B38]" />
            </Link>

            <a
              href={getWhatsAppLink('Hola, Sfera Arquitectura. Quisiera cotizar un proyecto arquitectónico.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/30 text-white text-xs font-semibold tracking-[0.16em] uppercase rounded-sm hover:bg-white/10 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#C7B49A]" />
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
