import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ProductCard } from "../components/ProductCard";
import { ScrollingText } from "../components/ScrollingText";
import { InstagramGallery } from "../components/InstagramGallery";
import { ArrowRight, Leaf, Truck, Award } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const products = [
  {
    id: 1,
    name: "Cold Brew Original",
    description: "Smooth & bold coffee",
    price: 4.99,
    image:
      "https://images.unsplash.com/photo-1561641377-f7456d23aa9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xkJTIwYnJldyUyMGNvZmZlZXxlbnwxfHx8fDE3NTk0ODk1NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    name: "Green Tea Matcha",
    description: "Organic Japanese matcha",
    price: 5.49,
    image:
      "https://images.unsplash.com/photo-1707722805784-fc3586908ef9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWElMjBiZXZlcmFnZSUyMGJvdHRsZXxlbnwxfHx8fDE3NTk1ODI3NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    name: "Fresh Orange Juice",
    description: "Cold-pressed citrus",
    price: 6.99,
    image:
      "https://images.unsplash.com/photo-1652122788538-9aba111c550e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGp1aWNlJTIwYm90dGxlfGVufDF8fHx8MTc1OTU4Mjc0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    name: "Espresso Blend",
    description: "Rich & aromatic",
    price: 4.49,
    image:
      "https://images.unsplash.com/photo-1727908147383-7dc915d7feef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZXZlcmFnZSUyMGJvdHRsZXxlbnwxfHx8fDE3NTk1ODI3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 5,
    name: "Wellness Smoothie",
    description: "Vitamin-packed blend",
    price: 7.99,
    image:
      "https://images.unsplash.com/photo-1504855232331-fe4d5d2febfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZHJpbmtzfGVufDF8fHx8MTc1OTU4Mjc0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 6,
    name: "Classic Latte",
    description: "Creamy & smooth",
    price: 5.99,
    image:
      "https://images.unsplash.com/photo-1561641377-f7456d23aa9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xkJTIwYnJldyUyMGNvZmZlZXxlbnwxfHx8fDE3NTk0ODk1NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function HomePage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      const newScrollLeft =
        direction === "left"
          ? scrollRef.current.scrollLeft - scrollAmount
          : scrollRef.current.scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });

      // Update currentIndex based on scroll position
      const itemWidth = 320 + 24; // width + gap
      setCurrentIndex(Math.round(newScrollLeft / itemWidth));
    }
  };

  // Auto-scroll every 3 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const itemWidth = 320 + 24; // width + gap
        const maxScroll = container.scrollWidth - container.clientWidth;

        // Calculate next position
        const nextPosition = (currentIndex + 1) * itemWidth;

        if (nextPosition >= maxScroll) {
          // Reset to beginning
          container.scrollTo({ left: 0, behavior: "smooth" });
          setCurrentIndex(0);
        } else {
          // Scroll to next item
          container.scrollTo({ left: nextPosition, behavior: "smooth" });
          setCurrentIndex(currentIndex + 1);
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1646681828239-843f5ed340de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwbW9kZXJufGVufDF8fHx8MTc1OTUzMTQwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">
            Elevate Your Day
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Discover our collection of thoughtfully crafted beverages
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
            Shop Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Scrolling Text Banner */}
      <section className="py-8 bg-primary text-primary-foreground overflow-hidden">
        <ScrollingText 
          text="FRESH DAILY • ORGANIC INGREDIENTS • SUSTAINABLE SOURCING • LOCALLY ROASTED • ETHICALLY TRADED" 
          className="text-lg tracking-wider"
        />
      </section>

      {/* Horizontal Scrolling Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2>Our Collection</h2>
            <div className="flex items-center gap-4">
              <button
                onClick={() => scroll("left")}
                className="p-2 hover:bg-accent rounded-full transition-colors"
              >
                <ArrowRight className="w-5 h-5 rotate-180" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2 hover:bg-accent rounded-full transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-none w-[280px] md:w-[320px] snap-start"
              >
                <ProductCard
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                  onAddToCart={() => {
                    alert(`Added ${product.name} to cart!`);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1737735633629-f9ed8408a176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwaW5ncmVkaWVudHMlMjBvcmdhbmljfGVufDF8fHx8MTc1OTU4MzQ3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Natural ingredients"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="mb-6">Pure Ingredients, Pure Taste</h2>
              <p className="text-muted-foreground text-lg mb-6">
                We believe in transparency. Every bottle contains only what nature
                intended—no artificial flavors, no preservatives, no shortcuts. Just
                pure, wholesome ingredients sourced from trusted partners around the
                world.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                From single-origin coffee beans to organic matcha leaves, we travel
                the globe to bring you the finest ingredients that make every sip an
                experience worth savoring.
              </p>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                Learn Our Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Banner */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="mb-2">Sustainable</h3>
              <p className="text-muted-foreground">
                Ethically sourced ingredients and eco-friendly packaging
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="mb-2">Fresh Daily</h3>
              <p className="text-muted-foreground">
                Made to order and delivered within 24 hours
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">
                Only the finest ingredients in every bottle
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="mb-6">Subscribe & Save</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Never run out of your favorites. Subscribe to weekly or monthly
                deliveries and save 15% on every order.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground">✓</span>
                  </div>
                  <span className="text-muted-foreground">
                    Free shipping on all subscription orders
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground">✓</span>
                  </div>
                  <span className="text-muted-foreground">
                    Flexible delivery schedule—pause or cancel anytime
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground">✓</span>
                  </div>
                  <span className="text-muted-foreground">
                    Exclusive access to new products and limited editions
                  </span>
                </li>
              </ul>
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-colors">
                Start Subscription
              </button>
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden order-1 md:order-2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759420303135-0224b8d9b798?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWJzY3JpcHRpb24lMjBib3glMjBkZWxpdmVyeXxlbnwxfHx8fDE3NTk1ODM0NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Subscription delivery"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <InstagramGallery />
    </div>
  );
}
