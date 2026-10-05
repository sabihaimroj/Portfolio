import React, { useState, useRef } from 'react';
import { PaperclipNote } from './PaperclipNote';
import { MadridClock } from './MadridClock';
import { WatermarkScript } from './WatermarkScript';
import { sound } from '../utils/audio';
import { StampMark } from '../types/portfolio';
import { RotateCcw, Sparkles } from 'lucide-react';

interface StampOption {
  id: string;
  name: string;
  text: string;
  color: string;
  inkBorder: string;
}

const STAMP_OPTIONS: StampOption[] = [
  {
    id: 'create-being',
    name: 'CREATE BEING',
    text: 'CREATE BEING\nBEING CREATE',
    color: '#0f172a',
    inkBorder: 'border-neutral-900',
  },
  {
    id: 'approved',
    name: 'APPROVED',
    text: 'APPROVED // DHAKA',
    color: '#065f46',
    inkBorder: 'border-emerald-800',
  },
  {
    id: 'confidential',
    name: 'CONFIDENTIAL',
    text: 'CONFIDENTIAL DOSSIER',
    color: '#991b1b',
    inkBorder: 'border-rose-900',
  },
  {
    id: 'specimen',
    name: 'SPECIMEN 26',
    text: 'TYPOGRAPHIC SPECIMEN',
    color: '#1e40af',
    inkBorder: 'border-blue-900',
  },
];

