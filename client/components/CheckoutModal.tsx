import { useState } from "react";
import { X, Send, AlertCircle } from "lucide-react";
import { useCart } from "../context/CartContext";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalAmount: number;
}

export default function CheckoutModal({
  isOpen,
  onClose,
  totalAmount,
}: CheckoutModalProps) {
  const { items } = useCart();
  const [name, setName] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    address?: string;
  }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const handleClose = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      onClose();
      setIsAnimatingOut(false);
      setName("");
      setWhatsappNumber("");
      setDeliveryAddress("");
      setErrors({});
    }, 300);
  };

  const validateForm = () => {
    const newErrors: {
      name?: string;
      phone?: string;
      address?: string;
    } = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!whatsappNumber.trim()) {
      newErrors.phone = "WhatsApp number is required";
    } else if (!/^[0-9]{10}$/.test(whatsappNumber.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit number";
    }

    if (!deliveryAddress.trim()) {
      newErrors.address = "Delivery address is required";
    } else if (deliveryAddress.trim().length < 5) {
      newErrors.address = "Please enter a complete address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatOrderMessage = (): string => {
    let message = `*Om Gurudev Order*\n\n`;
    message += `*Customer Name:* ${name}\n`;
    message += `*Phone:* ${whatsappNumber}\n`;
    message += `*Delivery Address:* ${deliveryAddress}\n\n`;
    message += `*Order Items:*\n`;

    items.forEach((item) => {
      message += `• ${item.name} x${item.quantity} = ₹${(
        item.price * item.quantity
      ).toFixed(0)}\n`;
    });

    message += `\n*Subtotal:* ₹${totalAmount.toFixed(0)}\n`;
    message += `*Delivery:* Free\n`;
    message += `*Total Amount:* ₹${totalAmount.toFixed(0)}\n\n`;
    message += `Please confirm this order and let me know the delivery time.`;

    return message;
  };

  const handleSendOrder = async () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const message = formatOrderMessage();
      const encodedMessage = encodeURIComponent(message);
      const bussinessWhatsappNumber = "9146961881";
      const whatsappUrl = `https://wa.me/91${bussinessWhatsappNumber}?text=${encodedMessage}`;

      window.open(whatsappUrl, "_blank");

      setTimeout(() => {
        handleClose();
      }, 500);
    } catch (error) {
      console.error("Error sending order:", error);
    } finally {
      setIsLoading(false);
    }
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

      {/* Modal - Fixed positioning with proper scrolling */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
          <div
            className={`bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] flex flex-col pointer-events-auto transition-all duration-300 ${
              isAnimatingOut ? "scale-95 opacity-0" : "scale-100 opacity-100"
            }`}
          >
            {/* Header - Fixed */}
            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 rounded-t-3xl flex items-center justify-between flex-shrink-0">
              <h2 className="text-2xl font-bold">Checkout</h2>
              <button
                onClick={handleClose}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors flex-shrink-0"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content - Scrollable */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {/* Order Summary */}
              <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl">
                <h3 className="font-bold text-foreground mb-3">Order Summary</h3>
                <div className="space-y-2">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between text-sm text-muted-foreground"
                    >
                      <span>
                        {item.name} x{item.quantity}
                      </span>
                      <span className="font-semibold text-foreground">
                        ₹{(item.price * item.quantity).toFixed(0)}
                      </span>
                    </div>
                  ))}
                  <div className="border-t-2 border-orange-200 pt-2 mt-2 flex justify-between">
                    <span className="font-bold text-foreground">Total:</span>
                    <span className="text-lg font-black text-orange-600">
                      ₹{totalAmount.toFixed(0)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all ${
                      errors.name
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300 focus:border-orange-500 bg-white"
                    }`}
                  />
                  {errors.name && (
                    <div className="flex items-center gap-2 mt-1 text-red-600 text-sm">
                      <AlertCircle size={16} />
                      {errors.name}
                    </div>
                  )}
                </div>

                {/* WhatsApp Number Input */}
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    WhatsApp Number
                  </label>
                  <div className="flex gap-2">
                    <div className="flex items-center px-3 py-3 bg-gray-100 rounded-lg border-2 border-gray-300 font-semibold text-foreground">
                      +91
                    </div>
                    <input
                      type="tel"
                      value={whatsappNumber}
                      onChange={(e) => {
                        const numOnly = e.target.value.replace(/\D/g, "");
                        if (numOnly.length <= 10) {
                          setWhatsappNumber(numOnly);
                        }
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      placeholder="10-digit number"
                      maxLength="10"
                      className={`flex-1 px-4 py-3 rounded-lg border-2 focus:outline-none transition-all ${
                        errors.phone
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 focus:border-orange-500 bg-white"
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <div className="flex items-center gap-2 mt-1 text-red-600 text-sm">
                      <AlertCircle size={16} />
                      {errors.phone}
                    </div>
                  )}
                </div>

                {/* Delivery Address Input */}
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    Delivery Address
                  </label>
                  <textarea
                    value={deliveryAddress}
                    onChange={(e) => {
                      setDeliveryAddress(e.target.value);
                      if (errors.address)
                        setErrors({ ...errors, address: undefined });
                    }}
                    placeholder="Enter your complete delivery address"
                    rows={3}
                    className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all resize-none ${
                      errors.address
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300 focus:border-orange-500 bg-white"
                    }`}
                  />
                  {errors.address && (
                    <div className="flex items-center gap-2 mt-1 text-red-600 text-sm">
                      <AlertCircle size={16} />
                      {errors.address}
                    </div>
                  )}
                </div>
              </div>

              {/* Info Box */}
              <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200 text-sm text-blue-800">
                <p>
                  ✓ You'll be redirected to WhatsApp to confirm and send your order
                </p>
              </div>
            </div>

            {/* Buttons - Fixed */}
            <div className="border-t-2 border-gray-200 p-6 space-y-3 flex-shrink-0 bg-white rounded-b-3xl">
              <button
                onClick={handleSendOrder}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold py-4 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Send size={20} />
                {isLoading ? "Processing..." : "Send Order on WhatsApp"}
              </button>

              <button
                onClick={handleClose}
                className="w-full border-2 border-gray-300 text-foreground font-bold py-3 rounded-2xl hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
