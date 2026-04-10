import teamImg from '../assets/team1.jpg'

const EXEC = [
  { role: 'President',         name: 'Charles Vallone',      email: 'vallonct@miamioh.edu' },
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
      <div className="bg-black text-white relative overflow-hidden min-h-[280px] flex items-center">
        <img src={teamImg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
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
      <section className="bg-white py-24 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXEC.map(({ role, name, email }) => (
            <div
              key={email}
              className="bg-white border border-gray-100 p-8 hover:border-red-300 hover:shadow-md transition-all duration-200"
            >
              <p className="text-red-600 text-xs font-bold uppercase tracking-[.2em] mb-3">{role}</p>
              <h2 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-3">{name}</h2>
              <a
                href={`mailto:${email}`}
                className="text-sm text-gray-500 hover:text-red-600 transition-colors break-all"
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
