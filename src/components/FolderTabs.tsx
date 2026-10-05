import React from 'react';
import { TabKey } from '../types/portfolio';
import { sound } from '../utils/audio';

interface FolderTabsProps {
  activeTab: TabKey;
  onSelectTab: (tab: TabKey) => void;
  folderColor?: string;
}

interface TabConfig {
  key: TabKey;
  label: string;
  color: string;
  activeColor: string;
  textColor: string;
  hasAnnotation?: boolean;
}

const TABS: TabConfig[] = [
  {
    key: 'about',
    label: 'ABOUT',
    color: '#dae0e5',
    activeColor: '#eaeff2',
    textColor: '#1e293b',
  },
  {
    key: 'works',
    label: 'WORKS',
    color: '#bcc7cf',
    activeColor: '#eaeff2',
    textColor: '#1e293b',
    hasAnnotation: true,
  },
  {
    key: 'playground',
    label: 'PLAYGROUND',
    color: '#b6c3b6',
    activeColor: '#eaeff2',
    textColor: '#1e293b',
  },
  {
    key: 'contact',
    label: 'CONTACT',
    color: '#d5cbda',
    activeColor: '#eaeff2',
    textColor: '#1e293b',
  },
];

export const FolderTabs: React.FC<FolderTabsProps> = ({
  activeTab,
  onSelectTab,
  folderColor = '#eaeff2',
}) => {
  const handleTabClick = (key: TabKey) => {
    if (key !== activeTab) {
      sound.playPaper();
      sound.playTabClick();
      onSelectTab(key);
    }
  };

  return (
    <div className="relative flex flex-col z-30 select-none">
      {/* Stacked Vertical Folder Tabs (Layer by layer) */}
      <div className="flex flex-col pt-12 -space-y-4">
        {TABS.map((tab, index) => {
          const isActive = activeTab === tab.key;
          const bg = isActive ? folderColor : tab.color;
          // Base z-index decreases as index increases so top tabs overlap bottom tabs, 
          // but the active tab is always brought to the absolute front.
          const baseZ = 40 - index;
          const zIndex = isActive ? 50 : baseZ;

          return (
            <div key={tab.key} className="relative flex items-center" style={{ zIndex }}>
              {/* Tab Button protruding to the right */}
              <button
                onClick={() => handleTabClick(tab.key)}
                className={`group relative flex items-center justify-center transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'w-10 sm:w-12 h-28 sm:h-32 translate-x-0'
                    : 'w-8 sm:w-10 h-24 sm:h-28 -translate-x-1 hover:translate-x-0 opacity-90 hover:opacity-100'
                }`}
                aria-label={`Navigate to ${tab.label} section`}
                aria-current={isActive ? 'page' : undefined}
              >
                {/* 3D Sloped Background Layer (creates the V-notch) */}
                <div
                  className="absolute inset-0 transition-transform duration-300 origin-left"
                  style={{
                    backgroundColor: bg,
                    borderTopRightRadius: '16px',
                    borderBottomRightRadius: '16px',
                    borderTop: '1px solid rgba(0,0,0,0.08)',
                    borderRight: '1px solid rgba(0,0,0,0.12)',
                    borderBottom: '1px solid rgba(0,0,0,0.14)',
                    transform: isActive ? 'none' : 'perspective(100px) rotateY(35deg)',
                    boxShadow: isActive 
                      ? '4px 0 12px rgba(0,0,0,0.06)' 
                      : '4px 4px 8px rgba(0,0,0,0.05)',
                  }}
                />

                {/* Top Inner Fillet Curve */}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  className="absolute -top-[12px] left-0 pointer-events-none z-10"
                >
                  <path d="M 0 0 A 12 12 0 0 0 12 12 L 0 12 Z" fill={bg} />
                  <path d="M 0 0 A 12 12 0 0 0 12 12" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
                </svg>

                {/* Bottom Inner Fillet Curve */}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  className="absolute -bottom-[12px] left-0 pointer-events-none z-10"
                >
                  <path d="M 0 12 A 12 12 0 0 1 12 0 L 0 0 Z" fill={bg} />
                  <path d="M 12 0 A 12 12 0 0 0 0 12" fill="none" stroke="rgba(0,0,0,0.14)" strokeWidth="1" />
                </svg>

                {/* Vertical Text Label */}
                <div
                  className={`relative z-20 flex flex-col items-center justify-center font-mono font-bold tracking-widest transition-colors ${
                    isActive
                      ? 'text-neutral-900 text-[11px] sm:text-[12px]'
                      : 'text-neutral-700 text-[10px] sm:text-[11px] group-hover:text-neutral-900'
                  }`}
                  style={{
                    writingMode: 'vertical-rl',
                  }}
                >
                  {tab.label}
                </div>

                {/* Left blending mask seam if active */}
                {isActive && (
                  <div
                    className="absolute -left-1 top-0 bottom-0 w-2"
                    style={{ backgroundColor: folderColor }}
                  />
                )}
              </button>

              {/* Hand-drawn chalk arrow annotation for WORKS (as seen in the original reference) */}
              {tab.hasAnnotation && (
                <div
                  className="hidden lg:flex items-center absolute left-full ml-4 whitespace-nowrap pointer-events-none select-none"
                  style={{ fontFamily: "'Reenie Beanie', 'Caveat', cursive" }}
                >
                  {/* Handwritten SVG Curly Arrow */}
                  <svg
                    viewBox="0 0 46 28"
                    className="w-10 h-6 text-white/90 overflow-visible mr-2 -rotate-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {/* Curly arrow pointing left at the WORKS tab */}
                    <path d="M 42 18 C 30 24, 18 20, 10 12 C 7 9, 6 6, 8 4 C 10 2, 14 5, 8 10 L 3 14" />
                    <path d="M 3 14 L 11 12" />
                    <path d="M 3 14 L 7 20" />
                  </svg>
                  <span className="text-white/90 text-2xl tracking-wide font-medium transform -rotate-2">
                    MY WORKS
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
