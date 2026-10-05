import React from 'react';

interface WatermarkScriptProps {
  text: string;
}

export const WatermarkScript: React.FC<WatermarkScriptProps> = ({ text }) => {
  return (
    <div
      aria-hidden="true"
      className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 overflow-hidden w-full text-center"
    >
      <span
        className="block font-serif italic text-[110px] sm:text-[160px] md:text-[210px] lg:text-[240px] leading-none tracking-normal font-normal text-transparent"
        style={{
          fontFamily: "'Instrument Serif', 'Caveat', serif",
          WebkitTextStroke: '1px rgba(0, 0, 0, 0.04)',
          textShadow: '1px 1px 0px rgba(255, 255, 255, 0.85), -1px -1px 0px rgba(0, 0, 0, 0.08)',
          color: 'rgba(230, 235, 240, 0.4)',
        }}
      >
        {text}
      </span>
    </div>
  );
};
