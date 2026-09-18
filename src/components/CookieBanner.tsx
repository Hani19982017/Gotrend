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
            {/* Top Row: Go.trend Logo and Close Button (Logo is 100% fully visible and unclipped) */}
            <div className="flex items-center justify-between gap-3 mb-5">
              {/* Go.trend Official Logo Badge */}
              <div className="shrink-0" dir="ltr">
                <Logo variant="badge" size="sm" />
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full bg-black/25 hover:bg-black/50 text-slate-300 hover:text-white transition-all cursor-pointer border border-white/10 hover:scale-105"
                aria-label="Close"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Header Title with Cookie Icon */}
            <div className="text-center mb-5">
              <div className="inline-flex items-center justify-center p-2 rounded-xl bg-teal-500/15 text-teal-400 border border-teal-500/30 mb-2">
                <Cookie className="w-5 h-5" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                {t.cookies.title}
              </h2>
              <p className="text-[11px] sm:text-xs text-teal-300/90 mt-1 font-medium">
                {currentLang === 'ar'
                  ? 'وفق معايير حماية البيانات والخصوصية الألمانية والأوروبية (DSGVO / GDPR)'
                  : currentLang === 'de'
                  ? 'Konform mit der europäischen DSGVO & deutschen Datenschutzstandards'
                  : 'In compliance with German & EU GDPR Data Protection Standards'}
              </p>
            </div>

            {!showPreferences ? (
              <>
                {/* Main Body Text */}
                <div className="text-xs sm:text-sm text-slate-200 leading-relaxed text-center mb-6 px-1 sm:px-3">
                  <p>{t.cookies.text}</p>
                </div>

                {/* 3 Buttons Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-5">
                  {/* View Settings */}
                  <button
                    onClick={() => setShowPreferences(true)}
                    className="w-full py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold bg-[#262626] hover:bg-[#333333] border border-cyan-400/70 text-white transition-all text-center flex items-center justify-center cursor-pointer shadow-sm active:scale-[0.98]"
                  >
                    <span>{t.cookies.viewSettings}</span>
                  </button>

                  {/* Deny */}
                  <button
                    onClick={handleDenyAll}
                    className="w-full py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold bg-[#262626] hover:bg-[#333333] border border-slate-600 hover:border-slate-500 text-slate-200 transition-all text-center flex items-center justify-center cursor-pointer shadow-sm active:scale-[0.98]"
                  >
                    <span>{t.cookies.deny}</span>
                  </button>

                  {/* Accept All */}
                  <button
                    onClick={handleAcceptAll}
                    className="w-full py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-slate-950 transition-all text-center flex items-center justify-center cursor-pointer shadow-md active:scale-[0.98]"
                  >
                    <span>{t.cookies.acceptAll}</span>
                  </button>
                </div>
              </>
            ) : (
              /* Granular Settings View */
              <div className="space-y-3 mb-5 text-start">
                <div className="p-3.5 rounded-xl bg-[#262626] border border-slate-600 text-xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <Shield className="w-4 h-4 text-emerald-400" />
                      {t.cookies.categories.essential.title}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                      {currentLang === 'ar' ? 'نشط دائماً' : currentLang === 'de' ? 'Immer aktiv' : 'Always Active'}
                    </span>
                  </div>
                  <p className="text-slate-300">{t.cookies.categories.essential.desc}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#262626] border border-slate-600 text-xs">
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

                <div className="p-3.5 rounded-xl bg-[#262626] border border-slate-600 text-xs">
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
                    className="flex-1 py-2.5 rounded-xl bg-[#333333] hover:bg-[#444444] text-slate-200 text-xs font-semibold cursor-pointer transition-colors"
                  >
                    {currentLang === 'ar' ? 'رجوع' : currentLang === 'de' ? 'Zurück' : 'Back'}
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-slate-950 text-xs font-bold cursor-pointer transition-all shadow-md"
                  >
                    {t.cookies.savePreferences}
                  </button>
                </div>
              </div>
            )}

            {/* Footer Legal Links */}
            <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-4 text-xs font-medium text-emerald-400 pt-3 border-t border-slate-600/40">
              <button
                onClick={onOpenImpressum}
                className="hover:underline hover:text-emerald-300 transition-colors cursor-pointer"
              >
                {t.cookies.impressum}
              </button>
              <span className="text-slate-500">•</span>
              <button
                onClick={onOpenDatenschutz}
                className="hover:underline hover:text-emerald-300 transition-colors cursor-pointer"
              >
                {t.cookies.privacy}
              </button>
              <span className="text-slate-500">•</span>
              <button
                onClick={onOpenCookiePolicy}
                className="hover:underline hover:text-emerald-300 transition-colors cursor-pointer"
              >
                {t.cookies.cookiePolicy}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
