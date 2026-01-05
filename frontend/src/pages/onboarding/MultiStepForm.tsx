import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PersonalDetails } from './steps/PersonalDetails';
import { Education } from './steps/Education';
import { Experience } from './steps/Experience';
import { Skills } from './steps/Skills';
import { useOnboarding } from '@/contexts/OnboardingContext';
import { toast } from 'sonner';

const STEPS = [
  { id: 1, title: 'Personal Details', component: PersonalDetails },
  { id: 2, title: 'Education', component: Education },
  { id: 3, title: 'Experience', component: Experience },
  { id: 4, title: 'Skills', component: Skills },
];

export const MultiStepForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const { data } = useOnboarding();

  const CurrentComponent = STEPS.find(s => s.id === currentStep)?.component || PersonalDetails;
  const isLastStep = currentStep === STEPS.length;

  const handleNext = () => {
    if (isLastStep) {
      // Handle Submission
      console.log('Final Data:', data);
      toast.success("Profile created successfully!");
      // Navigate to Dashboard (to be implemented)
      navigate('/dashboard');
    } else {
      setCurrentStep(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo(0, 0);
    } else {
      navigate('/onboarding');
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8 md:mb-12">
        <div className="flex items-center justify-between relative">
          {/* Track */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-muted -z-10 rounded-full" />
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary -z-10 rounded-full transition-all duration-500"
            style={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
          />

          {STEPS.map((step) => {
            const isCompleted = step.id < currentStep;
            const isCurrent = step.id === currentStep;

            return (
              <div key={step.id} className="flex flex-col items-center gap-2">
                <div 
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 bg-background ${
                    isCompleted ? 'border-primary bg-primary text-primary-foreground' :
                    isCurrent ? 'border-primary text-primary shadow-glow' :
                    'border-muted-foreground/30 text-muted-foreground'
                  }`}
                >
                  {isCompleted ? <Check className="w-5 h-5" /> : step.id}
                </div>
                <span className={`text-xs md:text-sm font-medium transition-colors ${
                  isCurrent ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Form Content */}
      <div className="bg-card rounded-2xl md:rounded-3xl border border-border shadow-card p-6 md:p-10 min-h-[400px]">
        <div className="mb-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold">
            {STEPS.find(s => s.id === currentStep)?.title}
          </h2>
          <p className="text-muted-foreground">
            Step {currentStep} of {STEPS.length}
          </p>
        </div>

        <CurrentComponent />

        <div className="flex justify-between mt-10 pt-6 border-t border-border">
          <Button variant="outline" onClick={handleBack} size="lg">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button variant="seeker" onClick={handleNext} size="lg">
            {isLastStep ? 'Complete Profile' : 'Next Step'}
            {!isLastStep && <ChevronRight className="w-4 h-4 ml-2" />}
          </Button>
        </div>
      </div>
    </div>
  );
};
