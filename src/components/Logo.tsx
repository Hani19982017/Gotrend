import React, { useState } from 'react';

interface LogoProps {
  variant?: 'badge' | 'inline' | 'hero';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ variant = 'inline', className = '', size = 'md' }) => {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: 'h-8',
    md: 'h-11',
    lg: 'h-14',
    xl: 'h-20',
  }[size];

  if (variant === 'badge') {
    return (
      <div
        className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-teal-500/30 shadow-[0_0_20px_rgba(20,184,166,0.2)] select-none ${className}`}
      >
        <img
          src="/logo.png"
          alt="Go.Trend"
          className="h-6 w-auto object-contain brightness-125 contrast-110 drop-shadow-[0_0_8px_rgba(45,212,191,0.4)]"
          onError={() => setImageError(true)}
        />
        <div className="flex items-baseline font-sans font-extrabold tracking-tight text-xs">
          <span className="text-white">Go.</span>
          <span className="text-teal-400 font-semibold ml-0.5">trend</span>
          <span className="text-slate-400 text-[10px] font-medium ml-1.5 border-l border-slate-700 pl-1.5">Germany</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2.5 select-none group cursor-pointer ${className}`}>
      {/* Official High-Resolution Brand Logo Asset */}
      <div className="relative flex items-center justify-center py-1 px-1.5 rounded-xl bg-slate-900/60 border border-teal-500/20 group-hover:border-teal-400/50 transition-all duration-300 shadow-[0_0_20px_rgba(20,184,166,0.15)] backdrop-blur-sm">
        {!imageError ? (
          <img
            src="/logo.png"
            alt="Go.trend Marketing Agency"
            className={`${sizeClasses} w-auto object-contain brightness-125 contrast-105 drop-shadow-[0_0_12px_rgba(45,212,191,0.35)] transition-transform duration-300 group-hover:scale-105`}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex items-center gap-2 px-2">
            <span className="text-xl font-black text-white">Go.</span>
            <span className="text-xl font-bold text-teal-400">trend</span>
          </div>
        )}
      </div>

      {variant === 'hero' && (
        <span className="hidden sm:inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-teal-500/10 text-teal-300 border border-teal-500/30">
          Official Agency Germany
        </span>
      )}
    </div>
  );
};
