"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Navigation } from "lucide-react";

export function HoursLocation() {
  const hours = [{ day: "Monday - Sunday", time: "6:00 PM - 12:30 AM" }];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Find Us Here</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Visit our stall for the freshest street food experience in Kuta.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hours & Location Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Hours */}
            <div className="bg-surface rounded-2xl border border-surface-light p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Clock className="text-accent" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-text-primary">Opening Hours</h3>
              </div>

              <div className="space-y-4">
                {hours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-surface-light last:border-b-0"
                  >
                    <span className="text-text-primary font-medium">{schedule.day}</span>
                    <span className="text-accent font-bold">{schedule.time}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-accent font-medium text-center">🔥 Late night cravings? We got you covered!</p>
              </div>
            </div>

            {/* Location */}
            <div className="bg-surface rounded-2xl border border-surface-light p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <MapPin className="text-accent" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-text-primary">Location</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-lg font-semibold text-text-primary">Jl. Sunset Road 88</p>
                  <p className="text-text-muted">Kuta, Bali, Indonesia</p>
                </div>

                <div className="space-y-2 text-text-muted">
                  <p>📱 WhatsApp: +62 812-3456-7890</p>
                  <p>📧 Email: hello@rotman.id</p>
                </div>

                <a
                  href="https://maps.google.com/?q=Jl.+Sunset+Road+88,+Kuta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg transition-colors font-medium mt-4"
                >
                  <Navigation size={20} />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full h-96 lg:h-[500px] bg-surface rounded-2xl border border-surface-light flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto">
                  <MapPin className="text-accent" size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-text-primary mb-2">Interactive Map</h4>
                  <p className="text-text-muted mb-4">Coming soon! For now, use the directions link.</p>
                  <a
                    href="https://maps.google.com/?q=Jl.+Sunset+Road+88,+Kuta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline font-medium"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
