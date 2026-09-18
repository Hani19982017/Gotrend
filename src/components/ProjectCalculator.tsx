import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/content';
import { Calculator, Check, ArrowRight, ArrowLeft, Cpu, Clock, Layers, Shield, Sparkles } from 'lucide-react';

interface ProjectCalculatorProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const ProjectCalculator: React.FC<ProjectCalculatorProps> = ({ currentLang, onOpenBooking }) => {
  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [projectType, setProjectType] = useState<'web' | 'mobile' | 'cloud' | 'full'>('web');
  const [scale, setScale] = useState<'starter' | 'growth' | 'enterprise'>('growth');
  const [includeMarketing, setIncludeMarketing] = useState(true);

  // Recommendations calculated dynamically
  const recommendations = {
    web: {
      title: isRtl ? 'منصة ويب حديثة وتطبيق سحابي' : 'Modern Web Platform & SaaS',
      stack: 'Next.js 15 (SSR) + TypeScript + Tailwind CSS + Node.js + AWS S3/CloudFront',
      timeline: isRtl ? '3 إلى 6 أسابيع' : currentLang === 'de' ? '3 bis 6 Wochen' : '3 to 6 weeks',
      bestFor: isRtl ? 'سرعة فائقة وتصدر فوري في نتائج Google SEO' : 'Maximum SEO ranking & sub-second loading',
    },
    mobile: {
      title: isRtl ? 'تطبيق جوال متقدم (iOS & Android)' : 'Advanced Cross-Platform Mobile App',
      stack: 'Flutter / React Native + AWS Serverless Lambda + PostgreSQL RDS',
      timeline: isRtl ? '5 إلى 8 أسابيع' : currentLang === 'de' ? '5 bis 8 Wochen' : '5 to 8 weeks',
      bestFor: isRtl ? 'تطبيق موحد للآيفون والأندرويد بتكلفة صيانة مخفضة' : 'Unified iOS & Android app with 60fps performance',
    },
    cloud: {
      title: isRtl ? 'بنية سحابية وهندسة AWS المتقدمة' : 'AWS Cloud Architecture & Microservices',
      stack: 'Amazon ECS (Docker) + AWS Lambda + CloudFront CDN + Terraform (IaC)',
      timeline: isRtl ? '2 إلى 4 أسابيع' : currentLang === 'de' ? '2 bis 4 Wochen' : '2 to 4 weeks',
      bestFor: isRtl ? 'أمان بنكي وتوسع تلقائي للزيارات المليونية بدون توقف' : 'Fault-tolerant auto-scaling & 99.99% uptime',
    },
    full: {
      title: isRtl ? 'منظومة رقمية شاملة (ويب + موبايل + AWS + إعلانات)' : 'Full-Stack Ecosystem (Web + Mobile + AWS + Ads)',
      stack: 'Next.js 15 + Flutter Mobile + AWS Cloud + Google & Meta Ads Funnels',
      timeline: isRtl ? '6 إلى 10 أسابيع' : currentLang === 'de' ? '6 bis 10 Wochen' : '6 to 10 weeks',
      bestFor: isRtl ? 'السيطرة الكاملة على السوق وبناء علامة تجارية رائدة' : 'Complete market leadership & maximum ROI',
    },
  }[projectType];

  return (
    <section id="calculator" className="py-24 bg-[#070b14] relative border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs sm:text-sm font-semibold text-cyan-300 mb-4">
            <Calculator className="w-4 h-4 text-cyan-400" />
            <span>{t.calculator.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {t.calculator.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {t.calculator.subtitle}
          </p>
        </div>

        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Question 1: Project Scope */}
              <div>
                <label className="block text-sm font-bold text-white mb-3">
                  {isRtl ? '1. ما هو نوع ونطاق المشروع الرئيسي؟' : '1. What is the primary project scope?'}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'web', label: isRtl ? 'موقع أو منصة ويب' : 'Web & Platform' },
                    { id: 'mobile', label: isRtl ? 'تطبيق موبايل (iOS/Android)' : 'Mobile App' },
                    { id: 'cloud', label: isRtl ? 'بنية سحابية AWS' : 'AWS Cloud Infra' },
                    { id: 'full', label: isRtl ? 'منظومة رقمية شاملة' : 'Full Digital Ecosystem' },
                  ].map((btn) => (
                    <button
                      key={btn.id}
                      type="button"
                      onClick={() => setProjectType(btn.id as any)}
                      className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all text-center cursor-pointer border ${
                        projectType === btn.id
                          ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 border-cyan-400 shadow-md shadow-cyan-500/20'
                          : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2: Expected Scale */}
              <div>
                <label className="block text-sm font-bold text-white mb-3">
                  {isRtl ? '2. حجم الاستخدام والزيارات المتوقعة:' : '2. Target Traffic & Concurrency Scale:'}
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'starter', label: isRtl ? 'بداية (حتى 10k زائر)' : 'Starter (<10k)' },
                    { id: 'growth', label: isRtl ? 'نمو (10k - 100k)' : 'Growth (10k-100k)' },
                    { id: 'enterprise', label: isRtl ? 'مؤسسي (100k+ مع AWS)' : 'Enterprise (100k+)' },
                  ].map((btn) => (
                    <button
                      key={btn.id}
                      type="button"
                      onClick={() => setScale(btn.id as any)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition-all text-center cursor-pointer border ${
                        scale === btn.id
                          ? 'bg-emerald-400 text-slate-950 border-emerald-300 font-bold shadow-md shadow-emerald-500/20'
                          : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 3: Performance Ads Toggle */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {isRtl ? 'تضمين حملات إعلانية مدفوعة وسيو (Google & Meta Ads)' : 'Include Paid Ads (Google, Meta, TikTok) & SEO'}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {isRtl ? 'لضمان جلب عملاء ومبيعات فورية عند الإطلاق' : 'Ensure immediate revenue & lead flow upon launch'}
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={includeMarketing}
                  onChange={(e) => setIncludeMarketing(e.target.checked)}
                  className="w-5 h-5 accent-cyan-400 cursor-pointer"
                />
              </div>
            </div>

            {/* Right Recommendation Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900 to-[#0c1424] border border-cyan-500/30 glow-cyan">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>{isRtl ? 'التوصية المعمارية المثالية' : 'Optimal Stack Recommendation'}</span>
              </div>

              <h3 className="text-xl font-extrabold text-white mb-3">
                {recommendations.title}
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-slate-400 block text-[11px] font-mono mb-1">
                    {isRtl ? 'الحزمة التقنية المقترحة:' : 'Suggested Tech Stack:'}
                  </span>
                  <p className="font-mono font-bold text-cyan-300 text-xs">
                    {recommendations.stack}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                    <span className="text-slate-400 block text-[11px] mb-0.5">{isRtl ? 'الجدول الزمني:' : 'Timeline:'}</span>
                    <span className="font-bold text-emerald-400">{recommendations.timeline}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                    <span className="text-slate-400 block text-[11px] mb-0.5">{isRtl ? 'استضافة السحابة:' : 'Hosting:'}</span>
                    <span className="font-bold text-white">AWS Germany (Frankfurt)</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-400 block text-[11px] mb-0.5">{isRtl ? 'الهدف المحقق:' : 'Target Benefit:'}</span>
                  <span className="text-slate-200 text-xs">{recommendations.bestFor}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20"
                >
                  <span>{isRtl ? 'احجز استشارة لمناقشة هذا النطاق' : 'Book Session to Discuss This Scope'}</span>
                  <ArrowIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
