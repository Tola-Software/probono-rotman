"use client";

import { useState } from "react";
import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Client-side only - just show success message
    alert("Thanks for subscribing! (This is a demo)");
    setEmail("");
  };

  return (
    <footer className="bg-surface border-t border-surface-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-accent">ROTMAN</div>
            <p className="text-text-muted leading-relaxed">
              Bold flavors, late nights. Made-to-order street food with love and passion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-text-muted hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-text-muted hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-text-muted hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text-primary">Quick Links</h3>
            <nav className="space-y-2">
              <Link href="/" className="block text-text-muted hover:text-accent transition-colors">
                Home
              </Link>
              <Link href="/menu" className="block text-text-muted hover:text-accent transition-colors">
                Menu
              </Link>
              <Link href="/about" className="block text-text-muted hover:text-accent transition-colors">
                About
              </Link>
              <Link href="/contact" className="block text-text-muted hover:text-accent transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text-primary">Contact</h3>
            <div className="space-y-2 text-text-muted">
              <p>Jl. Sunset Road 88, Kuta</p>
              <p>+62 812-3456-7890</p>
              <p>hello@rotman.id</p>
              <p className="text-sm">Mon-Sun: 6:00 PM - 12:30 AM</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text-primary">Stay Updated</h3>
            <p className="text-text-muted text-sm">Get notified about new items and special offers.</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full px-3 py-2 bg-background border border-surface-light rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-surface-light text-center">
          <p className="text-text-muted text-sm">© {new Date().getFullYear()} ROTMAN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
