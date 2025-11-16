"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { UtensilsCrossed, X } from "lucide-react";
import { useState } from "react";

export function MenuSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const deliveryLinks = [
    {
      name: "GoFood",
      url: "https://gofood.co.id/bali/restaurant/roti-bakar-terang-bulan-rotman-padang-sambian-2f3ad5d1-01ba-4e91-9ad1-2daf5849ff0d",
      color: "hover:bg-background bg-green-800 hover:shadow-slate-600",
      imageSrc: "/images/gojek.png",
    },
    {
      name: "ShopeeFood",
      url: "https://shopee.co.id/universal-link/now-food/shop/21446797?deep_and_deferred=1&shareChannel=whatsapp",
      color: "hover:hover:bg-background bg-orange-500  hover:shadow-slate-600",
      imageSrc: "/images/shopee.png",
    },
    {
      name: "GrabFood",
      url: "https://food.grab.com/id/en/restaurant/roti-bakar-rotman-padangsambian-kaja-delivery/6-C6ACEP5JLFN1CA?sourceID=20251116_125222_93fee4ba9e4c4bd0b6c11f52286d0e28_MEXMPS&nameSlug=online-delivery&id=6-C6ACEP5JLFN1CA",
      color: "bg-green-500 hover:bg-background  hover:shadow-slate-600",
      imageSrc: "/images/grab.png",
    },
  ];

  const menuImages = [
    {
      src: "/images/roti-bakar-menu.jpeg",
      alt: "Menu ROTMAN Part 1",
    },
    {
      src: "/images/menu-terang-bulan.jpeg",
      alt: "Menu ROTMAN Part 2",
    },
  ];

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <UtensilsCrossed className="text-accent" size={32} />
            <h2 className="text-4xl font-bold md:text-5xl text-text-primary">Menu ROTMAN</h2>
            <UtensilsCrossed className="text-accent" size={32} />
          </div>
          <p className="text-lg text-text-muted">Pilih menu favorit kamu dan pesan sekarang!</p>
        </motion.div>

        {/* Menu Images */}
        <div className="grid grid-cols-1 gap-4 mb-12">
          {/* Menu Image 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative h-96 lg:h-[600px] rounded-2xl overflow-hidden group cursor-pointer"
            onClick={() => setSelectedImage(menuImages[0].src)}
          >
            <Image
              src="/images/roti-bakar-menu.jpeg"
              alt="Menu ROTMAN Part 1"
              fill
              className="transition-transform duration-300 object-fit group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center transition-colors duration-300 bg-black/0 group-hover:bg-black/30">
              <p className="text-lg font-bold text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                Click untuk lihat lebih besar
              </p>
            </div>
          </motion.div>

          {/* Menu Image 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative h-96 lg:h-[600px] rounded-2xl overflow-hidden group cursor-pointer"
            onClick={() => setSelectedImage(menuImages[1].src)}
          >
            <Image
              src="/images/menu-terang-bulan.jpeg"
              alt="Menu ROTMAN Part 2"
              fill
              className="transition-transform duration-300 object-fit group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center transition-colors duration-300 bg-black/0 group-hover:bg-black/30">
              <p className="text-lg font-bold text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                Click untuk lihat lebih besar
              </p>
            </div>
          </motion.div>
        </div>

        {/* Delivery Platform Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="mb-8 text-2xl font-bold text-text-primary">Pesan Melalui Platform Online</h3>
          <div className="grid max-w-2xl grid-cols-1 gap-6 mx-auto sm:grid-cols-3">
            {deliveryLinks.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`${platform.color} text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 shadow-zinc-600`}
              >
                <Image src={platform.imageSrc} alt={platform.name} width={60} height={60} className="object-contain" />

                <span>{platform.name}</span>
              </motion.a>
            ))}
          </div>
          <p className="mt-8 text-text-muted">
            Klik salah satu platform di atas untuk memesan langsung makanan lezat ROTMAN!
          </p>
        </motion.div>
      </div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 cursor-pointer bg-black/90"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full h-full max-w-4xl max-h-[90vh] cursor-default"
            >
              <Image src={selectedImage} alt="Menu fullscreen" fill className="object-contain" />

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImage(null)}
                className="absolute p-3 text-white transition-all duration-300 rounded-full shadow-lg top-4 right-4 bg-accent hover:bg-accent/90 z-60"
              >
                <X size={28} />
              </motion.button>

              {/* Close Hint */}
              <p className="absolute text-sm text-white transform -translate-x-1/2 bottom-4 left-1/2">
                Klik atau tekan ESC untuk menutup
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
