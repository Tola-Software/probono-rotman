"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Client-side only - show success message
    alert("Message sent! We'll get back to you soon. (This is a demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const whatsappUrl =
    "https://wa.me/6281337037980?text=Hi%20ROTMAN!%20I%20want%20to%20order%3A%20%5Bitem%20names%5D%20%2D%20pickup%2Fdelivery%3F";

  return (
    <div className="min-h-screen pt-20 pb-20 md:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Get in Touch</h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Have questions? Want to place an order? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-6">Contact Information</h2>

              <div className="space-y-6">
                {/* WhatsApp CTA */}
                <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                        <MessageCircle className="text-white" size={24} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-text-primary mb-2">Order via WhatsApp</h3>
                      <p className="text-text-muted mb-4">Fastest way to place your order. Get instant confirmation!</p>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                      >
                        <MessageCircle size={20} />
                        <span>Chat with us</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center">
                      <MapPin className="text-accent" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-1">Location</h3>
                    <p className="text-text-muted">Jl. Sunset Road 88, Kuta</p>
                    <p className="text-text-muted">Bali, Indonesia</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center">
                      <Phone className="text-accent" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-1">Phone</h3>
                    <a href="tel:+6281234567890" className="text-text-muted hover:text-accent transition-colors">
                      +62 812-3456-7890
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center">
                      <Mail className="text-accent" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-1">Email</h3>
                    <a
                      href="mailto:hello@rotmanrotibakar.com"
                      className="text-text-muted hover:text-accent transition-colors"
                    >
                      hello@rotmanrotibakar.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center">
                      <Clock className="text-accent" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-1">Hours</h3>
                    <p className="text-text-muted">Monday - Sunday</p>
                    <p className="text-text-muted">6:00 PM - 12:30 AM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="w-full h-64 bg-surface rounded-2xl border border-surface-light flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-accent mx-auto mb-2" size={32} />
                <p className="text-text-muted">Interactive map coming soon</p>
                <a
                  href="https://maps.google.com/?q=Jl.+Sunset+Road+88,+Kuta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline text-sm"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-surface rounded-2xl border border-surface-light p-8"
          >
            <h2 className="text-2xl font-bold text-text-primary mb-6">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-surface-light rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-surface-light rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-surface-light rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
