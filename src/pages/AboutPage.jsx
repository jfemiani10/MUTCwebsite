import { Link } from 'react-router-dom'
import allieImg from '../assets/allie.jpg'
import hero5Img from '../assets/hero5.jpg'
import maxImg   from '../assets/max.jpg'

export default function AboutPage() {
  return (
    <main id="main-content" className="pt-20">

      {/* Hero banner */}
      <div className="bg-black text-white relative overflow-hidden min-h-[320px] flex items-center">

        {/* Right-half photo */}
        <div className="absolute inset-y-0 right-0 w-1/2 hidden md:block">
          <img
            src={hero5Img}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          {/* Fade left into the black text area */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        </div>

        {/* Text content */}
        <div className="relative max-w-6xl mx-auto px-8 py-24 w-full">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-red-600" />
            <span className="text-red-500 text-xs font-bold uppercase tracking-[.2em]">Miami Triathlon</span>
          </div>
          <h1 className="text-7xl font-black uppercase tracking-tight text-white leading-none mb-4">
            About<br /><span className="text-red-600">the Club</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mt-6 leading-relaxed">
            Student-run. Competition-driven. Open to everyone.
          </p>
        </div>
      </div>

      {/* Who we are — two column with photo */}
      <section className="bg-white py-24 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-red-600" />
              <span className="text-red-600 text-xs font-bold uppercase tracking-[.2em]">Who We Are</span>
            </div>
            <h2 className="text-5xl font-black text-gray-900 uppercase leading-tight tracking-tight mb-6">
              Built by<br />Athletes,<br /><span className="text-red-600">for Athletes.</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              The Miami University Triathlon Club is a USAT-affiliated collegiate
              club competing across the Midwest Collegiate Triathlon Conference
              (MECTC). We race in sprint, Olympic, and draft-legal formats — and
              we train together every week to make each other better.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Whether you've done dozens of triathlons or you're signing up for
              your first sprint race, you'll find your place here. The club is
              what you make of it — show up, put in the work, and race hard.
            </p>
          </div>
          <div className="relative">
            <img
              src={allieImg}
              alt="Club member racing"
              className="w-full h-[500px] object-cover shadow-2xl -rotate-1"
            />
            <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-red-600 -z-10 -rotate-1" />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-black py-16 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: 'MECTC', label: 'Conference' },
            { value: 'USAT',  label: 'Affiliated' },
            { value: '3',     label: 'Disciplines' },
            { value: 'All',   label: 'Skill Levels' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-4xl font-black text-red-600 uppercase">{value}</p>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Membership info — cards */}
      <section className="bg-gray-50 py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-8 h-px bg-red-600" />
            <span className="text-red-600 text-xs font-bold uppercase tracking-[.2em]">Membership</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Eligibility',
                body: 'All currently enrolled Miami University students are welcome — no prior triathlon experience required. If you can swim, bike, and run (or want to learn), you qualify.',
              },
              {
                title: 'Dues',
                body: 'Annual membership dues are $200/year with required participation in club fundraising, or $400/year to opt out of fundraising. Dues help cover USAT registration, race entry fees, team equipment, and club events.',
              },
              {
                title: 'How to Join',
                body: (
                  <>
                    Look for us at the Club Sports Fair or Mega Fair to get involved! You can also just show up to any practice — no sign-up needed. Or send an email to president Zach Turlo (
                    <a href="mailto:turlozb@miamioh.edu" className="text-red-600 hover:underline">
                      turlozb@miamioh.edu
                    </a>
                    ) and we will reach out to you!
                  </>
                ),
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white border border-gray-100 p-8 hover:border-red-300 hover:shadow-md transition-all duration-200">
                <h3 className="text-lg font-black uppercase text-gray-900 tracking-tight mb-4">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo + CTA */}
      <section className="relative bg-black py-24 px-8 overflow-hidden">
        <img
          src={maxImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-black text-white uppercase leading-tight tracking-tight mb-6">
            Ready to<br /><span className="text-red-600">Race with us?</span>
          </h2>
          <p className="text-gray-400 leading-relaxed mb-10 max-w-lg mx-auto">
            Check the schedule for our next practice and come introduce yourself.
            All you need is a desire to compete and improve.
          </p>
          <Link
            to="/schedule"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-3 bg-red-700 hover:bg-red-600 text-white text-xs font-bold uppercase tracking-[.15em] px-10 py-4 transition-colors duration-200"
          >
            View the Schedule
            <span className="text-base leading-none">→</span>
          </Link>
        </div>
      </section>

    </main>
  )
}
