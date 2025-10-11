"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const whatsappUrl =
    "https://wa.me/6281234567890?text=Hi%20ROTMAN!%20I%20want%20to%20order%3A%20%5Bitem%20names%5D%20%2D%20pickup%2Fdelivery%3F";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background to-background/80">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/grain.png')] opacity-20 mix-blend-overlay" />

      {/* Parallax Background Elements */}
      <motion.div style={{ y }} className="absolute top-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
      <motion.div
        style={{ y: useTransform(scrollY, [0, 500], [0, -100]) }}
        className="absolute bottom-20 left-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium"
              >
                🔥 Now Open in Kuta
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight"
              >
                <span className="block">ROTMAN</span>
                <span className="block text-accent">Street Food</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-text-muted leading-relaxed"
              >
                Roti Bakar & Terang Bulan — Bold flavors, late nights.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-3 text-text-muted"
              >
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>Made-to-order, smoky & fresh</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>Halal ingredients</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>Ready in under 5 minutes</span>
                </div>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105"
              >
                <MessageCircle size={24} />
                <span>Order Now</span>
              </a>

              <Link
                href="/menu"
                className="inline-flex items-center justify-center space-x-3 bg-surface hover:bg-surface-light border border-surface-light text-text-primary px-8 py-4 rounded-xl transition-all duration-300 font-bold text-lg hover:scale-105"
              >
                <span>View Menu</span>
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-6 text-sm text-text-muted"
            >
              <div className="flex items-center space-x-2">
                <span className="w-1 h-1 bg-accent rounded-full"></span>
                <span>Mon-Sun 6PM-12:30AM</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1 h-1 bg-accent rounded-full"></span>
                <span>Jl. Sunset Road 88, Kuta</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Main food image */}
              <motion.div style={{ y: useTransform(scrollY, [0, 300], [0, -50]) }} className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-secondary/20 rounded-3xl" />
                <Image
                  src="/images/choco-cheese.png"
                  alt="ROTMAN delicious street food"
                  fill
                  priority
                  className="object-cover rounded-3xl"
                />
              </motion.div>

              {/* Floating steam animation */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-10 left-10 w-8 h-8 bg-accent/20 rounded-full blur-sm"
              />
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute top-16 left-16 w-6 h-6 bg-secondary/20 rounded-full blur-sm"
              />

              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-12 h-12 border-2 border-accent/30 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-secondary/40 rounded-full blur-sm"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-accent rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
