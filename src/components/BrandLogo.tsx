import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'header' | 'footer';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', variant = 'header' }) => {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* Official Cafe Cup & Leaves Emblem */}
      <div className="relative w-8 h-7 sm:w-12 sm:h-10 flex-shrink-0 flex items-center justify-center">
        <picture>
          <source srcSet="/images/logo-mark.webp" type="image/webp" />
          <img
            src="/images/logo-mark.png"
            alt="The Amor Panem Logo Emblem"
            width={75}
            height={55}
            className="w-full h-full object-contain"
          />
        </picture>
      </div>

      {/* Typography without artificial truncation */}
      <div className="flex flex-col">
        <span
          className={`font-serif tracking-[0.08em] sm:tracking-[0.20em] font-semibold text-[#1c281e] uppercase leading-tight text-[13px] sm:text-lg whitespace-nowrap`}
        >
          The Amor Panem
        </span>
        <span
          className="text-[7.5px] sm:text-[10px] tracking-[0.16em] sm:tracking-[0.28em] uppercase text-[#69746b] font-medium mt-0.5 whitespace-nowrap"
        >
          Café &nbsp;•&nbsp; Bakery &nbsp;•&nbsp; Good Food
        </span>
      </div>
    </div>
  );
};

export const WheatSprigIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4 text-[#d4af37]' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M4 20C9 18 16 13 20 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M13 14C12 12 14 9 17 9C17 12 15 14 13 14Z"
      fill="currentColor"
    />
    <path
      d="M9 17C8 15 10 12 13 12C13 15 11 17 9 17Z"
      fill="currentColor"
    />
    <path
      d="M17 10C17 8 19 6 21 6C21 8 19 11 17 10Z"
      fill="currentColor"
    />
    <path
      d="M14 8C15 6 18 5 20 6C19 8 16 9 14 8Z"
      fill="currentColor"
    />
  </svg>
);

export const BotanicalDivider: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-center gap-3 my-2 ${className}`}>
    <div className="h-[1px] w-14 sm:w-20 bg-[#415a45]/30" />
    <svg
      viewBox="0 0 40 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-3.5 text-[#415a45]"
      aria-hidden="true"
    >
      <path
        d="M2 9H38"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M20 9C18 6 15 5 13 7C14 9 17 10 20 9Z"
        fill="currentColor"
      />
      <path
        d="M20 9C22 6 25 5 27 7C26 9 23 10 20 9Z"
        fill="currentColor"
      />
      <path
        d="M20 9C18 12 15 13 13 11C14 9 17 8 20 9Z"
        fill="currentColor"
      />
      <path
        d="M20 9C22 12 25 13 27 11C26 9 23 8 20 9Z"
        fill="currentColor"
      />
    </svg>
    <div className="h-[1px] w-14 sm:w-20 bg-[#415a45]/30" />
  </div>
);
