import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              EduPlatform
            </h3>
            <p className="text-gray-400">
              Образовательная платформа нового поколения для развития IT-специалистов
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Программы</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Веб-разработка</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Дизайн</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Аналитика</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mobile</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Компания</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Преподаватели</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Социальные сети</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-primary transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 EduPlatform. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
