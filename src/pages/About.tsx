import React from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Users,
  Building2,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  CalendarCheck,
  Target
} from 'lucide-react';

interface AboutProps {
  onOpenConsultation: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenConsultation }) => {
  const values = [
    {
      number: '01',
      title: 'Rigor técnico',
      description:
        'Cada decisión se fundamenta en criterios profesionales de arquitectura e ingeniería, con planificación, precisión y atención al detalle en todas las etapas del proyecto.',
      icon: Compass
    },
    {
      number: '02',
      title: 'Transparencia y confianza',
      description:
        'Construimos relaciones basadas en la honestidad, la comunicación clara y la transparencia en los procesos, los costos y las decisiones que involucran cada proyecto.',
      icon: ShieldCheck
    },
    {
      number: '03',
      title: 'Rentabilidad inteligente',
      description:
        'Optimizamos los recursos y controlamos los costos mediante una gestión estratégica que busca maximizar el valor de cada inversión sin sacrificar la calidad.',
      icon: TrendingUp
    },
    {
      number: '04',
      title: 'Diseño con calidad y propósito',
      description:
        'Creamos propuestas arquitectónicas que integran estética, funcionalidad y aprovechamiento inteligente de los espacios, respondiendo a las necesidades y expectativas de cada cliente.',
      icon: Sparkles
    },
    {
      number: '05',
      title: 'Planeación sin improvisación',
      description:
        'Anticipamos necesidades, evaluamos alternativas y estructuramos cada etapa del proyecto para reducir incertidumbres, prevenir sobrecostos y facilitar una ejecución organizada.',
      icon: CalendarCheck
    }
  ];

  return (
    <div className="bg-[#F4F3EF] text-[#30383D] pt-24 sm:pt-28">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative py-24 sm:py-32 bg-[#102B38] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="/hero-equipo.jpg"
            alt="Equipo de arquitectura e ingeniería revisando planos frente a ventanal"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#102B38]/95 via-[#102B38]/85 to-[#102B38]/70" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="flex items-center justify-center gap-2.5 text-xs font-semibold tracking-[0.25em] uppercase text-[#C7B49A]">
            <Compass className="w-4 h-4" />
            <span>Sobre Sfera Arquitectura</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] text-white max-w-4xl mx-auto">
            Excelencia técnica, planeación estratégica y visión arquitectónica.
          </h1>

          <p className="text-base sm:text-xl text-stone-200 font-light leading-relaxed max-w-3xl mx-auto">
            Diseñamos y ejecutamos proyectos de arquitectura e ingeniería civil con procesos rigurosos que eliminan la improvisación y protegen tu inversión.
          </p>
        </div>
      </section>

      {/* =========================================================================
          1. MISIÓN
          ========================================================================= */}
      <section id="mision" className="py-20 sm:py-28 bg-[#F4F3EF] border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
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
                Arquitectura de calidad, ingeniería civil precisa y ejecución responsable.
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#102B38]">
                <Target className="w-4 h-4 text-[#C7B49A]" />
                <span>1. Misión</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#102B38] leading-tight">
                Transformamos ideas en espacios funcionales, estéticos y sostenibles.
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed font-light">
                <p>
                  Diseñamos y ejecutamos proyectos de arquitectura e ingeniería civil con excelencia técnica,
                  planeación estratégica y un compromiso absoluto con la calidad. Transformamos ideas en espacios
                  funcionales, estéticos y sostenibles, mediante procesos rigurosos que eliminan la improvisación
                  y garantizan decisiones fundamentadas en criterios profesionales.
                </p>
                <p>
                  Cada proyecto es una oportunidad para crear valor, optimizar recursos y materializar soluciones
                  arquitectónicas que respondan a las necesidades de nuestros clientes, protegiendo su inversión
                  y cumpliendo con los más altos estándares de calidad.
                </p>
              </div>

              <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-medium text-[#102B38]">
                <div className="flex items-center gap-2 bg-white px-3.5 py-2.5 rounded border border-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-[#C7B49A] flex-shrink-0" />
                  <span>Procesos rigurosos sin improvisación</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3.5 py-2.5 rounded border border-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-[#C7B49A] flex-shrink-0" />
                  <span>Decisiones fundamentadas en criterio técnico</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3.5 py-2.5 rounded border border-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-[#C7B49A] flex-shrink-0" />
                  <span>Protección y optimización de la inversión</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3.5 py-2.5 rounded border border-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-[#C7B49A] flex-shrink-0" />
                  <span>Cumplimiento con altos estándares constructivos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. NUESTRA PROPUESTA DE VALOR
          ========================================================================= */}
      <section id="propuesta-de-valor" className="py-20 sm:py-28 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#102B38]">
              2. Nuestra propuesta de valor
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#102B38] mt-2 mb-4 leading-tight">
              Diseño excepcional, rigor técnico y rentabilidad inteligente.
            </h2>
            <div className="space-y-4 text-base text-stone-700 leading-relaxed font-light">
              <p>
                Nos diferenciamos por integrar arquitectura de calidad, ingeniería precisa y gestión eficiente de los recursos en cada etapa del proyecto. Trabajamos con una planificación detallada, procesos transparentes y un control riguroso de los costos para optimizar cada inversión, sin comprometer la calidad, la funcionalidad ni la visión arquitectónica.
              </p>
              <p className="text-stone-900 font-medium italic border-l-2 border-[#C7B49A] pl-4">
                «Creemos que construir bien comienza mucho antes de poner la primera piedra: comienza con una estrategia clara, decisiones técnicas acertadas y una ejecución responsable.»
              </p>
            </div>
          </div>

          {/* 3 Pillars of Value */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#F4F3EF] rounded-sm border border-stone-200 space-y-4 hover:border-[#102B38] transition-all">
              <div className="w-10 h-10 rounded-full bg-[#102B38] text-[#C7B49A] flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#102B38]">
                Arquitectura de calidad
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                Espacios pensados para habitarse con plenitud. Integramos pureza geométrica, confort lumínico y térmico, y armonía visual en cada solución.
              </p>
            </div>

            <div className="p-8 bg-[#F4F3EF] rounded-sm border border-stone-200 space-y-4 hover:border-[#102B38] transition-all">
              <div className="w-10 h-10 rounded-full bg-[#102B38] text-[#C7B49A] flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#102B38]">
                Ingeniería precisa
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                Planimetría minuciosa y especificaciones exactas. Eliminamos dudas técnicas para que la ejecución constructiva sea ordenada y fiel a los diseños.
              </p>
            </div>

            <div className="p-8 bg-[#F4F3EF] rounded-sm border border-stone-200 space-y-4 hover:border-[#102B38] transition-all">
              <div className="w-10 h-10 rounded-full bg-[#102B38] text-[#C7B49A] flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#102B38]">
                Gestión eficiente y costos
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                Control presupuestal riguroso y transparencia en procesos. Optimizamos cada recurso para que tu inversión rinda con la máxima rentabilidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. ¿A QUIÉNES NOS DIRIGIMOS?
          ========================================================================= */}
      <section id="a-quienes-nos-dirigimos" className="py-20 sm:py-28 bg-[#F4F3EF] border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#102B38]">
              3. Enfoque de Clientes
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#102B38] mt-2 mb-4 leading-tight">
              ¿A quiénes nos dirigimos?
            </h2>
            <p className="text-base text-stone-600 font-light">
              Trabajamos con clientes que buscan respaldo profesional, seguridad patrimonial y una visión estratégica para sus proyectos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Target 1 */}
            <div className="p-8 sm:p-10 bg-white rounded-sm border border-stone-200/90 shadow-sm space-y-5 hover:border-[#102B38] transition-all">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#102B38] text-[#C7B49A] flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C7B49A] block">
                    Perfil 01
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#102B38]">
                    Personas, empresas e inversionistas
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-light">
                A personas, empresas e inversionistas que buscan desarrollar sus proyectos con seguridad, respaldo profesional y una visión clara de su inversión.
              </p>

              <div className="pt-2 border-t border-stone-100 flex items-center gap-2 text-xs text-[#102B38] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#C7B49A]" />
                <span>Seguridad jurídica, técnica y financiera</span>
              </div>
            </div>

            {/* Target 2 */}
            <div className="p-8 sm:p-10 bg-white rounded-sm border border-stone-200/90 shadow-sm space-y-5 hover:border-[#102B38] transition-all">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#102B38] text-[#C7B49A] flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C7B49A] block">
                    Perfil 02
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#102B38]">
                    Clientes que valoran la calidad y la transparencia
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-light">
                A clientes que valoran la arquitectura de calidad, la precisión técnica y la transparencia en cada proceso; que entienden que construir no se trata únicamente de materializar una idea, sino de hacerlo con inteligencia, planificación y resultados que generen valor a largo plazo.
              </p>

              <div className="pt-2 border-t border-stone-100 flex items-center gap-2 text-xs text-[#102B38] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#C7B49A]" />
                <span>Resultados de alto valor patrimonial a largo plazo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. NUESTROS VALORES (5 VALORES OFICIALES)
          ========================================================================= */}
      <section id="valores" className="py-20 sm:py-28 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#102B38]">
              4. Principios Fundamentales
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#102B38] mt-2 mb-4 leading-tight">
              Nuestros valores.
            </h2>
            <p className="text-base text-stone-600 font-light">
              Cinco convicciones que guían cada decisión técnica, de diseño y de gestión en Sfera Arquitectura.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v) => {
              const IconComp = v.icon;
              return (
                <div
                  key={v.number}
                  className="p-8 bg-[#F4F3EF] rounded-sm border border-stone-200 space-y-4 hover:border-[#102B38] hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-2xl font-semibold text-[#C7B49A]">
                        {v.number}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-white border border-stone-200 flex items-center justify-center text-[#102B38]">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-serif text-2xl font-medium text-[#102B38]">
                      {v.title}
                    </h3>

                    <p className="text-sm text-stone-600 leading-relaxed font-light">
                      {v.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CIERRE / CTA NOSOTROS
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#102B38] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C7B49A]">
            Inicia tu proyecto con nosotros
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight">
            Construir bien comienza con una estrategia clara y decisiones acertadas.
          </h2>
          <p className="text-base text-stone-300 font-light max-w-xl mx-auto leading-relaxed">
            Conversemos sobre tus ideas y descubre cómo podemos estructurar tu proyecto con seguridad, rigor y rentabilidad.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C7B49A] text-[#102B38] text-xs font-semibold tracking-[0.16em] uppercase rounded-sm hover:bg-[#E8DFD3] transition-colors shadow-lg"
            >
              <span>Agenda una asesoría</span>
              <ArrowUpRight className="w-4 h-4 text-[#102B38]" />
            </button>

            <Link
              to="/servicios"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/30 text-white text-xs font-semibold tracking-[0.16em] uppercase rounded-sm hover:bg-white/10 transition-colors"
            >
              <span>Conoce nuestros servicios</span>
              <ArrowRight className="w-4 h-4 text-[#C7B49A]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
