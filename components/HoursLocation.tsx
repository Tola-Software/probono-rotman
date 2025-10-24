"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Navigation, Phone, Mail } from "lucide-react";

export function HoursLocation() {
  const hours = [{ day: "Monday - Sunday", time: "16:00 - 23:30" }];

  // Location coordinates from Google Maps link
  const latitude = -8.6306967;
  const longitude = 115.1881169;
  const locationName = "Roti Bakar & Terang Bulan ROTMAN";
  const address = "Jl. Karang Sari No.4 Padangsambian kaja, Denpasar, Bali";
  const phone = "+62 813-3703-7980";
  const email = "hello@rotman.id";

  // Google Maps embed URL
  const mapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.2289!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2390018ca6743%3A0x8e7b07a74afbafd2!2sRoti%20bakar%20%26%20terang%20bulan%20rotman!5e0!3m2!1sid!2sid!4v1634650000000`;

  // Google Maps direction URL
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

  // WhatsApp direction link
  const whatsappUrl = `https://wa.me/6281337037980?text=Halo%20ROTMAN!%20Saya%20ingin%20tahu%20lokasi%20toko%20kalian%20di%20${encodeURIComponent(
    address
  )}`;

  return (
    <section className="py-20 bg-surface/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Kunjungi Kami di Sini</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Datang ke lokasi kami untuk menikmati pengalaman street food terbaik di Bali.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Hours & Location Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Hours */}
            <div className="bg-background rounded-2xl border border-surface-light p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Clock className="text-accent" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-text-primary">Jam Operasional</h3>
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
            <div className="bg-background rounded-2xl border border-surface-light p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <MapPin className="text-accent" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-text-primary">Lokasi</h3>
              </div>

              <div className="space-y-5">
                <div>
                  <p className="text-lg font-semibold text-text-primary">{locationName}</p>
                  <p className="text-text-muted text-sm mt-1">{address}</p>
                </div>

                <div className="space-y-2 pt-2">
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full space-x-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium"
                  >
                    <Navigation size={20} />
                    <span>Locations</span>
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium"
                  >
                    <span>💬</span>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-96 lg:h-[600px] rounded-2xl overflow-hidden border border-surface-light shadow-lg"
          >
            <iframe
              src={mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
