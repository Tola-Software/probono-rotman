"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Trash2, Plus, Minus, MessageCircle } from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  options?: {
    size?: string;
    addOns?: string[];
    toppings?: string[];
  };
}

export default function OrderPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem("rotman-cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }

    const updatedCart = cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item));
    setCartItems(updatedCart);
    localStorage.setItem("rotman-cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("rotman-cart", JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("rotman-cart");
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const generateWhatsAppMessage = () => {
    const itemsText = cartItems
      .map((item) => {
        let itemText = `${item.quantity}x ${item.name}`;
        if (item.options?.size && item.options.size !== "Regular") {
          itemText += ` (${item.options.size})`;
        }
        if (item.options?.addOns && item.options.addOns.length > 0) {
          itemText += ` + ${item.options.addOns.join(", ")}`;
        }
        if (item.options?.toppings && item.options.toppings.length > 0) {
          itemText += ` with ${item.options.toppings.join(", ")}`;
        }
        return itemText;
      })
      .join("\n");

    const total = getTotalPrice();
    const message = `Hi ROTMAN! I want to order:

${itemsText}

Total: IDR ${total.toLocaleString()}

Please confirm availability and pickup time.
Name: [Your Name]
Phone: [Your Phone]`;

    return encodeURIComponent(message);
  };

  const handleWhatsAppOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/6281234567890?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen pt-20 pb-20 md:pb-8 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-surface rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingCart className="text-accent" size={48} />
          </div>
          <h1 className="text-3xl font-bold text-text-primary mb-4">Your cart is empty</h1>
          <p className="text-text-muted mb-8">Add some delicious items from our menu!</p>
          <a
            href="/menu"
            className="inline-flex items-center space-x-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg transition-colors font-medium"
          >
            <span>Browse Menu</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-20 md:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Your Order</h1>
          <p className="text-lg text-text-muted">Review your items and complete your order via WhatsApp</p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Cart Items */}
          <div className="bg-surface rounded-2xl border border-surface-light p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-text-primary">Cart Items</h2>
              <button onClick={clearCart} className="text-red-400 hover:text-red-300 transition-colors text-sm">
                Clear all
              </button>
            </div>

            <div className="space-y-4">
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-between p-4 bg-background rounded-lg border border-surface-light"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-text-primary">{item.name}</h3>
                    {item.options && (
                      <div className="text-sm text-text-muted mt-1">
                        {item.options.size && item.options.size !== "Regular" && (
                          <span className="mr-2">Size: {item.options.size}</span>
                        )}
                        {item.options.addOns && item.options.addOns.length > 0 && (
                          <span className="mr-2">+ {item.options.addOns.join(", ")}</span>
                        )}
                        {item.options.toppings && item.options.toppings.length > 0 && (
                          <span>Toppings: {item.options.toppings.join(", ")}</span>
                        )}
                      </div>
                    )}
                    <p className="text-accent font-medium mt-1">IDR {item.price.toLocaleString()} each</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 bg-surface hover:bg-surface-light rounded-full flex items-center justify-center transition-colors"
                    >
                      <Minus size={16} className="text-text-primary" />
                    </button>

                    <span className="text-text-primary font-medium w-8 text-center">{item.quantity}</span>

                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 bg-surface hover:bg-surface-light rounded-full flex items-center justify-center transition-colors"
                    >
                      <Plus size={16} className="text-text-primary" />
                    </button>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="w-8 h-8 bg-red-500/10 hover:bg-red-500/20 rounded-full flex items-center justify-center transition-colors ml-4"
                    >
                      <Trash2 size={16} className="text-red-400" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-surface rounded-2xl border border-surface-light p-6 mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Order Summary</h2>

            <div className="space-y-2 mb-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-text-muted">
                  <span>
                    {item.quantity}x {item.name}
                  </span>
                  <span>IDR {(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-surface-light pt-4">
              <div className="flex justify-between text-xl font-bold text-text-primary">
                <span>Total</span>
                <span className="text-accent">IDR {getTotalPrice().toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Order Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={handleWhatsAppOrder}
            className="w-full bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl transition-colors font-bold text-lg flex items-center justify-center space-x-3"
          >
            <MessageCircle size={24} />
            <span>Order via WhatsApp</span>
          </motion.button>

          <p className="text-center text-text-muted text-sm mt-4">
            You'll be redirected to WhatsApp to confirm your order
          </p>
        </div>
      </div>
    </div>
  );
}
