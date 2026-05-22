import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import FoodCarousel from "../components/FoodCarousel";
import {
  ChefHat,
  Wine,
  Coffee,
  Cake,
  Star,
  ArrowRight,
  Flame,
  Heart,
  ShoppingCart,
  Sparkles,
} from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Home() {
  const { addToCart } = useCart();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const signatureDishes = [
    {
      id: "wada-pav",
      name: "Wada Pav",
      price: 40,
      rating: 4.9,
      image:
        "https://media.istockphoto.com/id/1329213718/photo/vada-pav.jpg?s=612x612&w=0&k=20&c=Yy3pm53KrPAnZXL9weCJDzXjxa2My34oVFx7RBCPmZ8=",
      description: "Crispy golden potato fritter in gram flour batter with spicy mint chutney",
      emoji: "🥔",
      color: "from-orange-500 to-red-500",
      accentColor: "orange",
    },
    {
      id: "misal-pav",
      name: "Misal Pav",
      price: 50,
      rating: 4.8,
      image:
        "https://images.pexels.com/photos/17223835/pexels-photo-17223835.jpeg",
      description: "Rich aromatic sprout curry with crispy sev served with buttery pav",
      emoji: "🌶️",
      color: "from-red-500 to-orange-600",
      accentColor: "red",
    },
    {
      id: "bhel",
      name: "Bhel Puri",
      price: 35,
      rating: 4.9,
      image:
        "https://thumbs.dreamstime.com/b/bhel-puri-37764208.jpg?w=768",
      description: "Crispy puffed rice with fresh vegetables and tangy tamarind chutneys",
      emoji: "🌾",
      color: "from-yellow-500 to-orange-500",
      accentColor: "yellow",
    },
  ];

  const categories = [
    {
      title: "Food",
      description: "Authentic Indian breakfast delicacies",
      href: "/menu",
      emoji: "🍛",
      color: "from-orange-500 to-red-500",
      delay: "0s",
    },
    {
      title: "Hot Drinks",
      description: "Warm teas and fresh hot coffees",
      href: "/hot-drinks",
      emoji: "☕",
      color: "from-amber-600 to-orange-600",
      delay: "0.1s",
    },
    {
      title: "Cold Drinks",
      description: "Refreshing beverages & traditional sodas",
      href: "/cold-drinks",
      emoji: "🧊",
      color: "from-blue-500 to-cyan-500",
      delay: "0.2s",
    },
    {
      title: "Sweets",
      description: "Traditional Indian desserts",
      href: "/sweets",
      emoji: "🍡",
      color: "from-pink-500 to-rose-500",
      delay: "0.3s",
    },
  ];

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary via-primary to-orange-700 text-primary-foreground flex items-center pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Circles */}
          <div className="absolute top-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-yellow-300/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-orange-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

          {/* Animated Grid */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)",
              backgroundSize: "50px 50px",
              animation: "moveGrid 20s linear infinite",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-slide-in-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-accent font-semibold text-sm animate-scale-in">
                <Sparkles size={18} />
                Welcome to Flavor Paradise
              </div>

              {/* Main Title */}
              <div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-4 leading-tight drop-shadow-lg">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-yellow-300 to-orange-300 animate-text-shimmer">
                    Om Gurudev
                  </span>
                </h1>
                <p className="text-2xl md:text-3xl text-primary-foreground/90 font-bold mb-4">
                  Authentic Indian Delights
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-md">
                Experience the legendary taste of authentic Indian cuisine. From
                our famous Wada Pav to the aromatic Misal Pav, each dish is
                prepared with love and traditional recipes.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/menu"
                  className="group bg-gradient-to-r from-accent to-yellow-500 text-accent-foreground px-8 py-4 rounded-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                >
                  Explore Menu
                  <ArrowRight
                    size={24}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </Link>
                {/* <button className="group border-3 border-primary-foreground text-primary-foreground px-8 py-4 rounded-2xl font-bold hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-105 backdrop-blur-sm text-lg">
                  Reserve Table
                </button> */}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                {[
                  { number: "50+", label: "Dishes" },
                  { number: "4.9★", label: "Rating" },
                  { number: "10k+", label: "Foodies" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/15 backdrop-blur-xl rounded-2xl p-4 text-center border border-white/20 animate-scale-in hover:bg-white/25 transition-all duration-300"
                    style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                  >
                    <div className="text-2xl font-black text-accent">
                      {stat.number}
                    </div>
                    <p className="text-sm text-primary-foreground/80">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Animated Hero Visual with Real Food Image */}
            <div className="relative h-96 md:h-full flex items-center justify-center animate-slide-in-right">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Main Food Image Container */}
                <div className="relative w-72 h-72 md:w-96 md:h-96 animate-float drop-shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/17223835/pexels-photo-17223835.jpeg"
                    alt="Om Gurudev Indian Cuisine"
                    className="w-full h-full object-cover rounded-3xl shadow-2xl filter brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 rounded-3xl" />
                </div>

                {/* Floating Garnish Images */}
               
                <div className="absolute bottom-24 left-16 w-24 h-24 animate-float rounded-2xl shadow-lg overflow-hidden" style={{ animationDelay: "1s" }}>
                  <img
                    src="https://images.pexels.com/photos/8321980/pexels-photo-8321980.jpeg"
                    alt="Indian Curry"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-1/3 left-0 w-32 h-32 animate-float rounded-2xl shadow-lg overflow-hidden" style={{ animationDelay: "2s" }}>
                  <img
                    src="https://media.istockphoto.com/id/1329213718/photo/vada-pav.jpg?s=612x612&w=0&k=20&c=Yy3pm53KrPAnZXL9weCJDzXjxa2My34oVFx7RBCPmZ8="
                    alt="Bhel Puri"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOD CAROUSEL SECTION */}
      <FoodCarousel
        items={[
          {
            id: 1,
            name: "Wada Pav",
            description:
              "Crispy golden potato fritter wrapped in gram flour batter, served with spicy mint chutney. The ultimate street food classic that's loved by everyone.",
            price: 40,
            image: "https://media.istockphoto.com/id/1329213718/photo/vada-pav.jpg?s=612x612&w=0&k=20&c=Yy3pm53KrPAnZXL9weCJDzXjxa2My34oVFx7RBCPmZ8=",
            rating: 4.9,
            category: "Breakfast",
          },
          {
            id: 2,
            name: "Misal Pav",
            description:
              "Rich aromatic sprout curry with layers of spice, topped with crispy sev. Served with buttery pav for the perfect dip. A Maharashtrian specialty.",
            price: 50,
            image: "https://images.pexels.com/photos/17223835/pexels-photo-17223835.jpeg",
            rating: 4.8,
            category: "Breakfast",
          },
          {
            id: 3,
            name: "Pav Bhaji",
            description:
              "Spiced vegetable curry loaded with flavors, served with buttered and toasted pav bread. A perfect combination of taste and texture.",
            price: 45,
            image: "https://media.istockphoto.com/id/1155185428/photo/indian-spicy-food-paav-bhaji-or-pav-bhaji.jpg?s=612x612&w=0&k=20&c=AMT1hmTm1xhTT0KmGsGPRyU6cPe-HFJuvkOgiT0m3Jo=",
            rating: 4.9,
            category: "Breakfast",
          },
          {
            id: 4,
            name: "Bhel Puri",
            description:
              "Light and crispy puffed rice mixed with fresh vegetables, chutneys, and sev. A refreshing snack that's bursting with flavors and textures.",
            price: 35,
            image: "https://thumbs.dreamstime.com/b/bhel-puri-37764208.jpg?w=768",
            rating: 4.9,
            category: "Snacks",
          },
          {
            id: 5,
            name: "Upma",
            description:
              "Semolina porridge with vegetables and aromatic spices. A light and nutritious breakfast option that's comfort food at its finest.",
            price: 42,
            image: "https://t4.ftcdn.net/jpg/10/88/62/83/240_F_1088628359_6ZskzdYQNvfT1QICDXE0W9kpISi4kgS4.jpg",
            rating: 4.8,
            category: "Breakfast",
          },
        ]}
        title="Featured Dishes"
      />

      {/* SIGNATURE SPECIALS SECTION */}
      <section className="py-32 bg-gradient-to-b from-background via-orange-50/30 to-background relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-300/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-24 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-6 py-3 rounded-full font-bold mb-6">
              <Heart size={20} className="fill-current" />
              Our Signature Specials
            </div>
            <h2 className="text-6xl md:text-7xl font-black text-foreground mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-red-600 to-orange-500">
                Famous Flavors
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Taste the legendary dishes that made Om Gurudev a household name
            </p>
          </div>

          {/* Dishes Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {signatureDishes.map((dish, index) => (
              <div
                key={dish.id}
                className="group relative"
                onMouseEnter={() => setHoveredCard(dish.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  animation: `slide-up 0.6s ease-out ${index * 0.15}s both`,
                }}
              >
                {/* Card Container */}
                <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white">
                  {/* Image Container */}
                  <div className="relative h-80 overflow-hidden bg-gray-200">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    {/* Floating Badge */}
                    <div
                      className={`absolute top-4 right-4 bg-gradient-to-r ${dish.color} text-white px-5 py-2 rounded-full font-bold text-sm flex items-center gap-2 animate-scale-in shadow-lg`}
                    >
                      <Heart size={16} className="fill-current" />
                      Must Try
                    </div>

                    {/* Price Tag */}
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 font-bold text-2xl text-foreground shadow-lg">
                      ₹{dish.price}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-8 bg-white">
                    {/* Dish Icon/Preview */}
              

                    {/* Title & Rating */}
                    <h3
                      className={`text-3xl font-bold text-foreground mb-2 bg-clip-text text-transparent bg-gradient-to-r ${dish.color}`}
                    >
                      {dish.name}
                    </h3>

                    {/* Star Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={`fill-current text-${dish.accentColor}-500`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-bold text-foreground">
                        ({dish.rating}/5)
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                      {dish.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() =>
                          addToCart({
                            id: dish.id,
                            name: dish.name,
                            price: dish.price,
                            category: "Food",
                            image: dish.image,
                          })
                        }
                        className={`group/btn bg-gradient-to-r ${dish.color} text-white font-bold py-3 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2`}
                      >
                        <ShoppingCart size={18} />
                        Add
                      </button>
                      <Link
                        to="/menu"
                        className="group/btn bg-gray-100 text-foreground font-bold py-3 rounded-xl hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-1"
                      >
                        <span>View</span>
                        <ArrowRight
                          size={18}
                          className="group-hover/btn:translate-x-1 transition-transform"
                        />
                      </Link>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${dish.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none rounded-3xl`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl animate-float" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-black text-foreground mb-4">
              Explore by Category
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our diverse menu across different categories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.href}
                to={category.href}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: category.delay }}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Card Content */}
                <div className="relative z-10 bg-card rounded-3xl p-8 h-full group-hover:bg-white/10 transition-all duration-300 backdrop-blur-0 group-hover:backdrop-blur-sm border-2 border-transparent group-hover:border-white/20">
                  <div className="text-7xl mb-6 group-hover:scale-125 transition-transform duration-300 inline-block">
                    {category.emoji}
                  </div>

                  <h3 className="text-2xl font-black text-foreground mb-3 group-hover:text-white transition-colors">
                    {category.title}
                  </h3>

                  <p className="text-muted-foreground group-hover:text-white/90 transition-colors mb-6 text-sm leading-relaxed">
                    {category.description}
                  </p>

                  <div className="flex items-center text-accent font-bold text-sm group-hover:text-white transition-colors">
                    Explore
                    <ArrowRight
                      size={18}
                      className="ml-2 group-hover:translate-x-2 transition-transform"
                    />
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-32 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-300/10 rounded-full blur-3xl animate-float" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-center text-foreground mb-20">
            Why Choose Om Gurudev?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Authentic Recipes",
                desc: "Traditional Indian cuisine prepared with time-honored methods",
                icon: "🍛",
              },
              {
                title: "Fresh Ingredients",
                desc: "Daily sourced premium vegetables and quality ingredients",
                icon: "🥕",
              },
              {
                title: "Expert Chefs",
                desc: "Experienced masters with years of culinary excellence",
                icon: "👨‍🍳",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border-2 border-transparent hover:border-accent animate-slide-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-300 inline-block">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-center text-foreground mb-20">
            What Our Guests Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Raj Patel",
                text: "Best wada pav in the entire city! Worth every penny.",
                rating: 5,
              },
              {
                name: "Priya Sharma",
                text: "Authentic taste just like home. Highly recommend to everyone!",
                rating: 5,
              },
              {
                name: "Vikram Singh",
                text: "Perfect blend of tradition and taste. Simply amazing!",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-white to-orange-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-orange-100 hover:border-accent animate-slide-up hover:-translate-y-2"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star
                      key={j}
                      size={20}
                      className="text-accent fill-accent"
                    />
                  ))}
                </div>
                <p className="text-foreground italic mb-6 text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-black text-foreground text-lg">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-32 bg-gradient-to-r from-primary via-primary to-orange-700 text-primary-foreground relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-80 h-80 bg-accent/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            Ready for the Feast of Your Life?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
            Join thousands of happy customers who experience authentic Indian flavors
            at Om Gurudev every single day.
          </p>
          <Link
            to="/menu"
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-12 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
          >
            Order Now
            <ArrowRight
              size={28}
              className="group-hover:translate-x-2 transition-transform"
            />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
