import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Language } from '../types';
import { translations } from '../data/content';
import { X, Cookie, Check, Shield, Settings, ExternalLink } from 'lucide-react';

interface CookieBannerProps {
  currentLang: Language;
  onOpenImpressum: () => void;
  onOpenDatenschutz: () => void;
  onOpenCookiePolicy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({
  currentLang,
  onOpenImpressum,
  onOpenDatenschutz,
  onOpenCookiePolicy,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(true);
  const [marketingConsent, setMarketingConsent] = useState(true);

  const t = translations[currentLang];

  useEffect(() => {
    // Check if user already made a decision
    const savedConsent = localStorage.getItem('gotrend_cookie_consent');
    if (!savedConsent) {
      // Show after 1 second
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      'gotrend_cookie_consent',
      JSON.stringify({ essential: true, analytics: true, marketing: true, timestamp: Date.now() })
    );
    setIsOpen(false);
  };

  const handleDenyAll = () => {
    localStorage.setItem(
      'gotrend_cookie_consent',
      JSON.stringify({ essential: true, analytics: false, marketing: false, timestamp: Date.now() })
    );
    setIsOpen(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem(
      'gotrend_cookie_consent',
      JSON.stringify({
        essential: true,
        analytics: analyticsConsent,
        marketing: marketingConsent,
        timestamp: Date.now(),
      })
    );
    setShowPreferences(false);
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Reopen Cookie Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 left-4 z-40 p-2.5 rounded-full bg-slate-900/90 text-cyan-400 border border-slate-700 hover:border-cyan-400 hover:text-cyan-300 shadow-xl transition-all hover:scale-110 flex items-center justify-center cursor-pointer"
          title="Cookie-Einstellungen"
          aria-label="Open Cookie Settings"
        >
          <Cookie className="w-5 h-5" />
        </button>
      )}

      {/* Main Cookie Modal - Exactly styled as in image.png */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-300">
          <div
            id="cookie-consent-modal"
            className="w-full max-w-[620px] rounded-3xl bg-[#525252]/95 sm:bg-[#4a4a4a]/95 text-white border border-slate-400/20 shadow-2xl p-6 sm:p-8 relative overflow-hidden backdrop-blur-xl"
            style={{
              boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 20px rgba(6, 182, 212, 0.15)',
            }}
          >
            {/* Top Row: Close Icon, Title, and Go.trend Logo */}
            <div className="flex items-center justify-between gap-4 mb-6">
              {/* Close Button matching screenshot */}
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-6 h-6 stroke-[2.5]" />
              </button>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-bold text-white text-center flex-1">
                {currentLang === 'de' ? 'Cookie-Einstellungen' : t.cookies.title}
              </h2>

              {/* Go.trend Pill Badge (Matches uploaded screenshot top right!) */}
              <div className="shrink-0">
                <Logo variant="badge" size="sm" />
              </div>
            </div>

            {!showPreferences ? (
              <>
                {/* Main Body Text (in German or translated) */}
                <div className="text-sm sm:text-base text-slate-100/95 leading-relaxed text-center mb-8 px-2">
                  <p className="mb-2">
                    .Wir verwenden Cookies, um unsere Website und unseren Service zu optimieren
                  </p>
                  <p className="mb-2">
                    .Mit Ihrer Zustimmung verarbeiten wir Daten wie Surfverhalten oder eindeutige IDs
                  </p>
                  <p>
                    .Ohne Zustimmung können bestimmte Funktionen beeinträchtigt sein
                  </p>

                  {/* If user switched to Arabic or English, show friendly translation below */}
                  {currentLang !== 'de' && (
                    <div className="mt-4 pt-3 border-t border-slate-300/20 text-xs text-cyan-200">
                      {currentLang === 'ar' ? (
                        <p>
                          نستخدم ملفات تعريف الارتباط لتحسين موقعنا وخدماتنا. بموافقتك، نقوم بمعالجة بيانات التصفح والمعرفات الفريدة لتقديم أفضل تجربة وحجز مواعيد سلس.
                        </p>
                      ) : (
                        <p>
                          We use cookies to optimize our website and services. With your consent, we process browsing metrics to deliver the best user experience.
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* 3 Buttons Row (Matches Screenshot: Einstellungen anzeigen | Ablehnen | Alle akzeptieren) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  {/* View Settings / Einstellungen anzeigen */}
                  <button
                    onClick={() => setShowPreferences(true)}
                    className="w-full py-3 px-3 rounded-xl text-sm font-semibold bg-[#262626] hover:bg-[#333333] border border-cyan-400/80 text-white transition-all text-center flex items-center justify-center cursor-pointer shadow-sm"
                  >
                    <span>{currentLang === 'de' ? 'Einstellungen anzeigen' : t.cookies.viewSettings}</span>
                  </button>

                  {/* Deny / Ablehnen */}
                  <button
                    onClick={handleDenyAll}
                    className="w-full py-3 px-3 rounded-xl text-sm font-semibold bg-[#262626] hover:bg-[#333333] border border-cyan-400/80 text-white transition-all text-center flex items-center justify-center cursor-pointer shadow-sm"
                  >
                    <span>{currentLang === 'de' ? 'Ablehnen' : t.cookies.deny}</span>
                  </button>

                  {/* Accept All / Alle akzeptieren */}
                  <button
                    onClick={handleAcceptAll}
                    className="w-full py-3 px-3 rounded-xl text-sm font-semibold bg-[#262626] hover:bg-[#333333] border-2 border-emerald-400 text-white transition-all text-center flex items-center justify-center cursor-pointer shadow-md"
                  >
                    <span>{currentLang === 'de' ? 'Alle akzeptieren' : t.cookies.acceptAll}</span>
                  </button>
                </div>
              </>
            ) : (
              /* Granular Settings View */
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl bg-[#262626] border border-slate-600 text-xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <Shield className="w-4 h-4 text-emerald-400" />
                      {t.cookies.categories.essential.title}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded">
                      Immer aktiv
                    </span>
                  </div>
                  <p className="text-slate-300">{t.cookies.categories.essential.desc}</p>
                </div>

                <div className="p-4 rounded-xl bg-[#262626] border border-slate-600 text-xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <Settings className="w-4 h-4 text-cyan-400" />
                      {t.cookies.categories.analytics.title}
                    </span>
                    <input
                      type="checkbox"
                      checked={analyticsConsent}
                      onChange={(e) => setAnalyticsConsent(e.target.checked)}
                      className="w-4 h-4 accent-cyan-400 cursor-pointer"
                    />
                  </div>
                  <p className="text-slate-300">{t.cookies.categories.analytics.desc}</p>
                </div>

                <div className="p-4 rounded-xl bg-[#262626] border border-slate-600 text-xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <Cookie className="w-4 h-4 text-teal-400" />
                      {t.cookies.categories.marketing.title}
                    </span>
                    <input
                      type="checkbox"
                      checked={marketingConsent}
                      onChange={(e) => setMarketingConsent(e.target.checked)}
                      className="w-4 h-4 accent-teal-400 cursor-pointer"
                    />
                  </div>
                  <p className="text-slate-300">{t.cookies.categories.marketing.desc}</p>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="flex-1 py-2.5 rounded-xl bg-[#333333] text-slate-200 text-xs font-semibold cursor-pointer"
                  >
                    Zurück
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 text-xs font-bold cursor-pointer"
                  >
                    {t.cookies.savePreferences}
                  </button>
                </div>
              </div>
            )}

            {/* Footer Legal Links (Matches screenshot: Impressum Datenschutz Cookie Policy) */}
            <div className="flex items-center justify-center gap-4 text-xs font-medium text-emerald-400 pt-2 border-t border-slate-400/20">
              <button
                onClick={onOpenImpressum}
                className="hover:underline hover:text-emerald-300 transition-colors cursor-pointer"
              >
                Impressum
              </button>
              <span className="text-slate-400">•</span>
              <button
                onClick={onOpenDatenschutz}
                className="hover:underline hover:text-emerald-300 transition-colors cursor-pointer"
              >
                Datenschutz
              </button>
              <span className="text-slate-400">•</span>
              <button
                onClick={onOpenCookiePolicy}
                className="hover:underline hover:text-emerald-300 transition-colors cursor-pointer"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
