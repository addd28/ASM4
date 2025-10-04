import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Instagram } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const instagramPosts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1671442131445-a99f2e59850a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0YWdyYW0lMjBmb29kJTIwc3R5bGluZ3xlbnwxfHx8fDE3NTk1ODM0MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1598382538226-b20754e4950b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBmbGF0JTIwbGF5fGVufDF8fHx8MTc1OTU4MzQzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1592503469196-3a7880cc2d05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwYnJlYWtmYXN0JTIwYm93bHxlbnwxfHx8fDE3NTk0NzYyNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1582084954495-05dbef5a25be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmluayUyMGFlc3RoZXRpYyUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc1OTU4MzQzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1664961304727-cfeb3a87ea65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlc3R5bGUlMjBjb2ZmZWUlMjBtb21lbnR8ZW58MXx8fHwxNzU5NTgzNDM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1555596098-9b19f458ed19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JuaW5nJTIwcm91dGluZSUyMGJldmVyYWdlfGVufDF8fHx8MTc1OTU4MzQzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1607945610118-903b1bc6716a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsaWZlc3R5bGUlMjBmbGF0JTIwbGF5fGVufDF8fHx8MTc1OTU4Mzc3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1550695639-17bf2c3c56a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbW9vdGhpZSUyMGJvd2wlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NTk1MTA4MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1620205252136-0944971c1ca2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdWljZSUyMGJvdHRsZSUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNzU5NTgzNzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1711602926032-837bb88cb7c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWElMjBtb21lbnQlMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzU5NTgzNzczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1668431471634-2b714bea8f72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZHJpbmslMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzU5NTgzNzczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1655655419935-2b5677423fa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXZlcmFnZSUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc1OTU4Mzc3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function InstagramGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const itemWidth = 320 + 16; // width + gap
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">Follow Us</h2>
          <p className="text-muted-foreground text-lg mb-2">
            Join the convo on Instagram{" "}
            <a
              href="https://instagram.com/press_healthfoods"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
            >
              @press_healthfoods
              <Instagram className="w-4 h-4" />
            </a>
          </p>
          <p className="text-muted-foreground">Tag us to be featured!</p>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="flex-none w-[280px] md:w-[320px] snap-start group cursor-pointer"
            >
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden relative">
                <ImageWithFallback
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}