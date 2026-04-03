// Hero — full-screen banner at the top of the homepage
export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-red-950 opacity-90" />

      {/* Decorative red bar on the left */}
      <div className="absolute left-0 top-0 h-full w-1.5 bg-red-700" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

        {/* Eyebrow label */}
        <p className="text-red-500 text-sm font-bold uppercase tracking-widest mb-4">
          Miami University · Oxford, Ohio
        </p>

        {/* Main heading */}
        <h1 className="text-white font-black uppercase leading-none mb-6">
          <span className="block text-5xl sm:text-7xl lg:text-8xl tracking-tight">
            Triathlon
          </span>
          <span className="block text-3xl sm:text-5xl lg:text-6xl tracking-widest text-red-600 mt-2">
            Club
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-gray-300 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed">
          Swim. Bike. Run. — Representing Miami University with pride in every race.
        </p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gray-500 animate-pulse" />
      </div>
    </section>
  )
}
