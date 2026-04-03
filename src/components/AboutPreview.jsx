import { Link } from 'react-router-dom'

// AboutPreview — short intro to the team on the homepage
export default function AboutPreview() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-10 h-1 bg-red-700" />
          <span className="text-red-700 text-sm font-bold uppercase tracking-widest">
            About Us
          </span>
        </div>

        {/* Single-column text layout */}
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-black text-black uppercase leading-tight mb-6">
            More Than <br />
            <span className="text-red-700">A Sport</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            The Miami University Triathlon Club is a student-run organization
            dedicated to competing and training in swimming, cycling, and running.
            We welcome athletes of all experience levels — from first-timers to
            seasoned racers.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            We compete in USAT Collegiate events throughout the season and provide
            a community for students passionate about endurance sport and a healthy
            lifestyle.
          </p>

          {/* "Learn More" navigates to the /about page */}
          <Link
            to="/about"
            className="inline-block bg-black hover:bg-red-700 text-white font-bold uppercase tracking-wider text-sm px-8 py-4 transition-colors duration-200"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
