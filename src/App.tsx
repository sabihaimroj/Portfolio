import React, { useState } from 'react';
import { TabKey, Project } from './types/portfolio';
import { FolderTabs } from './components/FolderTabs';
import { AboutTab } from './components/AboutTab';
import { WorksTab } from './components/WorksTab';
import { PlaygroundTab } from './components/PlaygroundTab';
import { ContactTab } from './components/ContactTab';
import { BioDrawer } from './components/BioDrawer';
import { ProjectModal } from './components/ProjectModal';
import { sound } from './utils/audio';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('about');
  const [isBioOpen, setIsBioOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  const toggleSound = () => {
    const next = sound.toggle();
    setSoundEnabled(next);
  };

  const tabColors: Record<TabKey, string> = {
    about: '#eaeff2',
    works: '#bcc7cf',
    playground: '#b6c3b6',
    contact: '#d5cbda',
  };
  const currentFolderColor = tabColors[activeTab];

  return (
    <main className="min-h-screen w-full bg-[#0a0c0e] text-neutral-900 flex flex-col justify-center items-center p-3 sm:p-6 md:p-10 relative overflow-x-hidden selection:bg-neutral-800 selection:text-white">
      {/* Ambient Dark Workspace / Desk Atmosphere */}
      <div
        className="fixed inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 20%, rgba(255,255,255,0.06) 0%, transparent 60%)',
        }}
      />

      {/* Top Floating Utility Bar (Sound toggle & Quick jump) */}
      <div className="w-full max-w-[980px] flex items-center justify-between pb-3 sm:pb-4 text-xs font-mono text-neutral-400 select-none z-20">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] tracking-wider text-neutral-300">
            PORTFOLDER // ARCHIVE 2026
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              sound.playTabClick();
              setIsBioOpen(true);
            }}
            className="hover:text-white transition-colors cursor-pointer text-[11px] tracking-wider uppercase underline underline-offset-4 decoration-neutral-600 hidden sm:inline"
          >
            Curatorial Dossier
          </button>

          <button
            onClick={toggleSound}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white transition-all cursor-pointer text-[11px]"
            title={soundEnabled ? 'Mute tactile sounds' : 'Enable tactile sounds'}
            aria-label="Toggle sound effects"
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-neutral-300" />
                <span>SOUND ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-neutral-500" />
                <span className="text-neutral-500">MUTED</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Top Tab Strip (Visible on small screens < 768px for optimal touch navigation) */}
      <div className="flex md:hidden w-full max-w-[540px] mb-3 overflow-x-auto gap-1.5 p-1 bg-neutral-900/90 backdrop-blur-xs rounded-lg border border-neutral-800 z-20">
        {(['about', 'works', 'playground', 'contact'] as TabKey[]).map((tabKey) => (
          <button
            key={tabKey}
            onClick={() => {
              sound.playPaper();
              sound.playTabClick();
              setActiveTab(tabKey);
            }}
            className={`flex-1 py-1.5 px-2 text-[11px] font-mono uppercase tracking-wider rounded transition-colors cursor-pointer text-center ${
              activeTab === tabKey
                ? 'font-bold shadow-xs text-neutral-950'
                : 'text-neutral-400 hover:text-white'
            }`}
            style={{
              backgroundColor: activeTab === tabKey ? tabColors[tabKey] : 'transparent'
            }}
          >
            {tabKey}
          </button>
        ))}
      </div>

      {/* Main Folder Assembly: Folder Sheet + Protruding Tabs */}
      <div className="relative flex items-stretch w-full max-w-[880px] lg:max-w-[940px] z-10">
        {/* The Physical Paper Folder Sheet */}
        <div
          className="relative flex-1 border border-neutral-300/80 rounded-2xl md:rounded-l-3xl md:rounded-r-xs shadow-[0_20px_50px_rgba(0,0,0,0.5),0_1px_3px_rgba(0,0,0,0.2)] overflow-hidden transition-all duration-300"
          style={{
            backgroundImage:
              'radial-gradient(circle, #93a2ae 1.1px, transparent 1.1px)',
            backgroundSize: '76px 76px',
            backgroundColor: currentFolderColor,
          }}
        >
          {/* Active Tab Content Screen */}
          {activeTab === 'about' && (
            <AboutTab
              onNavigateContact={() => setActiveTab('contact')}
              onOpenBio={() => setIsBioOpen(true)}
              onNavigateWorks={() => setActiveTab('works')}
            />
          )}

          {activeTab === 'works' && (
            <WorksTab
              onSelectProject={(project) => setSelectedProject(project)}
              onNavigateContact={() => setActiveTab('contact')}
            />
          )}

          {activeTab === 'playground' && <PlaygroundTab />}

          {activeTab === 'contact' && <ContactTab />}
        </div>

        {/* Desktop Protruding Folder Tabs (Rendered on the right edge) */}
        <div className="hidden md:flex">
          <FolderTabs
            activeTab={activeTab}
            onSelectTab={(tab) => setActiveTab(tab)}
            folderColor={currentFolderColor}
          />
        </div>
      </div>

      {/* Subtle Bottom Credit & Copyright */}
      <footer className="mt-8 text-neutral-500 font-mono text-[11px] tracking-wider flex items-center gap-3 z-10 select-none">
        <span>© 2026 SABIHA STUDIO</span>
        <span>•</span>
        <span>PORTFOLDER ARCHIVE</span>
        <span>•</span>
        <button
          onClick={() => {
            sound.playTabClick();
            setIsBioOpen(true);
          }}
          className="hover:text-neutral-300 transition-colors cursor-pointer underline underline-offset-2"
        >
          BIO & AWARDS
        </button>
      </footer>

      {/* Modals & Drawers */}
      <BioDrawer
        isOpen={isBioOpen}
        onClose={() => setIsBioOpen(false)}
        onNavigateContact={() => {
          setIsBioOpen(false);
          setActiveTab('contact');
        }}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNavigateContact={() => {
          setSelectedProject(null);
          setActiveTab('contact');
        }}
      />
    </main>
  );
}
