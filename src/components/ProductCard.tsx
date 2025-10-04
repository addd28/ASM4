import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  onAddToCart?: () => void;
}

export function ProductCard({
  name,
  description,
  price,
  image,
  onAddToCart,
}: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-4 relative">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart?.();
          }}
          className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
        >
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>
      <div className="space-y-1">
        <h3>{name}</h3>
        <p className="text-muted-foreground">{description}</p>
        <p className="text-foreground">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}
