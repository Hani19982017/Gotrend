import React from 'react';
import { Language } from '../types';
import { translations } from '../data/content';
import { Calendar, ArrowRight, ArrowLeft, ShieldCheck, CheckCircle2, TrendingUp, Award, Zap, Code2, Cloud } from 'lucide-react';

interface HeroProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenBooking }) => {
  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 bg-tech-radial bg-tech-grid">
      {/* Ambient background glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Trust & Certification Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs sm:text-sm text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.15)] animate-pulse">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="font-semibold">{t.hero.badge}</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.2] text-white">
            {t.hero.titlePart1}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 drop-shadow-[0_0_25px_rgba(6,182,212,0.3)]">
              {t.hero.titleHighlight}
            </span>{' '}
            {t.hero.titlePart2}
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
            {t.hero.subtitle}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            id="hero-book-consultation"
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <Calendar className="w-5 h-5 text-slate-950" />
            <span>{t.hero.bookBtn}</span>
            <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </button>

          <a
            href="#technologies"
            className="w-full sm:w-auto px-7 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/50 shadow-md transition-all flex items-center justify-center gap-2"
          >
            <Code2 className="w-5 h-5 text-cyan-400" />
            <span>{t.hero.exploreTech}</span>
          </a>
        </div>

        {/* Partner & Authority Tickers */}
        <div className="mb-14 pt-4 border-t border-slate-800/60 max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Google Ads Certified Partner</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Meta Certified Media Company</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              <span>BVDW Bundesverband Mitglied</span>
            </div>
            <div className="flex items-center gap-2">
              <Cloud className="w-4 h-4 text-amber-400" />
              <span>AWS Cloud Architecture Experts</span>
            </div>
          </div>
        </div>

        {/* Live Performance & Experience Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          <div className="glass-panel glass-panel-hover p-6 rounded-2xl text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-teal-400 opacity-60 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-3xl sm:text-4xl font-black text-white font-sans tracking-tight mb-1 group-hover:text-cyan-400 transition-colors">
              {t.hero.stats.experience}
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium leading-snug">
              {t.hero.stats.experienceLabel}
            </div>
          </div>

          <div className="glass-panel glass-panel-hover p-6 rounded-2xl text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 opacity-60 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-3xl sm:text-4xl font-black text-white font-sans tracking-tight mb-1 group-hover:text-emerald-400 transition-colors">
              {t.hero.stats.projects}
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium leading-snug">
              {t.hero.stats.projectsLabel}
            </div>
          </div>

          <div className="glass-panel glass-panel-hover p-6 rounded-2xl text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-3xl sm:text-4xl font-black text-white font-sans tracking-tight mb-1 group-hover:text-teal-300 transition-colors">
              {t.hero.stats.impressions}
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium leading-snug">
              {t.hero.stats.impressionsLabel}
            </div>
          </div>

          <div className="glass-panel glass-panel-hover p-6 rounded-2xl text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-3xl sm:text-4xl font-black text-white font-sans tracking-tight mb-1 group-hover:text-amber-400 transition-colors">
              {t.hero.stats.satisfaction}
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium leading-snug">
              {t.hero.stats.satisfactionLabel}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
