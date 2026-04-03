// InstagramSection — Instagram follow CTA and post preview card (dark gray background)
export default function InstagramSection() {
  const POST_URL    = 'https://www.instagram.com/p/DWhlSBiiSvs/'
  const PROFILE_URL = 'https://www.instagram.com/mu_triathlon/'

  return (
    <section className="py-24 bg-gray-800">
      <div className="max-w-2xl mx-auto px-6 flex flex-col items-center gap-10">

        {/* Section header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-10 h-1 bg-red-600" />
            <span className="text-red-400 text-sm font-bold uppercase tracking-widest">
              Social
            </span>
            <div className="w-10 h-1 bg-red-600" />
          </div>
          <h2 className="text-4xl font-black text-white uppercase leading-tight">
            Follow Us on <span className="text-red-500">Instagram</span>
          </h2>
        </div>

        {/* Post preview card */}
        <a
          href={POST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-sm bg-white border border-gray-600 hover:border-red-400 hover:shadow-lg transition-all duration-200 group"
        >
          <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
            <img
              src="/logo.jpg"
              alt="mu_triathlon"
              className="w-9 h-9 rounded-full object-contain border border-gray-200"
            />
            <div>
              <p className="text-sm font-bold text-black leading-none">mu_triathlon</p>
              <p className="text-xs text-gray-400 mt-0.5">Miami University Triathlon Club</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-gray-400 ml-auto group-hover:text-red-600 transition-colors"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
            </svg>
          </div>
          <div className="px-4 py-5 text-center">
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Check out our latest post on Instagram.
            </p>
            <span className="text-red-700 text-sm font-bold group-hover:underline">
              View post →
            </span>
          </div>
        </a>

        {/* Follow button — white outline on dark bg */}
        <a
          href={PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 border-2 border-white hover:bg-red-700 hover:border-red-700 text-white font-bold uppercase tracking-wider text-sm px-8 py-4 transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
            aria-hidden="true"
          >
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
