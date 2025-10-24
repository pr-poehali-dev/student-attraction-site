import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface NavigationProps {
  programs: Array<{
    id: number;
    title: string;
    duration: string;
    level: string;
    price: string;
    description: string;
    features: string[];
  }>;
  selectedProgram: string;
  setSelectedProgram: (value: string) => void;
  formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  setFormData: (data: any) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function Navigation({ 
  programs, 
  selectedProgram, 
  setSelectedProgram, 
  formData, 
  setFormData, 
  handleSubmit 
}: NavigationProps) {
  return (
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
  );
}
