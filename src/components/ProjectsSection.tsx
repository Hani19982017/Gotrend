import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/content';
import { projectImages } from '../data/serviceImages';
import { 
  ExternalLink, 
  CheckCircle, 
  TrendingUp, 
  Sparkles, 
  Building2, 
  Store, 
  GraduationCap, 
  UserCheck, 
  ShieldCheck, 
  FileText, 
  Plane,
  X,
  Layers,
  Cpu,
  Lock,
  ArrowRight
} from 'lucide-react';

interface ProjectsSectionProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ currentLang, onOpenBooking }) => {
  const t = translations[currentLang];
  const data = t.projectsSection;
  const [activeModalProjectId, setActiveModalProjectId] = useState<string | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'project-ha-cleaning':
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      case 'project-amine':
        return <Building2 className="w-5 h-5 text-amber-400" />;
      case 'project-personal-brand':
        return <UserCheck className="w-5 h-5 text-indigo-400" />;
      case 'project-leman-kosmetik':
        return <GraduationCap className="w-5 h-5 text-pink-400" />;
      case 'project-pilates-store':
        return <Store className="w-5 h-5 text-emerald-400" />;
      case 'project-contract-management':
        return <FileText className="w-5 h-5 text-blue-400" />;
      case 'project-flight-booking':
        return <Plane className="w-5 h-5 text-sky-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  const selectedModalProject = activeModalProjectId 
    ? data.items.find(p => p.id === activeModalProjectId)
    : null;

