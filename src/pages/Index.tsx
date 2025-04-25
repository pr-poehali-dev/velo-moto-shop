import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const featuredProducts = [
  {
    id: "1",
    name: "Горный велосипед GT Avalanche 29",
    category: "Велосипеды",
    price: 79990,
    oldPrice: 89990,
    image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    isNew: true,
  },
  {
    id: "2",
    name: "Велошлем Smith Signal MIPS",
    category: "Аксессуары",
    price: 12990,
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
  },
  {
    id: "3",
    name: "Мотоцикл Honda CB500F",
    category: "Мотоциклы",
    price: 649990,
    image: "https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
  },
  {
    id: "4",
    name: "Покрышка Continental Grand Prix 5000",
    category: "Запчасти",
    price: 4990,
    oldPrice: 5990,
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    isSale: true,
  },
];

const categories = [
  {
    id: "bikes",
    name: "Велосипеды",
    image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    link: "/bicycles",
  },
  {
    id: "moto",
    name: "Мотоциклы",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    link: "/motorcycles",
  },
  {
    id: "parts",
    name: "Запчасти",
    image: "https://images.unsplash.com/photo-1603069889182-2e270c95701f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
    link: "/parts",
  },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1519119012096-a342c498ea16?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600&q=80" 
              alt="Велосипеды и мотоциклы" 
              className="w-full h-full object-cover opacity-40"
            />
          </div>
          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Лучшие товары для любителей велосипедов и мотоциклов
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Огромный ассортимент техники, запчастей и аксессуаров для вашего двухколесного транспорта
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="font-semibold">
                  Каталог товаров
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                  Акции и скидки
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Популярные категории</h2>
              <Link to="/catalog" className="text-primary font-medium hover:underline flex items-center">
                Все категории <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Link 
                  key={category.id}
                  to={category.link}
                  className="group relative overflow-hidden rounded-lg shadow-md aspect-[4/3]"
                >
                  <img 
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                      <span className="inline-flex items-center text-white font-medium">
                        Смотреть <ArrowRight className="h-4 w-4 ml-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Популярные товары</h2>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
                <TabsList>
                  <TabsTrigger value="all">Все</TabsTrigger>
                  <TabsTrigger value="new">Новинки</TabsTrigger>
                  <TabsTrigger value="sale">Скидки</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard 
                  key={product.id}
                  {...product}
                />
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button variant="outline" size="lg">
                Смотреть все товары
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Огромный ассортимент</h3>
                <p className="text-gray-600">Более 10 000 наименований товаров для велосипедистов и мотоциклистов</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Быстрая доставка</h3>
                <p className="text-gray-600">Доставка по Москве за 24 часа, по России от 2 до 5 дней</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Гарантия качества</h3>
                <p className="text-gray-600">Все товары сертифицированы и имеют официальную гарантию от производителя</p>
              </div>
            </div>
          </div>
        </section>

        {/* Subscribe */}
        <section className="py-12 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Подпишитесь на наши новости</h2>
                <p className="text-primary-foreground/90">Получайте уведомления о скидках и новых поступлениях</p>
              </div>
              
              <div className="md:w-1/2 max-w-md w-full">
                <form className="flex w-full gap-2">
                  <input 
                    type="email" 
                    placeholder="Ваш email" 
                    className="flex-grow px-4 py-3 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
                    required
                  />
                  <Button className="bg-white text-primary hover:bg-white/90">
                    Подписаться
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;