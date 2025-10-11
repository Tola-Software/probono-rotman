"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Plus, Star } from "lucide-react";
import { MenuItem } from "@/data/menu";
import { OptionsPicker } from "./OptionsPicker";

interface MenuGridProps {
  items: MenuItem[];
}

export function MenuGrid({ items }: MenuGridProps) {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const addToCart = (item: MenuItem, options?: any) => {
    const cartItem = {
      id: `${item.id}-${Date.now()}`,
      name: item.name,
      price: item.price,
      quantity: 1,
      options,
    };

    // Get existing cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem("rotman-cart") || "[]");
    const updatedCart = [...existingCart, cartItem];

    localStorage.setItem("rotman-cart", JSON.stringify(updatedCart));
    setSelectedItem(null);

    // Show success message
    alert(`${item.name} added to cart!`);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items && items.length > 0 ? (
          items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-surface rounded-2xl border border-surface-light overflow-hidden group cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {item.badges && item.badges.length > 0 && (
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    {item.badges.map((badge, badgeIndex) => (
                      <span
                        key={badgeIndex}
                        className="px-2 py-1 bg-accent text-white text-xs font-medium rounded-full"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="text-sm text-text-muted">4.8</span>
                  </div>
                </div>

                <p className="text-text-muted mb-4 leading-relaxed">{item.desc}</p>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-accent">IDR {item.price.toLocaleString()}</div>
                  <button className="flex items-center justify-center w-10 h-10 bg-accent hover:bg-accent/90 text-white rounded-full transition-colors group-hover:scale-110">
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <div className="text-text-muted text-lg">No menu items available</div>
          </div>
        )}
      </div>

      {/* Options Picker Modal */}
      {selectedItem && (
        <OptionsPicker item={selectedItem} onClose={() => setSelectedItem(null)} onAddToCart={addToCart} />
      )}
    </>
  );
}
