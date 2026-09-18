import React from 'react';
import { Language } from '../types';
import { translations } from '../data/content';
import { MapPin, Phone, Mail, Award, CheckCircle2, ShieldCheck, ExternalLink, Clock } from 'lucide-react';

interface TrustGermanyProps {
  currentLang: Language;
}

export const TrustGermany: React.FC<TrustGermanyProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';

  return (
    <section id="about-germany" className="py-24 bg-[#080d17] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Office & Trust Details */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs sm:text-sm font-semibold text-cyan-300 mb-4">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t.germanyTrust.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              {t.germanyTrust.title}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                {t.germanyTrust.titleHighlight}
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              {t.germanyTrust.desc}
            </p>

            {/* Address & Direct Contact Card */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {t.germanyTrust.addressTitle}
                  </h4>
                  <p className="text-base font-semibold text-white mt-0.5">
                    {t.germanyTrust.address}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Nordrhein-Westfalen (NRW), Deutschland
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-800">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-400 block">{isRtl ? 'الهاتف المباشر:' : 'Direct Phone:'}</span>
                    <a href="tel:+4915783457397" className="text-sm font-bold text-cyan-300 hover:underline font-mono" dir="ltr">
                      +49 1578 3457397
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-400 block">{isRtl ? 'البريد الرسمي:' : 'Official Email:'}</span>
                    <a href="mailto:info@go-trend-marketing.de" className="text-sm font-bold text-cyan-300 hover:underline">
                      info@go-trend-marketing.de
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantees List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{isRtl ? 'عقود رسمية وفواتير ضريبية معتمدة' : 'Official contracts & compliant German invoicing'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{isRtl ? 'حماية بيانات صارمة وفق DSGVO' : 'Strict EU GDPR / DSGVO privacy compliance'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{isRtl ? 'دعم فني وتواصل باللغات الألمانية، الإنجليزية والعربية' : 'Trilingual support: German, English & Arabic'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{isRtl ? 'خبرة موثوقة لأكثر من 9 سنوات' : 'Over 9 years of proven market reputation'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Germany Badge & Certifications */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-8 rounded-3xl border border-slate-800 relative glow-emerald">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <h3 className="font-bold text-lg text-white">
                  {t.germanyTrust.certificationsTitle}
                </h3>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800/60">
                  Verified
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold shrink-0">
                    G
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Google Certified Partner</h4>
                    <p className="text-xs text-slate-400">Search, Display, Performance Max & YouTube Ads</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-600/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-bold shrink-0">
                    M
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Meta Certified Media Company</h4>
                    <p className="text-xs text-slate-400">Facebook & Instagram Enterprise Marketing</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-600/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold shrink-0">
                    BVDW
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Bundesverband Digitale Wirtschaft</h4>
                    <p className="text-xs text-slate-400">Zertifizierte Agentur für digitale Wirtschaft in DE</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-600/20 border border-orange-500/40 flex items-center justify-center text-orange-400 font-bold shrink-0">
                    AWS
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">AWS Cloud Architecture Team</h4>
                    <p className="text-xs text-slate-400">Scalable Serverless & Containerized Infrastructure</p>
                  </div>
                </div>
              </div>

              {/* Live Location Tag */}
              <div className="mt-6 pt-4 border-t border-slate-800 text-center">
                <a
                  href="https://maps.google.com/?q=Im+L%C3%B6renkamp+24,+45879+Gelsenkirchen,+Germany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Google Maps: Im Lörenkamp 24, 45879 Gelsenkirchen</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
