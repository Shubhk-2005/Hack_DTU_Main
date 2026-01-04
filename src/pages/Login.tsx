import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff, ArrowLeft, Mail, Lock, User } from 'lucide-react';

export const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login/signup logic
    console.log({ email, password, name, isLogin });
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-background">
        {/* Animated morphing blobs */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-primary/40 to-[hsl(199_89%_48%_/_0.3)] rounded-full blur-[80px] animate-morph animate-float-slow" />
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-[hsl(252_94%_67%_/_0.3)] to-accent/20 rounded-full blur-[100px] animate-morph animate-float-slow" style={{ animationDelay: '5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/20 to-[hsl(252_94%_67%_/_0.1)] rounded-full blur-[120px] animate-pulse-glow" />
        
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.5) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/50 animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Left side - Branding (hidden on mobile) */}
      <div className="hidden lg:flex flex-1 items-center justify-center relative z-10 p-12">
        <div className="max-w-lg">
          <Link to="/" className="flex items-center gap-3 mb-12 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-[hsl(252_94%_67%)] flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
              <span className="text-primary-foreground font-display font-bold text-3xl">Y</span>
            </div>
            <span className="font-display font-bold text-3xl text-foreground">
              Yuva<span className="text-gradient">Setu</span>
            </span>
          </Link>
          
          <h1 className="font-display text-5xl font-bold mb-6">
            Your Career
            <br />
            <span className="text-gradient">Awaits</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of students who found their dream careers 
            through AI-powered, transparent job matching.
          </p>
          
          <div className="flex items-center gap-6">
            <div className="flex -space-x-3">
              {['A', 'B', 'C', 'D'].map((letter, i) => (
                <div
                  key={letter}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-[hsl(252_94%_67%)] flex items-center justify-center border-2 border-background"
                  style={{ zIndex: 4 - i }}
                >
                  <span className="text-xs font-bold text-primary-foreground">{letter}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-semibold">10,000+</span> students matched
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center relative z-10 p-6 lg:p-12">
        <div className="w-full max-w-md">
          {/* Back button (mobile) */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 lg:hidden"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          {/* Form card */}
          <div className="glass-strong rounded-3xl p-8 md:p-10 shadow-card">
            {/* Mobile logo */}
            <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-[hsl(252_94%_67%)] flex items-center justify-center shadow-glow">
                <span className="text-primary-foreground font-display font-bold text-2xl">Y</span>
              </div>
              <span className="font-display font-bold text-2xl text-foreground">
                Yuva<span className="text-gradient">Setu</span>
              </span>
            </div>

            <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-2">
              {isLogin ? 'Welcome Back!' : 'Create Account'}
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              {isLogin 
                ? 'Sign in to continue your career journey' 
                : 'Start your journey with YuvaSetu'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLogin && (
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-12"
                    required
                  />
                </div>
              )}
              
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12"
                  required
                />
              </div>
              
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-12 pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {isLogin && (
                <div className="flex justify-end">
                  <a href="#" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </a>
                </div>
              )}

              <Button type="submit" variant="hero" size="lg" className="w-full">
                {isLogin ? 'Sign In' : 'Create Account'}
              </Button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-border" />
              <span className="text-sm text-muted-foreground">or continue with</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Social login */}
            <div className="grid grid-cols-2 gap-4">
              <Button variant="glass" className="w-full">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </Button>
              <Button variant="glass" className="w-full">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </Button>
            </div>

            {/* Toggle */}
            <p className="text-center text-muted-foreground mt-8">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 text-primary hover:underline font-medium"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>

          {/* Back link (desktop) */}
          <Link 
            to="/" 
            className="hidden lg:inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mt-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