  return (
    <section id="projects" className="py-24 bg-[#070b12] relative overflow-hidden border-t border-slate-800/80">
      {/* Background glow effects - Desktop only to save mobile GPU memory */}
      <div className="hidden md:block absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="hidden md:block absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{data.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {data.title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {data.items.map((project, idx) => {
            const projectImg = projectImages[project.id];
            const isExternal = project.projectUrl && project.projectUrl.startsWith('http');

            return (
              <div
                key={project.id}
                className={`rounded-3xl bg-[#0b101b] border border-slate-800/90 md:hover:border-cyan-500/50 overflow-hidden flex flex-col justify-between transition-all duration-300 md:hover:-translate-y-1.5 md:hover:shadow-[0_12px_35px_rgba(6,182,212,0.15)] group ${
                  idx === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Project Showcase Image */}
                  <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-900">
                    {projectImg && !failedImages[project.id] ? (
                      <img
                        src={projectImg}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        decoding="async"
                        onError={() => setFailedImages(prev => ({ ...prev, [project.id]: true }))}
                        className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-slate-900 to-[#0c1626] flex items-center justify-center">
                        <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60 text-center">
                          {getProjectIcon(project.id)}
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-slate-950/40 to-transparent pointer-events-none" />

                    {/* Top Overlay Badge & Icon - Opaque without expensive GPU backdrop-blur */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <div className="p-2.5 rounded-xl bg-[#090e17]/95 border border-slate-700/80 shadow-lg">
                        {getProjectIcon(project.id)}
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#090e17]/95 border border-cyan-500/30 text-cyan-300 shadow-md">
                        {project.badge}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 pt-5">
                    {/* Project Title & Client */}
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-cyan-400/90 font-medium mb-3">
                      {project.client}
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
                      {project.desc}
                    </p>

                    {/* Metric Highlight */}
                    {project.metric && (
                      <div className="mb-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2 text-xs font-semibold text-emerald-300">
                        <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{project.metric}</span>
                      </div>
                    )}

                    {/* Deliverables Checklist */}
                    <div className="space-y-2 mb-6">
                      {project.points.map((pt, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tags & Action Buttons */}
                <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2 py-0.5 rounded-md text-[11px] bg-slate-800/80 text-slate-300 border border-slate-700/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-2">
                    {isExternal ? (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-cyan-300 bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/40 transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                      >
                        <span>{data.viewProject || (currentLang === 'ar' ? 'إضغط هنا لعرض المشروع' : currentLang === 'de' ? 'Hier klicken, um das Projekt anzuzeigen' : 'Click Here to View Project')}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <button
                        onClick={() => setActiveModalProjectId(project.id)}
                        className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-cyan-300 bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/40 transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                      >
                        <span>
                          {currentLang === 'ar' 
                            ? 'إضغط هنا لمعاينة وتفاصيل المنصة' 
                            : currentLang === 'de' 
                            ? 'System-Details & Vorschau ansehen' 
                            : 'View System Architecture & Demo'}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0e1626] to-slate-900 border border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-right sm:text-start">
            <h3 className="text-xl font-bold text-white mb-1">
              {currentLang === 'ar'
                ? 'هل ترغب في مشروع ناجح يحقق أرقاماً مماثلة لمشروعك؟'
                : currentLang === 'de'
                ? 'Möchten Sie für Ihr Unternehmen ähnliche Erfolgszahlen erzielen?'
                : 'Want to achieve similar measurable revenue figures for your business?'}
            </h3>
            <p className="text-sm text-slate-400">
              {currentLang === 'ar'
                ? 'احجز جلستك الاستشارية المباشرة مع خبرائنا في ألمانيا اليوم.'
                : currentLang === 'de'
                ? 'Buchen Sie noch heute ein kostenloses Beratungsgespräch mit unseren Experten in Deutschland.'
                : 'Schedule your direct advisory session with our certified experts in Germany today.'}
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="shrink-0 px-6 py-3 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
          >
            {t.nav.bookNow}
          </button>
        </div>
      </div>

      {/* Interactive Showcase Modal for Demo/SaaS Projects */}
      {selectedModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#0c1322] border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl">
            {/* Header with image banner */}
            <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-slate-950">
              {projectImages[selectedModalProject.id] && (
                <img
                  src={projectImages[selectedModalProject.id]}
                  alt={selectedModalProject.title}
                  referrerPolicy="no-referrer"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              
              <button
                onClick={() => setActiveModalProjectId(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white border border-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between gap-4">
                <div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 inline-block mb-2">
                    {selectedModalProject.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {selectedModalProject.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                  {currentLang === 'ar' ? 'نبذة عن المنصة والحل التقني' : currentLang === 'de' ? 'Über das System' : 'System Overview'}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedModalProject.desc}
                </p>
              </div>

              {/* Metric Callout */}
              {selectedModalProject.metric && (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-emerald-300/80 font-medium">
                      {currentLang === 'ar' ? 'المؤشر والنتيجة المحققة' : currentLang === 'de' ? 'Erzieltes Ergebnis' : 'Business Impact'}
                    </div>
                    <div className="text-sm font-bold text-emerald-200">
                      {selectedModalProject.metric}
                    </div>
                  </div>
                </div>
              )}

              {/* Technical Specifications */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  <span>
                    {currentLang === 'ar' ? 'الميزات المعمارية والوظيفية للمشروع' : currentLang === 'de' ? 'Architektur & Kernfunktionen' : 'Core Architecture & Features'}
                  </span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedModalProject.points.map((pt, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {selectedModalProject.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg text-xs bg-slate-800 text-slate-300 border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-slate-950/80 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                {currentLang === 'ar' 
                  ? 'جاهز للتخصيص والنشر وفق متطلبات شركتك الخاصة' 
                  : currentLang === 'de' 
                  ? 'Sofort anpassbar an Ihre individuellen Anforderungen' 
                  : 'Ready for custom deployment tailored to your specifications'}
              </div>
              <button
                onClick={() => {
                  setActiveModalProjectId(null);
                  onOpenBooking();
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              >
                {currentLang === 'ar' ? 'طلب عرض توضيحي أو مشروع مماثل' : currentLang === 'de' ? 'Demo oder Projekt anfragen' : 'Request Demo or Similar System'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
