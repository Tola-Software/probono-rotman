"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { MessageCircle, ArrowRight } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const whatsappUrl =
    "https://wa.me/6281234567890?text=Hi%20ROTMAN!%20I%20want%20to%20order%3A%20%5Bitem%20names%5D%20%2D%20pickup%2Fdelivery%3F";

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
                {/* 🔥 Now Open in Kuta */}
                <Image
                  src="/images/rotman-logo.png"
                  alt="rotman-logo"
                  width={200}
                  height={80}
                  className="h-60 w-auto"
                />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight"
              >
                <span className="block text-accent">ROTI BAKAR & TERANG BULAN</span>
                <span className="block">PALING NAGIH DI BALI!</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl leading-relaxed text-accent"
              ></motion.p>
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

              <a
                href="#menu"
                onClick={(e) => handleSmoothScroll(e, "#menu")}
                className="inline-flex items-center justify-center space-x-3 bg-surface hover:bg-surface-light border border-surface-light text-text-primary px-8 py-4 rounded-xl transition-all duration-300 font-bold text-lg hover:scale-105 cursor-pointer"
              >
                <span>View Menu</span>
                <ArrowRight size={20} />
              </a>
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
                <span>Mon-Sun 16:00-23:30</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1 h-1 bg-accent rounded-full"></span>
                <span>Jl. Karang Sari No.4 Padangsambian kaja, Bali</span>
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
            <div className="relative w-full h-96 lg:h-[800px]">
              {/* Main food image */}
              <motion.div style={{ y: useTransform(scrollY, [0, 300], [0, -50]) }} className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-secondary/20 rounded-3xl" />
                <Image
                  src="/images/banner-rotman.jpeg"
                  alt="ROTMAN delicious street food"
                  fill
                  priority
                  className="lg:object-fit object-cover rounded-3xl"
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

              {/* Rotating dashed ring (top-right) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute -top-6 -right-6 w-12 h-12"
                aria-hidden="true"
              >
                <svg viewBox="0 0 120 120" className="w-full h-full">
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="var(--secondary,#c38f5f)"
                    strokeWidth="10"
                    strokeDasharray="12 14"
                    strokeLinecap="round"
                  />
                  <circle cx="60" cy="60" r="30" fill="var(--accent,#d46c31)" fillOpacity=".2" />
                </svg>
              </motion.div>

              {/* Pulsing corner splash (bottom-left) */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -bottom-4 -left-4 w-16 h-16 blur-[2px]"
                aria-hidden="true"
              >
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <path
                    d="M0,0 C60,0 120,30 160,80 C190,120 200,160 200,200 L0,200 Z"
                    fill="var(--secondary,#c38f5f)"
                    fillOpacity=".4"
                  />
                  <circle cx="160" cy="80" r="28" fill="var(--accent,#d46c31)" fillOpacity=".6" />
                </svg>
              </motion.div>

              {/* Optional: subtle dotted overlay (covers container). 
    If you reuse this component many times on a page, make the pattern id unique. */}
              <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-10" aria-hidden="true">
                <defs>
                  <pattern id="dotsAccentPattern" width="8" height="8" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.5" fill="var(--accent,#d46c31)" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dotsAccentPattern)" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
