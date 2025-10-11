"use client";

import Link from "next/link";
import { Home, Menu, ShoppingCart, Phone } from "lucide-react";
import { usePathname } from "next/navigation";

export function MobileBottomBar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/menu", icon: Menu, label: "Menu" },
    { href: "/order", icon: ShoppingCart, label: "Order" },
    { href: "/contact", icon: Phone, label: "Contact" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-surface/95 backdrop-blur-md border-t border-surface-light z-40 md:hidden">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                isActive ? "text-accent bg-accent/10" : "text-text-muted hover:text-accent"
              }`}
            >
              <Icon size={20} />
              <span className="text-xs mt-1 font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
