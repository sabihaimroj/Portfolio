import React from 'react';

interface PaperclipNoteProps {
  label: string;
  onClick?: () => void;
  clickable?: boolean;
}

export const PaperclipNote: React.FC<PaperclipNoteProps> = ({
  label,
  onClick,
  clickable = false,
}) => {
  return (
    <div
      onClick={clickable ? onClick : undefined}
      className={`relative z-20 inline-block transition-transform duration-200 ${
        clickable ? 'cursor-pointer hover:-translate-y-0.5 active:translate-y-0' : ''
      }`}
    >
      {/* Paper note card */}
      <div className="bg-[#fcfaf7] border border-neutral-300/80 shadow-[0_4px_12px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.06)] px-4 py-2.5 pt-4 text-center rounded-[2px] transition-all">
        <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] text-neutral-800 uppercase select-none whitespace-nowrap">
          {label}
        </span>
      </div>

      {/* Realistic Silver Wire Paperclip */}
      <div className="absolute -top-3.5 left-3 w-5 h-11 pointer-events-none drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]">
        <svg
          viewBox="0 0 24 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Paperclip wire outer loop */}
          <path
            d="M 6 18 
               L 6 42 
               C 6 49, 18 49, 18 42 
               L 18 10 
               C 18 4, 9 4, 9 10 
               L 9 38 
               C 9 42, 15 42, 15 38 
               L 15 16"
            stroke="#a1a6ac"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Wire highlight */}
          <path
            d="M 6.8 19 
               L 6.8 41 
               C 7 46, 17 46, 17 41 
               L 17 11 
               C 17 6, 10 6, 10 11 
               L 10 37"
            stroke="#e2e8f0"
            strokeWidth="0.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};
