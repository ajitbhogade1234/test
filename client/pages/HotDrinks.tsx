import Layout from "../components/Layout";
import { hotDrinks } from "../data/menu";
import { Star, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function HotDrinks() {
  const { addToCart } = useCart();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-700 to-orange-700 text-white py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-slide-up">☕ Hot Drinks</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Warm yourself with our aromatic teas and freshly brewed coffees
          </p>
        </div>
      </section>

      {/* Hot Drinks Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Intro */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-3">Warm & Refreshing Beverages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From traditional Indian chai to premium coffee, each cup is prepared with care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotDrinks.map((drink, index) => (
              <div
                key={drink.id}
                className="group relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-amber-200 via-orange-200 to-amber-300">
                  <img
                    src={drink.image}
                    alt={drink.name}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Steam Animation */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-1 h-6 bg-white/30 rounded-full animate-pulse" />
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star size={14} className="fill-white" />
                    {drink.rating}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-amber-700 transition-colors mb-1">
                    {drink.name}
                  </h3>
                  <p className="text-sm text-amber-600 font-semibold mb-3">{drink.category}</p>

                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    {drink.description}
                  </p>

                  <div className="flex justify-between items-center pt-4 border-t border-border">
                    <span className="text-2xl font-bold text-amber-700">₹{drink.price}</span>
                    <button
                      onClick={() =>
                        addToCart({
                          id: drink.id,
                          name: drink.name,
                          price: drink.price,
                          category: drink.category,
                          image: drink.image,
                        })
                      }
                      className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-lg font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
                    >
                      <ShoppingCart size={18} />
                      Add
                    </button>
                  </div>
                </div>

                {/* Hover Shine */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 group-hover:translate-x-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50 border-t-4 border-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-3">☕</div>
              <h3 className="font-bold text-foreground mb-2">Premium Ingredients</h3>
              <p className="text-muted-foreground text-sm">Best quality tea leaves and coffee beans imported fresh</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🔥</div>
              <h3 className="font-bold text-foreground mb-2">Hot & Fresh</h3>
              <p className="text-muted-foreground text-sm">Brewed fresh to order every single time</p>
            </div>
            <div>
              <div className="text-4xl mb-3">😋</div>
              <h3 className="font-bold text-foreground mb-2">Perfect Taste</h3>
              <p className="text-muted-foreground text-sm">Perfected by our expert baristas over years</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
