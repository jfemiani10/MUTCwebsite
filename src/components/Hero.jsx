import { useState, useEffect } from 'react'
import { asset } from '../utils/asset'

const IMAGES = [asset('hero1.jpg'), asset('hero2.jpg')]
const DISPLAY_MS = 9000
const FADE_MS    = 1000

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setCurrent((c) => (c + 1) % IMAGES.length)
        setVisible(true)
      }, FADE_MS)
    }, DISPLAY_MS)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
      {/* Background photo */}
      <img
        src={IMAGES[current]}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Layered gradient: dark vignette + strong bottom fade to black */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-8 h-px bg-red-500" />
          <p className="text-red-400 text-xs font-bold uppercase tracking-[.25em]">
            Miami University · Oxford, Ohio
          </p>
          <div className="w-8 h-px bg-red-500" />
        </div>

        {/* Main heading */}
        <h1 className="font-black uppercase leading-none text-white mb-8">
          <span className="block text-6xl sm:text-8xl lg:text-9xl tracking-[-0.03em]">
            Triathlon
          </span>
          <span className="block text-2xl sm:text-3xl lg:text-4xl tracking-[.3em] text-red-500 mt-3 font-bold">
            Club
          </span>
        </h1>

        {/* Thin rule */}
        <div className="w-16 h-px bg-white/30 mx-auto mb-8" />

        {/* Tagline */}
        <p className="text-gray-300 text-base sm:text-lg max-w-lg mx-auto leading-relaxed font-light tracking-wide">
          Swim. Bike. Run. — Representing Miami University with pride in every race.
        </p>
      </div>

      {/* Bottom fade to black About section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-[10px] uppercase tracking-[.2em]">Scroll</span>
        <div className="w-px h-10 bg-white/20 animate-pulse" />
      </div>
    </section>
  )
}
