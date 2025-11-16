"use client";

import Image from "next/image";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

export function Footer() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-surface border-t border-surface-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand with Logo */}
          <div className="space-y-4">
            <Image src="/images/rotman-logo.png" alt="ROTMAN Logo" width={150} height={60} className="h-14 w-auto" />
            <p className="text-text-muted leading-relaxed">
              Roti Bakar & Terang Bulan terbaik di Bali. Cita rasa autentik yang nagih!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/rotibakarrotman/"
                className="text-text-muted hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/6281337037980"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text-primary"></h3>
            <nav className="space-y-2">
              <a
                href="#home"
                onClick={(e) => handleSmoothScroll(e, "#home")}
                className="block text-text-muted hover:text-accent transition-colors cursor-pointer"
              >
                Home
              </a>
              <a
                href="#menu"
                onClick={(e) => handleSmoothScroll(e, "#menu")}
                className="block text-text-muted hover:text-accent transition-colors cursor-pointer"
              >
                Menu
              </a>
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll(e, "#about")}
                className="block text-text-muted hover:text-accent transition-colors cursor-pointer"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="block text-text-muted hover:text-accent transition-colors cursor-pointer"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text-primary">Kontak</h3>
            <div className="space-y-2 text-text-muted text-sm">
              <p>
                <strong>Alamat:</strong> Jl. Karang Sari No.4 Padangsambian kaja, Bali
              </p>
              <p>
                <strong>WhatsApp:</strong>{" "}
                <a href="https://wa.me/6281337037980" className="hover:text-accent transition-colors">
                  +62 813-370-379-80
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:hello@rotmanrotibakar.com" className="hover:text-accent transition-colors">
                  hello@rotmanrotibakar.com
                </a>
              </p>
              <p>
                <strong>Jam:</strong> Setiap hari 16:00 - 23:30
              </p>
            </div>
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
