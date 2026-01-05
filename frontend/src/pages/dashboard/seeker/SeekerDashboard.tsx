import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { JobCard } from '@/components/dashboard/JobCard';
import { SkillGapWidget } from '@/components/dashboard/SkillGapWidget';

const MOCK_JOBS = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    logo: 'https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png',
    location: 'Bangalore, India (Hybrid)',
    salary: '₹25L - ₹40L',
    type: 'Full-time',
    postedAt: '2 days ago',
    matchScore: 92,
    skills: ['React', 'TypeScript', 'Node.js', 'AWS']
  },
  {
    id: '2',
    title: 'Product Designer',
    company: 'DesignStudio',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png',
    location: 'Remote',
    salary: '₹18L - ₹28L',
    type: 'Full-time',
    postedAt: '5 hours ago',
    matchScore: 85,
    skills: ['Figma', 'UI/UX', 'Prototyping']
  },
  {
    id: '3',
    title: 'Full Stack Engineer',
    company: 'StartupX',
    logo: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    location: 'Mumbai, India',
    salary: '₹20L - ₹35L',
    type: 'Full-time',
    postedAt: '1 day ago',
    matchScore: 78,
    skills: ['React', 'Python', 'Django', 'PostgreSQL']
  },
  {
    id: '4',
    title: 'React Native Developer',
    company: 'MobileFirst',
    logo: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
    location: 'Pune, India',
    salary: '₹15L - ₹25L',
    type: 'Contract',
    postedAt: '3 days ago',
    matchScore: 65,
    skills: ['React Native', 'Redux', 'iOS', 'Android']
  }
];

export const SeekerDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold mb-2">
            Good Morning, <span className="text-primary">User</span>! ☀️
          </h1>
          <p className="text-muted-foreground">
            We found <span className="font-semibold text-foreground">12 new jobs</span> matching your profile today.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </Button>
          <Button variant="seeker">
            Update Profile
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-xl">Recommended Jobs</h2>
            <button className="text-primary text-sm font-medium hover:underline">View All</button>
          </div>
          
          <div className="grid gap-4">
            {MOCK_JOBS.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-8">
          {/* Skill Gap Widget */}
          <SkillGapWidget />

          {/* Application Stats Widget (Simplified inline for now) */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-3xl p-6">
            <h3 className="font-bold text-lg mb-4">Application Status</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background/50 rounded-2xl p-4 text-center">
                <p className="text-3xl font-display font-bold text-foreground">12</p>
                <p className="text-xs text-muted-foreground uppercase font-semibold mt-1">Applied</p>
              </div>
              <div className="bg-background/50 rounded-2xl p-4 text-center">
                <p className="text-3xl font-display font-bold text-primary">4</p>
                <p className="text-xs text-muted-foreground uppercase font-semibold mt-1">Shortlisted</p>
              </div>
              <div className="bg-background/50 rounded-2xl p-4 text-center">
                <p className="text-3xl font-display font-bold text-accent">2</p>
                <p className="text-xs text-muted-foreground uppercase font-semibold mt-1">Interviews</p>
              </div>
              <div className="bg-background/50 rounded-2xl p-4 text-center">
                <p className="text-3xl font-display font-bold text-red-500">1</p>
                <p className="text-xs text-muted-foreground uppercase font-semibold mt-1">Rejected</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
