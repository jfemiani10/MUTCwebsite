import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// Only the three active nav destinations
const NAV_LINKS = [
  { label: 'Home',     to: '/' },
  { label: 'About',    to: '/about' },
  { label: 'Schedule', to: '/schedule' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  // Navigate to the route and immediately scroll to the top of the page
  function handleNav(to) {
    navigate(to)
    window.scrollTo(0, 0)
    setMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-0 flex items-center justify-between">

        {/* Logo — always goes home and scrolls to top */}
        <button
          onClick={() => handleNav('/')}
          className="flex items-center gap-2"
        >
          <img
            src="/logo.jpg"
            alt="Miami University Triathlon Club"
            className="h-20 w-20 object-contain rounded-sm"
          />
          <span className="text-black font-bold text-base tracking-tight leading-tight text-left">
            <span className="text-red-700">Miami University</span>
            <br />
            Triathlon Club
          </span>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNav(link.to)}
                className="text-sm font-semibold uppercase tracking-wider text-gray-700 hover:text-red-700 transition-colors duration-200"
              >
                {link.label}
              </button>
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
                <button
                  onClick={() => handleNav(link.to)}
                  className="block text-sm font-semibold uppercase tracking-wider text-gray-700 hover:text-red-700 transition-colors duration-200"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
