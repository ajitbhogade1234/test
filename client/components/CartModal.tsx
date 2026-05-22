import { useState } from "react";
import { X, Minus, Plus, ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";
import CheckoutModal from "./CheckoutModal";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const { items, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleClose = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      onClose();
      setIsAnimatingOut(false);
    }, 300);
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
            isAnimatingOut ? "opacity-0" : "opacity-100"
          }`}
          onClick={handleClose}
        />
      )}

      {/* Modal */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-gradient-to-b from-white to-orange-50 shadow-2xl z-50 flex flex-col transition-all duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ${isAnimatingOut ? "translate-x-full" : ""}`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 flex items-center justify-between rounded-b-3xl">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
              <ShoppingBag size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold">Your Order</h2>
              <p className="text-sm text-white/80">
                {items.length} {items.length === 1 ? "item" : "items"}
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Your cart is empty
              </h3>
              <p className="text-muted-foreground">
                Add items from the menu to get started
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 animate-slide-up"
              >
                {/* Item Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.category}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 hover:bg-red-100 rounded-lg transition-colors text-red-600"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                {/* Price and Quantity Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      className="p-2 hover:bg-gray-200 rounded transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="font-semibold w-8 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      className="p-2 hover:bg-gray-200 rounded transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">
                      ₹{item.price}
                    </p>
                    <p className="font-bold text-orange-600">
                      ₹{(item.price * item.quantity).toFixed(0)}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t-2 border-gray-200 bg-white p-6 rounded-t-3xl shadow-lg">
            {/* Total */}
            <div className="mb-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted-foreground">Subtotal:</span>
                <span className="font-semibold">₹{getTotalPrice().toFixed(0)}</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted-foreground">Delivery:</span>
                <span className="font-semibold text-green-600">Free</span>
              </div>
              <div className="border-t-2 border-orange-200 pt-2 flex items-center justify-between">
                <span className="font-bold text-lg">Total:</span>
                <span className="text-2xl font-black text-orange-600">
                  ₹{getTotalPrice().toFixed(0)}
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setIsCheckoutOpen(true)}
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold py-4 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Proceed to Checkout
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>

            <button
              onClick={handleClose}
              className="w-full mt-3 border-2 border-gray-300 text-foreground font-bold py-3 rounded-2xl hover:bg-gray-100 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        totalAmount={getTotalPrice()}
      />
    </>
  );
}
