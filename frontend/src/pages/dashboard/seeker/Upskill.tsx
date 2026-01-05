import { BookOpen, Video, Globe, Award, TrendingUp, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const SKILL_PATHS = [
  {
    title: 'Advanced React Patterns',
    category: 'Frontend Development',
    progress: 45,
    modules: 12,
    difficulty: 'Advanced',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'System Design for Interviews',
    category: 'Architecture',
    progress: 10,
    modules: 8,
    difficulty: 'Intermediate',
    color: 'from-orange-500 to-amber-500'
  },
  {
    title: 'Modern CSS & Animations',
    category: 'UI Engineering',
    progress: 0,
    modules: 15,
    difficulty: 'Beginner',
    color: 'from-pink-500 to-rose-500'
  }
];

const RESOURCES = [
  {
    type: 'Video Course',
    title: 'Understanding Next.js App Router',
    provider: 'YuvaSetu Academy',
    duration: '2h 15m',
    icon: Video,
    image: 'https://cdn.dribbble.com/users/5031392/screenshots/15467520/media/c36b3b15b25b1e190d081f954363401c.png?resize=400x300&vertical=center'
  },
  {
    type: 'Article',
    title: 'Top 50 Frontend Interview Challenges',
    provider: 'DevResources',
    duration: '15 min read',
    icon: BookOpen,
     image: 'https://cdn.dribbble.com/users/1355613/screenshots/15462768/media/682b1897c558c704f5e884170e5b7c7b.png?resize=400x300&vertical=center'
  },
  {
    type: 'Interactive',
    title: 'Accessibility(A11y) Masterclass',
    provider: 'WebStandards',
    duration: '4h Course',
    icon: Globe,
     image: 'https://cdn.dribbble.com/users/1615584/screenshots/15414341/media/06771d9d448625db164536761d763806.jpg?resize=400x300&vertical=center'
  }
];

export const Upskill = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="font-display text-3xl font-bold mb-2">Upskill & Grow</h1>
          <p className="text-muted-foreground">Recommended learning paths to boost your profile match.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {SKILL_PATHS.map((path) => (
          <div key={path.title} className="relative group overflow-hidden bg-card border border-border rounded-2xl p-6 transition-all hover:shadow-card">
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${path.color} opacity-10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:opacity-20 transition-opacity`} />
            
            <div className="flex justify-between items-start mb-4">
              <Badge variant="outline">{path.difficulty}</Badge>
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${path.color} flex items-center justify-center text-white shadow-lg`}>
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>

            <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{path.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{path.category} • {path.modules} Modules</p>

            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="font-medium">{path.progress > 0 ? `${path.progress}% Completed` : 'Not Started'}</span>
              </div>
              <Progress value={path.progress} className="h-2" />
            </div>

            <div className="mt-6 pt-4 border-t border-border flex justify-between items-center">
              <Button size="sm" variant={path.progress > 0 ? "secondary" : "outline"} className="w-full">
                {path.progress > 0 ? 'Continue Learning' : 'Start Path'}
              </Button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="font-bold text-2xl pt-4">Featured Resources</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {RESOURCES.map((resource) => (
          <div key={resource.title} className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all">
             <div className="h-40 bg-muted overflow-hidden relative">
               <img src={resource.image} alt={resource.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <PlayCircle className="w-12 h-12 text-white drop-shadow-lg" />
               </div>
             </div>
             <div className="p-5 space-y-3">
               <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider">
                 <resource.icon className="w-3 h-3" />
                 {resource.type}
               </div>
               <h3 className="font-bold leading-tight group-hover:text-primary transition-colors">{resource.title}</h3>
               <div className="flex justify-between text-sm text-muted-foreground pt-2">
                 <span>{resource.provider}</span>
                 <span>{resource.duration}</span>
               </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};
