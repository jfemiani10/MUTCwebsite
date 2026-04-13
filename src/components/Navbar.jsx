import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/club_logo.png'

const NAV_LINKS = [
  { label: 'Home',     to: '/' },
  { label: 'About',    to: '/about' },
  { label: 'Schedule', to: '/schedule' },
  { label: 'Team',     to: '/exec' },
  { label: 'Donate',   to: '/donate' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false)
  const [scrolled, setScrolled]   = useState(false)
  const location                  = useLocation()
  const isHome                    = location.pathname === '/'
  const firstMenuItemRef          = useRef(null)

  // Transparent navbar on homepage hero only
  useEffect(() => {
    if (!isHome) { setScrolled(true); return }
    setScrolled(window.scrollY > 60)
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  // Move focus to first mobile menu item when it opens (WCAG 2.4.3)
  useEffect(() => {
    if (menuOpen && firstMenuItemRef.current) {
      firstMenuItemRef.current.focus()
    }
  }, [menuOpen])

  function handleLinkClick() {
    window.scrollTo(0, 0)
    setMenuOpen(false)
  }

  const solid          = !isHome || scrolled
  const navClass       = solid ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm' : 'bg-transparent'
  const linkColor      = solid ? 'text-gray-700 hover:text-red-700' : 'text-white/90 hover:text-white'
  const muColor        = solid ? 'text-red-700' : 'text-red-400'
  const clubColor      = solid ? 'text-gray-900' : 'text-white'
  const hamburgerColor = solid ? 'bg-black' : 'bg-white'
  const focusStyle     = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 rounded'

  const isActive = (to) => to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

  return (
    <nav aria-label="Main navigation" className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navClass}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo — semantic link, not a button */}
        <Link
          to="/"
          onClick={handleLinkClick}
          aria-label="Miami University Triathlon Club — Home"
          className={`flex items-center gap-3 py-1 ${focusStyle}`}
        >
          <img
            src={logoImg}
            alt=""
            aria-hidden="true"
            className="h-14 w-14 object-contain rounded-full drop-shadow-md"
          />
          <span className={`font-bold text-sm tracking-tight leading-snug text-left transition-colors duration-300 ${clubColor}`}>
            <span className={`block font-extrabold transition-colors duration-300 ${muColor}`}>
              Miami University
            </span>
            Triathlon Club
          </span>
        </Link>

        {/* Desktop links — <Link> renders as <a> for correct semantics */}
        <ul className="hidden md:flex items-center gap-10" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                onClick={handleLinkClick}
                aria-current={isActive(link.to) ? 'page' : undefined}
                className={`text-xs font-bold uppercase tracking-[.15em] transition-colors duration-200 ${focusStyle} ${linkColor} ${isActive(link.to) ? 'border-b-2 border-red-700 pb-0.5' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className={`md:hidden flex flex-col gap-1.5 p-2 ${focusStyle}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className={`block w-6 h-0.5 transition-all duration-300 ${hamburgerColor} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${hamburgerColor} ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${hamburgerColor} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white border-t border-gray-100 px-6 py-5">
          <ul className="flex flex-col gap-5" role="list">
            {NAV_LINKS.map((link, i) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  ref={i === 0 ? firstMenuItemRef : undefined}
                  onClick={handleLinkClick}
                  aria-current={isActive(link.to) ? 'page' : undefined}
                  className={`text-xs font-bold uppercase tracking-[.15em] text-gray-700 hover:text-red-700 transition-colors ${focusStyle} ${isActive(link.to) ? 'text-red-700' : ''}`}
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
