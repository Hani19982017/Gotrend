import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ServicesPage } from './pages/ServicesPage';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { LegalModals } from './components/LegalModals';
import { MessageCircle } from 'lucide-react';

function AppContent() {
  const [currentLang, setCurrentLang] = useState<Language>('ar');
  const [activeLegalModal, setActiveLegalModal] = useState<'impressum' | 'datenschutz' | 'cookiePolicy' | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Sync HTML lang and dir attribute whenever language switches
  useEffect(() => {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  }, [currentLang]);

  const handleOpenBooking = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const bookingElem = document.getElementById('booking');
        if (bookingElem) {
          bookingElem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      const bookingElem = document.getElementById('booking');
      if (bookingElem) {
        bookingElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Navigation Bar */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Content Multi-Page Routing */}
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={<HomePage currentLang={currentLang} onOpenBooking={handleOpenBooking} />}
          />
          <Route
            path="/services"
            element={<ServicesPage currentLang={currentLang} onOpenBooking={handleOpenBooking} />}
          />
          <Route
            path="/leistungen"
            element={<ServicesPage currentLang={currentLang} onOpenBooking={handleOpenBooking} />}
          />
          <Route
            path="/about"
            element={<AboutUsPage currentLang={currentLang} onOpenBooking={handleOpenBooking} />}
          />
          <Route
            path="/uber-uns"
            element={<AboutUsPage currentLang={currentLang} onOpenBooking={handleOpenBooking} />}
          />
          <Route
            path="*"
            element={<HomePage currentLang={currentLang} onOpenBooking={handleOpenBooking} />}
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onOpenImpressum={() => setActiveLegalModal('impressum')}
        onOpenDatenschutz={() => setActiveLegalModal('datenschutz')}
        onOpenCookiePolicy={() => setActiveLegalModal('cookiePolicy')}
        onOpenBooking={handleOpenBooking}
      />

      {/* Floating WhatsApp Action Button */}
      <a
        id="floating-whatsapp-btn"
        href="https://wa.me/4915783457397?text=Hallo%20Go.Trend%20Marketing%20Germany"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-40 p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all hover:scale-110 flex items-center justify-center group"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-slate-950 text-emerald-500" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-extrabold px-0 group-hover:px-1 text-slate-950">
          WhatsApp
        </span>
      </a>

      {/* Cookie Consent Banner Matching image.png */}
      <CookieBanner
        currentLang={currentLang}
        onOpenImpressum={() => setActiveLegalModal('impressum')}
        onOpenDatenschutz={() => setActiveLegalModal('datenschutz')}
        onOpenCookiePolicy={() => setActiveLegalModal('cookiePolicy')}
      />

      {/* Legal Modals for German Compliance (Impressum, DSGVO, Cookie Policy) */}
      <LegalModals
        activeModal={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
        currentLang={currentLang}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
