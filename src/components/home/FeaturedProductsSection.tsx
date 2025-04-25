import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/ProductCard";
import { ProductProps } from "@/components/ProductCard";

interface FeaturedProductsSectionProps {
  products: ProductProps[];
}

const FeaturedProductsSection = ({ products }: FeaturedProductsSectionProps) => {
  const [activeTab, setActiveTab] = useState("all");

  // Фильтрация продуктов по активной вкладке
  const filteredProducts = activeTab === "all" 
    ? products 
    : activeTab === "new" 
      ? products.filter(p => p.isNew) 
      : products.filter(p => p.isSale);

  return (
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
          {filteredProducts.map((product) => (
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
  );
};

export default FeaturedProductsSection;
