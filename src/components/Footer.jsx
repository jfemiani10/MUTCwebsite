import { useNavigate } from 'react-router-dom'
import logoImg from '../assets/logo.jpg'

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="h-px bg-red-700 w-full" />

      <div className="max-w-6xl mx-auto px-8 py-10">

        {/* Main row: brand left, contact right */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Miami University Triathlon Club" className="h-10 w-10 object-contain rounded" />
            <div className="leading-snug">
              <p className="text-red-500 font-extrabold text-sm uppercase tracking-tight">Miami University</p>
              <p className="text-white font-semibold text-sm uppercase tracking-tight">Triathlon Club</p>
            </div>
          </div>

          {/* Contact — horizontal */}
          <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm text-gray-400">
            <div>
              <span className="text-white text-xs font-semibold uppercase tracking-wider block mb-0.5">Email</span>
              <a href="mailto:turlozb@miamioh.edu" className="hover:text-white transition-colors">
                turlozb@miamioh.edu
              </a>
            </div>
            <div>
              <span className="text-white text-xs font-semibold uppercase tracking-wider block mb-0.5">Location</span>
              Oxford, Ohio 45056
            </div>
            <div>
              <span className="text-white text-xs font-semibold uppercase tracking-wider block mb-0.5">Instagram</span>
              <a href="https://www.instagram.com/mu_triathlon/" target="_blank" rel="noopener noreferrer"
                className="hover:text-white transition-colors">@mu_triathlon</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Miami University Triathlon Club. All rights reserved.</p>
          <p>Registered with the Office of Student Activities.</p>
        </div>
        <p className="text-xs text-gray-500 mt-4 text-center">
          Miami University Triathlon Club is a registered student organization and does not represent the official views or positions of Miami University.
        </p>
      </div>
    </footer>
  )
}
