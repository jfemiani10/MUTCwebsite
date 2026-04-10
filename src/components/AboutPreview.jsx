import { Link } from 'react-router-dom'
import joeyImg from '../assets/joeyFinish.jpg'

export default function AboutPreview() {
  return (
    <section id="about" className="relative bg-black overflow-hidden">

      {/* Top fade from black */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10" />

      {/* Full-bleed photo on the right half */}
      <div className="absolute inset-y-0 right-0 w-full md:w-1/2">
        <img
          src={joeyImg}
          alt="Club member crossing the finish line"
          className="w-full h-full object-cover object-top"
        />
        {/* Fade left into the black text area */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        {/* Subtle dark vignette on right edge */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-8 py-32 grid md:grid-cols-2">
        <div className="flex flex-col justify-center gap-8">

          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-red-600" />
            <span className="text-red-500 text-xs font-bold uppercase tracking-[.2em]">
              About the Club
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl font-black text-white uppercase leading-[.95] tracking-tight">
            More Than<br />
            <span className="text-red-600">A Sport.</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
            The Miami University Triathlon Club is a student-run organization
            dedicated to competing and training in swimming, cycling, and running.
            We welcome athletes of all experience levels.
          </p>

          <p className="text-gray-500 leading-relaxed max-w-sm">
            We compete in USAT Collegiate events throughout the season and provide
            a community for students passionate about endurance sport.
          </p>

          <div>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 border border-white/30 hover:border-red-600 hover:bg-red-600 text-white text-xs font-bold uppercase tracking-[.15em] px-8 py-4 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded"
            >
              Learn More
              <span className="text-base leading-none" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
