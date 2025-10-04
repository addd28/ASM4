import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";
import { Check, X } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Cold Brew Original",
    price: 4.99,
    image:
      "https://images.unsplash.com/photo-1561641377-f7456d23aa9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xkJTIwYnJldyUyMGNvZmZlZXxlbnwxfHx8fDE3NTk0ODk1NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caffeine: "High",
    calories: 5,
    organic: true,
    vegan: true,
    size: "12 oz",
  },
  {
    id: 2,
    name: "Green Tea Matcha",
    price: 5.49,
    image:
      "https://images.unsplash.com/photo-1707722805784-fc3586908ef9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWElMjBiZXZlcmFnZSUyMGJvdHRsZXxlbnwxfHx8fDE3NTk1ODI3NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caffeine: "Medium",
    calories: 35,
    organic: true,
    vegan: true,
    size: "12 oz",
  },
  {
    id: 3,
    name: "Fresh Orange Juice",
    price: 6.99,
    image:
      "https://images.unsplash.com/photo-1652122788538-9aba111c550e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGp1aWNlJTIwYm90dGxlfGVufDF8fHx8MTc1OTU4Mjc0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caffeine: "None",
    calories: 110,
    organic: true,
    vegan: true,
    size: "16 oz",
  },
];

export function ComparePage() {
  const [selectedProducts, setSelectedProducts] = useState([
    products[0],
    products[1],
    products[2],
  ]);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="mb-4">Compare Products</h1>
          <p className="text-muted-foreground text-lg">
            Find the perfect beverage for your lifestyle
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left p-6 bg-gray-50">Product</th>
                  {selectedProducts.map((product) => (
                    <th key={product.id} className="p-6 min-w-[200px]">
                      <div className="space-y-4">
                        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                          <ImageWithFallback
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="mb-1">{product.name}</h3>
                          <p className="text-muted-foreground">
                            ${product.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-6 bg-gray-50">Size</td>
                  {selectedProducts.map((product) => (
                    <td key={product.id} className="p-6 text-center">
                      {product.size}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-6 bg-gray-50">Caffeine Level</td>
                  {selectedProducts.map((product) => (
                    <td key={product.id} className="p-6 text-center">
                      <span
                        className={`inline-block px-3 py-1 rounded-full ${
                          product.caffeine === "High"
                            ? "bg-red-100 text-red-800"
                            : product.caffeine === "Medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {product.caffeine}
                      </span>
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-6 bg-gray-50">Calories</td>
                  {selectedProducts.map((product) => (
                    <td key={product.id} className="p-6 text-center">
                      {product.calories} cal
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-6 bg-gray-50">Organic</td>
                  {selectedProducts.map((product) => (
                    <td key={product.id} className="p-6 text-center">
                      {product.organic ? (
                        <Check className="w-5 h-5 text-green-600 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-400 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-6 bg-gray-50">Vegan</td>
                  {selectedProducts.map((product) => (
                    <td key={product.id} className="p-6 text-center">
                      {product.vegan ? (
                        <Check className="w-5 h-5 text-green-600 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-400 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-6 bg-gray-50"></td>
                  {selectedProducts.map((product) => (
                    <td key={product.id} className="p-6 text-center">
                      <button className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-colors">
                        Add to Cart
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-accent rounded-2xl p-8">
          <h3 className="mb-4">How to Choose</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-muted-foreground">
            <div>
              <p>
                <strong className="text-foreground">High Caffeine</strong> -
                Perfect for morning energy and focus
              </p>
            </div>
            <div>
              <p>
                <strong className="text-foreground">Medium Caffeine</strong> -
                Gentle boost without the jitters
              </p>
            </div>
            <div>
              <p>
                <strong className="text-foreground">No Caffeine</strong> -
                Natural energy from vitamins and nutrients
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
