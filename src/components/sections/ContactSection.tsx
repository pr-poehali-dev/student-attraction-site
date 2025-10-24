import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { motion } from 'framer-motion';

interface ContactSectionProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  setFormData: (data: any) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function ContactSection({ formData, setFormData, handleSubmit }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary">
            Контакты
          </Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Остались вопросы?
          </h2>
          <p className="text-xl text-gray-600">
            Свяжитесь с нами и мы ответим на все ваши вопросы
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-2">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
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
                <div>
                  <Label htmlFor="contact-phone">Телефон</Label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (999) 123-45-67"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="contact-message">Сообщение</Label>
                  <Textarea
                    id="contact-message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажите, чем мы можем помочь..."
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary">
                  <Icon name="Send" className="mr-2" size={16} />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
          </motion.div>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border-2 hover:border-primary/30 transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-bold mb-1">Email</div>
                    <div className="text-gray-600">info@eduplatform.ru</div>
                    <div className="text-gray-600">support@eduplatform.ru</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary/30 transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Icon name="Phone" className="text-accent" size={24} />
                  </div>
                  <div>
                    <div className="font-bold mb-1">Телефон</div>
                    <div className="text-gray-600">+7 (495) 123-45-67</div>
                    <div className="text-gray-600">+7 (800) 555-35-35</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary/30 transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Icon name="MapPin" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <div className="font-bold mb-1">Адрес</div>
                    <div className="text-gray-600">г. Москва, ул. Примерная, д. 1</div>
                    <div className="text-gray-600">БЦ "Технопарк", офис 404</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}