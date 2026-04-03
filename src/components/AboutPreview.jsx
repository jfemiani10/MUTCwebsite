import { Link } from 'react-router-dom'

// AboutPreview — short intro to the team on the homepage (black background)
export default function AboutPreview() {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-10 h-1 bg-red-600" />
          <span className="text-red-500 text-sm font-bold uppercase tracking-widest">
            About Us
          </span>
        </div>

        {/* Single-column text layout */}
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase leading-tight mb-6">
            More Than <br />
            <span className="text-red-600">A Sport</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-4">
            The Miami University Triathlon Club is a student-run organization
            dedicated to competing and training in swimming, cycling, and running.
            We welcome athletes of all experience levels — from first-timers to
            seasoned racers.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            We compete in USAT Collegiate events throughout the season and provide
            a community for students passionate about endurance sport and a healthy
            lifestyle.
          </p>

          {/* Button — white outline on black bg, fills red on hover */}
          <Link
            to="/about"
            className="inline-block border-2 border-white hover:bg-red-700 hover:border-red-700 text-white font-bold uppercase tracking-wider text-sm px-8 py-4 transition-colors duration-200"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
