export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  year: string;
  role: string;
  color: string;
  image: string;
}

export interface Capability {
  id: string;
  name: string;
  projectIds: string[];
}

export type ProjectType = 'saas' | 'landing-page' | 'dashboard' | 'full-system';

export type BudgetRange =
  | 'under-5k'
  | '5k-10k'
  | '10k-15k'
  | '15k-20k'
  | '20k-25k'
  | '25k-30k'
  | '30k-plus';

export type DiscoverySource = 'social-media' | 'referral' | 'google-search';

export interface ConsultationRequest {
  id: string;
  personName: string;
  projectName: string;
  projectDescription: string;
  projectType: ProjectType;
  budgetRange: BudgetRange;
  discoverySource: DiscoverySource;
  preferredDate: string;
  submittedAt: string;
}
