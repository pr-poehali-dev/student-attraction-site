import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  description: string;
}

interface NewsSectionProps {
  news: NewsItem[];
}

export default function NewsSection({ news }: NewsSectionProps) {
  return (
    <section id="news" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary">
            Новости и события
          </Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Будь в курсе событий
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Актуальные новости, события и обновления нашей платформы
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Card key={item.id} className="hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <Badge className="bg-primary/10 text-primary">
                    {item.category}
                  </Badge>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Icon name="Calendar" size={14} />
                    {item.date}
                  </span>
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {item.description}
                </CardDescription>
                <Button variant="link" className="p-0 h-auto text-primary">
                  Читать далее
                  <Icon name="ArrowRight" className="ml-1" size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
