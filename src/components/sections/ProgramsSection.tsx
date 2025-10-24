import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Program {
  id: number;
  title: string;
  duration: string;
  level: string;
  price: string;
  description: string;
  features: string[];
}

interface ProgramsSectionProps {
  programs: Program[];
}

export default function ProgramsSection({ programs }: ProgramsSectionProps) {
  return (
    <section id="programs" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary">
            Наши программы
          </Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Выбери свой путь в IT
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Практические курсы с гарантией результата и поддержкой на каждом этапе обучения
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <Card key={program.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="bg-accent/10">
                    {program.level}
                  </Badge>
                  <div className="text-2xl font-bold text-primary">
                    {program.price}
                  </div>
                </div>
                <CardTitle className="text-2xl mb-2">{program.title}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  {program.duration}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <Icon name="CheckCircle2" size={16} className="text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  Узнать больше
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
