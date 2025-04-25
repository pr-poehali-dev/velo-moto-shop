import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">ВелоМото</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="font-medium hover:text-primary">Главная</Link>
            <Link to="/bicycles" className="font-medium hover:text-primary">Велосипеды</Link>
            <Link to="/motorcycles" className="font-medium hover:text-primary">Мотоциклы</Link>
            <Link to="/parts" className="font-medium hover:text-primary">Запчасти</Link>
            <Link to="/accessories" className="font-medium hover:text-primary">Аксессуары</Link>
          </nav>

          {/* Search, Cart, User icons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative w-64">
              <Input type="text" placeholder="Поиск..." className="pr-8" />
              <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            <Button variant="ghost" size="icon" aria-label="Корзина">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Профиль">
              <User className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            <Button variant="ghost" size="icon" aria-label="Корзина">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Меню">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="relative mb-4">
              <Input type="text" placeholder="Поиск..." className="pr-8" />
              <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="font-medium hover:text-primary" onClick={toggleMenu}>Главная</Link>
              <Link to="/bicycles" className="font-medium hover:text-primary" onClick={toggleMenu}>Велосипеды</Link>
              <Link to="/motorcycles" className="font-medium hover:text-primary" onClick={toggleMenu}>Мотоциклы</Link>
              <Link to="/parts" className="font-medium hover:text-primary" onClick={toggleMenu}>Запчасти</Link>
              <Link to="/accessories" className="font-medium hover:text-primary" onClick={toggleMenu}>Аксессуары</Link>
              <Link to="/profile" className="font-medium hover:text-primary" onClick={toggleMenu}>Профиль</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;