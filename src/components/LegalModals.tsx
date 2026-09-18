import React from 'react';
import { X, ShieldCheck, FileText, Cookie } from 'lucide-react';
import { Language } from '../types';

interface LegalModalsProps {
  activeModal: 'impressum' | 'datenschutz' | 'cookiePolicy' | null;
  onClose: () => void;
  currentLang: Language;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ activeModal, onClose, currentLang }) => {
  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-[#0d1321] border border-slate-700 text-slate-200 p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {activeModal === 'impressum' && (
          <div className="space-y-4 text-sm leading-relaxed">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-lg mb-2">
              <ShieldCheck className="w-6 h-6" />
              <h2>Impressum (Angaben gemäß § 5 TMG)</h2>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <p className="font-bold text-white text-base">Go Trend Marketing Agency</p>
              <p>Inhaber / Vertretungsberechtigt: <strong>Fedaa Alsamra</strong></p>
              <p>Adresse: Im Lörenkamp 24, 45879 Gelsenkirchen, Deutschland</p>
              <p>Telefon: <a href="tel:+4915783457397" className="text-cyan-400 underline">+49 15783457397</a></p>
              <p>E-Mail: <a href="mailto:info@go-trend-marketing.de" className="text-cyan-400 underline">info@go-trend-marketing.de</a></p>
              <p>Website: <a href="https://go-trend-marketing.de/" target="_blank" rel="noreferrer" className="text-cyan-400 underline">go-trend-marketing.de</a></p>
            </div>

            <h3 className="font-bold text-white text-base mt-4">Umsatzsteuer-Hinweis</h3>
            <p className="text-slate-300">
              Gemäß § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerstatus) bzw. Angaben gemäß geltendem deutschem Steuerrecht.
            </p>

            <h3 className="font-bold text-white text-base mt-4">EU-Streitschlichtung</h3>
            <p className="text-slate-300">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noreferrer" className="text-cyan-400 underline ml-1">
                https://ec.europa.eu/consumers/odr/
              </a>. Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </div>
        )}

        {activeModal === 'datenschutz' && (
          <div className="space-y-4 text-sm leading-relaxed">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-lg mb-2">
              <FileText className="w-6 h-6" />
              <h2>Datenschutzerklärung (DSGVO / GDPR)</h2>
            </div>

            <p className="text-slate-300">
              Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften (DSGVO) sowie dieser Datenschutzerklärung.
            </p>

            <h3 className="font-bold text-white text-base">1. Verantwortliche Stelle</h3>
            <p className="text-slate-300">
              Go Trend Marketing Agency<br />
              Fedaa Alsamra<br />
              Im Lörenkamp 24, 45879 Gelsenkirchen<br />
              E-Mail: info@go-trend-marketing.de
            </p>

            <h3 className="font-bold text-white text-base">2. Datenerfassung bei Terminbuchung</h3>
            <p className="text-slate-300">
              Wenn Sie über unser direktes Buchungssystem einen Termin vereinbaren, werden Ihr Name, E-Mail-Adresse, Telefonnummer und optionale Projektdaten ausschließlich zur Vorbereitung und Durchführung der Beratung erhoben und gespeichert.
            </p>

            <h3 className="font-bold text-white text-base">3. Hosting und Cloud-Infrastruktur</h3>
            <p className="text-slate-300">
              Diese Website wird auf hochsicheren Cloud-Servern (u.a. AWS Frankfurt Region) gehostet, die den strengen europäischen Datenschutzstandards genügen. Datenübertragungen erfolgen ausnahmslos SSL/TLS-verschlüsselt.
            </p>
          </div>
        )}

        {activeModal === 'cookiePolicy' && (
          <div className="space-y-4 text-sm leading-relaxed">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-lg mb-2">
              <Cookie className="w-6 h-6" />
              <h2>Cookie Policy</h2>
            </div>

            <p className="text-slate-300">
              Wir verwenden Cookies und vergleichbare Technologien, um die ordnungsgemäße Funktion unserer Dienste sicherzustellen, Spracheinstellungen zu speichern und die Nutzung unserer Website anonym auszuwerten.
            </p>

            <h3 className="font-bold text-white text-base">Arten von Cookies</h3>
            <ul className="list-disc list-inside space-y-1 text-slate-300">
              <li><strong>Notwendige Cookies:</strong> Erforderlich für den Betrieb der Website und das Buchungssystem.</li>
              <li><strong>Analyse-Cookies:</strong> Ermöglichen es uns, die Ladezeiten und Besucherinteraktionen anonym zu messen.</li>
              <li><strong>Marketing-Cookies:</strong> Helfen bei der Reichweitenmessung unserer Werbekampagnen auf Google und Meta.</li>
            </ul>

            <p className="text-slate-300 mt-2">
              Sie können Ihre Cookie-Einstellungen jederzeit über das Cookie-Symbol am linken unteren Bildschirmrand anpassen oder widerrufen.
            </p>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs hover:bg-cyan-300 transition-colors cursor-pointer"
          >
            Schließen / Close
          </button>
        </div>
      </div>
    </div>
  );
};
