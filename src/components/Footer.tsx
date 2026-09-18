import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Language } from '../types';
import { translations } from '../data/content';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
  onOpenImpressum: () => void;
  onOpenDatenschutz: () => void;
  onOpenCookiePolicy: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onOpenImpressum,
  onOpenDatenschutz,
  onOpenCookiePolicy,
  onOpenBooking,
}) => {
  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';

  return (
    <footer className="bg-[#05080f] text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Col 1: Brand & About */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Logo size="md" />
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {t.footer.about}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Gelsenkirchen, Germany • BVDW & Google Partner</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link
                  to="/"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {currentLang === 'ar' ? 'الرئيسية' : currentLang === 'de' ? 'Startseite' : 'Home'}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {t.nav.aboutUs}
                </Link>
              </li>
              <li>
                <a href="/#projects" className="hover:text-cyan-400 transition-colors">
                  {currentLang === 'ar' ? 'أحدث المشاريع' : currentLang === 'de' ? 'Projekte' : 'Projects'}
                </a>
              </li>
              <li>
                <a href="/#technologies" className="hover:text-cyan-400 transition-colors">
                  {t.nav.technologies}
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="text-left rtl:text-right hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {t.nav.booking}
                </button>
              </li>
              <li>
                <a href="/#calculator" className="hover:text-cyan-400 transition-colors">
                  {t.nav.calculator}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">
                  {currentLang === 'ar' ? 'شراكات المؤثرين المعتمدين' : 'Influencer-Partnerschaften'}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">
                  {currentLang === 'ar' ? 'إدارة وتطوير قنوات يوتيوب' : 'YouTube-Kanäle & AdSense'}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">
                  {currentLang === 'ar' ? 'تصوير ومونتاج الفيديو والريلز' : 'Videoproduktion & Reels'}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">
                  {currentLang === 'ar' ? 'إعلانات Meta و Google و TikTok' : 'Paid Ads & Google Ads'}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">
                  {currentLang === 'ar' ? 'بناء وتطوير المواقع والتطبيقات' : 'Webentwicklung & App-Design'}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">
                  {currentLang === 'ar' ? 'تصميم الهوية البصرية واللوجو' : 'Corporate Identity & Branding'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Germany Contact & Office */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Im Lörenkamp 24, 45879 Gelsenkirchen, Germany</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+4915783457397" className="hover:text-cyan-400 font-mono" dir="ltr">
                  +49 1578 3457397
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:info@go-trend-marketing.de" className="hover:text-cyan-400">
                  info@go-trend-marketing.de
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Mo - Fr: 09:00 - 18:00 (CET)</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:opacity-90 transition-opacity cursor-pointer shadow-md shadow-cyan-500/20"
              >
                {t.topBar.bookConsultation}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar (Strict German Compliance) */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>{t.footer.rights}</p>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={onOpenImpressum}
              className="hover:text-cyan-400 underline underline-offset-4 transition-colors"
            >
              {t.footer.impressum}
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={onOpenDatenschutz}
              className="hover:text-cyan-400 underline underline-offset-4 transition-colors"
            >
              {t.footer.privacy}
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={onOpenCookiePolicy}
              className="hover:text-cyan-400 underline underline-offset-4 transition-colors"
            >
              {t.cookies.cookiePolicy}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
