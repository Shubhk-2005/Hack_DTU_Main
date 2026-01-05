import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { OnboardingProvider } from "@/contexts/OnboardingContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { OnboardingLayout } from "./pages/onboarding/OnboardingLayout";
import { OnboardingChoice } from "./pages/onboarding/OnboardingChoice";
import { ResumeUpload } from "./pages/onboarding/ResumeUpload";
import { MultiStepForm } from "./pages/onboarding/MultiStepForm";
import { DashboardLayout } from "./components/dashboard/DashboardLayout";
import { SeekerDashboard } from "./pages/dashboard/seeker/SeekerDashboard";
import { EmployerDashboard } from "./pages/dashboard/employer/EmployerDashboard";
import { EmployerLayout } from "./pages/dashboard/employer/EmployerLayout";
import { PostJob } from "./pages/dashboard/employer/PostJob";
import { Candidates } from "./pages/dashboard/employer/Candidates";
import { CompanyProfile } from "./pages/dashboard/employer/CompanyProfile";

import { FindJobs } from "./pages/dashboard/seeker/FindJobs";
import { Applications } from "./pages/dashboard/seeker/Applications";
import { Upskill } from "./pages/dashboard/seeker/Upskill";
import { UserProfile } from "./pages/dashboard/seeker/UserProfile";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <OnboardingProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/login/:userType" element={<Login />} />
              
              {/* Onboarding Routes */}
              <Route path="/onboarding" element={<OnboardingLayout />}>
                <Route index element={<OnboardingChoice />} />
                <Route path="upload" element={<ResumeUpload />} />
                <Route path="form" element={<MultiStepForm />} />
              </Route>

              {/* Dashboard Routes */}
              <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<SeekerDashboard />} />
                <Route path="jobs" element={<FindJobs />} />
                <Route path="applications" element={<Applications />} />
                <Route path="upskill" element={<Upskill />} />
                <Route path="profile" element={<UserProfile />} />
                <Route path="employer" element={<EmployerLayout />}>
                  <Route index element={<EmployerDashboard />} />
                  <Route path="post-job" element={<PostJob />} />
                  <Route path="candidates" element={<Candidates />} />
                  <Route path="profile" element={<CompanyProfile />} />
                </Route>
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          </OnboardingProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
