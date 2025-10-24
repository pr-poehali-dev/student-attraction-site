import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/sections/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import ProgramsSection from '@/components/sections/ProgramsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import NewsSection from '@/components/sections/NewsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

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
      <Navigation
        programs={programs}
        selectedProgram={selectedProgram}
        setSelectedProgram={setSelectedProgram}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
      <HeroSection />
      <ProgramsSection programs={programs} />
      <TestimonialsSection testimonials={testimonials} />
      <NewsSection news={news} />
      <ContactSection
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
      <Footer />
    </div>
  );
}
