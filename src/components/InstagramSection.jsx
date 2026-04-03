import logoImg from '../assets/logo.jpg'

export default function InstagramSection() {
  const POST_URL    = 'https://www.instagram.com/p/DWhlSBiiSvs/'
  const PROFILE_URL = 'https://www.instagram.com/mu_triathlon/'

  return (
    <section className="py-32 bg-stone-50">
      <div className="max-w-2xl mx-auto px-8 flex flex-col items-center gap-12">

        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="w-8 h-px bg-red-600" />
            <span className="text-red-600 text-xs font-bold uppercase tracking-[.2em]">Social</span>
            <div className="w-8 h-px bg-red-600" />
          </div>
          <h2 className="text-4xl font-black text-gray-900 uppercase leading-tight tracking-tight">
            Follow Us on <span className="text-red-600">Instagram</span>
          </h2>
          <p className="text-gray-400 text-sm mt-3 tracking-wide">@mu_triathlon</p>
        </div>

        {/* Post preview card */}
        <a
          href={POST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full max-w-sm bg-white border border-gray-200 hover:border-red-300 shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
            <img src={logoImg} alt="mu_triathlon" className="w-9 h-9 rounded-full object-contain border border-gray-200 bg-white" />
            <div>
              <p className="text-sm font-bold text-gray-900 leading-none">mu_triathlon</p>
              <p className="text-xs text-gray-400 mt-0.5">Miami University Triathlon Club</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-300 ml-auto group-hover:text-red-500 transition-colors" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
            </svg>
          </div>
          <div className="px-5 py-6 text-center">
            <p className="text-gray-500 text-sm leading-relaxed mb-4">Check out our latest post on Instagram.</p>
            <span className="text-red-600 text-xs font-bold uppercase tracking-wider group-hover:underline">View Post →</span>
          </div>
        </a>

        {/* Follow button */}
        <a
          href={PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gray-900 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-[.15em] px-10 py-4 transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
          </svg>
          Follow @mu_triathlon
        </a>

      </div>
    </section>
  )
}
