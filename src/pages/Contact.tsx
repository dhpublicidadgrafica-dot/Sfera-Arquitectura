import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, Send, CheckCircle2, AlertCircle, ArrowUpRight, Copy, Check } from 'lucide-react';
import { OFFICIAL_PHONE, OFFICIAL_EMAIL, OFFICIAL_PHONE_CLEAN, SERVICES_DATA } from '../data/servicesData';

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  projectType: string;
  city: string;
  budget: string;
  description: string;
  privacyConsent: boolean;
  honeypot: string; // Anti-spam bot field
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  service?: string;
  city?: string;
  description?: string;
  privacyConsent?: string;
}

export const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    phone: '',
    email: '',
    service: 'Diseño arquitectónico',
    projectType: 'Residencial (Casa o Apartamento)',
    city: '',
    budget: '',
    description: '',
    privacyConsent: false,
    honeypot: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [preparedSubmission, setPreparedSubmission] = useState<{
    whatsappUrl: string;
    emailUrl: string;
    summaryText: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  const projectTypeOptions = [
    'Residencial (Casa o Apartamento)',
    'Cocina, Baño o Zona Social',
    'Comercial o Corporativo',
    'Lote o Terreno por desarrollar',
    'Finca o Casa Campestre',
    'Otro tipo de espacio'
  ];

  const budgetOptions = [
    'Por definir / En evaluación',
    'Menos de $15.000.000 COP',
    'Entre $15.000.000 y $40.000.000 COP',
    'Entre $40.000.000 y $100.000.000 COP',
    'Más de $100.000.000 COP'
  ];

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!form.fullName.trim() || form.fullName.trim().length < 3) {
      errs.fullName = 'Por favor ingresa tu nombre completo.';
    }

    const cleanPhone = form.phone.replace(/[^0-9+]/g, '');
    if (!cleanPhone || cleanPhone.length < 7) {
      errs.phone = 'Ingresa un número telefónico o de WhatsApp válido (mínimo 7 dígitos).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim() || !emailRegex.test(form.email.trim())) {
      errs.email = 'Ingresa un correo electrónico válido (ej. nombre@correo.com).';
    }

    if (!form.city.trim() || form.city.trim().length < 2) {
      errs.city = 'Indica la ciudad o municipio donde se encuentra el proyecto.';
    }

    if (!form.description.trim() || form.description.trim().length < 10) {
      errs.description = 'Describe brevemente qué deseas diseñar, remodelar o construir (mínimo 10 caracteres).';
    }

    if (!form.privacyConsent) {
      errs.privacyConsent = 'Debes aceptar la autorización para el tratamiento de datos para continuar.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const generateMessageBody = (): string => {
    return `*SOLICITUD DE ASESORÍA — SFERA ARQUITECTURA*
----------------------------------------
👤 *Cliente:* ${form.fullName.trim()}
📱 *WhatsApp/Tel:* ${form.phone.trim()}
✉️ *Correo:* ${form.email.trim()}
📐 *Servicio de interés:* ${form.service}
🏠 *Tipo de proyecto:* ${form.projectType}
📍 *Ciudad/Ubicación:* ${form.city.trim()}
💰 *Presupuesto estimado:* ${form.budget || 'A convenir / Por definir'}

📝 *Descripción del proyecto:*
${form.description.trim()}
----------------------------------------
Enviado desde el sitio web corporativo de Sfera Arquitectura.`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-bot check: if honeypot has a value, silent abort
    if (form.honeypot) return;

    if (!validate()) return;

    setIsSubmitting(true);

    const messageText = generateMessageBody();
    const whatsappUrl = `https://wa.me/${OFFICIAL_PHONE_CLEAN}?text=${encodeURIComponent(messageText)}`;

    const emailSubject = encodeURIComponent(`Nueva Solicitud: ${form.service} - ${form.fullName}`);
    const emailBody = encodeURIComponent(messageText);
    const emailUrl = `mailto:${OFFICIAL_EMAIL}?subject=${emailSubject}&body=${emailBody}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setPreparedSubmission({
        whatsappUrl,
        emailUrl,
        summaryText: messageText
      });
    }, 400);
  };

  const handleCopySummary = () => {
    if (preparedSubmission) {
      navigator.clipboard.writeText(preparedSubmission.summaryText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="bg-[#F4F3EF] text-[#30383D] pt-24 sm:pt-28">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative py-24 sm:py-32 bg-[#102B38] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80"
            alt="Fachada arquitectónica iluminada al atardecer"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C7B49A] mb-3 block">
            Canal Oficial de Contacto
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal leading-[1.12] text-white mb-6">
            Hablemos de tu próximo proyecto.
          </h1>
          <p className="text-base sm:text-xl text-stone-200 font-light leading-relaxed max-w-3xl mx-auto">
            Cada proyecto comienza con una conversación. Cuéntanos qué espacio quieres diseñar,
            renovar o construir.
          </p>
        </div>
      </section>

      {/* =========================================================================
          CONTACT INFO CARDS & FORM CONTAINER
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F4F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Direct Official Contact Channels (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#102B38]">
                  Atención Inmediata
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#102B38] mt-2 mb-4 leading-tight">
                  Canales directos de comunicación.
                </h2>
                <p className="text-sm text-stone-600 leading-relaxed font-light">
                  Puedes escribirnos o llamarnos directamente. Coordinamos una primera sesión de asesoría
                  para revisar los planos, fotos o dimensiones de tu proyecto.
                </p>
              </div>

              {/* Verified Contact Cards (No fake address or fake hours) */}
              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${OFFICIAL_PHONE_CLEAN}?text=${encodeURIComponent('Hola, Sfera Arquitectura. Quiero recibir asesoría para un proyecto arquitectónico.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 bg-white rounded-sm border border-stone-200/90 shadow-xs hover:border-[#102B38] transition-all flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-full bg-[#102B38] text-[#C7B49A] flex items-center justify-center flex-shrink-0 group-hover:bg-[#183C4E] transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-stone-500 block">
                      WhatsApp Oficial
                    </span>
                    <span className="font-medium text-stone-900 text-base sm:text-lg block mt-0.5">
                      {OFFICIAL_PHONE}
                    </span>
                    <span className="text-xs text-stone-500 mt-1 inline-flex items-center gap-1 group-hover:text-[#102B38] transition-colors">
                      Escribir mensaje directo en WhatsApp
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>

                {/* Direct Phone */}
                <a
                  href={`tel:+${OFFICIAL_PHONE_CLEAN}`}
                  className="p-5 bg-white rounded-sm border border-stone-200/90 shadow-xs hover:border-[#102B38] transition-all flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-full bg-[#102B38] text-[#C7B49A] flex items-center justify-center flex-shrink-0 group-hover:bg-[#183C4E] transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-stone-500 block">
                      Línea Telefónica
                    </span>
                    <span className="font-medium text-stone-900 text-base sm:text-lg block mt-0.5">
                      {OFFICIAL_PHONE}
                    </span>
                    <span className="text-xs text-stone-500 mt-1 inline-flex items-center gap-1 group-hover:text-[#102B38] transition-colors">
                      Llamar a Sfera Arquitectura
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${OFFICIAL_EMAIL}`}
                  className="p-5 bg-white rounded-sm border border-stone-200/90 shadow-xs hover:border-[#102B38] transition-all flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-full bg-[#102B38] text-[#C7B49A] flex items-center justify-center flex-shrink-0 group-hover:bg-[#183C4E] transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-stone-500 block">
                      Correo Electrónico
                    </span>
                    <span className="font-medium text-stone-900 text-sm sm:text-base break-all block mt-0.5">
                      {OFFICIAL_EMAIL}
                    </span>
                    <span className="text-xs text-stone-500 mt-1 inline-flex items-center gap-1 group-hover:text-[#102B38] transition-colors">
                      Enviar correo formal con adjuntos
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form with Real WhatsApp / Email Dispatch (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-sm border border-stone-200/90 shadow-md p-6 sm:p-10">
                <div className="mb-8">
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#102B38]">
                    Formulario de Cotización
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#102B38] mt-1 mb-2">
                    Solicitud de asesoría técnica.
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                    Completa la información a continuación. Tu solicitud se estructurará de forma ordenada para ser atendida directamente por nuestro equipo vía WhatsApp o correo electrónico.
                  </p>
                </div>

                {/* Prepared Dispatch Modal / State Notice */}
                {preparedSubmission ? (
                  <div className="p-6 bg-[#F4F3EF] rounded-sm border border-[#102B38] space-y-5 animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-serif text-xl font-medium text-[#102B38]">
                          ¡Información lista para enviar!
                        </h4>
                        <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                          Para garantizar una entrega real e inmediata sin intermediarios ni demoras,
                          tu solicitud se despacha directamente a nuestro equipo a través de WhatsApp o correo electrónico.
                        </p>
                      </div>
                    </div>

                    {/* Formatted summary preview */}
                    <div className="relative p-4 bg-white rounded border border-stone-200 font-mono text-[11px] text-stone-800 max-h-48 overflow-y-auto whitespace-pre-line leading-relaxed">
                      {preparedSubmission.summaryText}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={preparedSubmission.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#102B38] text-white text-xs font-semibold tracking-wider uppercase rounded-sm hover:bg-[#183C4E] transition-all shadow-md group"
                      >
                        <MessageSquare className="w-4 h-4 text-[#C7B49A]" />
                        <span>Abrir y enviar por WhatsApp</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>

                      <a
                        href={preparedSubmission.emailUrl}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-stone-100 text-stone-800 hover:bg-stone-200 text-xs font-semibold tracking-wider uppercase rounded-sm transition-colors border border-stone-300"
                      >
                        <Mail className="w-4 h-4 text-stone-600" />
                        <span>Enviar por Correo</span>
                      </a>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs text-stone-500 border-t border-stone-200/80">
                      <button
                        onClick={handleCopySummary}
                        className="inline-flex items-center gap-1.5 hover:text-[#102B38] transition-colors"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700 font-medium">Copiado al portapapeles</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copiar texto de solicitud</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => setPreparedSubmission(null)}
                        className="text-stone-600 hover:text-[#102B38] underline"
                      >
                        Modificar datos
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Anti-spam honeypot (hidden from human users) */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="website_hp">No llenar si eres humano</label>
                      <input
                        id="website_hp"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={form.honeypot}
                        onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
                      />
                    </div>

                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                        Nombre completo <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.fullName}
                        onChange={(e) => {
                          setForm({ ...form, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                        }}
                        placeholder="Ej. Juan Manuel Pérez"
                        className={`w-full px-4 py-3 text-base sm:text-sm bg-stone-50 border rounded-sm focus:bg-white focus:outline-none transition-colors ${
                          errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-stone-300 focus:border-[#102B38]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone and Email in 2 columns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                          Teléfono o WhatsApp <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => {
                            setForm({ ...form, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: undefined });
                          }}
                          placeholder="Ej. +57 310 123 4567"
                          className={`w-full px-4 py-3 text-base sm:text-sm bg-stone-50 border rounded-sm focus:bg-white focus:outline-none transition-colors ${
                            errors.phone ? 'border-red-500 focus:border-red-500' : 'border-stone-300 focus:border-[#102B38]'
                          }`}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                          Correo electrónico <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => {
                            setForm({ ...form, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: undefined });
                          }}
                          placeholder="nombre@ejemplo.com"
                          className={`w-full px-4 py-3 text-base sm:text-sm bg-stone-50 border rounded-sm focus:bg-white focus:outline-none transition-colors ${
                            errors.email ? 'border-red-500 focus:border-red-500' : 'border-stone-300 focus:border-[#102B38]'
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Service & Project Type in 2 columns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                          Servicio de interés <span className="text-red-600">*</span>
                        </label>
                        <select
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className="w-full px-4 py-3 text-base sm:text-sm bg-stone-50 border border-stone-300 rounded-sm focus:bg-white focus:border-[#102B38] focus:outline-none transition-colors"
                        >
                          {SERVICES_DATA.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                          Tipo de espacio o proyecto
                        </label>
                        <select
                          value={form.projectType}
                          onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                          className="w-full px-4 py-3 text-base sm:text-sm bg-stone-50 border border-stone-300 rounded-sm focus:bg-white focus:border-[#102B38] focus:outline-none transition-colors"
                        >
                          {projectTypeOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* City & Estimated Budget in 2 columns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                          Ciudad o Municipio <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={form.city}
                          onChange={(e) => {
                            setForm({ ...form, city: e.target.value });
                            if (errors.city) setErrors({ ...errors, city: undefined });
                          }}
                          placeholder="Ej. Medellín / Bogotá / Cali / Rionegro"
                          className={`w-full px-4 py-3 text-base sm:text-sm bg-stone-50 border rounded-sm focus:bg-white focus:outline-none transition-colors ${
                            errors.city ? 'border-red-500 focus:border-red-500' : 'border-stone-300 focus:border-[#102B38]'
                          }`}
                        />
                        {errors.city && (
                          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.city}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                          Presupuesto estimado (Opcional)
                        </label>
                        <select
                          value={form.budget}
                          onChange={(e) => setForm({ ...form, budget: e.target.value })}
                          className="w-full px-4 py-3 text-base sm:text-sm bg-stone-50 border border-stone-300 rounded-sm focus:bg-white focus:border-[#102B38] focus:outline-none transition-colors"
                        >
                          <option value="">Selecciona un rango aproximado</option>
                          {budgetOptions.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Project Description */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                        Descripción del proyecto <span className="text-red-600">*</span>
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={form.description}
                        onChange={(e) => {
                          setForm({ ...form, description: e.target.value });
                          if (errors.description) setErrors({ ...errors, description: undefined });
                        }}
                        placeholder="Cuéntanos sobre el espacio: dimensiones aproximadas, qué actividades se realizarán, estado actual y tus expectativas de diseño..."
                        className={`w-full px-4 py-3 text-base sm:text-sm bg-stone-50 border rounded-sm focus:bg-white focus:outline-none transition-colors ${
                          errors.description ? 'border-red-500 focus:border-red-500' : 'border-stone-300 focus:border-[#102B38]'
                        }`}
                      />
                      {errors.description && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.description}</span>
                        </p>
                      )}
                    </div>

                    {/* Privacy and Data Protection Consent */}
                    <div className="pt-1">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={form.privacyConsent}
                          onChange={(e) => {
                            setForm({ ...form, privacyConsent: e.target.checked });
                            if (errors.privacyConsent) setErrors({ ...errors, privacyConsent: undefined });
                          }}
                          className="mt-0.5 w-4 h-4 text-[#102B38] border-stone-300 rounded focus:ring-[#102B38]"
                        />
                        <span className="text-xs text-stone-600 leading-normal">
                          Autorizo el tratamiento de mis datos de contacto por parte de <strong>Sfera Arquitectura</strong> con el único fin de recibir orientación y cotización técnica para el proyecto solicitado.
                        </span>
                      </label>
                      {errors.privacyConsent && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.privacyConsent}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 px-6 bg-[#102B38] text-white text-xs font-semibold tracking-[0.16em] uppercase rounded-sm hover:bg-[#183C4E] disabled:opacity-60 transition-all shadow-md flex items-center justify-center gap-2 group"
                      >
                        {isSubmitting ? (
                          <span>Estructurando solicitud...</span>
                        ) : (
                          <>
                            <span>Enviar solicitud de asesoría</span>
                            <Send className="w-4 h-4 text-[#C7B49A] group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
