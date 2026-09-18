import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../data/content';
import { serviceImages } from '../data/serviceImages';
import {
  Sparkles,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Video,
  Youtube,
  Users,
  Compass,
  Megaphone,
  Search,
  Share2,
  Code2,
  LineChart,
  Palette,
  ArrowRight,
  ShieldCheck,
  Zap,
  Star
} from 'lucide-react';

interface ServicesPageProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ currentLang, onOpenBooking }) => {
  const t = translations[currentLang];
  const data = t.servicesPage;
  const [selectedService, setSelectedService] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'influencer':
        return <Users className="w-6 h-6 text-purple-400" />;
      case 'youtube':
        return <Youtube className="w-6 h-6 text-red-400" />;
      case 'video-production':
        return <Video className="w-6 h-6 text-rose-400" />;
      case 'marketing-strategy':
        return <Compass className="w-6 h-6 text-amber-400" />;
      case 'paid-ads':
        return <Megaphone className="w-6 h-6 text-cyan-400" />;
      case 'google-services':
        return <Search className="w-6 h-6 text-emerald-400" />;
      case 'social-media':
        return <Share2 className="w-6 h-6 text-blue-400" />;
      case 'web-dev':
        return <Code2 className="w-6 h-6 text-teal-400" />;
      case 'market-analysis':
        return <LineChart className="w-6 h-6 text-indigo-400" />;
      case 'branding':
        return <Palette className="w-6 h-6 text-fuchsia-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-24">
        {/* Page Hero Header */}
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-[#0a1222] to-slate-950 border border-slate-800 p-8 sm:p-14 overflow-hidden text-center shadow-2xl">
          {/* Ambient Lighting */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

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

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenBooking}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>{t.hero.bookBtn}</span>
              </button>

              <a
                href="#packages"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-all"
              >
                <span>{data.packagesBadge}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 10 Detailed Services Grid */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              {currentLang === 'ar'
                ? 'خدماتنا الرقمية الشاملة'
                : currentLang === 'de'
                ? 'Unsere ganzheitlichen Digital-Dienstleistungen'
                : 'Our Comprehensive Digital Services'}
            </h2>
            <p className="text-slate-400 text-base">
              {currentLang === 'ar'
                ? 'حلول مصممة بدقة لتلبية احتياجات الشركات ورواد الأعمال في ألمانيا وأوروبا'
                : currentLang === 'de'
                ? 'Maßgeschneiderte Lösungen für Unternehmen und Gründer in Deutschland und Europa'
                : 'Engineered for founders and scaling enterprises in Germany and across Europe'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.servicesList.map((service, index) => {
              const imgUrl = serviceImages[service.id];

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="rounded-3xl bg-gradient-to-b from-slate-900/95 via-[#0a1120] to-slate-950 border border-slate-800 hover:border-cyan-500/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(6,182,212,0.15)] group"
                >
                  <div>
                    {/* Visual Service Image */}
                    <div className="relative w-full h-52 sm:h-60 overflow-hidden bg-slate-900">
                      {imgUrl ? (
                        <img
                          src={imgUrl}
                          alt={service.title}
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-800" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1120] via-slate-950/40 to-transparent" />

                      {/* Top Overlay Badge & Icon */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                        <div className="p-2.5 rounded-xl bg-slate-950/85 border border-slate-700/80 backdrop-blur-md shadow-lg text-cyan-400">
                          {getServiceIcon(service.id)}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/85 text-slate-200 border border-slate-700/80 backdrop-blur-md shadow-md">
                            {service.tag}
                          </span>
                          {service.status && (
                            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/20 border border-amber-500/40 text-amber-300 backdrop-blur-md shadow-md">
                              {service.status}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Card Content Area */}
                    <div className="p-6 sm:p-8 pt-5">
                      {/* Title & Subtitle */}
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-cyan-400/90 font-medium mb-4">
                        {service.subtitle}
                      </p>
                      <p className="text-sm text-slate-300 leading-relaxed mb-6">
                        {service.desc}
                      </p>

                      {/* Key Benefits */}
                      <div className="mb-6 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                        <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                          <Zap className="w-3.5 h-3.5 text-cyan-400" />
                          <span>
                            {currentLang === 'ar'
                              ? 'أهم المزايا والفوائد للعميل'
                              : currentLang === 'de'
                              ? 'Ihre Kernvorteile'
                              : 'Key Advantages'}
                          </span>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.benefits.map((benefit, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Deliverables */}
                      <div className="mb-2">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                          {currentLang === 'ar'
                            ? 'المخرجات التي يستلمها العميل (Deliverables):'
                            : currentLang === 'de'
                            ? 'Lieferumfang (Deliverables):'
                            : 'Deliverables you receive:'}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.deliverables.map((deliv, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-lg text-xs bg-slate-800/70 border border-slate-700/60 text-slate-300 font-medium"
                            >
                              {deliv}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Direct Action Button */}
                  <div className="p-6 sm:p-8 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
                    <button
                      onClick={onOpenBooking}
                      className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{t.nav.bookNow}</span>
                    </button>

                    <a
                      href={`https://wa.me/4915783457397?text=Hallo%20Go.Trend%20Marketing%2C%20ich%20interessiere%20mich%20für%3A%20${encodeURIComponent(
                        service.title
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                      title="WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3 Packages Section (Go Start, Go Pro, Go Trend) */}
        <div id="packages" className="pt-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-4">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{data.packagesBadge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              {data.packagesTitle}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              {data.packagesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {data.packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-gradient-to-b from-slate-900 via-[#0c1628] to-slate-950 border-2 border-cyan-400 shadow-[0_0_40px_rgba(6,182,212,0.25)] lg:-translate-y-3'
                    : 'bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-teal-300 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md">
                    {pkg.badge}
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                      {pkg.timeline}
                    </span>
                    <h3 className="text-2xl font-extrabold text-white mt-1">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-slate-300 mt-2 font-medium">
                      {pkg.tagline}
                    </p>
                  </div>

                  <div className="space-y-3 my-8 pt-6 border-t border-slate-800">
                    {pkg.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800">
                  <button
                    onClick={onOpenBooking}
                    className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>
                      {currentLang === 'ar'
                        ? `طلب استشارة لباقة ${pkg.name}`
                        : currentLang === 'de'
                        ? `Beratung für ${pkg.name} anfragen`
                        : `Inquire about ${pkg.name}`}
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Direct German Quality Guarantee Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0b1322] via-[#0f1b30] to-[#0b1322] border border-cyan-500/30 text-center max-w-4xl mx-auto shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>
              {currentLang === 'ar'
                ? 'ضمان الجودة والدقة الألمانية'
                : currentLang === 'de'
                ? 'Deutsche Qualitätsgarantie'
                : 'German Quality & Compliance Guarantee'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white mb-4">
            {currentLang === 'ar'
              ? 'هل تحتاج إلى باقة مخصصة تناسب ميزانية ونطاق مشروعك بالضبط؟'
              : currentLang === 'de'
              ? 'Benötigen Sie ein individuelles Leistungspaket genau für Ihr Projekt?'
              : 'Need a customized service package matching your exact scope & budget?'}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            {currentLang === 'ar'
              ? 'فريقنا جاهز لدراسة مشروعك وتقديم عرض سعر رسمي وخطة عمل شفافة متوافقة 100% مع القوانين الألمانية.'
              : currentLang === 'de'
              ? 'Unser Team analysiert Ihr Projekt und erstellt Ihnen ein transparentes Angebot mit verbindlichem Zeitplan.'
              : 'Our specialized team analyzes your project parameters to craft an official transparent proposal under German standards.'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>{t.hero.bookBtn}</span>
            </button>
            <a
              href="https://wa.me/4915783457397?text=Hallo%20Go.Trend%20Marketing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
