export interface Pillar {
  id: string;
  number: string;
  label: string;
  category: string;
  headline: string;
  iconType: PillarIconType;
  description: string;
}

export type PillarIconType = 'wireframe-cube' | 'liquid-drop' | 'arrow-target';

export interface Manifesto {
  tagline: string;
}

export interface PhilosophySectionProps {
  pillars: Pillar[];
  manifesto: Manifesto;
}

export interface GlassMonolithProps {
  pillar: Pillar;
  isExpanded?: boolean;
  onToggle?: () => void;
}
