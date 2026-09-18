import React, { useState } from 'react';
import { Language } from '../types';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQProps {
  currentLang: Language;
}

export const FAQ: React.FC<FAQProps> = ({ currentLang }) => {
  const isRtl = currentLang === 'ar';
  const isDe = currentLang === 'de';
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqItems = isRtl
    ? [
        {
          q: 'كيف تختارون التقنية البرمجية الأنسب لمشروعي؟',
          a: 'نقوم بتحليل شامل لمتطلبات مشروعك: طبيعة الجمهور المستهدف، حجم الزيارات المتوقعة، متطلبات الأمان والامتثال للـ GDPR، وسرعة التحميل المطلوبة للـ SEO. بناءً على ذلك، نحدد إن كان الأنسب استخدام Next.js للويب أو Flutter لتطبيقات الموبايل أو Go/Node.js للخدمات الخلفية دون فرض تقنية جاهزة موحدة.',
        },
        {
          q: 'هل خوادم AWS والبنية السحابية متوافقة مع القوانين الألمانية (DSGVO)؟',
          a: 'نعم 100%. نقوم بنشر البنية السحابية حصرياً في منطقة فرانكفورت بألمانيا (AWS eu-central-1) مع تشفير كامل للبيانات وتطبيق عقود معالجة البيانات الرسمية (AVV) لحماية خصوصية عملائك بشكل مطلق.',
        },
        {
          q: 'كيف يعمل نظام حجز المواعيد المباشر؟',
          a: 'يمكنك اختيار نوع الاستشارة المناسب لك واليوم والوقت الذي يناسبك بتوقيت ألمانيا (CET). يتم تأكيد الموعد فورياً وتلقي دعوة فيديو رسمية يمكن إضافتها مباشرة لتقويم Google أو تحميلها كملف .ics مع إمكانية التأكيد السريع عبر واتساب.',
        },
        {
          q: 'هل تقدمون عقوداً رسمية وفواتير ضريبية من داخل ألمانيا؟',
          a: 'نعم، شركتنا رسمية ومسجلة في ألمانيا (Gelsenkirchen). جميع العقود والاتفاقيات وفواتير الخدمات رسمية وتخضع للقوانين الألمانية المعمول بها.',
        },
      ]
    : isDe
    ? [
        {
          q: 'Wie wählen Sie die optimale Technologie für mein Projekt aus?',
          a: 'Wir analysieren die spezifischen Anforderungen Ihres Projekts im Detail: Zielgruppe, erwartetes Daten- und Besuchervolumen, Sicherheits- und DSGVO-Standards sowie Pagespeed-Kriterien für Google SEO. Daraufhin stellen wir den idealen Tech-Stack (z.B. Next.js, Flutter, AWS Serverless) maßgeschneidert zusammen.',
        },
        {
          q: 'Sind Ihre AWS-Cloud-Lösungen 100% DSGVO-konform?',
          a: 'Ja, absolut. Wir hosten Kunden-Workloads primär in der AWS-Region Frankfurt am Main (eu-central-1), implementieren Ende-zu-Ende-Verschlüsselung (KMS) und stellen die erforderlichen Auftragsverarbeitungsverträge (AVV) bereit.',
        },
        {
          q: 'Wie funktioniert das direkte Terminbuchungssystem?',
          a: 'Wählen Sie einfach Ihr Wunschthema, Datum und die gewünschte Uhrzeit. Der Termin wird sofort bestätigt und Sie erhalten einen Kalendereintrag (.ics / Google Kalender) sowie den Einwahllink für das Videogespräch.',
        },
        {
          q: 'Erhalte ich einen offiziellen Vertrag und eine ordnungsgemäße Rechnung?',
          a: 'Selbstverständlich. Wir sind eine in Deutschland (Gelsenkirchen) ansässige Agentur. Sämtliche Vereinbarungen und Abrechnungen erfolgen rechtssicher nach deutschem Recht.',
        },
      ]
    : [
        {
          q: 'How do you determine the optimal technology for my project?',
          a: 'We conduct an in-depth architectural discovery analyzing your project objectives, target traffic volume, GDPR compliance needs, and Core Web Vitals targets. Based on this, we tailor the exact frontend, backend, mobile, and cloud topology rather than forcing a template.',
        },
        {
          q: 'Are your AWS cloud architectures 100% GDPR / DSGVO compliant?',
          a: 'Yes, completely. We deploy workloads primarily in the AWS Frankfurt region (eu-central-1) with state-of-the-art encryption, zero-trust IAM policies, and standardized EU Data Processing Agreements.',
        },
        {
          q: 'How does the direct appointment booking system work?',
          a: 'Select your preferred consultation topic, date, and CET time slot. You receive immediate confirmation, a video meeting invitation, and direct Google Calendar / .ics sync with instant WhatsApp confirmation.',
        },
        {
          q: 'Do you provide official German contracts and compliant invoices?',
          a: 'Yes. Our agency is headquartered and registered in Gelsenkirchen, Germany. All client engagements are governed by official agreements and fully compliant documentation.',
        },
      ];

  return (
    <section className="py-20 bg-[#080d17] relative border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs sm:text-sm font-semibold text-cyan-300 mb-3">
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            <span>{isRtl ? 'الأسئلة الشائعة' : isDe ? 'Häufig gestellte Fragen' : 'Frequently Asked Questions'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {isRtl ? 'إجابات على أهم تساؤلات عملائنا' : isDe ? 'Wissenswertes über unsere Zusammenarbeit' : 'Key Answers on Tech & Consultation'}
          </h2>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left rtl:text-right flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 text-emerald-400' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/50 mt-1">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
