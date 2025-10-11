import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 pb-20 md:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">About ROTMAN</h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Born from passion for authentic Indonesian street food and late-night cravings.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-text-primary">Our Story</h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                ROTMAN started as a dream to bring authentic Indonesian street food to the heart of Kuta. Our founder,
                passionate about traditional recipes and bold flavors, wanted to create a place where locals and
                travelers could experience the true taste of Indonesia.
              </p>
              <p>
                Every recipe has been perfected through years of experimentation, combining traditional techniques with
                modern quality standards. We use only the freshest ingredients and maintain the highest hygiene
                standards while preserving the authentic street food experience.
              </p>
              <p>
                From our signature Roti Bakar with its perfectly toasted crust to our fluffy Terang Bulan that melts in
                your mouth, every item tells a story of Indonesian culinary heritage.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-96 rounded-2xl overflow-hidden">
              <Image src="/images/stall-hero.webp" alt="ROTMAN food stall" fill className="object-cover" />
            </div>
          </motion.div>
        </div>

        {/* Quality Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-text-primary text-center mb-8">Our Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-surface rounded-2xl border border-surface-light">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥘</span>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">100% Halal</h3>
              <p className="text-text-muted">All ingredients and cooking processes follow strict halal standards.</p>
            </div>

            <div className="text-center p-6 bg-surface rounded-2xl border border-surface-light">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">Fresh & Fast</h3>
              <p className="text-text-muted">Made-to-order in under 5 minutes using the freshest ingredients.</p>
            </div>

            <div className="text-center p-6 bg-surface rounded-2xl border border-surface-light">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧼</span>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">Clean & Safe</h3>
              <p className="text-text-muted">Highest hygiene standards with regular health inspections.</p>
            </div>
          </div>
        </motion.div>

        {/* Small Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-text-primary text-center mb-8">Behind the Scenes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/images/roti-bakar-classic.webp", alt: "Fresh Roti Bakar" },
              { src: "/images/terang-bulan-classic.webp", alt: "Terang Bulan preparation" },
              { src: "/images/combos.webp", alt: "Kitchen in action" },
              { src: "/images/kopi-susu.webp", alt: "Fresh drinks" },
            ].map((image, index) => (
              <div key={index} className="relative w-full h-32 md:h-40 rounded-xl overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
