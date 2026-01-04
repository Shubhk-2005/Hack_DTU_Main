import { RevealOnScroll, StaggerContainer } from '@/components/RevealOnScroll';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Computer Science Student',
    avatar: 'PS',
    content: 'YuvaSetu changed how I job hunt. Instead of scrolling through hundreds of irrelevant listings, I got 5 perfect matches. The transparency feature showing why I matched was a game-changer!',
    rating: 5,
  },
  {
    name: 'Rahul Verma',
    role: 'Data Science Graduate',
    avatar: 'RV',
    content: 'The auto-resume feature saved me hours. I had no idea how to write an ATS-friendly resume, and YuvaSetu did it for me in seconds. Landed my dream job in 2 weeks!',
    rating: 5,
  },
  {
    name: 'Ananya Patel',
    role: 'MBA Student',
    avatar: 'AP',
    content: 'Living in a rural area with spotty internet, the SMS alerts were invaluable. I never missed an opportunity, even when my WiFi was down. This platform truly cares about accessibility.',
    rating: 5,
  },
  {
    name: 'Vikram Singh',
    role: 'Engineering Fresher',
    avatar: 'VS',
    content: 'The AI matching is incredibly accurate. It understood that my mechanical engineering background with Python skills made me perfect for automation roles. Mind-blowing!',
    rating: 5,
  },
  {
    name: 'Neha Gupta',
    role: 'BCA Graduate',
    avatar: 'NG',
    content: 'Finally, a platform that doesn\'t overwhelm me! The curated job list and clear explanations made my job search stress-free. Highly recommend to all students!',
    rating: 5,
  },
  {
    name: 'Arjun Kumar',
    role: 'IT Professional',
    avatar: 'AK',
    content: 'The semantic matching is next-level. It connected my \'TensorFlow experience\' with \'Deep Learning roles\' automatically. This is the future of job matching!',
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative py-32 overflow-hidden bg-gradient-hero">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Fan Section
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Loved by <span className="text-gradient">Students</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of students who found their dream careers through YuvaSetu.
          </p>
        </RevealOnScroll>
        
        {/* Testimonials grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 group"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              
              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-[hsl(252_94%_67%)] flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-foreground">{testimonial.avatar}</span>
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
