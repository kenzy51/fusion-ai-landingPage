export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#09090b] flex items-center overflow-hidden pt-20">
      {/* Video Background */}
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay - Adjusted for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-transparent to-[#09090b] z-10" />
      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-20">
        <div className="max-w-3xl">
          <span className="text-[#d4ff33] font-mono tracking-widest uppercase text-sm block mb-6">
            Fusion AI Agency
          </span>
          <h1 className="text-5xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.85] mb-8">
            The Growth<br />Partner for<br />
            <span className="text-[#d4ff33]">NYC Practices.</span>
          </h1>
          <p className="text-lg lg:text-xl text-zinc-300 font-light leading-relaxed max-w-xl mb-10">
            Medical-grade AI. Automated patient acquisition. <br />
            We bridge the gap between clinical excellence and modern revenue growth.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#d4ff33] text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(212,255,51,0.3)] transition-all">
              Book a Strategy Call
            </button>
            <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
              View Performance
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}