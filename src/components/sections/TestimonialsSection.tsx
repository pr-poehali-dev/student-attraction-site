import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Testimonial {
  id: number;
  name: string;
  program: string;
  text: string;
  rating: number;
  avatar: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent">
            Отзывы студентов
          </Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Истории успеха наших выпускников
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Узнайте, как наши студенты изменили свою карьеру и жизнь
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.id} className="border-2 hover:border-primary/30 transition-all hover:shadow-lg animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-bold text-lg">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.program}</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
