import React from 'react';
import { X, Award, Briefcase, Sparkles, MapPin, ArrowUpRight } from 'lucide-react';
import { sound } from '../utils/audio';

interface BioDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateContact: () => void;
}

export const BioDrawer: React.FC<BioDrawerProps> = ({
  isOpen,
  onClose,
  onNavigateContact,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xs transition-opacity duration-300">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Dossier Card Sheet */}
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-[#eaeff2] border border-neutral-300 rounded-xl shadow-2xl overflow-hidden flex flex-col z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Top Header bar with folder clip motif */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-300/80 bg-[#e2e7eb]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-900 inline-block" />
            <span className="font-mono text-xs font-bold tracking-wider text-neutral-800 uppercase">
              DOSSIER FILE // SABIHA IMROJ MIM — CV
            </span>
          </div>
          <button
            onClick={() => {
              sound.playTabClick();
              onClose();
            }}
            className="p-1.5 rounded-md hover:bg-neutral-300 text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
            aria-label="Close dossier"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 font-sans text-neutral-800">
          {/* Identity Intro */}
          <div>
            <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-widest block mb-2">
              Profile Summary
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-950 mb-3">
              Software Engineer building practical and meaningful software solutions.
            </h2>
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
              A motivated Software Engineering student with a strong interest in software development, problem-solving, and emerging technologies. Currently developing my programming and web development skills through hands-on learning and projects. Aspiring to become a skilled Software Engineer who builds practical and meaningful software solutions.
            </p>
          </div>

          {/* Quick Metrics / Adjacency */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-neutral-200/50 rounded-lg border border-neutral-300/60 font-mono text-xs">
            <div>
              <span className="text-neutral-500 block text-[10px] uppercase">Title</span>
              <span className="font-bold text-neutral-900 text-sm">Software Engineer</span>
            </div>
            <div>
              <span className="text-neutral-500 block text-[10px] uppercase">Base</span>
              <span className="font-bold text-neutral-900 text-sm">Dhaka, BD</span>
            </div>
            <div>
              <span className="text-neutral-500 block text-[10px] uppercase">Education</span>
              <span className="font-bold text-neutral-900 text-[11px]">B.Sc. in SWE</span>
            </div>
            <div>
              <span className="text-neutral-500 block text-[10px] uppercase">Languages</span>
              <span className="font-bold text-neutral-900 text-sm">Bengali, English</span>
            </div>
          </div>

          {/* Skills & Technologies */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="w-4 h-4 text-neutral-700" />
              <h3 className="font-mono text-xs uppercase tracking-wider font-bold text-neutral-900">
                Technical Skills & Tools
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs sm:text-sm font-medium text-neutral-700">
              <div className="p-2.5 bg-[#f4f7f9] border border-neutral-300/60 rounded">C/C++, JavaScript</div>
              <div className="p-2.5 bg-[#f4f7f9] border border-neutral-300/60 rounded">React, Jframe</div>
              <div className="p-2.5 bg-[#f4f7f9] border border-neutral-300/60 rounded">HTML, CSS</div>
              <div className="p-2.5 bg-[#f4f7f9] border border-neutral-300/60 rounded">Node.js</div>
              <div className="p-2.5 bg-[#f4f7f9] border border-neutral-300/60 rounded">Docker, Podman</div>
              <div className="p-2.5 bg-[#f4f7f9] border border-neutral-300/60 rounded">Git, Github</div>
            </div>
          </div>

          {/* Honors & Awards */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-4 h-4 text-neutral-700" />
              <h3 className="font-mono text-xs uppercase tracking-wider font-bold text-neutral-900">
                Awards & Leadership
              </h3>
            </div>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-baseline justify-between p-2.5 bg-[#f4f7f9] border border-neutral-300/60 rounded">
                <span className="font-medium text-neutral-900">CWFD Generation Break-Through Project Awards</span>
                <span className="font-mono text-neutral-500 text-xs">2016</span>
              </div>
              <div className="flex items-baseline justify-between p-2.5 bg-[#f4f7f9] border border-neutral-300/60 rounded">
                <span className="font-medium text-neutral-900">National Education Week</span>
                <span className="font-mono text-neutral-500 text-xs">2016</span>
              </div>
              <div className="flex items-baseline justify-between p-2.5 bg-[#f4f7f9] border border-neutral-300/60 rounded">
                <span className="font-medium text-neutral-900">General Grade Stipend, PSC</span>
                <span className="font-mono text-neutral-500 text-xs">2011</span>
              </div>
              <div className="flex items-baseline justify-between p-2.5 bg-[#f4f7f9] border border-neutral-300/60 rounded">
                <span className="font-medium text-neutral-900">Daffodil International University — B.Sc. in SWE</span>
                <span className="font-mono text-neutral-500 text-xs">Jul 2024 - Present</span>
              </div>
            </div>
          </div>

          {/* Studio Location & Inquiries */}
          <div className="pt-2 border-t border-neutral-300/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-neutral-600">
              <MapPin className="w-3.5 h-3.5 text-neutral-500" />
              <span>Dhaka, Bangladesh</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onNavigateContact();
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-900 text-white rounded font-mono text-xs font-semibold tracking-wider hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <span>DISCUSS A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
