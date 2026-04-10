export default function InstagramSection() {
  const PROFILE_URL = 'https://www.instagram.com/mu_triathlon/'

  return (
    <section className="py-32 bg-stone-50" aria-labelledby="instagram-heading">
      <div className="max-w-2xl mx-auto px-8 flex flex-col items-center gap-12">

        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-5">
            {/* red-700 on stone-50 = 5.9:1 ✓ */}
            <div className="w-8 h-px bg-red-700" aria-hidden="true" />
            <span className="text-red-700 text-xs font-bold uppercase tracking-[.2em]">Social</span>
            <div className="w-8 h-px bg-red-700" aria-hidden="true" />
          </div>
          <h2 id="instagram-heading" className="text-4xl font-black text-gray-900 uppercase leading-tight tracking-tight">
            Follow Us on <span className="text-red-600">Instagram</span>
          </h2>
          <p className="text-gray-600 text-sm mt-3 tracking-wide">@mu_triathlon</p>
        </div>

        {/* Follow button */}
        <a
          href={PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gray-900 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-[.15em] px-10 py-4 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 rounded"
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
