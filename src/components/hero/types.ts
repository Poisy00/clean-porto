export interface HeroContent {
  headline: string;
  subhead: string;
  ctaLabel: string;
  ctaTarget: string;
}

export interface HeroProps {
  content: HeroContent;
  onCtaClick?: (target: string) => void;
}
