"use client";
import Link from "next/link";

const tiers = [
  {
    name: "Neural Core",
    price: "499",
    setup: "$499 Implementation Fee",
    description:
      "Perfect for practices looking to automate their front-desk and capture every after-hours lead.",
    features: [
      "Exact Voice Cloning (ElevenLabs)",
      "Fully Customizable AI Personality",
      "Real-time AI Summarization",
      "Searchable Call Transcripts",
      "Secure Call Recordings",
      "Unlimited Voice Conversations",
      "Standard CRM Integration",
    ],
    cta: "Deploy Neural Core",
    popular: false,
  },
  {
    name: "Growth Engine",
    price: "2,490",
    setup: "Zero Setup Fees",
    description:
      "A full-stack revenue machine. We handle the filming, the ads, and the AI booking end-to-end.",
    features: [
      "Everything in Neural Core",
      "End-to-End Meta & Google Ads",
      "Monthly Cinematic Content Shoots (NYC)",
      "High-Conversion Next.js Landing Pages",
      "Advanced Lead-Capture Funnels",
      "Proactive Outreach Campaigns",
      "Monthly Performance Audits",
    ],
    cta: "Start Growth Phase",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    setup: "Custom Integration",
    description:
      "For multi-location NYC dental groups requiring high-volume neural infrastructure.",
    features: [
      "Multi-Location AI Routing",
      "Custom API Node Development",
      "Dedicated Account Engineer",
      "HIPAA Business Associate Agreement",
      "Bi-Weekly On-Site Shoots",
      "Priority Tech Support",
    ],
    cta: "Contact Enterprise",
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <main className="bg-[#09090b] min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-[#d4ff33] font-mono tracking-widest uppercase text-sm mb-4">
            Investment Structure
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
            Scale with Precision.
          </h1>
          <p className="mt-6 text-zinc-400 text-lg max-w-2xl mx-auto">
            Choose between essential neural automation or a full-stack
            acquisition engine engineered for high-end NYC practices.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-500 ${
                tier.popular
                  ? "bg-white/[0.03] border-[#d4ff33] shadow-[0_0_40px_rgba(212,255,51,0.1)] scale-105 z-10"
                  : "bg-white/5 border-white/10 hover:border-white/20"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#d4ff33] text-black text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {tier.name}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-white">
                    {typeof tier.price === "string" && tier.price !== "Custom"
                      ? `$${tier.price}`
                      : tier.price}
                  </span>
                  {tier.price !== "Custom" && (
                    <span className="text-zinc-500">/mo</span>
                  )}
                </div>
                <p className="text-[#d4ff33] text-xs font-mono mt-2 uppercase tracking-tighter">
                  {tier.setup}
                </p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-sm text-zinc-300"
                  >
                    <span className="text-[#d4ff33] mt-1">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-full font-bold transition-all ${
                  tier.popular
                    ? "bg-[#d4ff33] text-black hover:shadow-[0_0_20px_rgba(212,255,51,0.4)]"
                    : "bg-white text-black hover:bg-[#d4ff33]"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        {/* NYC Assurance */}
        <div className="mt-24 text-center p-12 rounded-3xl bg-white/[0.02] border border-white/5">
          <h4 className="text-white font-bold text-xl mb-4">
            The Fusion Guarantee
          </h4>
          <p className="text-zinc-500 max-w-2xl mx-auto text-sm">
            We operate exclusively in the NYC Metro area to ensure physical
            content production and high-touch technical support. All voice
            cloning and data processing are HIPAA-compliant.
          </p>
        </div>
      </div>
    </main>
  );
}
