import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface ProductProps {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard = ({
  id,
  name,
  category,
  price,
  oldPrice,
  image,
  isNew,
  isSale,
}: ProductProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLiked(!isLiked);
  };

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition-shadow">
      {/* Badge for new or sale items */}
      {isNew && (
        <Badge className="absolute top-2 left-2 z-10 bg-primary text-primary-foreground">Новинка</Badge>
      )}
      {isSale && (
        <Badge className="absolute top-2 left-2 z-10 bg-destructive text-destructive-foreground">Скидка</Badge>
      )}

      {/* Like button */}
      <button
        onClick={toggleLike}
        className="absolute top-2 right-2 z-10 rounded-full bg-white p-1.5 shadow-sm"
      >
        <Heart
          className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-400"}`}
        />
      </button>

      {/* Product image */}
      <Link to={`/product/${id}`} className="block overflow-hidden">
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      {/* Product info */}
      <div className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="text-sm text-gray-500 mb-1">{category}</h3>
          <h2 className="font-medium text-lg leading-tight mb-2 hover:text-primary transition-colors">
            {name}
          </h2>
        </Link>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="font-bold text-lg">{price.toLocaleString()} ₽</span>
            {oldPrice && (
              <span className="text-sm text-gray-400 line-through ml-2">
                {oldPrice.toLocaleString()} ₽
              </span>
            )}
          </div>
          <Button size="sm" className="rounded-full" aria-label="Добавить в корзину">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;