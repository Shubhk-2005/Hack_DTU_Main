import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemsSection } from '@/components/sections/ProblemsSection';
import { MatchingEngineSection } from '@/components/sections/MatchingEngineSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>YuvaSetu - AI-Powered Job Recommendation Engine | End Opportunity Fatigue</title>
        <meta name="description" content="YuvaSetu is an AI-powered career platform that eliminates opportunity fatigue with transparent job matching. Get matched with your top 5 relevant jobs using Explainable AI." />
        <meta name="keywords" content="job portal, AI job matching, career platform, student jobs, YuvaSetu, Team Havoc" />
      </Helmet>
      
      <main className="bg-background">
        <Navbar />
        <HeroSection />
        <ProblemsSection />
        <MatchingEngineSection />
        <TeamSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
