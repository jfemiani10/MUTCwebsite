// Footer — contact info, navigation, and Instagram link
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
            {/* Instagram link */}
            <a
              href="https://www.instagram.com/mu_triathlon/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 group"
            >
              {/* Instagram SVG icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 group-hover:stroke-red-500 transition-colors duration-200"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
              Follow us on Instagram
            </a>
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
