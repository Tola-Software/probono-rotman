"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const whatsappUrl =
    "https://wa.me/6281337037980?text=Hi%20ROTMAN!%20I%20want%20to%20order%3A%20%5Bitem%20names%5D%20%2D%20pickup%2Fdelivery%3F";

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-surface/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/rotman-logo.png" alt="rotman-logo" width={200} height={80} className="h-12 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-text-primary hover:text-accent transition-colors duration-200 font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* WhatsApp CTA & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center space-x-2 bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
              >
                <MessageCircle size={18} />
                <span>Order Now</span>
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-text-primary hover:text-accent transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial={false}
            animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="py-4 space-y-4 border-t border-surface-light">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-text-primary hover:text-accent transition-colors duration-200 font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium w-fit"
              >
                <MessageCircle size={18} />
                <span>Order via WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
}
