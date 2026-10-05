export type TabKey = 'about' | 'works' | 'playground' | 'contact';

export interface Project {
  id: string;
  index: string;
  title: string;
  client: string;
  year: string;
  category: 'frontend' | 'backend' | 'full-stack' | 'mobile' | 'branding' | 'digital' | 'industrial' | 'editorial';
  disciplines: string[];
  summary: string;
  description: string;
  deliverables: string[];
  image: string;
  color: string;
  stats?: { label: string; value: string }[];
}

export interface StampMark {
  id: string;
  x: number;
  y: number;
  text: string;
  rotation: number;
  color: string;
}

export interface Experiment {
  id: string;
  title: string;
  tag: string;
  year: string;
  aspect: string;
  description: string;
  previewType: 'gradient' | 'typography' | 'film' | 'brutalist' | 'mesh';
}
