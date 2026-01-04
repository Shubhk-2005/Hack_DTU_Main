import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Users, Briefcase, UserSearch } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      {/* Subtle background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-[hsl(252_94%_67%_/_0.05)] rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-accent/10 to-primary/5 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-[10%] w-4 h-4 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-[15%] w-6 h-6 bg-accent/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-[20%] w-3 h-3 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-[10%] w-5 h-5 border-2 border-primary/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              AI-Powered Career Platform
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 animate-fade-in text-foreground" style={{ animationDelay: '0.1s' }}>
            Your Career Journey
            <br />
            <span className="text-gradient">Starts Here.</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            YuvaSetu eliminates opportunity fatigue with transparent AI matching, 
            showing you only the most relevant opportunities.
          </p>
          
          {/* Dual CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link to="/login/seeker">
              <Button variant="seeker" size="xl" className="group min-w-[240px]">
                <UserSearch className="w-5 h-5" />
                I'm a Job Seeker
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/login/employer">
              <Button variant="employer" size="xl" className="group min-w-[240px]">
                <Briefcase className="w-5 h-5" />
                I'm an Employer
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center p-4 rounded-2xl bg-card/80 border border-border shadow-soft backdrop-blur-xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="font-display text-3xl md:text-4xl font-bold text-foreground">40%</span>
              </div>
              <p className="text-sm text-muted-foreground">Faster Matching</p>
            </div>
            <div className="text-center p-4 rounded-2xl bg-card/80 border border-border shadow-soft backdrop-blur-xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-accent" />
                <span className="font-display text-3xl md:text-4xl font-bold text-foreground">Top 5</span>
              </div>
              <p className="text-sm text-muted-foreground">Curated Jobs</p>
            </div>
            <div className="text-center p-4 rounded-2xl bg-card/80 border border-border shadow-soft backdrop-blur-xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="font-display text-3xl md:text-4xl font-bold text-foreground">100%</span>
              </div>
              <p className="text-sm text-muted-foreground">Transparent</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};