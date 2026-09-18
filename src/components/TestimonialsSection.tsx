import React from 'react';
import { Language } from '../types';
import { translations } from '../data/content';
import { Star, Quote, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';

interface TestimonialsSectionProps {
  currentLang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const data = t.testimonialsSection;

  return (
    <section className="py-20 bg-[#060910] relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>{data.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {data.title}
          </h2>
          <p className="text-slate-400 text-base">
            {data.subtitle}
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {data.items.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 flex flex-col justify-between hover:border-cyan-500/40 transition-all hover:-translate-y-1"
            >
              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-amber-300 ml-2">5.0 / 5.0</span>
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-slate-700/60 mb-2 rotate-180" />
                  <p className="text-slate-300 text-sm leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              {/* Client Info */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-white">
                      {item.client}
                    </h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <p className="text-xs text-slate-400 font-medium">
                    {item.role}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-slate-400">
                  <MapPin className="w-3 h-3 text-cyan-400" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
