import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
                <Icon name="Rocket" className="mr-2" size={20} />
                Выбрать программу
              </Button>
              <Button size="lg" variant="outline" className="border-2 hover:bg-gray-50">
                <Icon name="PlayCircle" className="mr-2" size={20} />
                Смотреть видео
              </Button>
            </div>
            <div className="flex gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold text-primary">2000+</div>
                <div className="text-gray-600">Выпускников</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">85%</div>
                <div className="text-gray-600">Трудоустроено</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">4.9</div>
                <div className="text-gray-600">Рейтинг</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-primary to-primary/70 rounded-2xl p-6 text-white">
                  <Icon name="Code" size={32} className="mb-3" />
                  <div className="text-sm opacity-90">Разработка</div>
                  <div className="text-2xl font-bold">100+</div>
                </div>
                <div className="bg-gradient-to-br from-accent to-accent/70 rounded-2xl p-6 text-white">
                  <Icon name="Palette" size={32} className="mb-3" />
                  <div className="text-sm opacity-90">Дизайн</div>
                  <div className="text-2xl font-bold">50+</div>
                </div>
                <div className="bg-gradient-to-br from-secondary to-secondary/70 rounded-2xl p-6 text-white">
                  <Icon name="BarChart" size={32} className="mb-3" />
                  <div className="text-sm opacity-90">Аналитика</div>
                  <div className="text-2xl font-bold">75+</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-400 rounded-2xl p-6 text-white">
                  <Icon name="Smartphone" size={32} className="mb-3" />
                  <div className="text-sm opacity-90">Mobile</div>
                  <div className="text-2xl font-bold">60+</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}