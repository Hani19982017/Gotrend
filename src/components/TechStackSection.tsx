import React, { useState } from 'react';
import { Language } from '../types';
import { translations, technologiesData } from '../data/content';
import {
  Code,
  Layers,
  Cloud,
  Smartphone,
  Database,
  Cpu,
  CheckCircle,
  Lightbulb,
  Server,
  Zap,
  Shield,
  ArrowRight,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';

interface TechStackSectionProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const TechStackSection: React.FC<TechStackSectionProps> = ({ currentLang, onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const categories = [
    { id: 'all', label: isRtl ? 'جميع التقنيات' : currentLang === 'de' ? 'Alle Technologien' : 'All Technologies', icon: Code },
    { id: 'frontend', label: t.techSection.categories.frontend, icon: Layers },
    { id: 'backend', label: t.techSection.categories.backend, icon: Server },
    { id: 'cloudAws', label: t.techSection.categories.cloudAws, icon: Cloud },
    { id: 'mobile', label: t.techSection.categories.mobile, icon: Smartphone },
    { id: 'database', label: t.techSection.categories.database, icon: Database },
    { id: 'aiMarketing', label: t.techSection.categories.aiMarketing, icon: Sparkles },
  ];

  const filteredTech = activeCategory === 'all'
    ? technologiesData
    : technologiesData.filter((item) => item.category === activeCategory);

  const decisionScenarios = [
    {
      requirement: isRtl
        ? 'متجر إلكتروني أو منصة تحتاج تصدر نتائج بحث Google وسرعة فورية'
        : currentLang === 'de'
        ? 'E-Commerce oder Portal mit maximalem SEO-Ranking und Top-Ladegeschwindigkeit'
        : 'E-commerce or portal requiring #1 Google SEO ranking & instant loading',
      recommended: 'Next.js 15 (SSR) + TypeScript + AWS CloudFront CDN',
      reason: isRtl
        ? 'رندرة جهة الخادم تعطي جوجل فهرسة فورية بنسبة 100%، بينما شبكة CDN توزع المحتوى محلياً في ألمانيا وأوروبا بسرعة أجزاء من الثانية.'
        : currentLang === 'de'
        ? 'Serverseitiges Rendering garantiert 100% SEO-Indexierung bei Google, während das AWS CDN Daten in Millisekunden ausliefert.'
        : 'Server-Side Rendering ensures 100% Google crawlability, while the AWS CDN serves content across Germany & Europe in milliseconds.',
      tag: 'SEO & Performance',
    },
    {
      requirement: isRtl
        ? 'تطبيق جوال يحتاج تجربة متطابقة للآيفون والأندرويد بميزانية ووقت قياسي'
        : currentLang === 'de'
        ? 'Mobile App für iOS & Android mit nativer Nutzererfahrung bei optimalem Budget'
        : 'Mobile app for iOS & Android with native feel on an optimized schedule',
      recommended: 'Flutter أو React Native + AWS Serverless Lambda',
      reason: isRtl
        ? 'كود موحد بنسبة 95% يقلل تكلفة الصيانة إلى النصف مع سرعة إطلاق قياسية وتجربة شاشة 60fps فائقة السلاسة.'
        : currentLang === 'de'
        ? 'Eine einheitliche Codebasis halbiert die Wartungskosten bei nativer 60fps-Performance und extrem schneller Time-to-Market.'
        : 'A unified codebase halves ongoing maintenance with silky 60fps native performance and rapid time-to-market.',
      tag: 'Mobile Agility',
    },
    {
      requirement: isRtl
        ? 'نظام ضخم، معالجة معاملات مالية أو بيانات متزامنة لملايين المستخدمين'
        : currentLang === 'de'
        ? 'Unternehmensplattform für Hochlast-Transaktionen und Millionen gleichzeitiger Nutzer'
        : 'High-load platform handling real-time financial or concurrent traffic',
      recommended: 'Go (Golang) / NestJS Microservices + Amazon ECS / RDS Multi-AZ',
      reason: isRtl
        ? 'أقصى استغلال لمعالجات الخوادم باستهلاك ذاكرة قليل جداً، مع تجزئة النظام إلى مايكروسيرفسز مستقلة لا تتعطل أبداً.'
        : currentLang === 'de'
        ? 'Minimale Serverlast und höchste Ausfallsicherheit durch isolierte Microservices und automatische Failovers.'
        : 'Unrivaled concurrency efficiency with decoupled microservices that guarantee 99.99% fault tolerance.',
      tag: 'Enterprise Scale',
    },
    {
      requirement: isRtl
        ? 'التوافق مع القوانين الألمانية الصارمة لحماية البيانات والأمان المشدد (GDPR / DSGVO)'
        : currentLang === 'de'
        ? 'Strenge Einhaltung der EU-DSGVO und deutsche Datenschutzgesetze'
        : 'Strict compliance with German GDPR / DSGVO privacy and high security',
      recommended: 'AWS Frankfurt Region (eu-central-1) + KMS Encryption + IAM Strict Policy',
      reason: isRtl
        ? 'استضافة البيانات حصرياً داخل خوادم ألمانيا مع تشفير كامل بمفاتيح ألمانية رسمية وعقود معالجة بيانات قانونية (AVV).'
        : currentLang === 'de'
        ? 'Datenspeicherung ausschließlich in Frankfurt am Main mit vollständiger Verschlüsselung und zertifiziertem AVV-Vertrag.'
        : 'All user data stays hosted in Frankfurt, Germany with AES-256 KMS encryption and full data processing agreements.',
      tag: 'German GDPR / DSGVO',
    },
  ];

  return (
    <section id="technologies" className="py-24 bg-[#080c14] relative overflow-hidden border-t border-slate-800/80">
      {/* Background decorations */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-xs sm:text-sm font-semibold text-cyan-300 mb-4">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>{t.techSection.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {t.techSection.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              {t.techSection.titleHighlight}
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {t.techSection.subtitle}
          </p>
        </div>

        {/* Highlighted Philosophy Card: Custom Stack Selection */}
        <div className="glass-panel border-cyan-500/30 rounded-3xl p-6 sm:p-10 mb-16 relative overflow-hidden glow-cyan">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-cyan-500/10 to-transparent pointer-events-none rounded-tr-3xl"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase tracking-wider mb-2">
                <Lightbulb className="w-4 h-4" />
                <span>{t.techSection.philosophyTitle}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {isRtl
                  ? 'لماذا لا نعتمد على تقنية واحدة مكررة؟'
                  : currentLang === 'de'
                  ? 'Warum setzen wir niemals auf ein starres Einheitsschema?'
                  : 'Why We Never Rely on a One-Size-Fits-All Stack'}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {t.techSection.philosophyDesc}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    {isRtl ? 'تحليل حجم الزيارات ومعدل النمو المتوقع' : currentLang === 'de' ? 'Analyse von Traffic & Skalierungszielen' : 'Traffic load & future scaling analysis'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    {isRtl ? 'مطابقة متطلبات السرعة مع متطلبات SEO' : currentLang === 'de' ? 'Exakte Abstimmung auf SEO & Core Web Vitals' : 'Core Web Vitals alignment for search dominance'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    {isRtl ? 'مرونة السحابة وتقليل تكلفة خوادم AWS' : currentLang === 'de' ? 'AWS-Kostenoptimierung & Serverless-Flexibilität' : 'AWS cost optimization & dynamic auto-scaling'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    {isRtl ? 'حماية البيانات وفق القانون الألماني والأوروبي' : currentLang === 'de' ? '100% DSGVO- & Sicherheitskonformität' : '100% German DSGVO / GDPR privacy safeguards'}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-emerald-400 flex items-center justify-center text-slate-950 font-black mb-4 shadow-lg shadow-cyan-500/30">
                <Zap className="w-8 h-8 text-slate-950" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                {isRtl ? 'هل لديك فكرة أو متطلبات محددة؟' : currentLang === 'de' ? 'Haben Sie ein konkretes Projekt?' : 'Have a project with custom requirements?'}
              </h4>
              <p className="text-xs text-slate-400 mb-5">
                {isRtl
                  ? 'دعنا نحدد لك البنية المعمارية الأفضل مجاناً في جلسة استشارية مباشرة.'
                  : currentLang === 'de'
                  ? 'Wir definieren die optimale Architektur kostenfrei in einer direkten Beratung.'
                  : 'Let our senior architects recommend the optimal stack in a direct consultation.'}
              </p>
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{t.hero.bookBtn}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-cyan-400'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredTech.map((tech, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-6 rounded-2xl relative overflow-hidden group border border-slate-800 hover:border-cyan-500/50"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${tech.color} text-white shadow-md`}>
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                      {tech.name}
                    </h4>
                    <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider">
                      {tech.badge}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {isRtl ? tech.descAr : tech.desc}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{isRtl ? 'كود قياسي ومختبر' : 'Production Grade'}</span>
                </span>
                <span className="text-cyan-400 font-medium">AWS & Mobile Ready</span>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Decision Engine / Case Matrix */}
        <div id="aws-cloud" className="pt-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-xs font-semibold text-emerald-300 mb-2">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.techSection.decisionEngine.title}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              {isRtl
                ? 'كيف نطابق متطلبات مشروعك مع التقنية الدقيقة؟'
                : currentLang === 'de'
                ? 'Wie wählen wir die passende Technologie für Sie?'
                : 'How We Match Project Constraints With The Exact Tech'}
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              {t.techSection.decisionEngine.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {decisionScenarios.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                      {item.tag}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">SCENARIO #{idx + 1}</span>
                  </div>

                  <h4 className="text-base font-bold text-white mb-2">
                    {item.requirement}
                  </h4>

                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-cyan-300 text-xs font-mono font-semibold mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{item.recommended}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.reason}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-end">
                  <button
                    onClick={onOpenBooking}
                    className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                  >
                    <span>{isRtl ? 'ناقش هذا السيناريو معنا' : currentLang === 'de' ? 'Diesen Fall besprechen' : 'Discuss this stack with us'}</span>
                    <ArrowIcon className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
