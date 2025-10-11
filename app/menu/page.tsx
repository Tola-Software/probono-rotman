"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CategoryPills } from "@/components/CategoryPills";
import { MenuGrid } from "@/components/MenuGrid";
import { menuItems, type MenuItem, type Category } from "@/data/menu";

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>(menuItems);

  const categories: (Category | "All")[] = ["All", "Roti Bakar", "Terang Bulan", "Combos", "Drinks"];

  const handleCategoryChange = (category: Category | "All") => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(menuItems.filter((item) => item.category === category));
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-20 md:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Our Menu</h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Made-to-order street food with bold flavors. Every item is prepared fresh just for you.
          </p>
        </motion.div>

        {/* Category Filter */}
        <CategoryPills
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* Menu Grid */}
        <MenuGrid items={filteredItems} />
      </div>
    </div>
  );
}
