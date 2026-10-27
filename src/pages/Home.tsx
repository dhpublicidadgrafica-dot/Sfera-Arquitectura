import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Compass, Layout, CheckCircle, Sparkles, MessageSquare, Maximize2 } from 'lucide-react';
import { SERVICES_DATA, getWhatsAppLink } from '../data/servicesData';
import { PROJECTS_DATA, PROJECT_CATEGORIES, ProjectItem } from '../data/projectsData';
import { ProjectModal } from '../components/ProjectModal';

interface HomeProps {
  onOpenConsultation: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filteredProjects = selectedCategory === 'Todos'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === selectedCategory);

  const scrollToProjects = () => {
    const el = document.getElementById('proyectos-destacados');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#F4F3EF] text-[#30383D]">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#102B38] text-white overflow-hidden pt-24 sm:pt-28">
        {/* Background Architectural Photography */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
            alt="Arquitectura contemporánea con diseño sobrio y luz natural"
            className="w-full h-full object-cover object-center scale-105 transform animate-in fade-in duration-1000"
          />
          {/* Subtle architectural overlay for optimal legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#102B38]/90 via-[#102B38]/70 to-[#102B38]/50" />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
          <div className="max-w-3xl">
            {/* Architectural Kicker (clean typography, no pill) */}
            <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#C7B49A] mb-4">
              <span>Sfera Arquitectura</span>
              <span aria-hidden="true" className="w-8 h-[1px] bg-[#C7B49A]" />
              <span>Estudio Contemporáneo</span>
            </div>

            {/* Main Headline (H1) */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight text-white mb-6">
              Diseñamos espacios que inspiran.
            </h1>

            {/* Complementary Text */}
            <p className="text-base sm:text-xl text-stone-200 leading-relaxed font-light max-w-2xl mb-10">
              Transformamos tus ideas en espacios funcionales, modernos y únicos, diseñados para
              responder a tus necesidades y a tu estilo de vida.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C7B49A] text-[#102B38] text-xs font-semibold tracking-[0.16em] uppercase rounded-sm hover:bg-[#E8DFD3] transition-all shadow-xl hover:shadow-2xl transform active:scale-[0.99] group"
              >
                <span>Agenda una asesoría</span>
                <ArrowUpRight className="w-4 h-4 text-[#102B38] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-transparent border border-white/40 text-white text-xs font-semibold tracking-[0.16em] uppercase rounded-sm hover:bg-white/10 hover:border-white transition-all"
              >
                <span>Explora nuestros proyectos</span>
                <span className="text-xs">↓</span>
              </button>
            </div>

            {/* Architectural Value Indicators (No pill capsules per Constitution) */}
            <div className="mt-14 pt-8 border-t border-white/20 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7B49A]" />
                <span>Diseño Arquitectónico</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7B49A]" />
                <span>Diseño de Interiores</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7B49A]" />
                <span>Remodelaciones & 3D</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PRESENTATION SECTION
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F4F3EF] border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Editorial Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#102B38]">
                <Compass className="w-3.5 h-3.5 text-[#C7B49A]" />
                <span>Propuesta de Valor</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#102B38] leading-[1.15]">
                Arquitectura pensada para ti.
              </h2>

              <p className="text-base sm:text-lg text-[#30383D] leading-relaxed font-light">
                En Sfera Arquitectura desarrollamos proyectos que combinan diseño, funcionalidad y calidad.
                Cada espacio es una oportunidad para crear ambientes únicos, aprovechar mejor cada área
                y convertir ideas en soluciones arquitectónicas.
              </p>

              <div className="pt-2">
                <Link
                  to="/nosotros"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-[#102B38] hover:text-[#C7B49A] transition-colors group"
                >
                  <span>Conoce más sobre nuestra filosofía</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Architectural Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl border border-stone-200 aspect-[4/3] sm:aspect-[3/2]">
                <img
                  src="/presentacion-sfera.png"
                  alt="Edificación arquitectónica contemporánea con fachada en madera y estructura pergolada"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Offset Decorative Architectural Card */}
              <div className="hidden sm:block absolute -bottom-8 -left-8 z-20 bg-[#102B38] text-white p-6 rounded-sm shadow-xl max-w-xs border border-stone-800">
                <p className="text-xs uppercase tracking-widest text-[#C7B49A] font-semibold mb-1">
                  Enfoque Integral
                </p>
                <p className="text-sm font-light text-stone-200">
                  Espacios diseñados para habitarse, disfrutarse y perdurar en el tiempo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED SERVICES SECTION (6 CARDS)
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#102B38]">
              Nuestras Especialidades
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#102B38] mt-2 mb-4 leading-tight">
              Servicios pensados para cada etapa de tu proyecto.
            </h2>
            <p className="text-base text-stone-600 font-light">
              Desde la conceptualización en planos y renders 3D hasta la remodelación y adecuación física,
              ofrecemos soluciones adaptadas al alcance y características de tu espacio.
            </p>
          </div>

          {/* 6 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((srv) => (
              <div
                key={srv.id}
                className="group flex flex-col bg-[#F4F3EF] rounded-sm overflow-hidden border border-stone-200/90 hover:border-[#102B38] transition-all duration-300 hover:shadow-xl"
              >
                {/* Image Container with Subtle Zoom */}
                <div className="relative h-56 overflow-hidden bg-stone-900">
                  <img
                    src={srv.image}
                    alt={srv.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 font-serif text-lg text-white font-medium drop-shadow-md">
                    {srv.number}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#102B38] mb-2 group-hover:text-[#183C4E] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                      {srv.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between">
                    <Link
                      to={`/servicios#${srv.id}`}
                      className="text-xs font-semibold uppercase tracking-wider text-[#102B38] group-hover:text-[#C7B49A] inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Ver detalles</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <a
                      href={getWhatsAppLink(srv.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-stone-500 hover:text-[#102B38] transition-colors"
                      title="Solicitar por WhatsApp"
                      aria-label={`Solicitar ${srv.title} por WhatsApp`}
                    >
                      <MessageSquare className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#102B38] text-white text-xs font-semibold tracking-[0.16em] uppercase rounded-sm hover:bg-[#183C4E] transition-colors shadow-md"
            >
              <span>Explorar todos los servicios y preguntas frecuentes</span>
              <ArrowRight className="w-4 h-4 text-[#C7B49A]" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED PROJECTS GALLERY
          ========================================================================= */}
      <section id="proyectos-destacados" className="py-20 sm:py-28 bg-[#F4F3EF] border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#102B38]">
              Galería y Referencias
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#102B38] mt-2 leading-tight">
              Proyectos destacados.
            </h2>
          </div>

          {/* Interactive Category Filter Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar" role="tablist">
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-medium tracking-wider whitespace-nowrap rounded-sm transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-[#102B38] text-white shadow-sm'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className={`grid gap-6 ${
            selectedCategory === 'Todos'
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto'
          }`}>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setActiveProject(project)}
                className="group cursor-pointer rounded-sm overflow-hidden border border-stone-200/80 shadow-md hover:shadow-2xl transition-all duration-300 relative aspect-[16/11] bg-stone-900"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                <div className="absolute top-3 right-3 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 text-[11px] text-[#C7B49A] font-medium uppercase tracking-wider mb-1">
                    <span>{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.area}</span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-white group-hover:text-[#C7B49A] transition-colors leading-snug">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          DIFFERENTIAL SECTION (3 ATTRIBUTES - NO FAKE STATS)
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#102B38]">
              Nuestra Esencia
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#102B38] mt-2 mb-4 leading-tight">
              Diseño, funcionalidad y calidad en cada detalle.
            </h2>
            <p className="text-base text-stone-600 font-light">
              Desarrollamos cada encargo con un compromiso honesto hacia la calidad espacial y la viabilidad técnica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Attribute 1 */}
            <div className="p-8 bg-[#F4F3EF] rounded-sm border border-stone-200/80 space-y-4 hover:border-[#102B38] transition-colors">
              <div className="w-12 h-12 rounded bg-[#102B38] text-[#C7B49A] flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#102B38]">
                Diseños personalizados
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                Cada proyecto nace de un diálogo cercano para comprender tus hábitos, prioridades y presupuesto.
                No imponemos estilos rígidos; creamos soluciones a la medida de tu vida diaria.
              </p>
            </div>

            {/* Attribute 2 */}
            <div className="p-8 bg-[#F4F3EF] rounded-sm border border-stone-200/80 space-y-4 hover:border-[#102B38] transition-colors">
              <div className="w-12 h-12 rounded bg-[#102B38] text-[#C7B49A] flex items-center justify-center">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#102B38]">
                Aprovechamiento inteligente
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                Optimizamos cada metro cuadrado eliminando áreas residuales, maximizando el almacenamiento
                oculto y aprovechando al máximo la iluminación y ventilación naturales.
              </p>
            </div>

            {/* Attribute 3 */}
            <div className="p-8 bg-[#F4F3EF] rounded-sm border border-stone-200/80 space-y-4 hover:border-[#102B38] transition-colors">
              <div className="w-12 h-12 rounded bg-[#102B38] text-[#C7B49A] flex items-center justify-center">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#102B38]">
                Acompañamiento integral
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                Te guiamos durante todo el desarrollo: desde la primera idea hasta los planos de detalle
                y la supervisión técnica cuando el alcance convenido lo contempla.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CALL TO ACTION (CTA)
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#102B38] text-white relative overflow-hidden">
        {/* Subtle geometric lines */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-center">
          <div className="w-96 h-96 rounded-full border-[20px] border-white" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C7B49A]">
            Inicia tu proyecto
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white max-w-3xl mx-auto leading-tight">
            Tu próximo espacio comienza con una idea.
          </h2>
          <p className="text-base sm:text-lg text-stone-300 max-w-2xl mx-auto font-light leading-relaxed">
            Cuéntanos qué tienes en mente y conversemos sobre cómo hacerlo realidad.
          </p>

          <div className="pt-4 flex items-center justify-center">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C7B49A] text-[#102B38] text-xs font-semibold tracking-[0.16em] uppercase rounded-sm hover:bg-[#E8DFD3] transition-all shadow-xl hover:shadow-2xl group"
            >
              <span>Hablemos de tu proyecto</span>
              <ArrowUpRight className="w-4 h-4 text-[#102B38] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Project Lightbox Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  );
};
