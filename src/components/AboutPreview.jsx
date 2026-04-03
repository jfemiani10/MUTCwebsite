// AboutPreview — short intro to the team on the homepage
export default function AboutPreview() {
  // Three highlight stats displayed in the card row
  const stats = [
    { value: '50+', label: 'Active Members' },
    { value: '10+', label: 'Races Per Year' },
    { value: '2008', label: 'Founded' },
  ]

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

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div>
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
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We compete in USAT Collegiate events throughout the season and provide
              a community for students passionate about endurance sport and a healthy
              lifestyle.
            </p>
            <a
              href="#team"
              className="inline-block bg-black hover:bg-red-700 text-white font-bold uppercase tracking-wider text-sm px-8 py-4 transition-colors duration-200"
            >
              Meet the Team
            </a>
          </div>

          {/* Right: Stats cards */}
          <div className="grid grid-cols-1 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-6 border-l-4 border-red-700 pl-6 py-4 bg-gray-50"
              >
                <span className="text-4xl font-black text-black">{stat.value}</span>
                <span className="text-gray-500 font-semibold uppercase tracking-wider text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
