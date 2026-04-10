const DONATION_URL =
  'https://securelb.imodules.com/s/916/lg21/form.aspx?sid=916&gid=1&pgid=6010&cid=11236&bledit=1&dids=1275'

const FUND_USES = [
  { label: 'Swim Lane Reservations', description: 'Pool time is limited and costly — your gift helps us secure consistent weekly practice slots.' },
  { label: 'Trip & Race Expenses',   description: 'Travel to MECTC races and national championships requires significant planning and funding.' },
  { label: 'Club Activities',        description: 'Equipment, events, and everything else that keeps the team running strong all season.' },
]

export default function DonatePage() {
  return (
    <main id="main-content" className="pt-20">

      {/* Hero banner */}
      <div className="bg-black text-white relative overflow-hidden min-h-[280px] flex items-center">
        <div className="relative max-w-6xl mx-auto px-8 py-24 w-full">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-red-600" />
            <span className="text-red-500 text-xs font-bold uppercase tracking-[.2em]">Miami Triathlon</span>
          </div>
          <h1 className="text-7xl font-black uppercase tracking-tight text-white leading-none mb-4">
            Support<br /><span className="text-red-600">the Club</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mt-6 leading-relaxed">
            Your generosity directly fuels the team — every dollar goes back into making us better.
          </p>
        </div>
      </div>

      {/* Why donate */}
      <section className="bg-white py-24 px-8">
        <div className="max-w-6xl mx-auto">

          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-red-600" />
            <span className="text-red-600 text-xs font-bold uppercase tracking-[.2em]">Why It Matters</span>
          </div>
          <h2 className="text-5xl font-black text-gray-900 uppercase leading-tight tracking-tight mb-6">
            Every Dollar<br /><span className="text-red-600">Makes a Difference.</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mb-16">
            The Miami University Triathlon Club is entirely student-run and self-funded. Donations from
            supporters like you allow us to compete, train, and grow as athletes and as a team. We would
            greatly appreciate any contribution you can make.
          </p>

          {/* Fund use cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {FUND_USES.map(({ label, description }) => (
              <div key={label} className="bg-gray-50 border border-gray-100 p-8 hover:border-red-300 hover:shadow-md transition-all duration-200">
                <div className="w-8 h-1 bg-red-600 mb-5" />
                <h3 className="text-lg font-black uppercase text-gray-900 tracking-tight mb-3">{label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          {/* Swimathon callout */}
          <div className="bg-black text-white p-10 md:p-14 flex flex-col md:flex-row md:items-center gap-8 md:gap-14">
            <div className="flex-1">
              <p className="text-red-500 text-xs font-bold uppercase tracking-[.2em] mb-3">Fundraiser</p>
              <h2 className="text-4xl font-black uppercase leading-tight tracking-tight mb-4">
                Swimathon<br /><span className="text-red-600">Fundraiser</span>
              </h2>
              <p className="text-gray-400 leading-relaxed max-w-md">
                We are also raising money through our Swimathon fundraiser. Use the donation link below
                to contribute directly to the club through this event — every lap counts.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href={DONATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-red-700 hover:bg-red-600 text-white text-xs font-bold uppercase tracking-[.15em] px-10 py-5 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Donate to the Swimathon
                <span className="text-base leading-none">→</span>
              </a>
            </div>
          </div>

          {/* Main CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-8 text-lg leading-relaxed max-w-lg mx-auto">
              Ready to support Miami Triathlon? Click below to make a secure donation through the
              Miami University giving portal.
            </p>
            <a
              href={DONATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gray-900 hover:bg-red-700 text-white text-sm font-bold uppercase tracking-[.15em] px-12 py-5 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Donate Now
              <span className="text-base leading-none">→</span>
            </a>
            <p className="text-gray-400 text-xs mt-4">
              Secure donation processed through Miami University's official giving portal.
            </p>
          </div>

        </div>
      </section>

    </main>
  )
}
