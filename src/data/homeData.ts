import { ProductProps } from "@/components/ProductCard";

export const categories = [
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

export const featuredProducts: ProductProps[] = [
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
