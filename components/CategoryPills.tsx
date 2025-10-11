"use client";

import { motion } from "framer-motion";

interface Category {
  name: string;
  value: string;
}

interface CategoryPillsProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: any) => void;
}

export function CategoryPills({ categories, selectedCategory, onCategoryChange }: CategoryPillsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap gap-3 justify-center mb-12"
    >
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            selectedCategory === category
              ? "bg-accent text-white shadow-lg"
              : "bg-surface hover:bg-surface-light text-text-primary border border-surface-light"
          }`}
        >
          {category}
        </button>
      ))}
    </motion.div>
  );
}
