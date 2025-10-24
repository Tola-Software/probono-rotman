"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  location: string;
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Chen",
      rating: 5,
      comment:
        "Best roti bakar in Kuta! The chocolate cheese combo is absolutely divine. Always fresh and perfectly toasted.",
      location: "Singapore",
    },
    {
      id: 2,
      name: "Made Wisnu",
      rating: 5,
      comment: "Terang bulan keju coklat-nya juara! Rasanya authentic banget dan harganya terjangkau. Recommended!",
      location: "Denpasar",
    },
    {
      id: 3,
      name: "James Miller",
      rating: 5,
      comment:
        "Found this gem while exploring Kuta. The midnight duo combo is perfect for late night cravings. Will definitely come back!",
      location: "Australia",
    },
    {
      id: 4,
      name: "Putri Sari",
      rating: 5,
      comment: "Paling suka sama roti bakar ovomaltine-nya! Crunchy dan manisnya pas. Pelayanannya juga cepet banget.",
      location: "Jakarta",
    },
    {
      id: 5,
      name: "David Kim",
      rating: 5,
      comment:
        "Amazing street food experience! The flavors are incredible and the staff is super friendly. A must-try in Bali!",
      location: "South Korea",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-surface/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">What Our Customers Say</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Real reviews from real food lovers who&apos;ve experienced our street food magic.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Display */}
          <div className="relative h-80 md:h-64 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-surface rounded-2xl border border-surface-light p-8 md:p-12 text-center relative max-w-3xl">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <Quote size={16} className="text-white" />
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center justify-center space-x-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>

                  {/* Comment */}
                  <blockquote className="text-lg md:text-xl text-text-primary leading-relaxed mb-6 italic">
                    &quot;{testimonials[currentIndex].comment}&quot;
                  </blockquote>

                  {/* Author */}
                  <div className="space-y-1">
                    <div className="font-bold text-accent text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-text-muted">{testimonials[currentIndex].location}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-surface hover:bg-surface-light border border-surface-light rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronLeft size={20} className="text-text-primary" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-surface hover:bg-surface-light border border-surface-light rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronRight size={20} className="text-text-primary" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-accent" : "bg-secondary"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
