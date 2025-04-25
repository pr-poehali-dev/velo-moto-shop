import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
