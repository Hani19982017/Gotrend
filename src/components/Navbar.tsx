import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Logo } from './Logo';
import { Language } from '../types';
import { translations } from '../data/content';
import { MapPin, Phone, Mail, Clock, Calendar, Menu, X, Globe, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onLanguageChange, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const t = translations[currentLang];

  const navLinks = [
    {
      label: currentLang === 'ar' ? 'الرئيسية' : currentLang === 'de' ? 'Startseite' : 'Home',
      href: '/',
      isRoute: true,
    },
    {
      label: t.nav.services,
      href: '/services',
      isRoute: true,
    },
    {
      label: t.nav.aboutUs,
      href: '/about',
      isRoute: true,
    },
    {
      label: currentLang === 'ar' ? 'المشاريع المنفذة' : currentLang === 'de' ? 'Projekte' : 'Projects',
      href: '#projects',
      isRoute: false,
    },
    {
      label: t.nav.technologies,
      href: '#technologies',
      isRoute: false,
    },
    {
      label: t.nav.booking,
      href: '#booking',
      isRoute: false,
    },
    {
      label: t.nav.calculator,
      href: '#calculator',
      isRoute: false,
    },
  ];

  const handleNavClick = (e: React.MouseEvent, href: string, isRoute: boolean) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (isRoute) {
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(href.replace('#', ''));
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      } else {
        const el = document.getElementById(href.replace('#', ''));
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const isActive = (href: string, isRoute: boolean) => {
    if (isRoute) {
      return location.pathname === href;
    }
    return false;
  };

  const locationParts = t.topBar.location.split('(');
  const city = locationParts[0]?.trim() || t.topBar.location;
  const streetAddress = locationParts[1] ? `(${locationParts[1]}` : '';

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#080c14]/90 border-b border-slate-800/80 transition-all duration-300">
      {/* Top Info Bar - Always side-by-side on mobile and desktop without stacking */}
      <div className="bg-[#05080f] text-slate-300 text-xs border-b border-slate-800/60 py-1.5 px-3 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 overflow-x-auto scrollbar-none whitespace-nowrap">
          {/* Contact Details (City, Phone, Email) */}
          <div className="flex items-center gap-2.5 sm:gap-5 shrink-0 text-[11px] sm:text-xs">
            {/* Location (City on mobile, full address on desktop) */}
            <div className="flex items-center gap-1 text-slate-300 hover:text-cyan-400 transition-colors shrink-0">
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400 shrink-0" />
              <span>{city}</span>
              {streetAddress && (
                <span className="hidden md:inline text-slate-400 font-normal">
                  {streetAddress}
                </span>
              )}
            </div>

            {/* Direct Phone Number */}
            <a
              href="tel:+4915783457397"
              className="flex items-center gap-1 text-slate-300 hover:text-emerald-400 transition-colors shrink-0 font-medium"
            >
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0" />
              <span dir="ltr">{t.topBar.phone}</span>
            </a>

            {/* Email (Visible from md screen) */}
            <a
              href="mailto:info@go-trend-marketing.de"
              className="hidden lg:flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors shrink-0"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>{t.topBar.email}</span>
            </a>

            {/* Working Hours (Visible on large screen) */}
            <div className="hidden xl:flex items-center gap-1.5 text-slate-400 shrink-0">
              <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{t.topBar.hours}</span>
            </div>
          </div>

          {/* Language Switcher Buttons - Sleek & side-by-side */}
          <div
            className="flex items-center gap-1 bg-slate-900/95 border border-slate-800 rounded-full px-1.5 sm:px-2 py-0.5 shrink-0"
            dir="ltr"
          >
            <Globe className="w-3 h-3 text-cyan-400 shrink-0 ml-0.5" />
            <button
              id="lang-btn-ar"
              onClick={() => onLanguageChange('ar')}
              className={`px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs rounded-full font-medium transition-all ${
                currentLang === 'ar'
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold shadow-[0_0_10px_rgba(6,182,212,0.5)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              العربية
            </button>
            <span className="text-slate-700 text-[10px]">|</span>
            <button
              id="lang-btn-en"
              onClick={() => onLanguageChange('en')}
              className={`px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs rounded-full font-medium transition-all ${
                currentLang === 'en'
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold shadow-[0_0_10px_rgba(6,182,212,0.5)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span className="sm:hidden">EN</span>
              <span className="hidden sm:inline">English</span>
            </button>
            <span className="text-slate-700 text-[10px]">|</span>
            <button
              id="lang-btn-de"
              onClick={() => onLanguageChange('de')}
              className={`px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs rounded-full font-medium transition-all ${
                currentLang === 'de'
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold shadow-[0_0_10px_rgba(6,182,212,0.5)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span className="sm:hidden">DE</span>
              <span className="hidden sm:inline">Deutsch</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo with Link to Home */}
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center">
          <Logo size="md" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => {
            const active = isActive(link.href, link.isRoute);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.isRoute)}
                className={`transition-colors relative py-1 ${
                  active
                    ? 'text-cyan-400 font-bold after:w-full'
                    : 'hover:text-cyan-400 after:w-0'
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-cyan-400 hover:after:w-full after:transition-all`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <button
            id="nav-book-btn"
            onClick={onOpenBooking}
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4 text-slate-950" />
            <span>{t.nav.bookNow}</span>
          </button>

          {/* WhatsApp Direct Quick Action */}
          <a
            id="nav-whatsapp-btn"
            href="https://wa.me/4915783457397?text=Hallo%20Go.Trend%20Marketing"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
            title="WhatsApp Support"
          >
            <Sparkles className="w-4 h-4" />
          </a>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0f1c] border-b border-slate-800 px-6 py-5 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3 text-base font-medium text-slate-200">
            {navLinks.map((link) => {
              const active = isActive(link.href, link.isRoute);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.isRoute)}
                  className={`py-2 border-b border-slate-800/50 transition-colors ${
                    active ? 'text-cyan-400 font-bold' : 'hover:text-cyan-400'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="mt-3 flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-lg shadow-cyan-500/20"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.nav.bookNow}</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
