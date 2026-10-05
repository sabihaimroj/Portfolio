import React, { useState } from 'react';
import { PaperclipNote } from './PaperclipNote';
import { MadridClock } from './MadridClock';
import { WatermarkScript } from './WatermarkScript';
import { Project } from '../types/portfolio';
import { sound } from '../utils/audio';
import { ArrowUpRight } from 'lucide-react';

interface WorksTabProps {
  onSelectProject: (project: Project) => void;
  onNavigateContact: () => void;
}

const PROJECTS: Project[] = [
  {
    id: 'realtime-notes',
    index: '(01)',
    title: 'Real-Time Collaborative Notes App',
    client: 'Personal Project',
    year: 'Jan 2026',
    category: 'full-stack',
    disciplines: ['React', 'Node.js', 'WebSockets', 'UI/UX'],
    summary: 'A real-time collaborative platform that allows multiple users to create, edit, and manage notes simultaneously.',
    description: 'Developed a responsive and intuitive real-time collaborative platform with a focus on usability and efficient data management. Implemented real-time data synchronization, user authentication, document sharing, and collaborative editing features.',
    deliverables: [
      'Real-time data synchronization',
      'User authentication & document sharing',
      'Responsive collaborative editor',
      'Intuitive UI for efficient data management'
    ],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500',
    color: '#bcc7cf',
  },
  {
    id: 'finance-manager',
    index: '(02)',
    title: 'Personal Finance Management System',
    client: 'Personal Project',
    year: 'Aug 2025',
    category: 'frontend',
    disciplines: ['JavaScript', 'HTML/CSS', 'Data Vis', 'Dashboard Design'],
    summary: 'A web-based application for managing personal income, expenses, budgets, and financial records.',
    description: 'Developed an interactive web-based dashboard for managing personal finances. Features include transaction management, categorization, filtering, and financial summaries to help users track their spending. Includes data persistence for continuous monitoring.',
    deliverables: [
      'Interactive financial dashboard',
      'Transaction categorization & filtering',
      'Data persistence implementation',
      'Financial summaries & analytics'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500',
    color: '#b6c3b6',
  }
];

export const WorksTab: React.FC<WorksTabProps> = ({
  onSelectProject,
}) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <div className="relative w-full h-full flex flex-col justify-between py-6 px-5 sm:px-10 md:px-14 min-h-[720px] md:min-h-[780px]">
      {/* Background Cursive Watermark "Works" */}
      <WatermarkScript text="Works" />

      {/* Header Bar */}
      <div className="relative z-10 flex flex-col mb-4">
        <h1 className="font-syne font-extrabold uppercase tracking-tighter text-6xl sm:text-8xl text-neutral-950">
          WORKS
        </h1>
        <div className="flex justify-center mt-2">
           <span className="font-mono text-[11px] font-bold bg-neutral-900 text-white px-1.5 py-0.5">GRID</span>
           <span className="font-mono text-[11px] font-bold text-neutral-900 px-1.5 py-0.5 ml-1">LIST</span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 my-4 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => {
              sound.playPaper();
              onSelectProject(project);
            }}
            className="group relative bg-[#f4f7f9] border border-neutral-300/90 rounded-md p-4 sm:p-5 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-0.5 flex flex-col justify-between"
          >
            {/* Top Index & Tag */}
            <div className="flex items-center justify-between font-mono text-xs mb-3 text-neutral-600">
              <span className="font-bold text-neutral-950">{project.index}</span>
              <span className="text-[11px] tracking-wider uppercase bg-[#e2e7eb] px-2 py-0.5 rounded-xs font-medium">
                {project.category}
              </span>
            </div>

            {/* Thumbnail Image */}
            <div className="relative aspect-16/10 rounded overflow-hidden mb-3 bg-neutral-200 border border-neutral-300/60">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors" />
            </div>

            {/* Content Details */}
            <div>
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="font-sans font-bold text-base sm:text-lg text-neutral-950 group-hover:text-neutral-700 transition-colors">
                  {project.title}
                </h3>
                <span className="font-mono text-xs text-neutral-500">{project.year}</span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-3 line-clamp-2">
                {project.summary}
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-neutral-200 font-mono text-[11px]">
                <span className="text-neutral-500">{project.client}</span>
                <span className="inline-flex items-center gap-1 font-semibold text-neutral-900 group-hover:translate-x-0.5 transition-transform">
                  <span>INSPECT FILE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Bar: Clock & Global Presence */}
      <div className="relative z-10 pt-4 flex items-center justify-between text-[10px] sm:text-xs text-neutral-600 tracking-wider border-t border-neutral-300/40 font-mono">
        <MadridClock />

        <div className="flex items-center gap-3">
          <span className="text-neutral-500 font-mono hidden sm:inline">(2026)</span>
          <span className="font-semibold text-neutral-800 font-mono tracking-widest text-[10px] sm:text-[11px]">
            ARCHIVE VERIFIED
          </span>
        </div>
      </div>
    </div>
  );
};
