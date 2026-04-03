import { useEffect } from 'react'

// InstagramSection — shows an embedded post and a follow button
export default function InstagramSection() {
  useEffect(() => {
    // If Instagram's embed script is already on the page, just re-process embeds.
    // Otherwise create and append the script tag so the blockquote renders.
    if (window.instgrm) {
      window.instgrm.Embeds.process()
      return
    }

    const script = document.createElement('script')
    script.src = 'https://www.instagram.com/embed.js'
    script.async = true
    script.onload = () => window.instgrm?.Embeds.process()
    document.body.appendChild(script)

    // Clean up: remove the script if this component unmounts
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-2xl mx-auto px-6 flex flex-col items-center gap-10">

        {/* Section header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-10 h-1 bg-red-700" />
            <span className="text-red-700 text-sm font-bold uppercase tracking-widest">
              Social
            </span>
            <div className="w-10 h-1 bg-red-700" />
          </div>
          <h2 className="text-4xl font-black text-black uppercase leading-tight">
            Follow Us on <span className="text-red-700">Instagram</span>
          </h2>
        </div>

        {/* Instagram post embed — official blockquote method.
            NOTE: data-instgrm-captioned must be an empty string, not a
            boolean, or Instagram's script won't recognise the attribute. */}
        <div className="flex justify-center w-full">
          <blockquote
            className="instagram-media"
            data-instgrm-captioned=""
            data-instgrm-permalink="https://www.instagram.com/p/DWhlSBiiSvs/"
            data-instgrm-version="14"
            style={{
              background: '#FFF',
              border: '0',
              borderRadius: '3px',
              boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
              display: 'block',
              margin: '0 auto',
              maxWidth: '540px',
              minWidth: '326px',
              padding: '0',
              width: 'calc(100% - 2px)',
            }}
          >
            {/* Fallback link shown before the embed script loads */}
            <a
              href="https://www.instagram.com/p/DWhlSBiiSvs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 underline"
            >
              View this post on Instagram
            </a>
          </blockquote>
        </div>

        {/* Follow button */}
        <a
          href="https://www.instagram.com/mu_triathlon/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-black hover:bg-red-700 text-white font-bold uppercase tracking-wider text-sm px-8 py-4 transition-colors duration-200"
        >
          {/* Instagram icon */}
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
