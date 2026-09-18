import React, { useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../data/content';
import { TestimonialsSection } from '../components/TestimonialsSection';
import {
  ShieldCheck,
  BarChart3,
  Lock,
  FileCheck,
  Award,
  Users,
  CheckCircle2,
  Calendar,
  Phone,
  MessageCircle,
  MapPin,
  Sparkles,
  Building,
  Check,
  Briefcase
} from 'lucide-react';

interface AboutUsPageProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ currentLang, onOpenBooking }) => {
  const t = translations[currentLang];
  const data = t.aboutPage;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const getValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-cyan-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-emerald-400" />;
      case 'Lock':
        return <Lock className="w-6 h-6 text-indigo-400" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-amber-400" />;
      default:
        return <Award className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-20">
        {/* Hero Banner */}
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-[#0d1527] to-slate-950 border border-slate-800 p-8 sm:p-14 overflow-hidden text-center shadow-2xl">
          {/* Ambient lighting */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>{data.headerBadge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
              {data.headerTitle}
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-medium leading-relaxed mb-8">
              {data.headerSubtitle}
            </p>

            {/* Quick trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>Gelsenkirchen (NRW), Germany</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700">
                <Award className="w-4 h-4 text-amber-400" />
                <span>BVDW & Google & Meta Certified</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% DSGVO / GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>

        {/* The Story & Facts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold">
              <Building className="w-3.5 h-3.5" />
              <span>Go.Trend Marketing Agency</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {data.storyTitle}
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              {data.storyParagraph1}
            </p>

            <div className="p-5 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 text-slate-200 text-sm leading-relaxed">
              <p className="font-medium text-cyan-200 mb-2 flex items-center gap-2">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>
                  {currentLang === 'ar'
                    ? 'اعتمادات وشراكات رسمية موثقة'
                    : currentLang === 'de'
                    ? 'Offizielle Partnerschaften und Zertifizierungen'
                    : 'Official Accreditations & Certifications'}
                </span>
              </p>
              <p>{data.storyParagraph2}</p>
            </div>

            <p className="text-slate-300 text-base leading-relaxed">
              {data.storyParagraph3}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={onOpenBooking}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>{t.nav.bookNow}</span>
              </button>

              <a
                href="https://wa.me/4915783457397?text=Hallo%20Go.Trend%20Marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{data.whatsappBtn}</span>
              </a>
            </div>
          </div>

          {/* Stats Column */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 text-center hover:border-cyan-500/40 transition-colors">
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300 mb-2">
                {data.stats.growthRate}
              </div>
              <p className="text-xs text-slate-300 font-medium">
                {data.stats.growthRateLabel}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 text-center hover:border-emerald-500/40 transition-colors">
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 mb-2">
                {data.stats.experience}
              </div>
              <p className="text-xs text-slate-300 font-medium">
                {data.stats.experienceLabel}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 text-center hover:border-indigo-500/40 transition-colors">
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300 mb-2">
                {data.stats.happyClients}
              </div>
              <p className="text-xs text-slate-300 font-medium">
                {data.stats.happyClientsLabel}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 text-center hover:border-amber-500/40 transition-colors">
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300 mb-2">
                {data.stats.campaigns}
              </div>
              <p className="text-xs text-slate-300 font-medium">
                {data.stats.campaignsLabel}
              </p>
            </div>
          </div>
        </div>

        {/* Our German Values & Guarantees */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              {data.valuesTitle}
            </h2>
            <p className="text-slate-400 text-base">
              {data.valuesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.values.map((v, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-cyan-500/40 transition-all hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 w-fit mb-4">
                    {getValueIcon(v.icon)}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {v.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-800/60 flex items-center gap-1.5 text-xs text-cyan-400 font-medium">
                  <Check className="w-3.5 h-3.5" />
                  <span>
                    {currentLang === 'ar'
                      ? 'معيار إلزامي لجميع مشاريعنا'
                      : currentLang === 'de'
                      ? 'Fester Qualitätsstandard'
                      : 'Fixed Quality Standard'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Specialists Team */}
        <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-8 sm:p-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>{data.expertsTitle}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              {data.expertsSubtitle}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {data.expertsDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.team.map((member, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#090e18] border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-300 text-xl font-black mb-4">
                    {member.name.substring(0, 2).toUpperCase()}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs text-cyan-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 space-y-1.5">
                  {member.credentials.map((cred, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-400">
                      <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span>{cred}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Reviews Section */}
        <TestimonialsSection currentLang={currentLang} />

        {/* Direct Action Contact Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0b1322] via-[#0f1b30] to-[#0b1322] border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.15)] text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-black text-white mb-4">
            {data.ctaTitle}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            {data.ctaSubtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/4915783457397?text=Hallo%20Go.Trend%20Marketing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.4)] transition-all"
            >
              <MessageCircle className="w-4 h-4 text-slate-950" />
              <span>{data.whatsappBtn}</span>
            </a>

            <a
              href="tel:+4915783457397"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>{data.callBtn}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>{t.nav.bookNow}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
