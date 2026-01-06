// =============================================================================
// Form Configuration Types
// =============================================================================

export interface FormOption {
  id: string
  label: string
}

export interface FormStep {
  id: number
  field: string
  label: string
  placeholder?: string
}

export interface FormConfig {
  projectTypes: FormOption[]
  budgetRanges: FormOption[]
  discoverySources: FormOption[]
  steps: FormStep[]
}

// =============================================================================
// Data Types
// =============================================================================

export type ProjectType = 'saas' | 'landing-page' | 'dashboard' | 'full-system'

export type BudgetRange =
  | 'under-5k'
  | '5k-10k'
  | '10k-15k'
  | '15k-20k'
  | '20k-25k'
  | '25k-30k'
  | '30k-plus'

export type DiscoverySource = 'social-media' | 'referral' | 'google-search'

export interface ConsultationRequest {
  id: string
  personName: string
  projectName: string
  projectDescription: string
  projectType: ProjectType
  budgetRange: BudgetRange
  discoverySource: DiscoverySource
  preferredDate: string
  submittedAt: string
}

export interface ThankYouContent {
  heading: string
  subheading: string
  note: string
}

// =============================================================================
// Form State
// =============================================================================

export interface ConsultationFormData {
  personName: string
  projectName: string
  projectDescription: string
  projectType: ProjectType | null
  budgetRange: BudgetRange | null
  discoverySource: DiscoverySource | null
  preferredDate: string | null
}

// =============================================================================
// Component Props
// =============================================================================

export interface ConsultationProps {
  /** Form configuration with options for dropdowns and step definitions */
  formConfig: FormConfig
  /** Content displayed on the thank you screen after submission */
  thankYouContent: ThankYouContent
  /** Called when the form is submitted with all collected data */
  onSubmit?: (data: ConsultationFormData) => void
  /** Called when user navigates to a different step */
  onStepChange?: (step: number) => void
}
