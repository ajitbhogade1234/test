import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import CartModal from "./CartModal";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getTotalItems } = useCart();
  const cartItemCount = getTotalItems();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Food", href: "/menu" },
    { label: "Hot Drinks", href: "/hot-drinks" },
    { label: "Cold Drinks", href: "/cold-drinks" },
    { label: "Sweets", href: "/sweets" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="bg-gradient-to-r from-primary via-primary to-orange-700 text-primary-foreground sticky top-0 z-30 shadow-lg border-b-4 border-accent">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-3xl animate-float">🍲</div>
              {/* <span className="font-black text-2xl hidden sm:inline bg-clip-text text-transparent bg-gradient-to-r from-accent via-yellow-300 to-orange-300 drop-shadow-lg">
                Om Gurudev
              </span> */}
              <span className="font-black text-lg sm:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-accent via-yellow-300 to-orange-300 drop-shadow-lg">
                Om Gurudev
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="relative px-4 py-2 font-semibold text-primary-foreground group transition-all duration-300 hover:text-accent"
                  style={{
                    animation: `slideInDown 0.5s ease-out ${index * 0.05}s both`,
                  }}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-accent to-yellow-300 group-hover:w-full transition-all duration-300 rounded-full" />
                </Link>
              ))}
            </nav>

            {/* Right Section - Cart & Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* Cart Button */}
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="relative p-3 hover:bg-white/20 rounded-2xl transition-all duration-300 group backdrop-blur-sm"
              >
                <ShoppingCart
                  size={24}
                  className="group-hover:scale-110 transition-transform"
                />
                {cartItemCount > 0 && (
                  <span className="absolute top-1 right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center animate-glow-pulse shadow-lg">
                    {cartItemCount > 99 ? "99+" : cartItemCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-3 hover:bg-white/20 rounded-xl transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <nav className="lg:hidden pb-4 space-y-2 border-t-2 border-primary-foreground/30 pt-4 animate-slide-up">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block px-4 py-3 text-primary-foreground hover:bg-white/10 rounded-xl transition-all duration-300 font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
