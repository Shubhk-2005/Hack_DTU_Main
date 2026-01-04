import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff, ArrowLeft, Mail, Lock, User, Briefcase, UserSearch, Building2 } from 'lucide-react';

export const LoginPage = () => {
  const { userType = 'seeker' } = useParams<{ userType: 'seeker' | 'employer' }>();
  const isSeeker = userType === 'seeker';
  
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password, name, companyName, isLogin, userType });
  };

  const themeColor = isSeeker ? 'primary' : 'accent';
  const gradientClass = isSeeker ? 'from-[hsl(221_83%_53%)] to-[hsl(199_89%_48%)]' : 'from-[hsl(174_72%_40%)] to-[hsl(160_84%_39%)]';

  return (
    <div className="min-h-screen relative overflow-hidden flex bg-background">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Animated morphing blobs */}
        <div 
          className={`absolute top-1/4 -left-20 w-[500px] h-[500px] bg-gradient-to-br ${isSeeker ? 'from-primary/20 to-[hsl(199_89%_48%_/_0.15)]' : 'from-accent/20 to-[hsl(160_84%_39%_/_0.15)]'} rounded-full blur-[80px] animate-morph animate-float-slow`} 
        />
        <div 
          className={`absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-gradient-to-br ${isSeeker ? 'from-[hsl(252_94%_67%_/_0.15)] to-primary/10' : 'from-accent/15 to-[hsl(160_84%_39%_/_0.1)]'} rounded-full blur-[100px] animate-morph animate-float-slow`} 
          style={{ animationDelay: '5s' }} 
        />
        <div 
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br ${isSeeker ? 'from-primary/10 to-[hsl(252_94%_67%_/_0.05)]' : 'from-accent/10 to-[hsl(160_84%_39%_/_0.05)]'} rounded-full blur-[120px] animate-pulse-glow`} 
        />
        
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--${themeColor}) / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--${themeColor}) / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Floating particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-1.5 h-1.5 rounded-full ${isSeeker ? 'bg-primary/30' : 'bg-accent/30'} animate-twinkle`}
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
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradientClass} flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300`}>
              <span className="text-primary-foreground font-display font-bold text-3xl">Y</span>
            </div>
            <span className="font-display font-bold text-3xl text-foreground">
              Yuva<span className={isSeeker ? 'text-gradient-seeker' : 'text-gradient-employer'}>Setu</span>
            </span>
          </Link>
          
          <h1 className="font-display text-5xl font-bold mb-6 text-foreground">
            {isSeeker ? (
              <>
                Find Your
                <br />
                <span className="text-gradient-seeker">Dream Job</span>
              </>
            ) : (
              <>
                Find Perfect
                <br />
                <span className="text-gradient-employer">Candidates</span>
              </>
            )}
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            {isSeeker 
              ? 'Join thousands of students who found their dream careers through AI-powered, transparent job matching.'
              : 'Access top talent matched to your requirements with our intelligent recruitment platform.'}
          </p>
          
          <div className="flex items-center gap-6">
            <div className="flex -space-x-3">
              {['A', 'B', 'C', 'D'].map((letter, i) => (
                <div
                  key={letter}
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradientClass} flex items-center justify-center border-2 border-background shadow-soft`}
                  style={{ zIndex: 4 - i }}
                >
                  <span className="text-xs font-bold text-primary-foreground">{letter}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-semibold">{isSeeker ? '10,000+' : '500+'}</span> {isSeeker ? 'students matched' : 'companies hiring'}
            </p>
          </div>

          {/* Switch role link */}
          <div className="mt-12 p-4 rounded-2xl bg-card border border-border">
            <p className="text-sm text-muted-foreground mb-3">
              {isSeeker ? 'Looking to hire talent?' : 'Looking for a job?'}
            </p>
            <Link to={isSeeker ? '/login/employer' : '/login/seeker'}>
              <Button variant="outline" size="sm" className="gap-2">
                {isSeeker ? <Briefcase className="w-4 h-4" /> : <UserSearch className="w-4 h-4" />}
                {isSeeker ? 'Switch to Employer' : 'Switch to Job Seeker'}
              </Button>
            </Link>
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
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border">
            {/* Mobile logo */}
            <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradientClass} flex items-center justify-center shadow-soft`}>
                <span className="text-primary-foreground font-display font-bold text-2xl">Y</span>
              </div>
              <span className="font-display font-bold text-2xl text-foreground">
                Yuva<span className={isSeeker ? 'text-gradient-seeker' : 'text-gradient-employer'}>Setu</span>
              </span>
            </div>

            {/* Role badge */}
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 ${isSeeker ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'}`}>
              {isSeeker ? <UserSearch className="w-4 h-4" /> : <Briefcase className="w-4 h-4" />}
              <span className="text-sm font-medium">{isSeeker ? 'Job Seeker' : 'Employer'}</span>
            </div>

            <h2 className="font-display text-2xl md:text-3xl font-bold mb-2 text-foreground">
              {isLogin ? 'Welcome Back!' : 'Create Account'}
            </h2>
            <p className="text-muted-foreground mb-8">
              {isLogin 
                ? `Sign in to ${isSeeker ? 'continue your career journey' : 'manage your job posts'}` 
                : `Start your ${isSeeker ? 'career journey' : 'hiring journey'} with YuvaSetu`}
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLogin && (
                <>
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
                  {!isSeeker && (
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="Company Name"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="pl-12"
                        required
                      />
                    </div>
                  )}
                </>
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
                  <a href="#" className={`text-sm ${isSeeker ? 'text-primary' : 'text-accent'} hover:underline`}>
                    Forgot password?
                  </a>
                </div>
              )}

              <Button 
                type="submit" 
                variant={isSeeker ? 'seeker' : 'employer'} 
                size="lg" 
                className="w-full"
              >
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
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </Button>
              <Button variant="glass" className="w-full">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </Button>
            </div>

            {/* Toggle */}
            <p className="text-center text-muted-foreground mt-8">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className={`ml-2 ${isSeeker ? 'text-primary' : 'text-accent'} hover:underline font-medium`}
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>

            {/* Mobile role switch */}
            <div className="lg:hidden mt-6 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground mb-3">
                {isSeeker ? 'Looking to hire?' : 'Looking for a job?'}
              </p>
              <Link to={isSeeker ? '/login/employer' : '/login/seeker'}>
                <Button variant="outline" size="sm" className="gap-2">
                  {isSeeker ? <Briefcase className="w-4 h-4" /> : <UserSearch className="w-4 h-4" />}
                  {isSeeker ? 'Employer Login' : 'Job Seeker Login'}
                </Button>
              </Link>
            </div>
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