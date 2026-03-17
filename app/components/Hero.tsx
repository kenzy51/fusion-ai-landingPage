export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-[#09090b] flex items-center overflow-hidden">
      {/* 1. Full-Screen Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* 2. Dark Gradient Overlay (Premium Depth) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-[#09090b]/80 to-transparent z-10" />

      {/* 3. Left-Aligned Premium Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-20">
        <div className="max-w-2xl space-y-8">
          <span className="text-[#d4ff33] font-mono tracking-widest uppercase text-sm">
            Fusion AI 
          </span>
          <h1 className="text-6xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.9]">
            The Growth
            <br />
            Partner for
            <br />
            <span className="text-[#d4ff33]">NYC Practices.</span>
          </h1>
          <p className="text-xl text-zinc-400 font-light leading-relaxed">
            Medical-grade AI. Automated patient acquisition. <br />
            We bridge the gap between clinical excellence and modern revenue
            growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button className="bg-[#d4ff33] text-black px-10 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all duration-300 shadow-[0_0_30px_rgba(212,255,51,0.2)]">
              Book a Strategy Call
            </button>
            <button className="bg-white/5 border border-white/10 text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-white/10 transition-all">
              View Performance
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
