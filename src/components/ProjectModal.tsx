import React from 'react';
import { X, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { Project } from '../types/portfolio';
import { sound } from '../utils/audio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onNavigateContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onNavigateContact,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xs transition-opacity duration-300">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl max-h-[92vh] bg-[#eaeff2] border border-neutral-300 rounded-xl shadow-2xl overflow-hidden flex flex-col z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Top Folder Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-300/80 bg-[#e2e7eb]">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-neutral-500">{project.index}</span>
            <span className="text-neutral-300">•</span>
            <span className="font-mono text-xs font-bold tracking-wider text-neutral-900 uppercase">
              CASE FILE // {project.title}
            </span>
          </div>
          <button
            onClick={() => {
              sound.playTabClick();
              onClose();
            }}
            className="p-1.5 rounded-md hover:bg-neutral-300 text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
            aria-label="Close case file"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 font-sans">
          {/* Main Visual Showcase */}
          <div className="relative rounded-lg overflow-hidden border border-neutral-300/80 shadow-inner aspect-16/10 bg-neutral-900">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 bg-neutral-950/80 backdrop-blur-xs text-white px-3 py-1 rounded text-[11px] font-mono tracking-wider">
              {project.client} — {project.year}
            </div>
          </div>

          {/* Project Header Info */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-xs text-neutral-600">
              <span className="px-2 py-0.5 bg-neutral-200 rounded font-semibold text-neutral-900">
                {project.category.toUpperCase()}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {project.year}
              </span>
              <span>·</span>
              <span>Client: {project.client}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight mb-3">
              {project.title}
            </h2>

            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Deliverables & Disciplines */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 bg-[#f4f7f9] border border-neutral-300/70 rounded-lg">
            <div>
              <h4 className="font-mono text-xs uppercase font-bold text-neutral-900 tracking-wider mb-2.5">
                Core Disciplines
              </h4>
              <div className="space-y-1.5 text-xs text-neutral-700">
                {project.disciplines.map((d, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase font-bold text-neutral-900 tracking-wider mb-2.5">
                Key Deliverables
              </h4>
              <div className="space-y-1.5 text-xs text-neutral-700">
                {project.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neutral-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Call to Action */}
          <div className="pt-4 border-t border-neutral-300/80 flex items-center justify-between">
            <span className="font-mono text-xs text-neutral-500">
              Archived in Sabiha Dhaka Studio
            </span>
            <button
              onClick={() => {
                onClose();
                onNavigateContact();
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-950 text-white rounded font-mono text-xs font-semibold tracking-wider hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <span>INQUIRE SIMILAR PROJECT</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
