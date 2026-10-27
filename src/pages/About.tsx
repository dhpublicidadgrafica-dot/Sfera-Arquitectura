import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface AboutProps {
  onOpenConsultation: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenConsultation }) => {
  return (
    <div className="bg-[#F4F3EF] text-[#30383D] pt-24 sm:pt-28">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative py-24 sm:py-32 bg-[#102B38] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="/hero-equipo.jpg"
            alt="Equipo de arquitectos e ingenieros analizando planos en obra"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C7B49A] mb-3 block">
            Sobre Sfera Arquitectura
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal leading-[1.12] text-white mb-6">
            Diseñamos con propósito. Creamos para transformar.
          </h1>
          <p className="text-base sm:text-xl text-stone-200 font-light leading-relaxed max-w-3xl mx-auto">
            Creemos que la arquitectura va más allá de construir espacios: consiste en comprender las
            necesidades de las personas y convertirlas en ambientes que mejoren su experiencia cotidiana.
          </p>
        </div>
      </section>

      {/* =========================================================================
          QUIÉNES SOMOS
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F4F3EF] border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Architectural Visual */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-sm overflow-hidden shadow-xl border border-stone-200 aspect-[4/5] bg-stone-900">
                <img
                  src="/nosotros-quienes-somos.jpg"
                  alt="Arquitecto director de proyecto con planos en obra residencial"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-4 bg-white rounded border border-stone-200/80 shadow-md -mt-8 mx-4 relative z-10 text-xs text-stone-600">
                <span className="font-semibold text-[#102B38] block mb-0.5">Sfera Arquitectura</span>
                Diseño arquitectónico contemporáneo, interiorismo sensible y soluciones constructivas con rigor.
              </div>
            </div>

            {/* Editorial Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#102B38]">
                Quiénes Somos
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#102B38] leading-tight">
                Integración armónica entre estética, funcionalidad y calidad.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed font-light">
                <p>
                  <strong>Sfera Arquitectura</strong> es una empresa dedicada a desarrollar soluciones integrales
                  de diseño arquitectónico, arquitectura de interiores, remodelación de espacios y acompañamiento
                  de obras, enfocada en proyectar ambientes que conjugan pureza geométrica, confort térmico y lumínico,
                  y aprovechamiento inteligente de cada área.
                </p>
                <p>
                  Nuestro trabajo se caracteriza por una atención cercana y personalizada. No concebimos los proyectos
                  como meros planos técnicos, sino como escenarios de vida: lugares donde las personas descansan,
                  conviven, trabajan e interactúan día a día.
                </p>
                <p>
                  Cada intervención se aborda desde el respeto por las características preexistentes del lugar,
                  la selección rigurosa de materiales nobles y la búsqueda constante de soluciones espaciales
                  que maximicen la inversión y el valor patrimonial del cliente.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 text-xs font-medium text-[#102B38]">
                <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded border border-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-[#C7B49A]" />
                  <span>Atención individualizada por proyecto</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded border border-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-[#C7B49A]" />
                  <span>Planes modulares según tus objetivos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          NUESTRA FILOSOFÍA (3 BLOQUES ESPECIFICADOS)
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#102B38]">
              Pilares Fundamentales
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#102B38] mt-2 mb-4 leading-tight">
              Nuestra filosofía.
            </h2>
            <p className="text-base text-stone-600 font-light">
              Tres convicciones guían cada boceto, cada decisión material y cada propuesta espacial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pilar 1 */}
            <div className="p-8 bg-[#F4F3EF] rounded-sm border border-stone-200 space-y-4 hover:border-[#102B38] transition-all">
              <span className="text-xs font-serif text-[#C7B49A] font-bold text-lg">01</span>
              <h3 className="font-serif text-2xl font-medium text-[#102B38]">
                Diseño con intención
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                Cada muro, cada vano, cada luminaria y cada textura responde a una necesidad concreta.
                Rechazamos los artificios innecesarios para privilegiar la armonía visual, la serenidad
                y el propósito funcional de cada ambiente.
              </p>
            </div>

            {/* Pilar 2 */}
            <div className="p-8 bg-[#F4F3EF] rounded-sm border border-stone-200 space-y-4 hover:border-[#102B38] transition-all">
              <span className="text-xs font-serif text-[#C7B49A] font-bold text-lg">02</span>
              <h3 className="font-serif text-2xl font-medium text-[#102B38]">
                Funcionalidad inteligente
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                Un espacio bello solo trasciende si funciona impecablemente. Proyectamos circulaciones
                cómodas, almacenamiento invisible y transiciones fluidas que facilitan la vida cotidiana
                y optimizan cada metro cuadrado.
              </p>
            </div>

            {/* Pilar 3 */}
            <div className="p-8 bg-[#F4F3EF] rounded-sm border border-stone-200 space-y-4 hover:border-[#102B38] transition-all">
              <span className="text-xs font-serif text-[#C7B49A] font-bold text-lg">03</span>
              <h3 className="font-serif text-2xl font-medium text-[#102B38]">
                Calidad en los detalles
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                Los acabados, los encuentros entre materiales y la iluminación definen la verdadera elegancia
                arquitectónica. Seleccionamos materiales coherentes y duraderos que envejecen con dignidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MISIÓN Y VISIÓN (SECCIONES EDITABLES CON PROPUESTA INICIAL)
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F4F3EF] border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#102B38]">
              Marco Estratégico
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#102B38] mt-2 mb-3">
              Misión y visión corporativa.
            </h2>
            <p className="text-xs text-stone-500 italic">
              * Propuesta inicial formulada para revisión y ajuste institucional por parte de la empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Misión */}
            <div className="p-8 bg-white rounded-sm border border-stone-200/90 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#102B38] text-[#C7B49A] flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#102B38]">
                Nuestra Misión
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed font-light">
                Concebir y desarrollar proyectos arquitectónicos y de interiorismo que respondan con honestidad,
                creatividad y precisión técnica a los anhelos de nuestros clientes. Buscamos transformar
                espacios en entornos habitables, elegantes y eficientes que eleven el bienestar y potencien
                el valor funcional de cada edificación.
              </p>
            </div>

            {/* Visión */}
            <div className="p-8 bg-white rounded-sm border border-stone-200/90 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#102B38] text-[#C7B49A] flex items-center justify-center">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#102B38]">
                Nuestra Visión
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed font-light">
                Consolidarnos como un referente confiable de diseño arquitectónico y de interiores contemporáneo,
                reconocido por la sensibilidad estética de nuestras propuestas, el rigor técnico en la planimetría
                y un trato profesional y transparente que construya relaciones de largo plazo con nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CIERRE / CTA NOSOTROS
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#102B38] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C7B49A]">
            Comienza Hoy
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
            Hagamos realidad un espacio pensado para ti.
          </h2>
          <p className="text-base text-stone-300 font-light max-w-xl mx-auto leading-relaxed">
            Conoce a detalle nuestros servicios especializados o comunícate con nosotros para agendar tu primera sesión de asesoría.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/servicios"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C7B49A] text-[#102B38] text-xs font-semibold tracking-[0.16em] uppercase rounded-sm hover:bg-[#E8DFD3] transition-colors shadow-lg"
            >
              <span>Conoce nuestros servicios</span>
              <ArrowRight className="w-4 h-4 text-[#102B38]" />
            </Link>

            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/30 text-white text-xs font-semibold tracking-[0.16em] uppercase rounded-sm hover:bg-white/10 transition-colors"
            >
              <span>Agenda una asesoría</span>
              <ArrowUpRight className="w-4 h-4 text-[#C7B49A]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