export const PlaygroundTab: React.FC = () => {
  const [selectedStamp, setSelectedStamp] = useState<StampOption>(STAMP_OPTIONS[0]);
  const [stampMarks, setStampMarks] = useState<StampMark[]>([
    {
      id: 'initial-1',
      x: 75,
      y: 35,
      text: 'CREATE BEING\nBEING CREATE',
      rotation: -14,
      color: '#0f172a',
    },
    {
      id: 'initial-2',
      x: 20,
      y: 68,
      text: 'SPECIMEN 2026',
      rotation: 8,
      color: '#1e40af',
    },
  ]);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only stamp if clicked on the playground surface, not on buttons
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('input')) return;

    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const newMark: StampMark = {
      id: `stamp-${Date.now()}-${Math.random()}`,
      x,
      y,
      text: selectedStamp.text,
      rotation: Math.floor(Math.random() * 26) - 13,
      color: selectedStamp.color,
    };

    sound.playStamp();
    setStampMarks((prev) => [...prev.slice(-18), newMark]);
  };

  const handleClearStamps = () => {
    sound.playPaper();
    setStampMarks([]);
  };

  return (
    <div
      ref={containerRef}
      onClick={handleContainerClick}
      className="relative w-full h-full flex flex-col justify-between py-6 px-5 sm:px-10 md:px-14 min-h-[720px] md:min-h-[780px] cursor-crosshair select-none"
    >
      {/* Background Cursive Watermark "Playground" */}
      <WatermarkScript text="Playground" />

      {/* Render User-Placed Stamped Impressions */}
      {stampMarks.map((mark) => (
        <div
          key={mark.id}
          className="absolute pointer-events-none transition-transform duration-75 z-20"
          style={{
            left: `${mark.x}%`,
            top: `${mark.y}%`,
            transform: `translate(-50%, -50%) rotate(${mark.rotation}deg)`,
            color: mark.color,
          }}
        >
          <div
            className="border-2 border-current px-2.5 py-1 rounded-xs font-mono font-extrabold text-xs sm:text-sm tracking-widest text-center whitespace-pre-line opacity-85 shadow-xs"
            style={{
              fontFamily: "'Reenie Beanie', 'Caveat', 'JetBrains Mono', monospace",
              textShadow: '0 0 1px currentColor',
            }}
          >
            {mark.text}
          </div>
        </div>
      ))}

      {/* Header Region */}
      <div className="relative z-10 flex flex-col mb-4 pointer-events-none">
        <h1 className="font-syne font-extrabold uppercase tracking-tighter text-6xl sm:text-8xl text-neutral-950">
          PLAYGROUND
        </h1>
        <div className="mt-6 ml-4 sm:ml-12">
          <span className="font-caveat text-4xl sm:text-5xl text-neutral-800 rotate-[-5deg] inline-block uppercase">
            HEY!<br/>THIS IS MY<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WORLD
          </span>
        </div>
      </div>

      {/* Center Tactile Collage Cards */}
      <div className="relative z-10 my-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Experiment 01: Typographic Study */}
        <div className="bg-[#fcfaf7] border border-neutral-300 p-4 rounded-sm shadow-xs flex flex-col justify-between h-48 sm:h-56 transform -rotate-1 hover:rotate-0 transition-transform">
          <div className="flex items-center justify-between font-mono text-[10px] text-neutral-500">
            <span>EXP_01</span>
            <span>KERNING</span>
          </div>
          <div className="text-center py-2">
            <span className="font-serif italic text-4xl sm:text-5xl text-neutral-900 tracking-tight block">
              Forma
            </span>
            <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-500 uppercase mt-1 block">
              Variable Weight
            </span>
          </div>
          <div className="border-t border-neutral-200 pt-2 flex justify-between font-mono text-[10px] text-neutral-600">
            <span>Glyphs App</span>
            <span>2026</span>
          </div>
        </div>

        {/* Experiment 02: 35mm Grain Negative */}
        <div className="bg-[#111827] text-white border border-neutral-800 p-4 rounded-sm shadow-xs flex flex-col justify-between h-48 sm:h-56 transform rotate-1 hover:rotate-0 transition-transform">
          <div className="flex items-center justify-between font-mono text-[10px] text-neutral-400">
            <span>EXP_02</span>
            <span>KODAK TX400</span>
          </div>
          <div className="relative overflow-hidden rounded my-1 flex-1 flex items-center justify-center bg-neutral-900 border border-neutral-800">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500"
              alt="Film study"
              className="w-full h-full object-cover grayscale contrast-150 opacity-80"
            />
            <span className="absolute bottom-1 right-2 font-mono text-[9px] text-yellow-500/80">
              FRAME 24A
            </span>
          </div>
          <div className="pt-1 flex justify-between font-mono text-[10px] text-neutral-400">
            <span>Hatirjheel Dhaka</span>
            <span>1/250s f/4</span>
          </div>
        </div>

        {/* Experiment 03: Tactile Swatch & Color Tone */}
        <div className="bg-[#f4f7f9] border border-neutral-300 p-4 rounded-sm shadow-xs flex flex-col justify-between h-48 sm:h-56 transform -rotate-2 hover:rotate-0 transition-transform">
          <div className="flex items-center justify-between font-mono text-[10px] text-neutral-500">
            <span>EXP_03</span>
            <span>MATTER</span>
          </div>
          <div className="space-y-1.5 py-1">
            <div className="h-6 rounded-xs bg-[#242b35] flex items-center px-2 text-[9px] font-mono text-white/80">
              #242B35 Slate
            </div>
            <div className="h-6 rounded-xs bg-[#b4bec8] flex items-center px-2 text-[9px] font-mono text-neutral-900">
              #B4BEC8 Mist
            </div>
            <div className="h-6 rounded-xs bg-[#c2a382] flex items-center px-2 text-[9px] font-mono text-neutral-900">
              #C2A382 Amber
            </div>
          </div>
          <div className="border-t border-neutral-200 pt-2 flex justify-between font-mono text-[10px] text-neutral-600">
            <span>Color Index</span>
            <span>Tactile</span>
          </div>
        </div>
      </div>

      {/* Interactive Stamping Cue Bar */}
      <div className="relative z-10 py-2.5 px-4 bg-[#e2e8ec] border border-neutral-300/80 rounded-sm flex items-center justify-between font-mono text-xs text-neutral-700">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-neutral-800 animate-pulse" />
          <span>Select a rubber stamp above & click anywhere on paper to ink.</span>
        </div>
        <span className="text-[11px] text-neutral-500 font-semibold">
          {stampMarks.length} STAMPS PLACED
        </span>
      </div>

      {/* Bottom Bar: Clock & Global Presence */}
      <div className="relative z-10 pt-4 flex items-center justify-between text-[10px] sm:text-xs text-neutral-600 tracking-wider border-t border-neutral-300/40 font-mono">
        <MadridClock />

        <div className="flex items-center gap-3">
          <span className="text-neutral-500 font-mono hidden sm:inline">(2026)</span>
          <span className="font-semibold text-neutral-800 font-mono tracking-widest text-[10px] sm:text-[11px]">
            TACTILE LAB
          </span>
        </div>
      </div>
    </div>
  );
};
