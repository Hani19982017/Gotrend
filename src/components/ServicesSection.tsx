import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { translations } from '../data/content';
import { serviceImages } from '../data/serviceImages';
import {
  Globe,
  Smartphone,
  Cloud,
  Megaphone,
  Search,
  Palette,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

interface ServicesSectionProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ currentLang, onOpenBooking }) => {
  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const serviceIcons: Record<string, React.ElementType> = {
    'web-dev': Globe,
    'mobile-dev': Smartphone,
    'aws-cloud': Cloud,
    'ads-campaigns': Megaphone,
    'seo-organic': Search,
    'branding-identity': Palette,
  };

  const serviceColors: Record<string, string> = {
    'web-dev': 'from-cyan-500 to-blue-600',
    'mobile-dev': 'from-emerald-500 to-teal-600',
    'aws-cloud': 'from-amber-500 to-orange-600',
    'ads-campaigns': 'from-rose-500 to-red-600',
    'seo-organic': 'from-blue-500 to-indigo-600',
    'branding-identity': 'from-purple-500 to-fuchsia-600',
  };

  return (
    <section id="services" className="py-24 bg-[#090e18] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs sm:text-sm font-semibold text-cyan-300 mb-4">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>{t.services.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {t.services.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
              {t.services.titleHighlight}
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service) => {
            const Icon = serviceIcons[service.id] || TrendingUp;
            const gradient = serviceColors[service.id] || 'from-cyan-500 to-blue-600';

            const imgUrl = serviceImages[service.id];

            return (
              <div
                key={service.id}
                className="glass-panel glass-panel-hover overflow-hidden rounded-3xl relative flex flex-col justify-between group border border-slate-800/80 md:hover:border-cyan-500/50 transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-[0_12px_35px_rgba(6,182,212,0.15)]"
              >
                <div>
                  {/* Service Visual Image */}
                  <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-900">
                    {imgUrl ? (
                      <img
                        src={imgUrl}
                        alt={service.title}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-800" />
                    )}
                    {/* Dark gradient overlay for smooth visual depth and readable text */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-slate-950/40 to-transparent pointer-events-none" />

                    {/* Top Floating Badge & Icon */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-950/95 text-cyan-300 border border-slate-700/80 shadow-md">
                        {service.tag}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 pt-5">
                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors line-clamp-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {service.desc}
                    </p>

                    {/* Key Feature Bullets */}
                    <div className="space-y-2.5 mb-6">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-slate-800/80">
                  <button
                    onClick={onOpenBooking}
                    className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-cyan-400 hover:text-slate-950 bg-cyan-950/40 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 border border-cyan-500/30 hover:border-transparent transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{t.hero.bookBtn}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All 10 Services Dedicated Page Link */}
        <div className="mt-14 text-center">
          <Link
            to="/services"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-cyan-500/40 hover:border-cyan-400 text-white font-bold text-sm sm:text-base shadow-[0_0_25px_rgba(6,182,212,0.15)] hover:shadow-[0_0_35px_rgba(6,182,212,0.3)] hover:-translate-y-0.5 transition-all group"
          >
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span>
              {currentLang === 'ar'
                ? 'استكشف صفحة الخدمات المنفصلة (10 خدمات شاملة مع الباقات والأسعار)'
                : currentLang === 'de'
                ? 'Alle 10 Einzelleistungen & Leistungspakete auf der Services-Seite ansehen'
                : 'Explore the dedicated Services Page (All 10 services & comprehensive packages)'}
            </span>
            <ArrowIcon className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
