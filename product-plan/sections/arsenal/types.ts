export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  year: string;
  role: string;
  color: string; // The "Aura" color (e.g., "cyan", "purple", "amber")
  image: string;
}

export interface ArsenalData {
  title: string;
  subtitle: string;
  projects: Project[];
}
