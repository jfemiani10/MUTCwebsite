// Footer — contact info, navigation, and social links
const SOCIAL_LINKS = [
  { label: 'Instagram', href: '#', icon: 'IG' },
  { label: 'Twitter / X', href: '#', icon: 'X' },
  { label: 'Facebook', href: '#', icon: 'FB' },
  { label: 'Strava', href: '#', icon: 'ST' },
]

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white">

      {/* Red top accent bar */}
      <div className="h-1 bg-red-700 w-full" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-red-600 font-black text-2xl uppercase tracking-tight">Miami</span>
              <span className="text-white font-semibold text-2xl uppercase tracking-tight">Triathlon</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A student-run triathlon club at Miami University in Oxford, Ohio.
              Competing in swim, bike, and run — together.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 bg-gray-800 hover:bg-red-700 flex items-center justify-center text-xs font-bold transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-red-600 mb-6">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-red-600 mb-6">
              Contact
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li>
                <span className="block text-white font-semibold text-xs uppercase tracking-wider mb-1">
                  Email
                </span>
                triathlon@miamioh.edu
              </li>
              <li>
                <span className="block text-white font-semibold text-xs uppercase tracking-wider mb-1">
                  Location
                </span>
                Miami University<br />Oxford, Ohio 45056
              </li>
              <li>
                <span className="block text-white font-semibold text-xs uppercase tracking-wider mb-1">
                  Affiliated With
                </span>
                Office of Student Activities<br />Miami University
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Miami University Triathlon Club. All rights reserved.</p>
          <p>Student organization registered with the Office of Student Activities.</p>
        </div>
      </div>
    </footer>
  )
}
