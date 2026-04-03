import { useNavigate } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Home',     to: '/' },
  { label: 'About',    to: '/about' },
  { label: 'Schedule', to: '/schedule' },
]

export default function Footer() {
  const navigate = useNavigate()

  function handleNav(to) {
    navigate(to)
    window.scrollTo(0, 0)
  }

  return (
    <footer className="bg-gray-950 text-white">
      <div className="h-px bg-red-700 w-full" />

      <div className="max-w-6xl mx-auto px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-14">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src="/logo.jpg" alt="Miami University Triathlon Club" className="h-12 w-12 object-contain rounded" />
              <div className="leading-snug">
                <p className="text-red-500 font-extrabold text-sm uppercase tracking-tight">Miami University</p>
                <p className="text-white font-semibold text-sm uppercase tracking-tight">Triathlon Club</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              A student-run club at Miami University in Oxford, Ohio — competing in swim, bike, and run.
            </p>
            <a
              href="https://www.instagram.com/mu_triathlon/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-white text-sm transition-colors duration-200 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:stroke-red-500 transition-colors" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
              @mu_triathlon
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[.2em] text-red-600 mb-7">Navigation</h4>
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.to)}
                    className="text-gray-500 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[.2em] text-red-600 mb-7">Contact</h4>
            <ul className="flex flex-col gap-5 text-sm text-gray-500">
              <li>
                <span className="block text-white text-xs font-semibold uppercase tracking-wider mb-1">Email</span>
                triathlon@miamioh.edu
              </li>
              <li>
                <span className="block text-white text-xs font-semibold uppercase tracking-wider mb-1">Location</span>
                Miami University<br />Oxford, Ohio 45056
              </li>
              <li>
                <span className="block text-white text-xs font-semibold uppercase tracking-wider mb-1">Affiliated With</span>
                Office of Student Activities<br />Miami University
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-700">
          <p>© {new Date().getFullYear()} Miami University Triathlon Club. All rights reserved.</p>
          <p>Registered with the Office of Student Activities.</p>
        </div>
      </div>
    </footer>
  )
}
