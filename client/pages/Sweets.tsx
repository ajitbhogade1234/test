import Layout from "../components/Layout";
import { sweets } from "../data/menu";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Sweets() {
  const { addToCart } = useCart();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-600 via-rose-500 to-red-600 text-white py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/15 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-pink-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.2s" }} />
        </div>

        {/* Floating Heart Decorations */}
        <div className="absolute top-20 left-20 text-4xl animate-bounce" style={{ animationDuration: "3s" }}>💕</div>
        <div className="absolute top-32 right-32 text-4xl animate-bounce" style={{ animationDuration: "4s", animationDelay: "0.5s" }}>💖</div>
        <div className="absolute bottom-32 left-1/4 text-4xl animate-bounce" style={{ animationDuration: "3.5s", animationDelay: "1s" }}>✨</div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-slide-up">🍡 Artisan Sweets</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Indulge in traditional Indian desserts crafted with love and premium ingredients
          </p>
        </div>
      </section>

      {/* Sweets Grid */}
      <section className="py-20 bg-gradient-to-b from-background to-pink-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Intro */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-3">Sweet Delights</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Traditional Indian desserts prepared with authentic recipes and finest ingredients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sweets.map((sweet, index) => (
              <div
                key={sweet.id}
                className="group relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-pink-200 via-rose-200 to-red-200">
                  <img
                    src={sweet.image}
                    alt={sweet.name}
                    className="w-full h-full object-cover group-hover:scale-120 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Sparkle Animation */}
                  <div className="absolute top-4 right-4 text-2xl animate-spin" style={{ animationDuration: "3s" }}>
                    ✨
                  </div>

                  {/* Rating */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star size={14} className="text-yellow-500 fill-yellow-500" />
                    {sweet.rating}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-rose-600 transition-colors mb-2">
                    {sweet.name}
                  </h3>
                  <p className="text-sm text-rose-600 font-semibold mb-3">{sweet.category}</p>

                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    {sweet.description}
                  </p>

                  <div className="flex justify-between items-center pt-4 border-t border-border">
                    <span className="text-2xl font-bold text-rose-600">₹{sweet.price}</span>
                    <button
                      onClick={() =>
                        addToCart({
                          id: sweet.id,
                          name: sweet.name,
                          price: sweet.price,
                          category: sweet.category,
                          image: sweet.image,
                        })
                      }
                      className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-4 py-2 rounded-lg font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
                    >
                      <ShoppingCart size={16} />
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

      {/* Festival & Occasions */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-rose-50 border-t-4 border-rose-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Perfect for Festivals & Occasions</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { emoji: "🎉", title: "Celebrations", desc: "Weddings & Parties" },
              { emoji: "🪔", title: "Festivals", desc: "Diwali & Holi" },
              { emoji: "🎂", title: "Birthdays", desc: "Special Moments" },
              { emoji: "💝", title: "Gifts", desc: "Sweet Surprises" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center group hover:-translate-y-2">
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {item.emoji}
                </div>
                <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Orders CTA */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-rose-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Order in Bulk for Special Occasions?</h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Contact us for custom orders and special packages for weddings, parties, and festivals
        </p>
        <button className="bg-white text-rose-600 px-8 py-3 rounded-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300">
          Get in Touch
        </button>
      </section>
    </Layout>
  );
}
