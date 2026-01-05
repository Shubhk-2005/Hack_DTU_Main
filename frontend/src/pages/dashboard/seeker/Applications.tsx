import { MoreHorizontal, ExternalLink, Calendar, CheckCircle2, XCircle, Clock, Timer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const APPLICATIONS = [
  {
    id: 1,
    role: 'Senior Frontend Engineer',
    company: 'TechCorp',
    logo: 'https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png',
    status: 'Interviewing',
    appliedDate: '12 Jan 2024',
    location: 'Bangalore'
  },
  {
    id: 2,
    role: 'Product Designer',
    company: 'DesignStudio',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png',
    status: 'Shortlisted',
    appliedDate: '10 Jan 2024',
    location: 'Remote'
  },
  {
    id: 3,
    role: 'Full Stack Developer',
    company: 'StartupX',
    logo: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    status: 'Rejected',
    appliedDate: '05 Jan 2024',
    location: 'Mumbai'
  },
  {
    id: 4,
    role: 'React Native Dev',
    company: 'MobileFirst',
    logo: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
    status: 'Applied',
    appliedDate: '03 Jan 2024',
    location: 'Pune'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Interviewing': return 'bg-purple-500/10 text-purple-600 border-purple-500/20';
    case 'Shortlisted': return 'bg-green-500/10 text-green-600 border-green-500/20';
    case 'Rejected': return 'bg-red-500/10 text-red-600 border-red-500/20';
    default: return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'Interviewing': return <Calendar className="w-3.5 h-3.5 mr-1" />;
    case 'Shortlisted': return <CheckCircle2 className="w-3.5 h-3.5 mr-1" />;
    case 'Rejected': return <XCircle className="w-3.5 h-3.5 mr-1" />;
    default: return <Timer className="w-3.5 h-3.5 mr-1" />;
  }
};

export const Applications = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="font-display text-3xl font-bold mb-2">My Applications</h1>
          <p className="text-muted-foreground">Track the status of your job applications.</p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-muted/50 border-b border-border">
                <th className="p-4 font-semibold text-muted-foreground text-sm pl-6">Company & Role</th>
                <th className="p-4 font-semibold text-muted-foreground text-sm">Status</th>
                <th className="p-4 font-semibold text-muted-foreground text-sm">Applied Date</th>
                <th className="p-4 font-semibold text-muted-foreground text-sm">Location</th>
                <th className="p-4 font-semibold text-muted-foreground text-sm">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {APPLICATIONS.map((app) => (
                <tr key={app.id} className="hover:bg-muted/30 transition-colors group">
                  <td className="p-4 pl-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white p-1 border border-border shadow-sm flex items-center justify-center">
                         <img src={app.logo} alt={app.company} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground">{app.role}</div>
                        <div className="text-sm text-muted-foreground">{app.company}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(app.status)}`}>
                      {getStatusIcon(app.status)}
                      {app.status}
                    </div>
                  </td>
                  <td className="p-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5" />
                      {app.appliedDate}
                    </div>
                  </td>
                  <td className="p-4 text-sm text-muted-foreground">{app.location}</td>
                  <td className="p-4">
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
