import React from 'react';
import { PaperclipNote } from './PaperclipNote';
import { GabrielWordmark } from './GabrielWordmark';
import { PostageStamp } from './PostageStamp';
import { MadridClock } from './MadridClock';
import { WatermarkScript } from './WatermarkScript';
import { sound } from '../utils/audio';

interface AboutTabProps {
  onNavigateContact: () => void;
  onOpenBio: () => void;
  onNavigateWorks: () => void;
}

export const AboutTab: React.FC<AboutTabProps> = ({
  onNavigateContact,
  onOpenBio,
  onNavigateWorks,
}) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between py-6 px-5 sm:px-10 md:px-14 min-h-[720px] md:min-h-[780px]">
      {/* Background Cursive Watermark "About" */}
      <WatermarkScript text="About" />

      {/* Top Header Region: Paperclip + Brand Name */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Top-left Paperclip Note */}
        <div className="w-full flex justify-start -mt-9 sm:-mt-10 mb-2 sm:mb-4">
          <PaperclipNote
            label="ABOUT ME"
            clickable
            onClick={() => {
              sound.playPaper();
              onOpenBio();
            }}
          />
        </div>

        {/* Puffy "GABRIEL" Logo */}
        <div className="w-full max-w-[480px] sm:max-w-[540px] px-2 mb-4">
          <GabrielWordmark size="lg" className="text-neutral-950" />
        </div>

        {/* Tagline / Subtitle */}
        <p className="max-w-[440px] text-center text-neutral-800 text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed font-normal mb-3 font-sans px-4">
          A motivated Software Engineering student with a strong interest in software development, problem-solving, and emerging technologies. Aspiring to build practical and meaningful software solutions.
        </p>

        {/* "LET'S TALK ->" Action */}
        <button
          onClick={() => {
            sound.playTabClick();
            onNavigateContact();
          }}
          className="group inline-flex items-center gap-1 text-[11px] sm:text-xs font-mono font-bold tracking-[0.15em] text-neutral-900 uppercase hover:text-neutral-600 transition-colors cursor-pointer py-1"
        >
          <span>LET'S TALK</span>
          <span className="transform transition-transform duration-200 group-hover:translate-x-1">→</span>
        </button>
      </div>

      {/* Center Postage Stamp Hero */}
      <div className="relative z-10 my-4 sm:my-6 flex justify-center items-center">
        <PostageStamp
          imageSrc="/src/assets/images/sabiha_portrait.png"
          alt="Sabiha portrait stamp"
          onClick={() => {
            sound.playStamp();
            onOpenBio();
          }}
        />
      </div>

      {/* Bottom Metadata & Disciplines */}
      <div className="relative z-10 pt-4 flex flex-col gap-3 font-mono">
        {/* Disciplines Chips/Tags Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-mono">
          <button
            onClick={() => {
              sound.playTabClick();
              onNavigateWorks();
            }}
            className="px-2.5 py-1 bg-[#d5dbe0] hover:bg-[#cbd2d8] text-neutral-800 tracking-wider font-semibold rounded-xs transition-colors cursor-pointer"
          >
            (01) FRONTEND DEV
          </button>
          <button
            onClick={() => {
              sound.playTabClick();
              onNavigateWorks();
            }}
            className="px-2.5 py-1 bg-[#d5dbe0] hover:bg-[#cbd2d8] text-neutral-800 tracking-wider font-semibold rounded-xs transition-colors cursor-pointer"
          >
            (02) BACKEND DEV
          </button>
          <button
            onClick={() => {
              sound.playTabClick();
              onNavigateWorks();
            }}
            className="px-2.5 py-1 bg-[#d5dbe0] hover:bg-[#cbd2d8] text-neutral-800 tracking-wider font-semibold rounded-xs transition-colors cursor-pointer"
          >
            (03) FULL-STACK
          </button>
        </div>

        {/* Bottom Bar: Clock & Global Presence */}
        <div className="flex items-center justify-between text-[10px] sm:text-xs text-neutral-600 tracking-wider pt-2 border-t border-neutral-300/40">
          <MadridClock />

          <div className="flex items-center gap-3">
            <span className="text-neutral-500 font-mono hidden sm:inline">(2026)</span>
            <span className="font-semibold text-neutral-800 font-mono tracking-widest text-[10px] sm:text-[11px]">
              WORKING GLOBALLY
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
