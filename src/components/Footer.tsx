import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">ВелоМото</h3>
            <p className="text-gray-300 mb-4">
              Крупнейший интернет-магазин велосипедов, мотоциклов и запчастей. Работаем с 2005 года.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4">Категории</h3>
            <ul className="space-y-2">
              <li><Link to="/bicycles" className="text-gray-300 hover:text-primary transition-colors">Велосипеды</Link></li>
              <li><Link to="/motorcycles" className="text-gray-300 hover:text-primary transition-colors">Мотоциклы</Link></li>
              <li><Link to="/parts" className="text-gray-300 hover:text-primary transition-colors">Запчасти</Link></li>
              <li><Link to="/accessories" className="text-gray-300 hover:text-primary transition-colors">Аксессуары</Link></li>
              <li><Link to="/clothing" className="text-gray-300 hover:text-primary transition-colors">Экипировка</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-primary transition-colors">О компании</Link></li>
              <li><Link to="/delivery" className="text-gray-300 hover:text-primary transition-colors">Доставка и оплата</Link></li>
              <li><Link to="/warranty" className="text-gray-300 hover:text-primary transition-colors">Гарантия</Link></li>
              <li><Link to="/contacts" className="text-gray-300 hover:text-primary transition-colors">Контакты</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-primary transition-colors">Блог</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-primary shrink-0" />
                <span className="text-gray-300">г. Москва, ул. Велосипедная, д. 123</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary shrink-0" />
                <a href="tel:+74951234567" className="text-gray-300 hover:text-primary transition-colors">+7 (495) 123-45-67</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary shrink-0" />
                <a href="mailto:info@velomoto.ru" className="text-gray-300 hover:text-primary transition-colors">info@velomoto.ru</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2023 ВелоМото. Все права защищены.</p>
            <div className="mt-4 md:mt-0">
              <img src="https://via.placeholder.com/200x30/333/fff?text=Payment+Methods" alt="Способы оплаты" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;