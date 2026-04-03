import { useState, useEffect } from 'react'

const IMAGES = ['/hero1.jpg', '/hero2.jpg']

// Hero — full-screen banner with crossfading background images
export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(current)
      setCurrent((c) => (c + 1) % IMAGES.length)
    }, 5000) // swap every 5 seconds

    return () => clearInterval(interval)
  }, [current])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
      {/* Previous image — fades out when a new one arrives */}
      {prev !== null && (
        <img
          key={`prev-${prev}`}
          src={IMAGES[prev]}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000"
        />
      )}

      {/* Current image — fades in */}
      <img
        key={`cur-${current}`}
        src={IMAGES[current]}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-1000"
      />

      {/* Dark overlay so text stays readable over any photo */}
      <div className="absolute inset-0 bg-black opacity-55" />

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
          <span className="block text-3xl sm:text-5xl lg:text-6xl tracking-widest text-red-500 mt-2">
            Club
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-gray-300 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed">
          Swim. Bike. Run. — Representing Miami University with pride in every race.
        </p>
      </div>

      {/* Bottom fade into page */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gray-500 animate-pulse" />
      </div>
    </section>
  )
}
