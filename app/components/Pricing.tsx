export function Pricing() {
  return (
    <section className="bg-[#09090b] py-24 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-[#d4ff33] font-mono tracking-widest uppercase text-sm mb-4">
          Transparent Pricing
          </h2>
        </div>
        <h3 className="text-5xl font-bold text-white mb-8">One Rate. Zero Setup Fees.</h3>
        
        <div className="bg-white/5 border border-[#d4ff33]/30 rounded-3xl p-12 max-w-2xl mx-auto relative overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#d4ff33]/10 blur-[100px]" />
          
          <div className="text-zinc-400 text-lg mb-4">Fusion Growth Engine</div>
          <div className="text-7xl font-bold text-white mb-6">
            $2,500<span className="text-2xl text-zinc-500 font-light">/mo</span>
          </div>
          
          <ul className="text-left space-y-4 mb-10 text-zinc-300">
            <li className="flex items-center gap-3">
              <span className="text-[#d4ff33]">✓</span> Unlimited AI Voice Conversations
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#d4ff33]">✓</span> Full CRM & Calendar Integration
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#d4ff33]">✓</span> Monthly Cinematic Content Shoots (NYC Only)
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#d4ff33]">✓</span> No Implementation or Onboarding Fees
            </li>
          </ul>

          <button className="w-full bg-[#d4ff33] text-black py-5 rounded-full font-bold text-xl hover:scale-[1.02] transition-transform">
            Start Your Growth Phase
          </button>
          <p className="mt-6 text-zinc-500 text-sm">Cancel anytime. We win when you book patients.</p>
        </div>
    </section>
  );
}