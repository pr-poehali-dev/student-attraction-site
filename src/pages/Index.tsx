import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const programs = [
  {
    id: 1,
    title: 'Веб-разработка',
    duration: '6 месяцев',
    level: 'Начальный',
    price: '45 000 ₽',
    description: 'Научитесь создавать современные веб-приложения с нуля',
    features: ['HTML/CSS', 'JavaScript', 'React', 'Node.js']
  },
  {
    id: 2,
    title: 'Дизайн интерфейсов',
    duration: '4 месяца',
    level: 'Средний',
    price: '38 000 ₽',
    description: 'Освойте UI/UX дизайн и создавайте красивые интерфейсы',
    features: ['Figma', 'Prototyping', 'Design Systems', 'User Research']
  },
  {
    id: 3,
    title: 'Аналитика данных',
    duration: '5 месяцев',
    level: 'Начальный',
    price: '42 000 ₽',
    description: 'Станьте специалистом по анализу и визуализации данных',
    features: ['Python', 'SQL', 'Power BI', 'Статистика']
  },
  {
    id: 4,
    title: 'Мобильная разработка',
    duration: '7 месяцев',
    level: 'Продвинутый',
    price: '52 000 ₽',
    description: 'Разрабатывайте мобильные приложения для iOS и Android',
    features: ['React Native', 'Flutter', 'Firebase', 'App Store']
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Анна Петрова',
    program: 'Веб-разработка',
    text: 'Отличная программа! За полгода я освоила профессию и нашла работу мечты. Преподаватели всегда помогали и поддерживали.',
    rating: 5,
    avatar: '👩‍💻'
  },
  {
    id: 2,
    name: 'Михаил Сидоров',
    program: 'Дизайн интерфейсов',
    text: 'Курс превзошёл все ожидания. Практические задания и реальные кейсы помогли быстро войти в профессию.',
    rating: 5,
    avatar: '👨‍🎨'
  },
  {
    id: 3,
    name: 'Елена Кузнецова',
    program: 'Аналитика данных',
    text: 'Структурированная программа и внимательные наставники. Уже через 3 месяца получила первые заказы на фрилансе!',
    rating: 5,
    avatar: '👩‍💼'
  }
];

const news = [
  {
    id: 1,
    title: 'Открыт набор на новый поток',
    date: '15 октября 2025',
    category: 'Набор',
    description: 'Стартуем 1 ноября! Успейте записаться на курсы со скидкой 20%.'
  },
  {
    id: 2,
    title: 'Встреча с IT-компаниями',
    date: '20 октября 2025',
    category: 'События',
    description: 'Приглашаем студентов на день карьеры с ведущими работодателями отрасли.'
  },
  {
    id: 3,
    title: 'Новая программа: DevOps',
    date: '25 октября 2025',
    category: 'Программы',
    description: 'Запускаем курс по DevOps-практикам. Регистрация уже открыта!'
  }
];

