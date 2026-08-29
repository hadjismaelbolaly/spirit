"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import Seal from "./Seal";

const navLinks = [
  { href: "/boutique", label: "Boutique" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/a-propos", label: "À propos" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/15 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Seal size={26} className="text-gold" />
          <span className="font-display text-base tracking-wide text-ivory sm:text-lg">
            {siteConfig.brandName}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm uppercase tracking-wider text-ivory/80 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={siteConfig.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden font-body text-sm uppercase tracking-wider text-gold lg:inline-block"
        >
          WhatsApp →
        </a>

        <button
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={`h-px w-6 bg-gold transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-gold transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-gold transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-gold/15 bg-ink px-5 py-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2.5 font-body text-sm uppercase tracking-wider text-ivory/85 hover:text-gold"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 font-body text-sm uppercase tracking-wider text-gold"
          >
            WhatsApp →
          </a>
        </nav>
      )}
    </header>
  );
}
