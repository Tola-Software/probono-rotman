"use client";

import { motion } from "framer-motion";
import { Clock, Utensils, Star, Flame } from "lucide-react";

export function WhyUs() {
  const features = [
    {
      icon: Flame,
      title: "Panggang Sempurna",
      description: "Roti bakar dengan tekstur renyah luar dan lembut dalam, panggang tepat di depan mata!",
      color: "text-yellow-400",
    },
    {
      icon: Utensils,
      title: "Harga Terbaik",
      description: "Nikmati kualitas premium dengan harga yang super terjangkau dan worth it banget!",
      color: "text-green-400",
    },
    {
      icon: Star,
      title: "Rasa Luarbiasa",
      description: "Cita rasa autentik yang bikin ketagihan dan nagih terus!",
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
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Kenapa ROTMAN?</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Kami Roti Bakar Spesial! Kami berkomitmen menghadirkan cita rasa autentik dengan standar modern yang keren
            banget!
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
