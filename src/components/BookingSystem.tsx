import React, { useState } from 'react';
import { Language, BookingData } from '../types';
import { translations } from '../data/content';
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Mail,
  Phone,
  Building,
  FileText,
  CheckCircle,
  Share2,
  CalendarPlus,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Info,
} from 'lucide-react';

interface BookingSystemProps {
  currentLang: Language;
}

export const BookingSystem: React.FC<BookingSystemProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [selectedService, setSelectedService] = useState<string>('strategy');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState<BookingData | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  // Generate available next 10 business dates starting tomorrow
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    let count = 0;
    let daysAhead = 1;

    while (count < 8) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + daysAhead);
      const dayOfWeek = nextDay.getDay();

      // Skip Sunday (0) and Saturday (6) for German business hours
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        const iso = nextDay.toISOString().split('T')[0];
        const formatted = nextDay.toLocaleDateString(
          currentLang === 'ar' ? 'ar-EG' : currentLang === 'de' ? 'de-DE' : 'en-US',
          { weekday: 'short', month: 'short', day: 'numeric' }
        );
        dates.push({ iso, label: formatted });
        count++;
      }
      daysAhead++;
    }
    return dates;
  };

  const availableDates = getAvailableDates();
  const availableTimes = ['09:30', '11:00', '13:30', '15:00', '16:30', '17:30'];

  // Default select first available date and time
  React.useEffect(() => {
    if (!selectedDate && availableDates.length > 0) {
      setSelectedDate(availableDates[0].iso);
    }
    if (!selectedTime) {
      setSelectedTime(availableTimes[1]);
    }
  }, []);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !email.trim() || !phone.trim()) {
      setErrorMsg(
        isRtl
          ? 'يرجى ملء كافة الحقول الأساسية (الاسم، البريد الإلكتروني، ورقم الهاتف).'
          : currentLang === 'de'
          ? 'Bitte füllen Sie alle Pflichtfelder aus (Name, E-Mail und Telefon).'
          : 'Please fill in all mandatory fields (Name, Email, and Phone).'
      );
      return;
    }

    const currentServiceObj = t.booking.serviceTypes.find((s) => s.id === selectedService);
    const bookingRef = `GT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const newBooking: BookingData = {
      serviceId: selectedService,
      serviceName: currentServiceObj?.name || 'Direct Consultation',
      date: selectedDate,
      time: selectedTime,
      clientName,
      email,
      phone,
      company,
      notes,
      bookingRef,
    };

    setBookingConfirmed(newBooking);
    setErrorMsg('');
  };

  // Generate Google Calendar Link
  const getGoogleCalendarUrl = (booking: BookingData) => {
    const title = encodeURIComponent(`Go.Trend Consultation: ${booking.serviceName}`);
    const details = encodeURIComponent(
      `Appointment with Go.Trend Marketing Agency Germany\nReference: ${booking.bookingRef}\nClient: ${booking.clientName}\nCompany: ${booking.company}\nNotes: ${booking.notes}\nWebsite: https://go-trend-marketing.de/\nLocation: Online Video Call`
    );
    const location = encodeURIComponent('Google Meet / Zoom Video Call (Link sent via Email)');
    
    // Format date for Google Calendar
    const cleanDate = booking.date.replace(/-/g, '');
    const cleanTime = booking.time.replace(':', '');
    const startIso = `${cleanDate}T${cleanTime}00`;
    const endIso = `${cleanDate}T${parseInt(cleanTime.slice(0, 2)) + 1}${cleanTime.slice(2)}00`;

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startIso}/${endIso}&details=${details}&location=${location}`;
  };

  // Download .ics Calendar File
  const downloadIcsFile = (booking: BookingData) => {
    const cleanDate = booking.date.replace(/-/g, '');
    const cleanTime = booking.time.replace(':', '');
    const startIso = `${cleanDate}T${cleanTime}00`;
    const endIso = `${cleanDate}T${parseInt(cleanTime.slice(0, 2)) + 1}${cleanTime.slice(2)}00`;

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Go Trend Marketing//Direct Appointment//EN
CALSCALE:GREGORIAN
METHOD:REQUEST
BEGIN:VEVENT
UID:${booking.bookingRef}@go-trend-marketing.de
DTSTAMP:${cleanDate}T000000Z
DTSTART:${startIso}
DTEND:${endIso}
SUMMARY:Go.Trend Consultation - ${booking.serviceName}
DESCRIPTION:Appointment with Go.Trend Marketing Agency Germany\\nRef: ${booking.bookingRef}
LOCATION:Online Video Meeting (Link sent by Go.Trend)
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `GoTrend-Appointment-${booking.bookingRef}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="booking" className="py-24 bg-[#070b13] relative overflow-hidden border-t border-slate-800">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-xs sm:text-sm font-semibold text-emerald-300 mb-4">
            <CalendarIcon className="w-4 h-4 text-emerald-400" />
            <span>{t.booking.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {t.booking.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
              {t.booking.titleHighlight}
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {t.booking.subtitle}
          </p>
        </div>

        {/* Interactive Booking Container */}
        <div className="glass-panel border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative glow-cyan">
          {!bookingConfirmed ? (
            <form onSubmit={handleBookingSubmit} className="space-y-10">
              {/* STEP 1: Select Consultation Topic */}
              <div>
                <div className="flex items-center gap-2 mb-4 text-lg font-bold text-white">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-mono font-bold border border-cyan-500/40">
                    1
                  </span>
                  <span>{t.booking.step1Title}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {t.booking.serviceTypes.map((service) => {
                    const isSelected = selectedService === service.id;
                    return (
                      <div
                        key={service.id}
                        onClick={() => setSelectedService(service.id)}
                        className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all border ${
                          isSelected
                            ? 'bg-cyan-950/40 border-cyan-400/80 shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                            : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h4 className="font-bold text-sm sm:text-base text-white">
                            {service.name}
                          </h4>
                          <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-slate-800 text-cyan-300 shrink-0">
                            {service.duration}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* STEP 2: Pick Date & Time Slot */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-lg font-bold text-white">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-mono font-bold border border-cyan-500/40">
                      2
                    </span>
                    <span>{t.booking.step2Title}</span>
                  </div>
                  <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Berlin / CET (UTC+1)</span>
                  </span>
                </div>

                {/* Available Date Chips */}
                <div className="mb-5">
                  <label className="block text-xs font-semibold text-slate-400 mb-2">
                    {isRtl ? 'الأيام المتاحة هذا الأسبوع والأسبوع القادم:' : 'Available Days:'}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {availableDates.map((d) => {
                      const isSelected = selectedDate === d.iso;
                      return (
                        <button
                          key={d.iso}
                          type="button"
                          onClick={() => setSelectedDate(d.iso)}
                          className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 shadow-md shadow-cyan-500/30'
                              : 'bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          {d.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Available Times Chips */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-2">
                    {isRtl ? 'الفترات الزمنية المتاحة (بتوقيت ألمانيا):' : 'Available Time Slots (CET):'}
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                    {availableTimes.map((time) => {
                      const isSelected = selectedTime === time;
                      return (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`py-2.5 px-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/30'
                              : 'bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          {time} CET
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* STEP 3: Client Details */}
              <div>
                <div className="flex items-center gap-2 mb-4 text-lg font-bold text-white">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-mono font-bold border border-cyan-500/40">
                    3
                  </span>
                  <span>{t.booking.step3Title}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{t.booking.namePlaceholder} *</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder={t.booking.namePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{t.booking.emailPlaceholder} *</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.booking.emailPlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{t.booking.phonePlaceholder} *</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+49 1578 3457397"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-amber-400" />
                      <span>{t.booking.companyPlaceholder}</span>
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder={t.booking.companyPlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-teal-400" />
                    <span>{t.booking.notesPlaceholder}</span>
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={t.booking.notesPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Error Alert if any */}
              {errorMsg && (
                <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
                  <Info className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  id="submit-appointment-btn"
                  className="w-full py-4 rounded-2xl text-base font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CalendarIcon className="w-5 h-5 text-slate-950" />
                  <span>{t.booking.submitBtn}</span>
                  <ArrowIcon className="w-4 h-4" />
                </button>
                <p className="text-center text-xs text-slate-400 mt-3 flex items-center justify-center gap-1">
                  <span>🔒 {isRtl ? 'جلسة فيديو مباشرة مشفرة وسرية بدون أي التزام مالي' : '100% Free & Confidential video consultation, zero commitment.'}</span>
                </p>
              </div>
            </form>
          ) : (
            /* STEP 4: Success & Confirmation State */
            <div className="text-center py-6">
              <div className="w-20 h-20 rounded-3xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                <CheckCircle className="w-10 h-10 text-emerald-400" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {t.booking.successTitle}
              </h3>
              <p className="text-sm text-slate-300 max-w-lg mx-auto mb-4">
                {t.booking.successDesc}
              </p>

              {/* Reference ID Pill */}
              <div className="inline-block px-5 py-2 rounded-xl bg-slate-900 border border-cyan-500/40 text-cyan-300 font-mono text-base font-bold mb-8 shadow-inner">
                {bookingConfirmed.bookingRef}
              </div>

              {/* Booking Summary Box */}
              <div className="max-w-md mx-auto p-5 rounded-2xl bg-slate-900/80 border border-slate-800 text-left rtl:text-right mb-8 text-xs sm:text-sm space-y-2">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">{isRtl ? 'نوع الاستشارة:' : 'Topic:'}</span>
                  <span className="font-semibold text-white">{bookingConfirmed.serviceName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">{isRtl ? 'التاريخ والوقت:' : 'Date & Time:'}</span>
                  <span className="font-semibold text-emerald-400 font-mono">
                    {bookingConfirmed.date} @ {bookingConfirmed.time} CET
                  </span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">{isRtl ? 'المسؤول / العميل:' : 'Client Name:'}</span>
                  <span className="font-semibold text-white">{bookingConfirmed.clientName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{isRtl ? 'البريد الإلكتروني:' : 'Email:'}</span>
                  <span className="font-semibold text-cyan-300">{bookingConfirmed.email}</span>
                </div>
              </div>

              {/* Calendar & WhatsApp Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
                <a
                  href={getGoogleCalendarUrl(bookingConfirmed)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 py-3 px-4 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <CalendarPlus className="w-4 h-4" />
                  <span>{t.booking.calendarBtn}</span>
                </a>

                <button
                  type="button"
                  onClick={() => downloadIcsFile(bookingConfirmed)}
                  className="w-full sm:w-auto flex-1 py-3 px-4 rounded-xl text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CalendarIcon className="w-4 h-4 text-cyan-400" />
                  <span>{isRtl ? 'تحميل ملف التقويم (.ics)' : 'Download .ics Invite'}</span>
                </button>

                <a
                  href={`https://wa.me/4915783457397?text=${encodeURIComponent(
                    `Hallo Go.Trend, ich habe einen Termin gebucht (Ref: ${bookingConfirmed.bookingRef}) für ${bookingConfirmed.serviceName} am ${bookingConfirmed.date} um ${bookingConfirmed.time} MEZ.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 py-3 px-4 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                >
                  <Share2 className="w-4 h-4" />
                  <span>{t.booking.whatsappBtn}</span>
                </a>
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => {
                    setBookingConfirmed(null);
                    setClientName('');
                    setEmail('');
                    setPhone('');
                    setNotes('');
                  }}
                  className="text-xs text-slate-400 hover:text-cyan-400 transition-colors underline cursor-pointer"
                >
                  {isRtl ? 'حجز موعد إضافي أو تعديل البيانات' : 'Book another appointment or update details'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
