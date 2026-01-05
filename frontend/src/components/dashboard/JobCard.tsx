import { MapPin, Building2, Banknote, Clock, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export interface Job {
  id: string;
  title: string;
  company: string;
  logo: string;
  location: string;
  salary: string;
  type: string;
  postedAt: string;
  matchScore: number;
  skills: string[];
}

export const JobCard = ({ job }: { job: Job }) => {
  return (
    <div className="group relative bg-card hover:bg-card/80 border border-border rounded-2xl p-6 transition-all duration-300 hover:shadow-card hover:-translate-y-1">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-xl bg-white p-2 shadow-sm border border-border/50">
            <img src={job.logo} alt={job.company} className="w-full h-full object-contain" />
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
              {job.title}
            </h3>
            <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
              <Building2 className="w-4 h-4" />
              <span>{job.company}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
           <div className={`px-3 py-1 rounded-full text-xs font-bold border ${
             job.matchScore >= 90 ? 'bg-green-500/10 text-green-600 border-green-500/20' :
             job.matchScore >= 75 ? 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20' :
             'bg-muted text-muted-foreground border-border'
           }`}>
             {job.matchScore}% Match
           </div>
           <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-red-500">
             <Heart className="w-5 h-5" />
           </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <MapPin className="w-4 h-4" />
          {job.location}
        </div>
        <div className="flex items-center gap-1.5">
          <Banknote className="w-4 h-4" />
          {job.salary}
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4" />
          {job.postedAt}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {job.skills.slice(0, 3).map((skill) => (
          <Badge key={skill} variant="secondary" className="rounded-md font-normal">
            {skill}
          </Badge>
        ))}
        {job.skills.length > 3 && (
          <Badge variant="outline" className="rounded-md font-normal">
            +{job.skills.length - 3} more
          </Badge>
        )}
      </div>

      <div className="flex gap-3">
        <Button variant="seeker" className="flex-1 w-full">Apply Now</Button>
        <Button variant="outline" className="w-full flex-1">View Details</Button>
      </div>
    </div>
  );
};