export default function Index() {
  const [selectedProgram, setSelectedProgram] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
    setSelectedProgram('');
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              EduPlatform
            </h1>
            <div className="hidden md:flex gap-6">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
              <a href="#programs" className="text-gray-700 hover:text-primary transition-colors">Программы</a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">Отзывы</a>
              <a href="#news" className="text-gray-700 hover:text-primary transition-colors">Новости</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Записаться
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Записаться на курс</DialogTitle>
                  <DialogDescription>
                    Заполните форму и мы свяжемся с вами для уточнения деталей
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div>
                    <Label htmlFor="program">Выберите программу</Label>
                    <Select value={selectedProgram} onValueChange={setSelectedProgram}>
                      <SelectTrigger>
                        <SelectValue placeholder="Программа обучения" />
                      </SelectTrigger>
                      <SelectContent>
                        {programs.map((prog) => (
                          <SelectItem key={prog.id} value={prog.title}>
                            {prog.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary">
                    Отправить заявку
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-accent/20 text-accent-foreground border-accent">
                Образование будущего
              </Badge>
              <h2 className="text-5xl md:text-6xl font-heading font-extrabold mb-6 leading-tight">
                Начни карьеру в{' '}
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  IT уже сегодня
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Освой востребованную профессию с нуля за 4-7 месяцев. Практические навыки, реальные проекты и помощь с трудоустройством.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Icon name="GraduationCap" className="mr-2" size={20} />
                  Выбрать курс
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Play" className="mr-2" size={20} />
                  Смотреть демо
                </Button>
              </div>
              <div className="flex gap-8 mt-12">
                <div>
                  <div className="text-3xl font-heading font-bold text-primary">2500+</div>
                  <div className="text-gray-600">Выпускников</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-secondary">95%</div>
                  <div className="text-gray-600">Трудоустроено</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-accent">4.9</div>
                  <div className="text-gray-600">Рейтинг</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-2xl">
                    🎓
                  </div>
                  <div>
                    <div className="font-heading font-bold">Онлайн обучение</div>
                    <div className="text-sm text-gray-500">Учись из любой точки мира</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Icon name="CheckCircle2" className="text-primary" size={20} />
                    <span className="text-sm">Живые вебинары с экспертами</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Icon name="CheckCircle2" className="text-primary" size={20} />
                    <span className="text-sm">Практика на реальных проектах</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Icon name="CheckCircle2" className="text-primary" size={20} />
                    <span className="text-sm">Личный ментор и поддержка 24/7</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Icon name="CheckCircle2" className="text-primary" size={20} />
                    <span className="text-sm">Сертификат о прохождении</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary">
              Программы обучения
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Выберите свой путь
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Актуальные курсы для старта и развития карьеры в IT-индустрии
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <Card 
                key={program.id} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="bg-accent/10 text-accent-foreground border-accent">
                      {program.level}
                    </Badge>
                    <div className="text-2xl">
                      {index === 0 ? '💻' : index === 1 ? '🎨' : index === 2 ? '📊' : '📱'}
                    </div>
                  </div>
                  <CardTitle className="font-heading text-xl">{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Icon name="Clock" size={16} />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {program.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="pt-4 border-t">
                      <div className="text-2xl font-heading font-bold text-primary mb-3">
                        {program.price}
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                            Записаться
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Записаться на {program.title}</DialogTitle>
                            <DialogDescription>
                              Заполните форму и мы свяжемся с вами для уточнения деталей
                            </DialogDescription>
                          </DialogHeader>
                          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                            <div>
                              <Label htmlFor="name">Ваше имя</Label>
                              <Input
                                id="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="email">Email</Label>
                              <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="phone">Телефон</Label>
                              <Input
                                id="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                required
                              />
                            </div>
                            <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary">
                              Отправить заявку
                            </Button>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-secondary/10 text-secondary-foreground border-secondary">
              Отзывы студентов
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Истории успеха
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Узнайте, как наши выпускники достигли своих целей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id} 
                className="hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-5xl">{testimonial.avatar}</div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.program}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-accent text-accent" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-accent/10 text-accent-foreground border-accent">
              Новости и события
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Будьте в курсе
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Последние новости образовательной платформы
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <Card 
                key={item.id} 
                className="hover:shadow-lg transition-all hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-primary/10 text-primary border-primary">
                      {item.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Icon name="Calendar" size={14} />
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <CardTitle className="font-heading text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                  <Button variant="link" className="px-0 mt-4 text-primary">
                    Подробнее <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary">
              Свяжитесь с нами
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Остались вопросы?
            </h2>
            <p className="text-xl text-gray-600">
              Заполните форму и мы ответим в ближайшее время
            </p>
          </div>
          <Card className="animate-scale-in">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-name">Ваше имя</Label>
                    <Input
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иван Иванов"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">Email</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ivan@example.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="contact-phone">Телефон</Label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (900) 123-45-67"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажите о себе и своих целях обучения..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="text-white" size={24} />
                </div>
                <CardTitle className="text-lg mb-2">Email</CardTitle>
                <p className="text-gray-600">info@eduplatform.ru</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-white" size={24} />
                </div>
                <CardTitle className="text-lg mb-2">Телефон</CardTitle>
                <p className="text-gray-600">+7 (495) 123-45-67</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-white" size={24} />
                </div>
                <CardTitle className="text-lg mb-2">Адрес</CardTitle>
                <p className="text-gray-600">Москва, ул. Примерная, 1</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                EduPlatform
              </h3>
              <p className="text-gray-400">
                Образовательная платформа для будущих IT-специалистов
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Программы</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Веб-разработка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Дизайн</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Аналитика</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Мобильная разработка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Преподаватели</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Github" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Linkedin" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Youtube" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EduPlatform. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
