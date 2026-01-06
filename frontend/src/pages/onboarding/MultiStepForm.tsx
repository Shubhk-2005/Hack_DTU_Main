import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Check, User, GraduationCap, Briefcase, Cpu, PartyPopper, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PersonalDetails } from './steps/PersonalDetails';
import { Education } from './steps/Education';
import { Experience } from './steps/Experience';
import { Skills } from './steps/Skills';
import { useOnboarding } from '@/contexts/OnboardingContext';
import { toast } from 'sonner';

const STEPS = [
  { id: 1, title: 'Personal Details', component: PersonalDetails, icon: User },
  { id: 2, title: 'Education', component: Education, icon: GraduationCap },
  { id: 3, title: 'Experience', component: Experience, icon: Briefcase },
  { id: 4, title: 'Skills', component: Skills, icon: Cpu },
];

export const MultiStepForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const { data } = useOnboarding();

  const CurrentComponent = STEPS.find(s => s.id === currentStep)?.component || PersonalDetails;
  const isLastStep = currentStep === STEPS.length;

  const handleNext = () => {
    if (isLastStep) {
      // Handle Submission
      console.log('Final Data:', data);
      
      // Show success screen
      setShowSuccess(true);
      
      toast.success("Profile created successfully!", {
        description: "Redirecting to your dashboard...",
        icon: <PartyPopper className="w-5 h-5" />,
      });
      
      // Navigate after delay
      setTimeout(() => {
        navigate('/dashboard');
      }, 3000);
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
      {showSuccess ? (
        /* Success Screen */
        <div className="bg-card rounded-3xl border border-border shadow-card p-10 md:p-16 text-center animate-in fade-in zoom-in duration-500">
          <div className="mb-8 relative">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-in zoom-in duration-700 shadow-2xl shadow-primary/20">
              <Check className="w-12 h-12 text-white animate-in zoom-in duration-1000" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-primary animate-pulse absolute -top-4 -right-8" />
              <Sparkles className="w-6 h-6 text-accent animate-pulse absolute -bottom-2 -left-4" />
              <Sparkles className="w-5 h-5 text-primary/60 animate-pulse absolute top-8 left-12" />
            </div>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Profile Created! 🎉
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
            Your profile is all set up and ready to go. We're matching you with the best opportunities...
          </p>
          
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-8">
            <div className="bg-muted/30 rounded-xl p-4">
              <div className="text-2xl font-bold text-primary mb-1">{Object.keys(data.skills || {}).length}</div>
              <div className="text-xs text-muted-foreground uppercase">Skills Added</div>
            </div>
            <div className="bg-muted/30 rounded-xl p-4">
              <div className="text-2xl font-bold text-accent mb-1">{(data.experience || []).length}</div>
              <div className="text-xs text-muted-foreground uppercase">Experiences</div>
            </div>
            <div className="bg-muted/30 rounded-xl p-4">
              <div className="text-2xl font-bold text-primary mb-1">100%</div>
              <div className="text-xs text-muted-foreground uppercase">Complete</div>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            Redirecting to dashboard...
          </div>
        </div>
      ) : (
        <>
          {/* Progress Bar */}
      {/* Progress Bar */}
      <div className="mb-10 md:mb-14 px-4">
        <div className="relative">
          {/* Progress Track Background */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1.5 bg-muted/50 rounded-full overflow-hidden">
             <div className="w-full h-full bg-gradient-to-r from-transparent via-muted to-transparent opacity-30"></div>
          </div>
          
          {/* Active Progress Fill with Gradient */}
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 h-1.5 bg-gradient-to-r from-primary via-primary to-accent rounded-full transition-all duration-700 ease-in-out shadow-[0_0_10px_rgba(var(--primary),0.5)]"
            style={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
          />

          <div className="flex justify-between relative z-10">
            {STEPS.map((step) => {
              const isCompleted = step.id < currentStep;
              const isCurrent = step.id === currentStep;

              return (
                <div key={step.id} className="flex flex-col items-center gap-3 group cursor-default">
                  <div 
                    className={`
                      w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 relative
                      ${isCompleted 
                        ? 'border-primary bg-primary text-primary-foreground scale-100 shadow-lg shadow-primary/20' 
                        : isCurrent 
                          ? 'border-primary bg-background text-primary scale-110 shadow-[0_0_15px_rgba(var(--primary),0.3)] ring-4 ring-primary/10' 
                          : 'border-muted bg-background text-muted-foreground scale-100'
                      }
                    `}
                  >
                    {isCompleted ? (
                      <Check className="w-5 h-5 md:w-6 md:h-6 animate-in zoom-in spin-in-90 duration-300" />
                    ) : (
                      <step.icon className={`w-5 h-5 md:w-5 md:h-5 transition-transform duration-300 ${isCurrent ? 'scale-110' : ''}`} />
                    )}
                    
                    {/* Pulse effect for current step */}
                    {isCurrent && (
                      <span className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-20"></span>
                    )}
                  </div>
                  
                  <div className={`flex flex-col items-center transition-all duration-300 ${isCurrent ? 'translate-y-0' : 'translate-y-1'}`}>
                    <span 
                      className={`text-xs md:text-sm font-bold tracking-wide transition-colors duration-300 whitespace-nowrap ${
                      isCurrent ? 'text-primary' : isCompleted ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {step.title}
                    </span>
                    <span className={`text-[10px] font-medium uppercase tracking-wider transition-opacity duration-300 ${isCurrent ? 'opacity-100 text-muted-foreground mt-0.5' : 'opacity-0 h-0 hidden'}`}>
                      Step 0{step.id}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
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
      </>
      )}
    </div>
  );
};
