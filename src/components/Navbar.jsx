import { useState } from 'react'
import { Link } from 'react-router-dom'

// Navigation links — `to` is a router path, `href` is an anchor on the homepage
const NAV_LINKS = [
  { label: 'Home',     to: '/' },
  { label: 'About',    to: '/about' },
  { label: 'Team',     to: '/#team' },
  { label: 'Schedule', to: '/schedule' },
  { label: 'Contact',  to: '/#contact' },
]

export default function Navbar() {
  // Controls mobile menu open/close
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo / Team Name — always goes home */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-red-700 font-black text-xl tracking-tight uppercase leading-none">
            Miami
          </span>
          <span className="text-black font-semibold text-xl tracking-tight uppercase leading-none">
            Triathlon
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className="text-sm font-semibold uppercase tracking-wider text-gray-700 hover:text-red-700 transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm font-semibold uppercase tracking-wider text-gray-700 hover:text-red-700 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
