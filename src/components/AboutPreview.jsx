import { Link } from 'react-router-dom'

export default function AboutPreview() {
  return (
    <section id="about" className="relative py-32 bg-black overflow-hidden">

      {/* Giant decorative background number */}
      <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[20rem] font-black text-white/[0.03] leading-none select-none pointer-events-none pr-8">
        01
      </span>

      <div className="relative max-w-6xl mx-auto px-8">

        {/* Label */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-8 h-px bg-red-600" />
          <span className="text-red-500 text-xs font-bold uppercase tracking-[.2em]">
            About the Club
          </span>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left: Heading */}
          <div>
            <h2 className="text-5xl sm:text-6xl font-black text-white uppercase leading-[.95] tracking-tight">
              More Than<br />
              <span className="text-red-600">A Sport.</span>
            </h2>
          </div>

          {/* Right: Body + button */}
          <div className="flex flex-col gap-6">
            <p className="text-gray-400 text-lg leading-relaxed">
              The Miami University Triathlon Club is a student-run organization
              dedicated to competing and training in swimming, cycling, and running.
              We welcome athletes of all experience levels — from first-timers to
              seasoned racers.
            </p>
            <p className="text-gray-500 leading-relaxed">
              We compete in USAT Collegiate events throughout the season and provide
              a community for students passionate about endurance sport and a healthy
              lifestyle.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 border border-white/30 hover:border-red-600 hover:bg-red-600 text-white text-xs font-bold uppercase tracking-[.15em] px-8 py-4 transition-all duration-200"
              >
                Learn More
                <span className="text-base leading-none">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
