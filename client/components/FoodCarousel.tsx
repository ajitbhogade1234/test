import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface CarouselItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  category: string;
}

interface FoodCarouselProps {
  items: CarouselItem[];
  title?: string;
}

export default function FoodCarousel({ items, title = "Featured Dishes" }: FoodCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-scroll carousel
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay, items.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-orange-50/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-300/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-red-600 to-orange-500">
              {title}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Swipe through our most loved dishes
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            {/* Carousel Items */}
            <div className="flex">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className={`min-w-full transition-opacity duration-500 ${
                    index === currentIndex ? "opacity-100" : "opacity-0 absolute"
                  }`}
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-8 md:p-12">
                    {/* Image Side */}
                    <div className="relative h-96 md:h-full overflow-hidden rounded-3xl">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                      {/* Category Badge */}
                      <div className="absolute top-6 right-6 bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg">
                        {item.category}
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="space-y-6">
                      {/* Title */}
                      <div>
                        <h3 className="text-5xl font-black text-foreground mb-3">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-4">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={24}
                              className="text-orange-500 fill-orange-500"
                            />
                          ))}
                        </div>
                        <span className="text-xl font-bold text-foreground">
                          {item.rating}/5
                        </span>
                      </div>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between pt-6 border-t-2 border-gray-200">
                        <span className="text-4xl font-black text-orange-600">
                          ₹{item.price}
                        </span>
                        {/* <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg">
                          Order Now
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-foreground p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-20 group-hover:scale-110"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-foreground p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-20 group-hover:scale-110"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-orange-600 to-red-600 w-8"
                    : "bg-gray-300 w-4 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Auto-play Indicator */}
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              {currentIndex + 1} of {items.length} {isAutoPlay && "• Auto-scrolling"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
