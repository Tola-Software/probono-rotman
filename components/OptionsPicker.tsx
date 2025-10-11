"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Plus, Minus } from "lucide-react";
import { MenuItem } from "@/data/menu";

interface OptionsPickerProps {
  item: MenuItem;
  onClose: () => void;
  onAddToCart: (item: MenuItem, options?: any) => void;
}

export function OptionsPicker({ item, onClose, onAddToCart }: OptionsPickerProps) {
  const [selectedSize, setSelectedSize] = useState("Regular");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);

  const sizeOptions = [
    { name: "Regular", price: 0 },
    { name: "Jumbo", price: 8000 },
  ];

  const addOnOptions = [
    { name: "Extra Cheese", price: 4000 },
    { name: "Extra Chocolate", price: 4000 },
    { name: "Extra Topping", price: 5000 },
    ...(item.category === "Terang Bulan" ? [{ name: "Split Flavor", price: 3000 }] : []),
  ];

  const toppingOptions = ["Chocolate", "Cheese", "Peanut", "Sesame", "Condensed Milk", "Banana", "Milo", "Almond"];

  const calculatePrice = () => {
    let total = item.price;

    // Size adjustment
    if (selectedSize === "Jumbo") {
      total += 8000;
    }

    // Add-ons
    selectedAddOns.forEach((addOn) => {
      const option = addOnOptions.find((opt) => opt.name === addOn);
      if (option) total += option.price;
    });

    // Toppings (first 2 free, then 3K each)
    const extraToppings = Math.max(0, selectedToppings.length - 2);
    total += extraToppings * 3000;

    return total * quantity;
  };

  const handleAddOnToggle = (addOn: string) => {
    setSelectedAddOns((prev) => (prev.includes(addOn) ? prev.filter((item) => item !== addOn) : [...prev, addOn]));
  };

  const handleToppingToggle = (topping: string) => {
    setSelectedToppings((prev) =>
      prev.includes(topping) ? prev.filter((item) => item !== topping) : [...prev, topping]
    );
  };

  const handleAddToCart = () => {
    const options = {
      size: selectedSize,
      addOns: selectedAddOns,
      toppings: selectedToppings,
    };

    for (let i = 0; i < quantity; i++) {
      onAddToCart(item, options);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-surface rounded-2xl border border-surface-light max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-surface border-b border-surface-light p-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-text-primary">Customize Order</h2>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-background hover:bg-surface-light rounded-full flex items-center justify-center transition-colors"
            >
              <X size={20} className="text-text-primary" />
            </button>
          </div>

          <div className="p-6 space-y-6">
            {/* Item Info */}
            <div className="flex space-x-4">
              <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-text-primary">{item.name}</h3>
                <p className="text-text-muted mt-1">{item.desc}</p>
                <p className="text-accent font-bold mt-2">IDR {item.price.toLocaleString()}</p>
              </div>
            </div>

            {/* Size Selection */}
            {(item.category === "Roti Bakar" || item.category === "Terang Bulan") && (
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-3">Size</h4>
                <div className="grid grid-cols-2 gap-3">
                  {sizeOptions.map((size) => (
                    <button
                      key={size.name}
                      onClick={() => setSelectedSize(size.name)}
                      className={`p-3 rounded-lg border text-left transition-all ${
                        selectedSize === size.name
                          ? "border-accent bg-accent/10 text-accent"
                          : "border-surface-light hover:border-accent/50 text-text-primary"
                      }`}
                    >
                      <div className="font-medium">{size.name}</div>
                      {size.price > 0 && (
                        <div className="text-sm text-text-muted">+IDR {size.price.toLocaleString()}</div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add-ons */}
            <div>
              <h4 className="text-lg font-semibold text-text-primary mb-3">Add-ons</h4>
              <div className="space-y-2">
                {addOnOptions.map((addOn) => (
                  <button
                    key={addOn.name}
                    onClick={() => handleAddOnToggle(addOn.name)}
                    className={`w-full p-3 rounded-lg border text-left transition-all flex justify-between items-center ${
                      selectedAddOns.includes(addOn.name)
                        ? "border-accent bg-accent/10 text-accent"
                        : "border-surface-light hover:border-accent/50 text-text-primary"
                    }`}
                  >
                    <span className="font-medium">{addOn.name}</span>
                    <span className="text-sm">+IDR {addOn.price.toLocaleString()}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Toppings */}
            {(item.category === "Roti Bakar" || item.category === "Terang Bulan") && (
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-1">Toppings</h4>
                <p className="text-sm text-text-muted mb-3">Pick up to 2 for free, then IDR 3K each</p>
                <div className="grid grid-cols-2 gap-2">
                  {toppingOptions.map((topping) => (
                    <button
                      key={topping}
                      onClick={() => handleToppingToggle(topping)}
                      className={`p-3 rounded-lg border text-center transition-all ${
                        selectedToppings.includes(topping)
                          ? "border-accent bg-accent/10 text-accent"
                          : "border-surface-light hover:border-accent/50 text-text-primary"
                      }`}
                    >
                      {topping}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h4 className="text-lg font-semibold text-text-primary mb-3">Quantity</h4>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 bg-background hover:bg-surface-light rounded-full flex items-center justify-center transition-colors"
                >
                  <Minus size={16} className="text-text-primary" />
                </button>
                <span className="text-xl font-bold text-text-primary min-w-[3rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 bg-background hover:bg-surface-light rounded-full flex items-center justify-center transition-colors"
                >
                  <Plus size={16} className="text-text-primary" />
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 bg-surface border-t border-surface-light p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold text-text-primary">Total</span>
              <span className="text-2xl font-bold text-accent">IDR {calculatePrice().toLocaleString()}</span>
            </div>
            <button
              onClick={handleAddToCart}
              className="w-full bg-accent hover:bg-accent/90 text-white py-3 rounded-lg font-bold transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
