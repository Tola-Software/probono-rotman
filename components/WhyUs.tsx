"use client";

import { motion } from "framer-motion";
import { Clock, Utensils, Shield, Zap } from "lucide-react";

export function WhyUs() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Ready in under 5 minutes. Perfect for your busy lifestyle.",
      color: "text-yellow-400",
    },
    {
      icon: Utensils,
      title: "Made Fresh",
      description: "Every order prepared fresh with premium ingredients.",
      color: "text-green-400",
    },
    {
      icon: Shield,
      title: "100% Halal",
      description: "Certified halal ingredients and cooking processes.",
      color: "text-blue-400",
    },
  ];

  return (
    <section className="py-20 bg-surface/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Why Choose ROTMAN?</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            We're not just another street food vendor. We're passionate about delivering authentic flavors with modern
            standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="text-center p-8 bg-background rounded-2xl border border-surface-light group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-2xl flex items-center justify-center"
                >
                  <Icon className={`${feature.color} group-hover:text-accent transition-colors`} size={32} />
                </motion.div>

                <h3 className="text-xl font-bold text-text-primary mb-3">{feature.title}</h3>

                <p className="text-text-muted leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
