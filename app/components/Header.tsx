"use client";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#d4ff33] rounded-lg" />
          <span className="text-white font-bold text-xl tracking-tighter uppercase">Fusion AI</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <Link href="/services" className="text-zinc-400 hover:text-[#d4ff33] text-sm font-medium transition-colors">Services</Link>
          <Link href="/industries" className="text-zinc-400 hover:text-[#d4ff33] text-sm font-medium transition-colors">Industries</Link>
          <Link href="/pricing" className="text-zinc-400 hover:text-[#d4ff33] text-sm font-medium transition-colors">Pricing</Link>
          <Link href="/contact" className="text-zinc-400 hover:text-[#d4ff33] text-sm font-medium transition-colors">Contact</Link>
        </div>

        <button className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#d4ff33] transition-all">
          Get Started
        </button>
      </div>
    </nav>
  );
}