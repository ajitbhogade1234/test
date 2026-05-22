import Layout from "../components/Layout";
import { coldDrinks } from "../data/menu";
import { Star, Zap, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function ColdDrinks() {
  const { addToCart } = useCart();

  return (
    <Layout>
      {/* Hero Section with Ice Animation */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-blue-500 to-teal-600 text-white py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
        </div>

        {/* Floating Ice Cubes */}
        <div className="absolute top-10 left-10 text-4xl animate-bounce" style={{ animationDuration: "4s" }}>🧊</div>
        <div className="absolute top-40 right-20 text-4xl animate-bounce" style={{ animationDuration: "5s", animationDelay: "0.5s" }}>🧊</div>
        <div className="absolute bottom-20 left-1/3 text-4xl animate-bounce" style={{ animationDuration: "4.5s", animationDelay: "1s" }}>🧊</div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-slide-up">🧊 Cold Drinks</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Refresh yourself with our ice-cold sodas, traditional drinks, and refreshing beverages
          </p>
        </div>
      </section>

      {/* Cold Drinks Grid */}
      <section className="py-20 bg-gradient-to-b from-background to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Intro */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-3">Chilled & Refreshing</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Popular sodas, traditional Indian drinks, and refreshing beverages served ice-cold
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coldDrinks.map((drink, index) => (
              <div
                key={drink.id}
                className="group relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-110 animate-fade-in"
                style={{ animationDelay: `${index * 40}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-cyan-200 via-blue-200 to-teal-200">
                  <img
                    src={drink.image}
                    alt={drink.name}
                    className="w-full h-full object-cover group-hover:scale-120 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  {/* Condensation Drops Animation */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-white/60 rounded-full animate-pulse" />
                  <div className="absolute top-6 right-4 w-2 h-2 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: "0.3s" }} />
                  <div className="absolute top-10 right-3 w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: "0.6s" }} />

                  {/* Flash Badge */}
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Zap size={12} className="fill-white" />
                    Chilled
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 relative z-10">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-cyan-600 transition-colors mb-1">
                    {drink.name}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                    {drink.description}
                  </p>

                  <div className="flex justify-between items-center pt-3 border-t border-border">
                    <span className="text-xl font-bold text-cyan-600">₹{drink.price}</span>
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
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-lg text-sm font-bold hover:shadow-lg hover:scale-110 transition-all duration-300 flex items-center gap-1"
                    >
                      <ShoppingCart size={14} />
                      Add
                    </button>
                  </div>
                </div>

                {/* Hover Shine */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-40 transform -skew-x-12 group-hover:translate-x-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-white border-t-2 border-cyan-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Popular Brands & Traditional Drinks</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-bold text-lg text-foreground mb-4">🥤 International Sodas</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>✓ Coca-Cola, Pepsi, Sprite, 7UP</li>
                <li>✓ Mountain Dew, Fanta Orange</li>
                <li>✓ Limca (Lime & Lemon)</li>
              </ul>
            </div>
            <div className="bg-cyan-50 rounded-xl p-6">
              <h3 className="font-bold text-lg text-foreground mb-4">🌿 Traditional Indian Drinks</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>✓ Nimbu Paani, Aam Panna, Jal-Jeera</li>
                <li>✓ Lahori Zeera, Kala Khatta</li>
                <li>✓ Banta Soda, Mirinda</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
