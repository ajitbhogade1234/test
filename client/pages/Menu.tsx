import Layout from "../components/Layout";
import { foodItems } from "../data/menu";
import { Star, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Menu() {
  const { addToCart } = useCart();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 to-red-600 text-white py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-slide-up">🍛 Our Food Menu</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Authentic Indian breakfast delicacies prepared fresh with traditional recipes
          </p>
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {foodItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-orange-200 to-red-200">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star size={16} className="fill-accent-foreground" />
                    {item.rating}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-orange-600 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-sm text-accent font-semibold mt-1">{item.category}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex justify-between items-center pt-4 border-t border-border">
                    <span className="text-2xl font-bold text-orange-600">₹{item.price}</span>
                    <button
                      onClick={() =>
                        addToCart({
                          id: item.id,
                          name: item.name,
                          price: item.price,
                          category: item.category,
                          image: item.image,
                        })
                      }
                      className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
                    >
                      <ShoppingCart size={18} />
                      Add
                    </button>
                  </div>
                </div>

                {/* Hover Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Popular Favorites</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Most loved dishes by our regular guests - come try them!
          </p>
        </div>
      </section>
    </Layout>
  );
}
