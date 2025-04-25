import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight } from "lucide-react";

interface Category {
  id: string;
  name: string;
  image: string;
  link: string;
}

interface CategorySectionProps {
  categories: Category[];
}

const CategorySection = ({ categories }: CategorySectionProps) => {
  return (
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
  );
};

export default CategorySection;
