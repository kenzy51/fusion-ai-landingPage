"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 relative z-[60]">
          <div className="w-8 h-8 bg-[#d4ff33] rounded-lg" />
          <span className="text-white font-bold text-xl tracking-tighter uppercase">Fusion AI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-zinc-400 hover:text-[#d4ff33] text-sm font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#d4ff33] transition-all">
            Get Started
          </button>
        </div>

        {/* Mobile Burger Button */}
        <button 
          className="md:hidden relative z-[60] w-10 h-10 flex flex-col justify-center items-center gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#09090b] z-[50] flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-white text-3xl font-bold hover:text-[#d4ff33] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button className="mt-4 bg-[#d4ff33] text-black px-10 py-4 rounded-full font-bold text-lg">
              Get Started
            </button>
          </div>
          
          {/* Footer of Mobile Menu */}
          <div className="absolute bottom-10 text-zinc-600 text-xs font-mono uppercase tracking-widest">
            Fusion Web Works LLC • NYC
          </div>
        </div>
      </div>
    </nav>
  );
}