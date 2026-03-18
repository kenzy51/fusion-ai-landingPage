"use client";

export default function ContactPage() {
  return (
    <main className="bg-[#09090b] min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side: Copy & Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-[#d4ff33] font-mono tracking-widest uppercase text-sm mb-4">
              Connect with Fusion
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
              Ready to <br />
              Automate?
            </h1>
            <p className="text-zinc-400 text-lg max-w-md leading-relaxed">
              We only partner with one practice per neighborhood to ensure
              market exclusivity. Fill out the form to see if your area is still
              available for a Neural Core deployment.
            </p>
          </div>

          <div className="space-y-6 pt-8 border-t border-white/5">
            <div>
              <h4 className="text-white font-bold mb-1">Direct Access</h4>
              <p className="text-zinc-500">hello@fusionai.agency</p>
              <p className="text-zinc-500">929-769-6545</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-1">NYC Headquarters</h4>
              <p className="text-zinc-500">11232, NY</p>
            </div>
          </div>
        </div>

        {/* Right Side: High-Intent Form */}
        <div className="bg-white/[0.03] border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Dr. Nazarov"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#d4ff33] outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                  Practice Name
                </label>
                <input
                  type="text"
                  placeholder="NYC Dental Care"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#d4ff33] outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                Select Interest
              </label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-zinc-400 focus:border-[#d4ff33] outline-none transition-all appearance-none">
                <option>Neural Core ($499/mo)</option>
                <option>Growth Engine ($2,490/mo)</option>
                <option>Enterprise / Multi-Location</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                Current Monthly Leads
              </label>
              <input
                type="text"
                placeholder="e.g. 50-100"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#d4ff33] outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                Message (Optional)
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your current growth bottlenecks..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#d4ff33] outline-none transition-all resize-none"
              ></textarea>
            </div>

            <button className="w-full bg-[#d4ff33] text-black font-bold py-4 rounded-xl text-lg hover:shadow-[0_0_20px_rgba(212,255,51,0.3)] transition-all">
              Request Strategy Call
            </button>

            <p className="text-center text-[10px] text-zinc-600 uppercase tracking-[0.2em] mt-4">
              Powered by Fusion Works LLC
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
