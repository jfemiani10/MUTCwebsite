import donateImg from '../assets/donate1.jpeg'

const DONATION_URL =
  'https://securelb.imodules.com/s/916/lg21/form.aspx?sid=916&gid=1&pgid=6010&cid=11236&bledit=1&dids=1275'

const FUND_USES = [
  { label: 'Swim Lane Reservations', description: 'Pool time is limited and costly — your gift helps us secure consistent weekly practice slots.' },
  { label: 'Trip & Race Expenses',   description: 'Travel to MECTC races and national championships requires significant planning and funding.' },
  { label: 'Club Activities',        description: 'Equipment, events, and everything else that keeps the team running strong all season.' },
]

export default function DonatePage() {
  return (
    <main id="main-content" className="pt-16">

      {/* Hero banner */}
      <div className="bg-black text-white relative overflow-hidden min-h-[320px] flex items-center">

        {/* Right-half photo */}
        <div className="absolute inset-y-0 right-0 w-1/2 hidden md:block">
          <img src={donateImg} alt="" aria-hidden="true" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        </div>

        {/* Text content */}
        <div className="relative max-w-6xl mx-auto px-8 py-24 w-full">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-red-600" aria-hidden="true" />
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
      <section aria-labelledby="donate-heading" className="bg-white py-24 px-8">
        <div className="max-w-6xl mx-auto">

          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-red-700" aria-hidden="true" />
            {/* red-700 on white = 5.9:1 ✓ */}
            <span className="text-red-700 text-xs font-bold uppercase tracking-[.2em]">Why It Matters</span>
          </div>
          <h2 id="donate-heading" className="text-5xl font-black text-gray-900 uppercase leading-tight tracking-tight mb-6">
            Every Dollar<br /><span className="text-red-600">Makes a Difference.</span>
          </h2>
          {/* gray-600 on white = 5.74:1 ✓ */}
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mb-16">
            The Miami University Triathlon Club is entirely student-run and self-funded. Donations from
            supporters like you allow us to compete, train, and grow as athletes and as a team. We would
            greatly appreciate any contribution you can make. This link can also be used to donate to
            our Swimathon fundraiser.
          </p>

          {/* Fund use cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {FUND_USES.map(({ label, description }) => (
              <div key={label} className="bg-gray-50 border border-gray-100 p-8 hover:border-red-300 hover:shadow-md transition-all duration-200">
                <div className="w-8 h-1 bg-red-600 mb-5" aria-hidden="true" />
                <h3 className="text-lg font-black uppercase text-gray-900 tracking-tight mb-3">{label}</h3>
                {/* gray-600 on gray-50 = 5.32:1 ✓ */}
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          {/* Main CTA */}
          <div className="text-center">
            {/* gray-600 on white = 5.74:1 ✓ */}
            <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-lg mx-auto">
              Ready to support Miami Triathlon? Click below to make a secure donation through the
              Miami University giving portal.
            </p>
            <a
              href={DONATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gray-900 hover:bg-red-700 text-white text-sm font-bold uppercase tracking-[.15em] px-12 py-5 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 rounded"
            >
              Donate Now
              <span className="text-base leading-none" aria-hidden="true">→</span>
            </a>
            <p className="text-gray-500 text-xs mt-4">
              Secure donation processed through Miami University's official giving portal.
            </p>
          </div>

        </div>
      </section>

    </main>
  )
}
