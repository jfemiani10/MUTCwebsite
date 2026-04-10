import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import logoImg from '../assets/logo.png'

const NAV_LINKS = [
  { label: 'Home',     to: '/' },
  { label: 'About',    to: '/about' },
  { label: 'Schedule', to: '/schedule' },
  { label: 'Team',     to: '/exec' },
  { label: 'Donate',   to: '/donate' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate  = useNavigate()
  const location  = useLocation()
  const isHome    = location.pathname === '/'

  // On the homepage only, go transparent until user scrolls past the fold
  useEffect(() => {
    if (!isHome) { setScrolled(true); return }
    setScrolled(window.scrollY > 60)
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  function handleNav(to) {
    navigate(to)
    window.scrollTo(0, 0)
    setMenuOpen(false)
  }

  // Styles that flip between transparent-over-hero and solid-white
  const solid = !isHome || scrolled
  const navClass       = solid
    ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm'
    : 'bg-transparent'
  const linkColor      = solid ? 'text-gray-700 hover:text-red-700' : 'text-white/90 hover:text-white'
  const muColor        = solid ? 'text-red-700' : 'text-red-400'
  const clubColor      = solid ? 'text-gray-900' : 'text-white'
  const hamburgerColor = solid ? 'bg-black' : 'bg-white'

  const isActive = (to) => to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navClass}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <button onClick={() => handleNav('/')} className="flex items-center gap-3 py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 rounded">
          <img
            src={logoImg}
            alt="Miami University Triathlon Club"
            className="h-14 w-14 object-contain rounded-full drop-shadow-md"
          />
          <span className={`font-bold text-sm tracking-tight leading-snug text-left transition-colors duration-300 ${clubColor}`}>
            <span className={`block font-extrabold transition-colors duration-300 ${muColor}`}>
              Miami University
            </span>
            Triathlon Club
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNav(link.to)}
                aria-current={isActive(link.to) ? 'page' : undefined}
                className={`text-xs font-bold uppercase tracking-[.15em] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600 rounded ${linkColor} ${isActive(link.to) ? 'border-b-2 border-red-600 pb-0.5' : ''}`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-0.5 transition-all duration-300 ${hamburgerColor} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${hamburgerColor} ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${hamburgerColor} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5">
          <ul className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNav(link.to)}
                  aria-current={isActive(link.to) ? 'page' : undefined}
                  className={`text-xs font-bold uppercase tracking-[.15em] text-gray-700 hover:text-red-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 rounded ${isActive(link.to) ? 'text-red-700' : ''}`}
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
