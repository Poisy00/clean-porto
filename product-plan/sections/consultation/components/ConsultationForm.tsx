import { useState, useCallback, useMemo } from 'react'
import type {
  ConsultationProps,
  ConsultationFormData,
  FormStep,
  ProjectType,
  BudgetRange,
  DiscoverySource,
} from '../types'
import { ArrowLeft, ArrowRight, Send, Check, Calendar } from 'lucide-react'

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

interface StepIndicatorProps {
  currentStep: number
  totalSteps: number
}

function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: totalSteps }, (_, i) => (
        <div
          key={i}
          className={`
            relative h-1.5 rounded-full transition-all duration-700 ease-out
            ${i + 1 === currentStep 
              ? 'w-8 bg-sky-500 shadow-lg shadow-sky-500/50' 
              : i + 1 < currentStep 
                ? 'w-3 bg-sky-400/60' 
                : 'w-3 bg-slate-300 dark:bg-slate-700'
            }
          `}
        >
          {i + 1 === currentStep && (
            <div className="absolute inset-0 rounded-full bg-sky-400 animate-pulse opacity-50" />
          )}
        </div>
      ))}
    </div>
  )
}

interface OptionButtonProps {
  label: string
  isSelected: boolean
  onClick: () => void
}

function OptionButton({ label, isSelected, onClick }: OptionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        relative px-6 py-4 rounded-2xl text-left transition-all duration-500 ease-out
        border backdrop-blur-sm
        ${isSelected
          ? 'bg-sky-500/10 dark:bg-sky-500/20 border-sky-500/50 text-sky-700 dark:text-sky-300 shadow-lg shadow-sky-500/10'
          : 'bg-white/50 dark:bg-slate-900/50 border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 hover:border-sky-300 dark:hover:border-sky-600 hover:bg-sky-50/50 dark:hover:bg-sky-950/30'
        }
      `}
    >
      <span className="font-medium tracking-wide">{label}</span>
      {isSelected && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <Check className="w-5 h-5 text-sky-500" />
        </div>
      )}
    </button>
  )
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export function ConsultationForm({
  formConfig,
  thankYouContent,
  onSubmit,
  onStepChange,
}: ConsultationProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [transitionDirection, setTransitionDirection] = useState<'forward' | 'back'>('forward')

  const [formData, setFormData] = useState<ConsultationFormData>({
    personName: '',
    projectName: '',
    projectDescription: '',
    projectType: null,
    budgetRange: null,
    discoverySource: null,
    preferredDate: null,
  })

  const totalSteps = formConfig.steps.length
  const currentStepConfig = formConfig.steps.find((s) => s.id === currentStep)

  // Check if current step is valid to proceed
  const isCurrentStepValid = useMemo(() => {
    if (!currentStepConfig) return false
    const field = currentStepConfig.field as keyof ConsultationFormData
    const value = formData[field]
    if (typeof value === 'string') return value.trim().length > 0
    return value !== null
  }, [currentStepConfig, formData])

  const transitionToStep = useCallback((newStep: number, direction: 'forward' | 'back') => {
    setIsTransitioning(true)
    setTransitionDirection(direction)
    
    setTimeout(() => {
      setCurrentStep(newStep)
      onStepChange?.(newStep)
      
      setTimeout(() => {
        setIsTransitioning(false)
      }, 50)
    }, 300)
  }, [onStepChange])

  const handleNext = useCallback(() => {
    if (!isCurrentStepValid) return
    if (currentStep < totalSteps) {
      transitionToStep(currentStep + 1, 'forward')
    }
  }, [currentStep, totalSteps, isCurrentStepValid, transitionToStep])

  const handleBack = useCallback(() => {
    if (currentStep > 1) {
      transitionToStep(currentStep - 1, 'back')
    }
  }, [currentStep, transitionToStep])

  const handleSubmit = useCallback(() => {
    if (!isCurrentStepValid) return
    setIsTransitioning(true)
    setTransitionDirection('forward')
    
    setTimeout(() => {
      onSubmit?.(formData)
      setIsSubmitted(true)
      setIsTransitioning(false)
    }, 300)
  }, [formData, isCurrentStepValid, onSubmit])

  const handleInputChange = useCallback((field: keyof ConsultationFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }, [])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (currentStep === totalSteps) {
        handleSubmit()
      } else {
        handleNext()
      }
    }
  }, [currentStep, totalSteps, handleNext, handleSubmit])

  const formatDateForDisplay = (dateString: string): string => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  // Render the appropriate input for each step
  const renderStepInput = (step: FormStep) => {
    const baseInputClasses = `
      w-full px-0 py-4 bg-transparent border-0 border-b-2 
      border-slate-200 dark:border-slate-700
      focus:border-sky-500 dark:focus:border-sky-400
      focus:outline-none focus:ring-0
      text-xl md:text-2xl text-slate-800 dark:text-white
      placeholder:text-slate-400 dark:placeholder:text-slate-600
      transition-colors duration-300
      font-light tracking-wide
    `

    switch (step.field) {
      case 'personName':
      case 'projectName':
        return (
          <input
            type="text"
            value={formData[step.field as 'personName' | 'projectName']}
            onChange={(e) => handleInputChange(step.field as keyof ConsultationFormData, e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={step.placeholder}
            className={baseInputClasses}
            autoFocus
          />
        )

      case 'projectDescription':
        return (
          <textarea
            value={formData.projectDescription}
            onChange={(e) => handleInputChange('projectDescription', e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={step.placeholder}
            rows={4}
            className={`${baseInputClasses} resize-none leading-relaxed`}
            autoFocus
          />
        )

      case 'projectType':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {formConfig.projectTypes.map((option) => (
              <OptionButton
                key={option.id}
                label={option.label}
                isSelected={formData.projectType === option.id}
                onClick={() => handleInputChange('projectType', option.id as ProjectType)}
              />
            ))}
          </div>
        )

      case 'budgetRange':
        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {formConfig.budgetRanges.map((option) => (
              <OptionButton
                key={option.id}
                label={option.label}
                isSelected={formData.budgetRange === option.id}
                onClick={() => handleInputChange('budgetRange', option.id as BudgetRange)}
              />
            ))}
          </div>
        )

      case 'discoverySource':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {formConfig.discoverySources.map((option) => (
              <OptionButton
                key={option.id}
                label={option.label}
                isSelected={formData.discoverySource === option.id}
                onClick={() => handleInputChange('discoverySource', option.id as DiscoverySource)}
              />
            ))}
          </div>
        )

      case 'preferredDate':
        return (
          <div className="space-y-4">
            <div className="relative">
              <input
                type="date"
                value={formData.preferredDate || ''}
                onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className={`
                  ${baseInputClasses}
                  cursor-pointer
                  [&::-webkit-calendar-picker-indicator]:opacity-0
                  [&::-webkit-calendar-picker-indicator]:absolute
                  [&::-webkit-calendar-picker-indicator]:inset-0
                  [&::-webkit-calendar-picker-indicator]:w-full
                  [&::-webkit-calendar-picker-indicator]:h-full
                  [&::-webkit-calendar-picker-indicator]:cursor-pointer
                `}
              />
              <Calendar className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 dark:text-slate-500 pointer-events-none" />
            </div>
            {formData.preferredDate && (
              <p className="text-lg text-sky-600 dark:text-sky-400 font-medium animate-fade-in">
                {formatDateForDisplay(formData.preferredDate)}
              </p>
            )}
          </div>
        )

      default:
        return null
    }
  }

  // ============================================================================
  // THANK YOU STATE
  // ============================================================================

  if (isSubmitted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        {/* Ethereal background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-gradient-radial from-sky-200/30 via-transparent to-transparent dark:from-sky-900/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[60vw] h-[40vh] bg-gradient-radial from-amber-200/20 via-transparent to-transparent dark:from-amber-900/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          {/* Success Indicator */}
          <div className="mb-14 flex justify-center">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-full bg-amber-500/20 blur-xl" />
              <div className="absolute -inset-2 rounded-full bg-amber-400/30 blur-md" />
              
              {/* Main circle */}
              <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-2xl shadow-amber-500/40 flex items-center justify-center">
                {/* Surface shine */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/25 via-transparent to-transparent" />
                
                {/* Checkmark icon */}
                <Check 
                  className="relative z-10 w-12 h-12 md:w-14 md:h-14 drop-shadow-lg" 
                  strokeWidth={3}
                  color="white"
                />
              </div>
            </div>
          </div>

          {/* Text content */}
          <h2 className="font-['Inter_Tight'] text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 dark:text-white mb-6 tracking-tight">
            {thankYouContent.heading}
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-4 font-light leading-relaxed">
            {thankYouContent.subheading}
          </p>
          
          <p className="text-lg text-slate-500 dark:text-slate-500 font-light">
            {thankYouContent.note}
          </p>
        </div>
      </section>
    )
  }

  // ============================================================================
  // FORM STATES
  // ============================================================================

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Inter+Tight:wght@500;600&family=Geist+Mono:wght@400&display=swap');
        
        /* Radial gradient utility */
        .bg-gradient-radial {
          background-image: radial-gradient(var(--tw-gradient-stops));
        }
        
        /* Ascending transition */
        @keyframes ascend-in {
          0% { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes ascend-out {
          0% { 
            opacity: 1; 
            transform: translateY(0); 
          }
          100% { 
            opacity: 0; 
            transform: translateY(-30px); 
          }
        }
        
        @keyframes descend-in {
          0% { 
            opacity: 0; 
            transform: translateY(-30px); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes descend-out {
          0% { 
            opacity: 1; 
            transform: translateY(0); 
          }
          100% { 
            opacity: 0; 
            transform: translateY(30px); 
          }
        }
        
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        
        .step-enter {
          animation: ascend-in 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        
        .step-exit-forward {
          animation: ascend-out 0.3s cubic-bezier(0.4, 0, 1, 1) forwards;
        }
        
        .step-enter-back {
          animation: descend-in 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        
        .step-exit-back {
          animation: descend-out 0.3s cubic-bezier(0.4, 0, 1, 1) forwards;
        }
      `}</style>

      {/* Ethereal background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Central luminous glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[80vh] bg-gradient-radial from-sky-100/40 via-sky-50/10 to-transparent dark:from-sky-950/30 dark:via-slate-900/10 rounded-full blur-3xl" />
        
        {/* Ambient accent */}
        <div className="absolute bottom-0 right-1/4 w-[50vw] h-[30vh] bg-gradient-radial from-amber-100/30 via-transparent to-transparent dark:from-amber-950/20 rounded-full blur-3xl" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      {/* Progress indicator - top */}
      <div className="relative z-10 pt-8 md:pt-12 px-6">
        <div className="max-w-3xl mx-auto">
          <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
          <p className="text-center mt-4 font-['Geist_Mono'] text-xs tracking-[0.2em] uppercase text-slate-400 dark:text-slate-600">
            Step {currentStep} of {totalSteps}
          </p>
        </div>
      </div>

      {/* Main form content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl">
          <div
            className={`
              ${isTransitioning 
                ? transitionDirection === 'forward' 
                  ? 'step-exit-forward' 
                  : 'step-exit-back'
                : transitionDirection === 'forward'
                  ? 'step-enter'
                  : 'step-enter-back'
              }
            `}
          >
            {currentStepConfig && (
              <div className="space-y-10">
                {/* Question label */}
                <h2 className="font-['Inter_Tight'] text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 dark:text-white text-center leading-tight tracking-tight">
                  {currentStepConfig.label}
                </h2>

                {/* Input area */}
                <div className="max-w-xl mx-auto">
                  {renderStepInput(currentStepConfig)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation buttons - bottom */}
      <div className="relative z-10 pb-8 md:pb-12 px-6">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          {/* Back button */}
          <button
            type="button"
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`
              group flex items-center gap-2 px-5 py-3 rounded-full
              text-slate-600 dark:text-slate-400
              transition-all duration-300
              ${currentStep === 1 
                ? 'opacity-0 pointer-events-none' 
                : 'hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }
            `}
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium hidden sm:inline">Back</span>
          </button>

          {/* Next / Submit button */}
          {currentStep === totalSteps ? (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!isCurrentStepValid}
              className={`
                group flex items-center gap-3 px-8 py-4 rounded-full
                font-medium text-lg tracking-wide
                transition-all duration-300
                ${isCurrentStepValid
                  ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/30 hover:bg-amber-400 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98]'
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed'
                }
              `}
            >
              <span>Send Message</span>
              <Send className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNext}
              disabled={!isCurrentStepValid}
              className={`
                group flex items-center gap-3 px-8 py-4 rounded-full
                font-medium text-lg tracking-wide
                transition-all duration-300
                ${isCurrentStepValid
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/30 hover:bg-sky-400 hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-[0.98]'
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed'
                }
              `}
            >
              <span>Continue</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
