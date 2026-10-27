/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { SEO } from './components/SEO';
import { ScrollToTop } from './components/ScrollToTop';
import { ConsultationModal } from './components/ConsultationModal';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationService, setConsultationService] = useState<string>('Diseño arquitectónico');

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) {
      setConsultationService(serviceName);
    }
    setConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setConsultationOpen(false);
  };

  return (
    <BrowserRouter>
      <SEO />
      <ScrollToTop />

      <div className="min-h-screen flex flex-col bg-[#F4F3EF] text-[#30383D]">
        {/* Navigation Bar */}
        <Navbar onOpenConsultation={() => handleOpenConsultation()} />

        {/* Main Content Area */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onOpenConsultation={() => handleOpenConsultation()} />} />
            <Route path="/nosotros" element={<About onOpenConsultation={() => handleOpenConsultation()} />} />
            <Route
              path="/servicios"
              element={
                <Services
                  onOpenConsultationWithService={(srv) => handleOpenConsultation(srv)}
                />
              }
            />
            <Route path="/contacto" element={<Contact />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Floating WhatsApp Conversion Button */}
        <WhatsAppButton />

        {/* Global Footer */}
        <Footer />

        {/* Consultation Quick Modal */}
        <ConsultationModal
          isOpen={consultationOpen}
          onClose={handleCloseConsultation}
          defaultService={consultationService}
        />
      </div>
    </BrowserRouter>
  );
}
