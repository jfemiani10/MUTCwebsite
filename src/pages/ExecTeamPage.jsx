import teamImg from '../assets/team1.jpg'

const EXEC = [
  { role: 'President',         name: 'Zach Turlo',           email: 'turlozb@miamioh.edu' },
  { role: 'Treasurer',         name: 'Rebecca Kolano',       email: 'kolanorr@miamioh.edu' },
  { role: 'Secretary',         name: 'Anton Mueller',        email: 'muelle42@miamioh.edu' },
  { role: 'Vice President',    name: 'Quinn LeBorgne',       email: 'leborgqj@miamioh.edu' },
  { role: 'Safety Officer',    name: 'Kai Lewis',            email: 'lewisar5@miamioh.edu' },
  { role: 'Fundraising Chair', name: 'Jonah Femiani',        email: 'femianjy@miamioh.edu' },
]

export default function ExecTeamPage() {
  return (
    <main id="main-content" className="pt-16">

      {/* Hero banner */}
      <div className="bg-black text-white relative overflow-hidden min-h-[320px] flex items-center">

        {/* Right-half photo */}
        <div className="absolute inset-y-0 right-0 w-1/2 hidden md:block">
          <img src={teamImg} alt="" aria-hidden="true" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        </div>

        {/* Text content */}
        <div className="relative max-w-6xl mx-auto px-8 py-24 w-full">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-red-600" />
            <span className="text-red-500 text-xs font-bold uppercase tracking-[.2em]">Miami Triathlon</span>
          </div>
          <h1 className="text-7xl font-black uppercase tracking-tight text-white leading-none mb-4">
            Executive<br /><span className="text-red-600">Team</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mt-6 leading-relaxed">
            Meet the officers running the club this season.
          </p>
        </div>
      </div>

      {/* Officer cards */}
      <section aria-labelledby="exec-heading" className="bg-white py-24 px-8">
        <h2 id="exec-heading" className="sr-only">Executive Team Members</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXEC.map(({ role, name, email }) => (
            <div
              key={email}
              className="bg-white border border-gray-100 p-8 hover:border-red-300 hover:shadow-md transition-all duration-200"
            >
              {/* red-700 on white = 5.9:1 ✓ */}
              <p className="text-red-700 text-xs font-bold uppercase tracking-[.2em] mb-3">{role}</p>
              <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-3">{name}</h3>
              <a
                href={`mailto:${email}`}
                className="text-sm text-gray-600 hover:text-red-700 transition-colors break-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 rounded"
              >
                {email}
              </a>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}
